import express from 'express';
import { Service } from '../models/Service';
import { authMiddleware, restrictTo } from '../middleware/auth';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();

// === Routes Publiques (pour les visiteurs) ===
// GET /api/services -> Récupérer tous les services
router.get('/', async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).json({ status: 'success', data: { services } });
  } catch (error) {
    next(error);
  }
});

// === Routes Protégées (pour l'admin) ===

// POST /api/services -> Créer un nouveau service
router.post('/', authMiddleware, restrictTo('admin'), async (req, res, next) => {
  try {
    const { title, description, category, price, image } = req.body;

    if (!title || !description || !category || !price) {
      throw new AppError('Please provide all required fields', 400);
    }

    const service = await Service.create({
      title,
      description,
      category,
      price,
      image,
    });

    res.status(201).json({
      status: 'success',
      data: { service },
    });
  } catch (error) {
    next(error);
  }
});

// PATCH /api/services/:id -> Mettre à jour un service
router.patch('/:id', authMiddleware, restrictTo('admin'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, category, price, image } = req.body;

    const service = await Service.findByIdAndUpdate(
      id,
      { title, description, category, price, image },
      { new: true, runValidators: true }
    );

    if (!service) {
      throw new AppError('Service not found', 404);
    }

    res.status(200).json({
      status: 'success',
      data: { service },
    });
  } catch (error) {
    next(error);
  }
});

// DELETE /api/services/:id -> Supprimer un service
router.delete('/:id', authMiddleware, restrictTo('admin'), async (req, res, next) => {
  try {
    const { id } = req.params;

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      throw new AppError('Service not found', 404);
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
});

export default router; 