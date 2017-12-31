module Participant.OverViewList exposing (..)

import Html exposing (..)
import Html.Attributes as HA
import Data exposing (..)
import Bootstrap.Table as BootstrapTable exposing (..)
import Bootstrap.CDN as BootstrapCDN
import Routing


view : List Participant -> Html Msg
view model =
    div
        []
        [ BootstrapCDN.stylesheet
        , showList model
        ]


showList : List Participant -> Html Msg
showList model =
    BootstrapTable.table
        { options = [ BootstrapTable.striped, BootstrapTable.hover ]
        , thead = tableHeader
        , tbody = BootstrapTable.tbody [] (List.map viewParticipant model)
        }


viewParticipant : Participant -> BootstrapTable.Row Msg
viewParticipant part =
    let
        path =
            Routing.participantDetailPath part.id
    in
        BootstrapTable.tr []
            [ BootstrapTable.td []
                [ a [ HA.href path ] [ text "Foto" ] ]
            , BootstrapTable.td []
                [ h3 [] [ text part.scoutName ]
                , p [] [ text <| part.prename ++ " " ++ part.name ]
                ]
            ]


tableHeader : BootstrapTable.THead Msg
tableHeader =
    simpleThead
        [ BootstrapTable.th [] [ text "Foto" ]
        , BootstrapTable.th [] [ text "TN" ]
        ]
