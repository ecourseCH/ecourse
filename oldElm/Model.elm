module Model exposing (..)


type alias Model =
    { login : Login
    , participants : List ParticipantSummary
    , participant : Maybe Participant
    , route : Route
    , newNotice : Notice
    }


type alias Login =
  { userName : String
  , passwordIn : String
  }
  
  
    
    
type alias ParticipantSummary =
    { id : Int
    , name : String
    , prename : String
    , scoutName : String
    , branch : Maybe String
    }


type alias Participant =
    { id : Int
    , name : String
    , prename : String
    , scoutName : String
    , notices : List Notice
    , branch : Maybe String
    }


type alias Notice =
    { id : Int
    , text : String
    }


type Route
    = LoginRoute
    | ParticipantsListRoute
    | ParticipantRoute Int
    | NotFoundRoute


emptyNotice : Notice
emptyNotice =
    { id = 0
    , text = ""
    }

emptyLogin : Login
emptyLogin =
    { userName = ""
    , passwordIn = ""
    }

initialModel : Route -> Model
initialModel route =
    { login = emptyLogin
    , participants = []
    , participant = Nothing
    , route = route
    , newNotice = emptyNotice
    }
