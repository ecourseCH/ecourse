module Main exposing (..)
 
import Html exposing (..)
import Html.Attributes as HA exposing (..)
import Html.Events as HE exposing (..)
import Data exposing (..)
import Http
import Time exposing (Time, second)


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
        [][
         showList model
        ]


showList : Model -> Html Msg
showList model =
    table [] (List.map viewParticipant model.participants)


viewParticipant : Participant -> Html Msg
viewParticipant part =
    tr [] [
      td [] 
      [ text <| part.prename ++ " " ++ part.name ++ " v/o " ++ part.scoutName ]
    ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick newTime ->
          (model, sendRequest)
        ParticipantsLoaded (Ok participants) ->
            ( { participants = participants }, Cmd.none )

        ParticipantsLoaded (Err err) ->
            let xx = Debug.log "oh, noes" (toString err)
            in (model, Cmd.none)
            
            

sendRequest : Cmd Msg
sendRequest =
  Http.send ParticipantsLoaded Data.getParticipants


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every 30000 Tick
