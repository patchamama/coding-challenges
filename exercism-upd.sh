echo Updating exercise of $1: $2

exercism download --exercise=$2 --track=$1 --force
cp -R ~/Exercism .
git add .
git commit -m "add $1 solution: $2"
git push

# Regenerate the markdown table of statistics
node scanExercises.js exercism
cat README.1.txt exercism_info.md README.2.txt > README.md
git add .
git commit -m "docs: README.md and exercism_info.md Stats. updated"
git push
exit

examples:
 bash exercism-upd.sh python grains   
        exercism download --exercise=grains --track=python

 bash exercism-upd.sh javascript vehicle-purchase
        exercism download --exercise=vehicle-purchase --track=javascript

 bash exercism-upd.sh typescript hello-world
       exercism download --exercise=hello-world --track=typescript

 bash exercism-upd.sh php lasagna
       exercism download --exercise=lasagna --track=php

exercism download --exercise=two-fer --track=typescript