#!/bin/bash
set -uo pipefail

echo "Starting Deployment"

git checkout master
rm -rf public/
git pull origin master
git push origin master

echo "Switch to Production"
git checkout production

echo "Updating Production branch"
git pull --rebase=false origin production

echo "Merging changes from Master"
git pull --rebase=false --no-edit -s recursive -X theirs origin master

echo "Generate Hugo site"
rm -rf public/
hugo -b http://open-services.net/ -t oslc

echo "Commiting changes"
git add -A
git commit -m 'Updating Production Branch'

echo "Pushing changes to repository"
git push origin production

echo "Updating server code"
SCRIPT="cd ../var/www/oslc.co; git pull origin production; exit"
ssh -A -p "${2:-22}" "${1}" "${SCRIPT}"

git checkout master