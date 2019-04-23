#!/bin/bash

if [ ! -f manifest.json ]; then
  echo "Please execute inside project directory!"
fi

excludedfiles=("package.sh" "icons/pwdhash-icon.svg" "screenshots/*" "docs/*")

currentversion=$(grep -oP '"version": "\K[\d.]+' manifest.json)

zip -r -FS ../pwdhash-${currentversion}.xpi * -x ${excludedfiles[@]}
