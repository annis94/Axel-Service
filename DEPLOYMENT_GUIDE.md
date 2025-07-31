# 🚀 Guide de Déploiement GitHub Pages - Résolution Erreur 404

## 🔍 Diagnostic de l'Erreur

L'erreur `GET https://annis94.github.io/src/main.tsx net::ERR_ABORTED 404` indique que GitHub Pages sert l'ancien fichier `index.html` de développement au lieu du fichier compilé.

## ✅ Solution Complète

### Étape 1: Vérifier la Configuration Actuelle

1. **Vérifiez votre `package.json`** - Les scripts doivent être :
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. **Vérifiez votre `vite.config.ts`** - Doit contenir :
```typescript
export default defineConfig({
  base: '/Axel-Service/',
  // ... autres configurations
});
```

### Étape 2: Nettoyer et Reconstruire

```bash
# Nettoyer complètement
rm -rf node_modules
rm -rf dist
rm -rf .vite

# Réinstaller et construire
npm install
npm run build
```

### Étape 3: Vérifier le Build

Après `npm run build`, vérifiez que :

1. **Le dossier `dist/` existe**
2. **Le fichier `dist/index.html` contient les bonnes références** :
   - `src="/Axel-Service/assets/index-XXXXX.js"`
   - `href="/Axel-Service/assets/index-XXXXX.css"`
3. **Le dossier `dist/assets/` contient les fichiers compilés**

### Étape 4: Déployer avec gh-pages

```bash
# Méthode 1: Script automatisé (recommandé)
chmod +x deploy.sh
./deploy.sh

# Méthode 2: Commande directe
npm run deploy
```

### Étape 5: Configurer GitHub Pages (CRUCIAL)

1. **Allez sur GitHub** : https://github.com/annis94/Axel-Service
2. **Settings** → **Pages**
3. **Source** : Sélectionnez "Deploy from a branch"
4. **Branch** : `gh-pages`
5. **Folder** : `/(root)`
6. **Save**

### Étape 6: Attendre et Tester

1. **Attendez 2-3 minutes** que GitHub déploie
2. **Hard refresh** : `Ctrl+Shift+R` (Windows/Linux) ou `Cmd+Shift+R` (Mac)
3. **Testez l'URL** : https://annis94.github.io/Axel-Service/

## 🔧 Dépannage Avancé

### Si l'erreur persiste :

1. **Vérifiez la branche gh-pages** :
```bash
git fetch origin
git checkout gh-pages
ls -la
```

2. **Vérifiez le contenu de la branche gh-pages** :
   - Doit contenir `index.html` (pas `src/main.tsx`)
   - Doit contenir le dossier `assets/`
   - Doit contenir le fichier `.nojekyll`

3. **Forcez un nouveau déploiement** :
```bash
# Supprimer la branche gh-pages
git push origin --delete gh-pages

# Redéployer
npm run deploy
```

### Vérification des Fichiers

**✅ Fichier `dist/index.html` correct** :
```html
<script type="module" crossorigin src="/Axel-Service/assets/index-XXXXX.js"></script>
<link rel="stylesheet" crossorigin href="/Axel-Service/assets/index-XXXXX.css">
```

**❌ Fichier incorrect** :
```html
<script type="module" src="/src/main.tsx"></script>
```

## 🎯 Points de Contrôle

- [ ] `vite.config.ts` contient `base: '/Axel-Service/'`
- [ ] `package.json` contient les bons scripts de déploiement
- [ ] Le build génère un dossier `dist/` avec les bons fichiers
- [ ] GitHub Pages est configuré sur la branche `gh-pages`
- [ ] Le fichier `.nojekyll` est présent dans `dist/`
- [ ] Hard refresh effectué après déploiement

## 🆘 En Cas de Problème Persistant

1. **Vérifiez les Actions GitHub** : Onglet "Actions" de votre repository
2. **Consultez les logs de déploiement** : Settings → Pages → "View deployment log"
3. **Testez en local** : `npm run preview` pour vérifier le build
4. **Vérifiez les permissions** : Assurez-vous que gh-pages a les droits d'écriture

## 📞 Support

Si le problème persiste après avoir suivi toutes ces étapes, vérifiez :
- Les logs de déploiement GitHub
- La console du navigateur pour d'autres erreurs
- Les Actions GitHub pour des erreurs de build 