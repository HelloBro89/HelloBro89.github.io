#! /bin/bash 

str="$1"

quantity=`find . -name "*"$str"*.*" | wc -l`

touch Pasha_"$quantity".txt 

getFiles=`find . -name "*"$str"*.*"`

echo "$getFiles" > Pasha_"$quantity".txt  

echo -e "$str - введённый параметр \n Имена файлов: \n $getFiles"

