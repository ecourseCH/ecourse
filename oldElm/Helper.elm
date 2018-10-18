module Helper exposing (..)


handleMaybeString : Maybe String -> String
handleMaybeString maybestring =
   case maybestring of
       Nothing  -> 
         ""
       Just maybestring -> 
           maybestring