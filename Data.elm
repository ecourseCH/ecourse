module Data exposing (..)

import Http
import Json.Encode exposing (object)
import Json.Decode exposing (int, string, float, Decoder, list, maybe)
import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Model exposing (..)

-- TODO
url : String
url =
    "http://localhost/ecourseSlim/participant"

-- TODO
noteUrl : Int -> String
noteUrl id =
    "http://localhost/ecourseSlim/notice/" ++ (toString id)


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
        |> required "participantId" int
        |> required "name" string
        |> required "preName" string
        |> required "scoutName" string
        |> required "branch" (maybe string) 
        


decodeParticipant : Decoder Participant
decodeParticipant =
    decode Participant
        |> required "participantId" int
        |> required "name" string
        |> required "preName" string
        |> required "scoutName" string
        |> required "notices" (list decodeNotice)
        |> required "branch" (maybe string)


decodeNotice : Decoder Notice
decodeNotice =
    decode Notice
        |> required "noticeId" int
        |> required "noticeText" string


encodeNotice : Notice -> Http.Body
encodeNotice notice =
    Http.jsonBody <|
        Json.Encode.object
            [ ( "text", Json.Encode.string notice.text )
            ]


getParticipantDetail : Int -> Http.Request Participant
getParticipantDetail id =
    Http.get (participantDetailUrl id) decodeParticipant
