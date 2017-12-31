module View exposing (..)

import Html exposing (..)
import Data exposing (Model, Msg, Route)
import Routing exposing (..)
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
        Data.ParticipantsListRoute ->
            Participant.OverViewList.view model.participants

        Data.ParticipantRoute int ->
            Participant.Detail.view int

        Data.NotFoundRoute ->
            notFoundView



--Route.ParticipantRoute id ->
--    Participant.Detail id


notFoundView : Html msg
notFoundView =
    div []
        [ text "Page not found"
        ]
