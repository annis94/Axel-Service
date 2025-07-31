#!/bin/bash

# Script de déploiement pour GitHub Pages
echo "🚀 Début du déploiement..."

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour afficher les erreurs
error_exit() {
    echo -e "${RED}❌ Erreur: $1${NC}" >&2
    exit 1
}

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    error_exit "package.json non trouvé. Assurez-vous d'être dans le répertoire racine du projet."
fi

# Nettoyer le cache et les modules
echo -e "${YELLOW}🧹 Nettoyage du cache...${NC}"
rm -rf node_modules/.vite
rm -rf dist

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installation des dépendances...${NC}"
    npm install || error_exit "Échec de l'installation des dépendances"
fi

# Construire le projet
echo -e "${YELLOW}🔨 Construction du projet...${NC}"
npm run build || error_exit "Échec de la construction du projet"

# Vérifier que le build s'est bien passé
if [ ! -d "dist" ]; then
    error_exit "Le dossier dist n'a pas été créé"
fi

if [ ! -f "dist/index.html" ]; then
    error_exit "Le fichier dist/index.html n'a pas été créé"
fi

# Vérifier que les assets sont présents
if [ ! -d "dist/assets" ]; then
    error_exit "Le dossier dist/assets n'a pas été créé"
fi

# Copier le fichier .nojekyll dans dist
echo -e "${YELLOW}📄 Copie du fichier .nojekyll...${NC}"
if [ -f "public/.nojekyll" ]; then
    cp public/.nojekyll dist/ || error_exit "Impossible de copier .nojekyll"
else
    echo "# Ce fichier désactive Jekyll sur GitHub Pages" > dist/.nojekyll
fi

# Vérifier le contenu du fichier index.html généré
echo -e "${YELLOW}🔍 Vérification du fichier index.html...${NC}"
if grep -q "src=\"/Axel-Service/assets/" dist/index.html; then
    echo -e "${GREEN}✅ Le fichier index.html contient les bonnes références d'assets${NC}"
else
    echo -e "${RED}⚠️  Attention: Le fichier index.html ne contient pas les références attendues${NC}"
    echo "Contenu du fichier index.html:"
    cat dist/index.html
fi

# Déployer avec gh-pages
echo -e "${YELLOW}🌐 Déploiement sur GitHub Pages...${NC}"
npx gh-pages -d dist || error_exit "Échec du déploiement avec gh-pages"

echo -e "${GREEN}✅ Déploiement terminé avec succès!${NC}"
echo -e "${GREEN}🌍 Votre site sera disponible sur: https://annis94.github.io/Axel-Service/${NC}"
echo -e "${YELLOW}⏳ Note: Il peut prendre quelques minutes pour que les changements soient visibles.${NC}"
echo -e "${YELLOW}🔄 N'oubliez pas de faire un hard refresh (Ctrl+Shift+R) pour vider le cache.${NC}" 