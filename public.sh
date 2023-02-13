#!/bin/bash

# Check if uglifyjs is installed
if ! [ -x "$(command -v uglifyjs)" ]; then
  # If uglifyjs is not installed, print an error message and exit
  echo "Error: uglifyjs is not installed." >&2
  exit 1
fi

# Check if the /public folder exists
if [ ! -d "./public" ]; then
  # If the folder does not exist, create it
  mkdir ./public
fi

# Copy index.html and style.css into /public folder
cp index.html ./public
cp style.css ./public
cp contact.html ./public

# Run the command to minify js code
uglifyjs script.js -o ./public/script.js