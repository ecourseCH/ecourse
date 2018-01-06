module Model exposing (..)


type alias Model =
    { participants : List ParticipantSummary
    , participant : Maybe Participant
    , route : Route
    }


type alias ParticipantSummary =
    { id : Int
    , name : String
    , prename : String
    , scoutName : String
    }


type alias Participant =
    { id : Int
    , name : String
    , prename : String
    , scoutName : String
    , notices : List Notice
    }


type alias Notice =
    { id : Int
    , text : String
    }


type Route
    = ParticipantsListRoute
    | ParticipantRoute Int
    | NotFoundRoute


initialModel : Route -> Model
initialModel route =
    { participants = []
    , participant = Nothing
    , route = route
    }
