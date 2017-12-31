module Participant.Detail exposing (..)

import Html exposing (..)
import Data exposing (Participant)


view : Int -> Html msg
view id =
    div []
        [ h3 [] [ text "Detail" ]
        ]
