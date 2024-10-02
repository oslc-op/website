#!/bin/bash

echo "Starting Deployment"

git checkout master
git pull origin master
git push origin master

echo "Switch to Production"
git checkout production

echo "Updating Production branch"
git pull origin production

echo "Merging changes from Master"
git pull --no-edit origin master

echo "Generate Hugo site"
rm -rf public/
hugo

echo "Commiting changes"
git add -A
git commit -m 'Updating Production Branch'

echo "Pushing changes to repository"
git push origin production

echo "Updating server code"
SCRIPT="cd ../var/www/oslcfest.org; git pull; exit"
ssh -A root@167.99.229.27 "${SCRIPT}"

echo "Switching to master"
git checkout master
