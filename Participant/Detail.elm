module Participant.Detail exposing (..)

import Html exposing (..)
import Model exposing (Participant)


view : Maybe Participant -> Int -> Html msg
view model id =
    case model of
        Nothing ->
            noParticipant

        Just participant ->
            showParticipantDetail participant


showParticipantDetail : Participant -> Html msg
showParticipantDetail model =
    div [] [ text model.scoutName ]


noParticipant : Html msg
noParticipant =
    div []
        [ h3 [] [ text "Noch nicht geladen" ] ]
