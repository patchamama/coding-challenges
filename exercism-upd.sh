echo Updating exercise of $1: $2

exercism download --exercise=$2 --track=$1
cp -R /Users/mandy/Exercism .
git add .
git commit -m "add $1 solution: $2"
git push

exit
pause
input
examples:
 bash exercism-upd.sh python grains   
        exercism download --exercise=grains --track=python

 bash exercism-upd.sh javascript vehicle-purchase
        exercism download --exercise=vehicle-purchase --track=javascript

 bash exercism-upd.sh typescript hello-world
       exercism download --exercise=hello-world --track=typescript

 bash exercism-upd.sh php lasagna
       exercism download --exercise=lasagna --track=php

