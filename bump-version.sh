#!/bin/sh
# Updates the ?v= tag on styles.css, content.js and script.js in index.html
# so visitors' browsers load the new files instead of cached ones.
# Run it before committing a content or style change.
set -e
cd "$(dirname "$0")"
v=$(date +%Y%m%d%H%M)
sed -i.bak -E "s/(styles\.css|content\.js|script\.js)\?v=[A-Za-z0-9]+/\1?v=$v/g" index.html
rm -f index.html.bak
echo "Version set to $v"
