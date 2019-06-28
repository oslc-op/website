#!/bin/bash

echo "Starting Deployment"

echo "Switch to Production"
git checkout production

echo "Updating Production branch"
git pull --rebase=false origin production

echo "Merging changes from Master"
git pull --rebase=false --no-edit origin master

echo "Generate Hugo site"
hugo -b http://open-services.net/ -t oslc

echo "Commiting changes"
git add -A
git commit -m 'Updating Production Branch'

echo "Pushing changes to repository"
git push origin production

echo "Updating server code"
SCRIPT="cd ../var/www/oslc.co; git pull origin production; exit"
ssh -A root@165.227.5.255 "${SCRIPT}"

git checkout master