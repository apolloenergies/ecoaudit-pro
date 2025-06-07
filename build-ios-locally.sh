#!/bin/bash

set -e

echo "🧹 Cleaning previous iOS build archives..."
rm -f ./build-*.tar.gz
rm -rf ./Payload

echo "📦 Building for iOS simulator..."
eas build --platform ios --profile development --local

# Step 1: Find latest tarball
TARBALL=$(ls -t build-*.tar.gz | head -n 1)

if [ ! -f "$TARBALL" ]; then
  echo "❌ .tar.gz build archive not found."
  exit 1
fi

echo "📦 Found build archive: $TARBALL"

# Step 2: Extract .app from archive
echo "📂 Extracting .app from tarball..."
mkdir -p Payload
tar -xzf "$TARBALL" -C Payload

APP_PATH=$(find Payload -name "*.app" | head -n 1)

if [ ! -d "$APP_PATH" ]; then
  echo "❌ .app bundle not found after extraction."
  exit 1
fi

echo "✅ Found .app bundle: $APP_PATH"

# Step 3: Install to running simulator
echo "📲 Installing on running iOS Simulator..."
xcrun simctl install booted "$APP_PATH"

# Step 4: Extract bundle ID and launch
BUNDLE_ID=$(/usr/libexec/PlistBuddy -c "Print CFBundleIdentifier" "$APP_PATH/Info.plist")
echo "🚀 Launching app with bundle ID: $BUNDLE_ID"
xcrun simctl launch booted "$BUNDLE_ID"

# Step 5: Start Metro bundler
echo "📡 Starting Metro with dev client..."
npx expo start --dev-client
