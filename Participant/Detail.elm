module Participant.Detail exposing (..)

import Html exposing (..)
import Model exposing (Participant, Notice)


view : Maybe Participant -> Int -> Html msg
view model id =
    case model of
        Nothing ->
            noParticipant

        Just participant ->
            showParticipantDetail participant


showParticipantDetail : Participant -> Html msg
showParticipantDetail model =
    div []
        [ h3 []
            [ text model.scoutName ]
        , ul
            []
            (List.map showNotice model.notices)
        ]


showNotice : Notice -> Html msg
showNotice notice =
    li [] [ text notice.text ]


noParticipant : Html msg
noParticipant =
    div []
        [ h3 [] [ text "Noch nicht geladen" ] ]
