#!/bin/bash

# Build the project
npm run build

# Create a new branch for deployment
git checkout -b gh-pages

# Add the dist folder
git add dist -f

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages --force

# Go back to main branch
git checkout main

# Delete the local gh-pages branch
git branch -D gh-pages

echo "Deployment completed!" 