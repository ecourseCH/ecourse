-- Read more about this program in the official Elm guide:
-- https://guide.elm-lang.org/architecture/user_input/buttons.html

import Html exposing (beginnerProgram, div, button, text, ul, li)


main =
  beginnerProgram { model = tnList, view = view, update = update }


type alias Tns = { personen: List}


type alias Person =
  { name : String
  , scoutname : String
  }


luxus : Person
luxus =
  Person "Roman" "Luxus"

prusik : Person
prusik =
  Person "Florian" "Prusik"

tnList : List Person
tnList = [luxus, prusik]

view : List Person -> Html.Html Msg
view tnList =
  ul []   (List.map personRow tnList)
  
personRow: Person -> Html.Html Msg
personRow person =
 li [] [ 
    text(person.scoutname)
    ]



type Msg = ViewDetail


update msg luxus = 
    case msg of 
    ViewDetail ->
        luxus
--  case msg of
--    Increment ->
--      person + 1

--    Decrement ->
--      person - 1
