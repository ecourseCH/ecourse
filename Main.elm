module Main exposing (..)

import Html exposing (..)
import Data exposing (..)
import Update exposing (..)
import View exposing (..)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = Update.update
        , view = View.view
        , subscriptions = Update.subscriptions
        }


init : ( Model, Cmd Msg )
init =
    ( { participants = [] }, sendRequest )
