module Update exposing (..)

import Data exposing (..)
import Http
import Time exposing (Time, second)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick newTime ->
            ( model, sendRequest )

        ParticipantsLoaded (Ok participants) ->
            ( { participants = participants }, Cmd.none )

        ParticipantsLoaded (Err err) ->
            let
                xx =
                    Debug.log "oh, noes" (toString err)
            in
                ( model, Cmd.none )


sendRequest : Cmd Msg
sendRequest =
    Http.send ParticipantsLoaded Data.getParticipants


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every 30000 Tick
