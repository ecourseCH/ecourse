module Update exposing (..)

import Model exposing (..)
import Routing exposing (..)
import Http
import Time exposing (Time, second)
import Data exposing (..)
import Msg exposing (..)


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
            let
                newRoute =
                    parseLocation location
            in
                ( { model | route = newRoute }, Cmd.none )


sendRequest : Cmd Msg
sendRequest =
    Http.send ParticipantsLoaded Data.getParticipants


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every 30000 Tick
