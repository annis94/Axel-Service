# 🧹 Axel Services - Nettoyage Professionnel & Solutions 3D

Site web professionnel pour les services de nettoyage et de traitement 3D (Désinfection, Désinsectisation, Dératisation).

## 🌐 Site en ligne

**URL du site :** [https://annis94.github.io/Axel-Service/](https://annis94.github.io/Axel-Service/)

## 🚀 Technologies utilisées

- **Frontend :** React 18 + TypeScript
- **Styling :** Tailwind CSS
- **Animations :** Framer Motion
- **Build :** Vite
- **Déploiement :** GitHub Pages

## 📋 Fonctionnalités

### 🏠 Nettoyage Professionnel
- Bureaux et environnements de travail
- Entrepôts et commerces
- Nettoyage Airbnb et fin de séjour
- Nettoyage vitres intérieur et extérieur
- Fin de chantier et remise en état
- Nettoyage événementiel

### 🛡️ 3D Sentry Solutions
- **Désinfection** - Élimination des bactéries et virus
- **Désinsectisation** - Traitement contre les insectes
- **Dératisation** - Élimination des rongeurs
- Intervention ponctuelle curative
- Contrats annuels préventifs
- Solutions radicales et durables

## 📱 Pages du site

- **🏠 Accueil** - Présentation des services
- **📞 Contact** - Informations de contact
- **❓ FAQ** - Questions fréquentes
- **ℹ️ À propos** - Mission et valeurs

## 🛠️ Installation et développement

```bash
# Cloner le repository
git clone https://github.com/annis94/Axel-Service.git
cd Axel-Service

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Déployer sur GitHub Pages
npm run deploy

# Ou utiliser le script de déploiement automatisé
chmod +x deploy.sh
./deploy.sh
```

## 📞 Contact

- **Téléphone :** 06 60 20 26 12
- **Email :** contact@3dsentry.fr
- **Disponibilité :** 24/7

## 🎯 Mission

Offrir des solutions radicales, durables et adaptées à chaque situation, pour restaurer la tranquillité de nos clients. Nous nous engageons à fournir un service professionnel de qualité, disponible 24/7.

## 🚀 Déploiement sur GitHub Pages

### Configuration requise

1. **Repository GitHub :** Assurez-vous que votre repository s'appelle `Axel-Service`
2. **Branche de déploiement :** GitHub Pages doit être configuré pour utiliser la branche `gh-pages`
3. **Actions GitHub :** Le déploiement se fait automatiquement via gh-pages

### Étapes de déploiement

```bash
# Méthode 1 : Utiliser npm
npm run deploy

# Méthode 2 : Script automatisé (recommandé)
chmod +x deploy.sh
./deploy.sh
```

### Résolution des problèmes courants

- **Erreur 404 sur main.tsx :** Vérifiez que `base: '/Axel-Service/'` est configuré dans `vite.config.ts`
- **Routes ne fonctionnent pas :** L'application utilise HashRouter pour la compatibilité GitHub Pages
- **Assets non trouvés :** Vérifiez que le fichier `.nojekyll` est présent dans le dossier `dist`

## 📄 Licence

Ce projet est sous licence MIT.

---

**Axel Services** - Votre partenaire de confiance pour tous vos besoins de nettoyage et de traitement 3D. 