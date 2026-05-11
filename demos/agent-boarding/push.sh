#!/bin/bash
# Auto-push script — reads token from .github_token

TOKEN_FILE="$(dirname "$0")/.github_token"

if [ ! -f "$TOKEN_FILE" ]; then
  echo "Error: .github_token file not found. Create it and paste your token inside."
  exit 1
fi

TOKEN=$(head -1 "$TOKEN_FILE" | tr -d '[:space:]')

if [ -z "$TOKEN" ] || [ "$TOKEN" = "PASTE_YOUR_TOKEN_HERE" ]; then
  echo "Error: Please paste a valid GitHub token in .github_token"
  exit 1
fi

REPO_URL="https://${TOKEN}@github.com/Karl-Woo/Onboard_demo.git"
git remote set-url origin "$REPO_URL"

# Stage, commit, and push
git add .
git commit -m "${1:-Update}" 
git push origin main

# Remove token from remote URL after push (for safety)
git remote set-url origin "https://github.com/Karl-Woo/Onboard_demo.git"

echo "Pushed successfully!"
