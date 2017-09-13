-- Read more about this program in the official Elm guide:
-- https://guide.elm-lang.org/architecture/user_input/buttons.html

import Html exposing (beginnerProgram, div, button, text, ul, li)


main =
  beginnerProgram { model = person, view = view, update = update }


type alias Person =
  { name : String
  , scoutname : String
  }


person : Person
person =
  Person "Roman" "Luxus"

view person =
  ul []
    [ 
     li [] [ text (person.scoutname) ]
    ]


type Msg = ViewDetail


update msg person = 
    case msg of 
    ViewDetail ->
        person
--  case msg of
--    Increment ->
--      person + 1

--    Decrement ->
--      person - 1
