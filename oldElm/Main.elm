module Main exposing (..)

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
        case currentRoute of
            Model.LoginRoute ->
                ( Model.initialModel currentRoute, sendRequest )
        
            Model.ParticipantsListRoute ->
                ( Model.initialModel currentRoute, sendRequest )

            Model.ParticipantRoute id ->
                ( Model.initialModel currentRoute, sendParticipantDetailRequest id )

            Model.NotFoundRoute ->
                ( Model.initialModel currentRoute, Cmd.none )
