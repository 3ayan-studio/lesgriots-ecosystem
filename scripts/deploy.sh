#!/bin/bash
set -e

# --- CONFIGURATION ---
REPO_DIR="/var/www/ecosystem"
AGENCY_DIR="$REPO_DIR/agency"
STUDIO_DIR="$REPO_DIR/studio" 
BRANCH="production"

echo "🚀 STARTING ECOSYSTEM DEPLOYMENT"

# --- 1. GENERATE ENV FILES ---
echo "🔑 Generating .env files..."

create_env_file() {
    local target_dir=$1
    echo "Writing .env.local to $target_dir"
    
    echo "SANITY_STUDIO_AGENCY_PROJECT_ID=$SANITY_STUDIO_AGENCY_PROJECT_ID" > "$target_dir/.env.local"
    echo "SANITY_STUDIO_AGENCY_DATASET=$SANITY_STUDIO_AGENCY_DATASET" >> "$target_dir/.env.local"
    echo "SANITY_STUDIO_AGENCY_API_VERSION=$SANITY_STUDIO_AGENCY_API_VERSION" >> "$target_dir/.env.local"
    echo "SANITY_STUDIO_AGENCY_STUDIO_APP_ID=$SANITY_STUDIO_AGENCY_STUDIO_APP_ID" >> "$target_dir/.env.local"
}

create_env_file $AGENCY_DIR
create_env_file $STUDIO_DIR


# --- 2. DEPLOY AGENCY ---
echo "---------------------------------"
echo "🏢 Deploying Agency..."
cd $AGENCY_DIR

echo "📦 Installing..."
npm ci --legacy-peer-deps

echo "🏗️ Building..."
npm run build

echo "🔄 Reloading PM2..."
pm2 reload agency --update-env


# --- 3. DEPLOY STUDIO (Static App) ---
echo "---------------------------------"
echo "🎨 Deploying Studio..."
cd $STUDIO_DIR

echo "📦 Installing..."
npm ci --legacy-peer-deps

echo "🏗️ Building Static Files..."
# /dist
npm run build
# NO PM2 RELOAD NEEDED FOR STUDIO
# Nginx automatically sees the new files in the 'dist' folder.

echo "---------------------------------"
echo "✅ ALL SYSTEMS DEPLOYED!"