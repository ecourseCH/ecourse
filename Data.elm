module Data exposing (..)

import Http
import Json.Decode as Decode
import Model exposing (..)


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
