#!/bin/bash

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android
./gradlew --stop
./gradlew :app:assembleRelease
cd ..
adb install -r  android/app/build/outputs/apk/release/app-armeabi-v7a-release.apk