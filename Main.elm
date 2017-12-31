module Main exposing (..)

import Html exposing (..)
import Model exposing (..)
import Update exposing (..)
import View exposing (..)
import Msg exposing (..)
import Navigation exposing (Location)
import Routing


main : Program Never Model Msg
main =
    Navigation.program OnLocationChange
        { init = init
        , update = Update.update
        , view = View.view
        , subscriptions = Update.subscriptions
        }


init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            Routing.parseLocation location
    in
        ( Model.initialModel currentRoute, sendRequest )
