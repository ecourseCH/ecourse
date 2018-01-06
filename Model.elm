module Model exposing (..)


type alias Model =
    { participants : List Participant
    , participant : Maybe Participant
    , route : Route
    }


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
    , participant = Nothing
    , route = route
    }
