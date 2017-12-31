module Data exposing (..)

import Http
import Json.Decode as Decode
import Time exposing (Time, second)
import Navigation exposing (Location)


type alias Model =
    { participants : List Participant
    , route : Route
    }


type Msg
    = Tick Time
    | ParticipantsLoaded (Result Http.Error (List Participant))
    | OnLocationChange Location


type alias Participant =
    { id : Int
    , name : String
    , prename : String
    , scoutName : String
    }


type Route
    = ParticipantsListRoute
    | ParticipantRoute Int
    | NotFoundRoute


initialModel : Route -> Model
initialModel route =
    { participants = []
    , route = route
    }


url : String
url =
    "http://localhost:5000/api/participant"


getParticipants : Http.Request (List Participant)
getParticipants =
    Http.get url (Decode.list decodeParticipant)


decodeParticipant : Decode.Decoder Participant
decodeParticipant =
    Decode.map4 Participant
        (Decode.field "id" Decode.int)
        (Decode.field "name" Decode.string)
        (Decode.field "preName" Decode.string)
        (Decode.field "scoutName" Decode.string)
