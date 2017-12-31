module Routing exposing (..)

import Navigation exposing (Location)
import Data exposing (..)
import UrlParser exposing (..)


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map ParticipantsListRoute top
        , map ParticipantRoute (s "participant" </> int)
        , map ParticipantsListRoute (s "participant")
        ]


parseLocation : Location -> Route
parseLocation location =
    case (parseHash matchers location) of
        Just route ->
            route

        Nothing ->
            NotFoundRoute


participantOverViewListPath : String
participantOverViewListPath =
    "#participant"


participantDetailPath : Int -> String
participantDetailPath id =
    "#participant/" ++ toString id
