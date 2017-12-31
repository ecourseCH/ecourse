module View exposing (..)

import Html exposing (..)
import Model exposing (Model, Route)
import Msg exposing (..)
import Participant.OverViewList
import Participant.Detail


view : Model -> Html Msg
view model =
    div
        []
        [ page model
        ]


page : Model -> Html Msg
page model =
    case model.route of
        Model.ParticipantsListRoute ->
            Participant.OverViewList.view model.participants

        Model.ParticipantRoute int ->
            Participant.Detail.view int

        Model.NotFoundRoute ->
            notFoundView


notFoundView : Html msg
notFoundView =
    div []
        [ text "Page not found"
        ]
