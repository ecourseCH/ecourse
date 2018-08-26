module Login.Detail exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Msg exposing (..)
import Bootstrap.Table as BootstrapTable exposing (..)
import Bootstrap.Form as BootstrapForm exposing (..)
import Bootstrap.Button as BootstrapButton exposing (..)
import Bootstrap.Form.Textarea as BootstrapTextarea
import Model exposing (Model, Participant, Notice, Login)
import Helper exposing (..)


view : Model  -> Html Msg
view model =
     div 
     []
            [  text "eCourse login page" 
            , showUserNameField model.login
            
            ]
            
            
showUserNameField : Login -> Html Msg
showUserNameField login =
    BootstrapForm.form []
        [ BootstrapForm.group []
            [ BootstrapForm.label [ for "username" ] [ text "User Name:" ]
            , BootstrapTextarea.textarea
                [ BootstrapTextarea.id "username"
                , BootstrapTextarea.value login.userName
                , BootstrapTextarea.rows 1
                ]
            ]
        , div [] [ BootstrapButton.button [ BootstrapButton.primary, BootstrapButton.onClick LoginRequested ] [ text "Login" ] ]
        ]

      