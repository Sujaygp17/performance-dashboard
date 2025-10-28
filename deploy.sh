#!/bin/bash

echo "🚀 Performance Dashboard - GitHub Deployment Script"
echo "=================================================="
echo ""
echo "This script will help you push your Performance Dashboard to GitHub"
echo "and deploy it to GitHub Pages."
echo ""
echo "Your site will be available at: https://Sujaygp001.github.io/map_test"
echo ""
echo "⚠️  AUTHENTICATION REQUIRED"
echo "You'll be prompted for your GitHub credentials."
echo ""
echo "Options:"
echo "  1. Use your GitHub username and Personal Access Token"
echo "  2. If you have 2FA enabled, you MUST use a Personal Access Token"
echo ""
echo "To create a Personal Access Token:"
echo "  1. Go to: https://github.com/settings/tokens"
echo "  2. Click 'Generate new token (classic)'"
echo "  3. Select 'repo' scope (full control)"
echo "  4. Generate and copy the token"
echo "  5. Use the token as your password when prompted"
echo ""
read -p "Press Enter to continue with git push..."

# Clear old credentials
echo "Clearing old credentials..."
git credential-osxkeychain erase << EOF
host=github.com
protocol=https
EOF

# Push to GitHub
echo ""
echo "📤 Pushing code to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    read -p "Press Enter to deploy to GitHub Pages..."
    
    # Deploy to GitHub Pages
    echo ""
    echo "🌐 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 SUCCESS! Your Performance Dashboard is deployed!"
        echo ""
        echo "🌍 Your site is available at:"
        echo "   https://Sujaygp001.github.io/map_test"
        echo ""
        echo "Note: It may take 1-2 minutes for changes to appear."
        echo ""
        echo "📝 To update your dashboard in the future:"
        echo "   1. Make your changes"
        echo "   2. Run: git add . && git commit -m 'Your message'"
        echo "   3. Run: git push"
        echo "   4. Run: npm run deploy"
    else
        echo ""
        echo "❌ Deployment failed. Please check the error above."
    fi
else
    echo ""
    echo "❌ Push failed. Please check your credentials and try again."
    echo ""
    echo "Tips:"
    echo "  - Make sure you're using 'Sujaygp001' as username"
    echo "  - If you have 2FA, use a Personal Access Token as password"
    echo "  - Token creation: https://github.com/settings/tokens"
fi
