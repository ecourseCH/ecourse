module Data exposing (..)

import Http
import Json.Decode as Decode
import Time exposing (Time, second)


type alias Model =
    { participants : List Participant
    }


type Msg
    = Tick Time
    | ParticipantsLoaded (Result Http.Error (List Participant))


type alias Participant =
    { name : String
    , prename : String
    , scoutName : String
    }



-- url = "http://prusik.ch/ecourse/participants.json"


url : String
url =
    "http://localhost:5000/api/participant"


getParticipants : Http.Request (List Participant)
getParticipants =
    Http.get url (Decode.list decodeParticipant)


decodeParticipant : Decode.Decoder Participant
decodeParticipant =
    Decode.map3 Participant
        (Decode.field "name" Decode.string)
        (Decode.field "preName" Decode.string)
        (Decode.field "scoutName" Decode.string)
