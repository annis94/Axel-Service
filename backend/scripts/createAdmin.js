const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import du modèle User
const { User } = require('../src/models/User');

async function createAdminUser() {
  try {
    // Connexion à MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/service-provider';
    await mongoose.connect(MONGODB_URI);
    console.log('Connecté à MongoDB');

    // Vérifier si l'admin existe déjà
    const existingAdmin = await User.findOne({ email: 'admin@axel-services.fr' });
    if (existingAdmin) {
      console.log('Un compte admin existe déjà avec cet email');
      process.exit(0);
    }

    // Créer le mot de passe hashé
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    // Créer l'utilisateur admin
    const adminUser = new User({
      firstName: 'Admin',
      lastName: 'Axel Services',
      email: 'admin@axel-services.fr',
      password: hashedPassword,
      phone: '+33 1 23 45 67 89',
      role: 'admin'
    });

    await adminUser.save();
    console.log('Compte admin créé avec succès !');
    console.log('Email: admin@axel-services.fr');
    console.log('Mot de passe: admin123');
    console.log('N\'oubliez pas de changer le mot de passe après la première connexion !');

  } catch (error) {
    console.error('Erreur lors de la création du compte admin:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Déconnecté de MongoDB');
    process.exit(0);
  }
}

createAdminUser(); 