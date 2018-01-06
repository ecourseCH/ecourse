module Data exposing (..)

import Http
import Json.Decode exposing (int, string, float, Decoder, list)
import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Model exposing (..)


url : String
url =
    "http://localhost:5000/api/participant"


participantDetailUrl : Int -> String
participantDetailUrl id =
    url ++ "/" ++ toString id


getParticipants : Http.Request (List ParticipantSummary)
getParticipants =
    Http.get url (list decodeParticipantSummary)


decodeParticipantSummary : Decoder ParticipantSummary
decodeParticipantSummary =
    decode ParticipantSummary
        |> required "id" int
        |> required "name" string
        |> required "preName" string
        |> required "scoutName" string


decodeParticipant : Decoder Participant
decodeParticipant =
    decode Participant
        |> required "id" int
        |> required "name" string
        |> required "preName" string
        |> required "scoutName" string
        |> required "notices" (list decodeNotice)


decodeNotice : Decoder Notice
decodeNotice =
    decode Notice
        |> required "id" int
        |> required "text" string


getParticipantDetail : Int -> Http.Request Participant
getParticipantDetail id =
    Http.get (participantDetailUrl id) decodeParticipant
