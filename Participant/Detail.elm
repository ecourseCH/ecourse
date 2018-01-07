module Participant.Detail exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class)
import Bootstrap.Button as BootstrapButton exposing (..)
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
        [ showParticipantInfo model
        , showActionButtons
        , showNoticeList model.notices
        ]


showParticipantInfo : Participant -> Html msg
showParticipantInfo model =
    div []
        [ h3 [] [ text model.scoutName ]
        , dl [ (Html.Attributes.class "dl-horizontal") ]
            [ dt []
                [ text "Name" ]
            , dd
                []
                [ text (model.prename ++ " " ++ model.name ++ " v/o " ++ model.scoutName) ]
            ]
        ]


showActionButtons : Html msg
showActionButtons =
    div []
        [ BootstrapButton.button [ BootstrapButton.primary ] [ text "Beobachtung hinzufügen" ]
        ]


showNoticeList : List Notice -> Html msg
showNoticeList list =
    ul [] (List.map showNotice list)


showNotice : Notice -> Html msg
showNotice notice =
    li [] [ text notice.text ]


noParticipant : Html msg
noParticipant =
    div []
        [ h3 [] [ text "Noch nicht geladen" ] ]
