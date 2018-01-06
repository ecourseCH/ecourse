module Update exposing (..)

import Model exposing (..)
import Routing exposing (..)
import Http
import Time exposing (Time, second)
import Data exposing (..)
import Msg exposing (..)
import Navigation


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick newTime ->
            ( model, sendRequest )

        ParticipantsLoaded (Ok participants) ->
            ( { model | participants = participants }, Cmd.none )

        ParticipantsLoaded (Err err) ->
            let
                xx =
                    Debug.log "oh, noes" (toString err)
            in
                ( model, Cmd.none )

        OnLocationChange location ->
            navigateTo model location

        ParticipantDetailLoaded (Ok participant) ->
            ( { model | participant = Just participant }, Cmd.none )

        ParticipantDetailLoaded (Err err) ->
            let
                xx =
                    Debug.log "participant Detail" (toString err)
            in
                ( { model | participant = Nothing }, Cmd.none )


navigateTo : Model -> Navigation.Location -> ( Model, Cmd Msg )
navigateTo model location =
    let
        newRoute =
            parseLocation location
    in
        case newRoute of
            Model.ParticipantsListRoute ->
                ( { model | route = newRoute }, Cmd.none )

            Model.ParticipantRoute id ->
                ( { model | route = newRoute }, sendParticipantDetailRequest id )

            Model.NotFoundRoute ->
                ( { model | route = newRoute }, Cmd.none )


sendRequest : Cmd Msg
sendRequest =
    Http.send ParticipantsLoaded Data.getParticipants


sendParticipantDetailRequest : Int -> Cmd Msg
sendParticipantDetailRequest id =
    Http.send ParticipantDetailLoaded (Data.getParticipantDetail id)


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every 30000 Tick
