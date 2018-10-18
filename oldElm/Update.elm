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

        OnNoteChanged inp ->
            let
                notice =
                    model.newNotice

                newNotice =
                    { notice | text = inp }
            in
                ( { model | newNotice = newNotice }, Cmd.none )
       
        LoginRequested ->
        ( model, Cmd.none )
        
        OnUserNameProvided ->
        ( model, Cmd.none )
        
        NoteFormSubmitted ->
            ( model, (sendAddNoteToParticipantRequest model) )

        NotePosted (Ok participants) ->
            ( { model | newNotice = Model.emptyNotice }, sendParticipantDetailRequest (getParticipantId model.participant) )

        NotePosted (Err err) ->
            let
                xx =
                    Debug.log "oh, noes" (toString err)
            in
                ( model, Cmd.none )


navigateTo : Model -> Navigation.Location -> ( Model, Cmd Msg )
navigateTo model location =
    let
        newRoute =
            parseLocation location
    in
        case newRoute of
            Model.LoginRoute ->
                ( { model | route = newRoute }, Cmd.none )
                
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


sendAddNoteToParticipantRequest : Model -> Cmd Msg
sendAddNoteToParticipantRequest model =
    Http.send NotePosted (Data.postNote (getParticipantId model.participant) model.newNotice)


getParticipantId : Maybe Participant -> Int
getParticipantId mayBeParticipant =
    case mayBeParticipant of
        Nothing ->
            0

        Just participant ->
            participant.id


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every 30000 Tick
