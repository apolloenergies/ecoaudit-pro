#!/bin/bash

set -e

echo "🧹 Cleaning previous local APKs..."
rm -f ./build-*.apk

echo "📦 Building custom development client (Android)..."
DOTENV_CONFIG_PATH=.env.production eas build --platform android --profile development --local


echo "🔍 Searching for latest .apk file..."
APK_PATH=$(ls -t build-*.apk | head -n 1)

if [ ! -f "$APK_PATH" ]; then
  echo "❌ APK not found. Make sure the build succeeded."
  exit 1
fi

echo "✅ Found APK: $APK_PATH"

if adb devices | grep -w "device" > /dev/null; then
  echo "📱 Installing APK on connected emulator/device..."
  adb install -r "$APK_PATH"
  echo "✅ Installed successfully."
else
  echo "❌ No emulator/device detected. Please start one first."
  exit 1
fi
