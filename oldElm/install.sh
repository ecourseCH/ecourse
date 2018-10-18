#!/bin/bash
# installation script for linux for eCourse
# Author Luxus

# parameters
# 1 install dir of files default /var/www/html/eCourse

#check input parameters

if [ -z "$1" ]
  then
   DIR="/var/www/html/eCourse";
echo "Directory set to " $DIR ;

else
  DIR=$1;
 echo "Directory set to " $DIR ;
fi



if [ -d $DIR ]; then
  echo "eCourse directory already exists. Please delete first";
  
   read -p 'Would you like to delete it (y/n)? ' DELDIR;
  if [ ${DELDIR,,} == 'y' ] ; then
    rm -rdf $DIR;
   if [ "$?" -eq 0 ]
   then
    echo "eCourse directory deletion successful"
  else
    echo "problem with eCourse directory deletion"
    exit 1;
  fi
   
   
  else
  echo " Please remove directory manually and restart installation"
  exit 1;
  fi
 else
 mkdir $DIR
   if [ "$?" -eq 0 ]
   then
    echo "eCourse directory sucessfully setup"
  else
    echo "problem with eCourse directory creation."
    exit 1;
  fi

fi

#install elm
elm-make Main.elm --output=index.html

rsync -avz --exclude 'install.sh' --exclude 'elm_test' --exclude '.git' . $DIR
 if [ "$?" -eq 0 ]
   then
    echo "eCourse copied to webserver location sucessfully setup"
  else
    echo "problem with copying eCourse to webserver location."
    exit 1;
  fi

# install elm  
cd $DIR;  
  
  
  
# # install composer
# cd $DIR;
# 
# ./install_composer.sh
#  if [ "$?" -eq 0 ]
#    then
#     echo "download composer successful"
#   else
#     echo "download composer failed."
#     exit 1;
#   fi
# 
#  php composer.phar install
#   if [ "$?" -eq 0 ]
#    then
#     echo "composer sucessfully setup"
#   else
#     echo "problem with composer setup"
#     exit 1;
#   fi
# 


# cd ~/ecourse/; ./install.sh  ; cd /var/www/html/eCourse ;

