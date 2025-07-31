#!/bin/bash

# Script de diagnostic pour vérifier la configuration de déploiement
echo "🔍 Diagnostic de la configuration de déploiement GitHub Pages"
echo "=========================================================="

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Fonction pour vérifier un fichier
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅ $1 existe${NC}"
        return 0
    else
        echo -e "${RED}❌ $1 manquant${NC}"
        return 1
    fi
}

# Fonction pour vérifier une configuration
check_config() {
    if grep -q "$2" "$1" 2>/dev/null; then
        echo -e "${GREEN}✅ $3 trouvé dans $1${NC}"
        return 0
    else
        echo -e "${RED}❌ $3 manquant dans $1${NC}"
        return 1
    fi
}

echo -e "\n${BLUE}📋 Vérification des fichiers de configuration...${NC}"

# Vérifier les fichiers essentiels
check_file "package.json"
check_file "vite.config.ts"
check_file "index.html"
check_file "public/.nojekyll"

echo -e "\n${BLUE}🔧 Vérification de la configuration Vite...${NC}"
check_config "vite.config.ts" "base: '/Axel-Service/'" "Base path configuré"

echo -e "\n${BLUE}📦 Vérification des scripts package.json...${NC}"
check_config "package.json" '"deploy": "gh-pages -d dist"' "Script de déploiement"
check_config "package.json" '"build": "vite build"' "Script de build"
check_config "package.json" '"homepage": "https://annis94.github.io/Axel-Service"' "Homepage configurée"

echo -e "\n${BLUE}🏗️ Vérification du build...${NC}"
if [ -d "dist" ]; then
    echo -e "${GREEN}✅ Dossier dist existe${NC}"
    
    if [ -f "dist/index.html" ]; then
        echo -e "${GREEN}✅ dist/index.html existe${NC}"
        
        # Vérifier le contenu du fichier index.html
        if grep -q "src=\"/Axel-Service/assets/" dist/index.html; then
            echo -e "${GREEN}✅ dist/index.html contient les bonnes références d'assets${NC}"
        else
            echo -e "${RED}❌ dist/index.html ne contient pas les bonnes références d'assets${NC}"
            echo -e "${YELLOW}Contenu actuel:${NC}"
            grep -E "(src=|href=)" dist/index.html
        fi
    else
        echo -e "${RED}❌ dist/index.html manquant${NC}"
    fi
    
    if [ -d "dist/assets" ]; then
        echo -e "${GREEN}✅ Dossier dist/assets existe${NC}"
        echo -e "${BLUE}Fichiers dans dist/assets:${NC}"
        ls -la dist/assets/
    else
        echo -e "${RED}❌ Dossier dist/assets manquant${NC}"
    fi
    
    if [ -f "dist/.nojekyll" ]; then
        echo -e "${GREEN}✅ dist/.nojekyll existe${NC}"
    else
        echo -e "${RED}❌ dist/.nojekyll manquant${NC}"
    fi
else
    echo -e "${RED}❌ Dossier dist manquant - Lancez 'npm run build' d'abord${NC}"
fi

echo -e "\n${BLUE}🌐 Vérification de la configuration GitHub Pages...${NC}"
echo -e "${YELLOW}⚠️  Vérifiez manuellement sur GitHub:${NC}"
echo -e "   1. Allez sur: https://github.com/annis94/Axel-Service/settings/pages"
echo -e "   2. Source doit être: 'Deploy from a branch'"
echo -e "   3. Branch doit être: 'gh-pages'"
echo -e "   4. Folder doit être: '/(root)'"

echo -e "\n${BLUE}🚀 Actions recommandées:${NC}"
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}   1. Lancez: npm run build${NC}"
fi
echo -e "${YELLOW}   2. Lancez: npm run deploy${NC}"
echo -e "${YELLOW}   3. Attendez 2-3 minutes${NC}"
echo -e "${YELLOW}   4. Testez: https://annis94.github.io/Axel-Service/${NC}"
echo -e "${YELLOW}   5. Hard refresh: Ctrl+Shift+R${NC}"

echo -e "\n${BLUE}📊 Résumé du diagnostic:${NC}"
echo "==========================================================" 