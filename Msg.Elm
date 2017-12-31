module Msg exposing (..)

import Time exposing (Time)
import Http
import Model exposing (..)
import Navigation exposing (Location)


type Msg
    = Tick Time
    | ParticipantsLoaded (Result Http.Error (List Participant))
    | OnLocationChange Location
