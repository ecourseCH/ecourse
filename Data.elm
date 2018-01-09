module Data exposing (..)

import Http
import Json.Encode exposing (object)
import Json.Decode exposing (int, string, float, Decoder, list)
import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Model exposing (..)


url : String
url =
    "http://localhost:5000/api/participant"


noteUrl : Int -> String
noteUrl id =
    "http://localhost:5000/api/notice/" ++ (toString id)


participantDetailUrl : Int -> String
participantDetailUrl id =
    url ++ "/" ++ toString id


getParticipants : Http.Request (List ParticipantSummary)
getParticipants =
    Http.get url (list decodeParticipantSummary)


postNote : Int -> Notice -> Http.Request Notice
postNote id note =
    Http.post (noteUrl id) (encodeNotice note) decodeNotice


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


encodeNotice : Notice -> Http.Body
encodeNotice notice =
    Http.jsonBody <|
        Json.Encode.object
            [ ( "text", Json.Encode.string notice.text )
            ]


getParticipantDetail : Int -> Http.Request Participant
getParticipantDetail id =
    Http.get (participantDetailUrl id) decodeParticipant
