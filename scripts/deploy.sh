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

# Function to write env file
create_env_file() {
    local target_dir=$1
    echo "Writing .env.local to $target_dir"
    
    # We use the variables that were exported in the YAML
    echo "AGENCY_SANITY_PROJECT_ID=$AGENCY_SANITY_PROJECT_ID" > "$target_dir/.env.local"
    echo "AGENCY_SANITY_DATASET=$AGENCY_SANITY_DATASET" >> "$target_dir/.env.local"
    echo "AGENCY_SANITY_API_VERSION=$AGENCY_SANITY_API_VERSION" >> "$target_dir/.env.local"
    
    # Sanity Studio often looks for 'SANITY_STUDIO_' prefixes too, 
    # but if your config uses process.env.AGENCY_..., this is sufficient.
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