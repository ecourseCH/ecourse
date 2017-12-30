module Main exposing (..)

import Html exposing (..)
import Data exposing (..)
import Http
import Time exposing (Time, second)
import Bootstrap.Table as BootstrapTable exposing (..)
import Bootstrap.CDN as BootstrapCDN


type alias Model =
    { participants : List Participant
    }


type Msg
    = Tick Time
    | ParticipantsLoaded (Result Http.Error (List Participant))


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }


init : ( Model, Cmd Msg )
init =
    ( { participants = [] }, sendRequest )


view : Model -> Html Msg
view model =
    div
        []
        [ BootstrapCDN.stylesheet
        , showList model
        ]


showList : Model -> Html Msg
showList model =
    BootstrapTable.table
        { options = [ BootstrapTable.striped, BootstrapTable.hover ]
        , thead = tableHeader
        , tbody = BootstrapTable.tbody [] (List.map viewParticipant model.participants)
        }


viewParticipant : Participant -> BootstrapTable.Row Msg
viewParticipant part =
    BootstrapTable.tr []
        [ BootstrapTable.td []
            [ text "Foto" ]
        , BootstrapTable.td []
            [ h3 [] [ text part.scoutName ]
            , p [] [ text <| part.prename ++ " " ++ part.name ]
            ]
        ]


tableHeader : BootstrapTable.THead Msg
tableHeader =
    simpleThead
        [ BootstrapTable.th [] [ text "Foto" ]
        , BootstrapTable.th [] [ text "TN" ]
        ]


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
