module Participant.Detail exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Msg exposing (..)
import Bootstrap.Form as BootstrapForm exposing (..)
import Bootstrap.Button as BootstrapButton exposing (..)
import Bootstrap.Form.Textarea as BootstrapTextarea
import Model exposing (Model, Participant, Notice)


view : Model -> Int -> Html Msg
view model id =
    case model.participant of
        Nothing ->
            noParticipant

        Just participant ->
            showParticipantDetail model participant


showParticipantDetail : Model -> Participant -> Html Msg
showParticipantDetail model participant =
    div []
        [ showParticipantInfo participant
        , showAddNoteField model.newNotice
        , showNoticeList participant.notices
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


showAddNoteField : Notice -> Html Msg
showAddNoteField newNote =
    BootstrapForm.form []
        [ BootstrapForm.group []
            [ BootstrapForm.label [ for "notice" ] [ text "Beobachtung" ]
            , BootstrapTextarea.textarea
                [ BootstrapTextarea.id "notice"
                , BootstrapTextarea.value newNote.text
                , BootstrapTextarea.onInput OnNoteChanged
                , BootstrapTextarea.rows 5
                ]
            ]
        , div [] [ BootstrapButton.button [ BootstrapButton.primary, BootstrapButton.onClick NoteFormSubmitted ] [ text "Beobachtung hinzufügen" ] ]
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
