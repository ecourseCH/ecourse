module View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class)
import Model exposing (Model, Route)
import Msg exposing (..)
import Participant.OverViewList
import Participant.Detail
import Login.Detail 
import Bootstrap.CDN as BootstrapCDN


view : Model -> Html Msg
view model =
    div
        []
        [ BootstrapCDN.stylesheet
        , div [ Html.Attributes.class "container" ]
            [ page model
            ]
        ]


page : Model -> Html Msg
page model =
    case model.route of
        Model.LoginRoute->
             Login.Detail.view model
             
        Model.ParticipantsListRoute ->
            Participant.OverViewList.view model.participants

        Model.ParticipantRoute id ->
            Participant.Detail.view model id

        Model.NotFoundRoute ->
            notFoundView


notFoundView : Html msg
notFoundView =
    text "Page not found"
