import express from 'express';
import { userController, medicationController } from '../controllers';

const router = express.Router();

// User routes
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Medication routes
router.post('/medications', medicationController.createMedication);
router.get('/medications/:id', medicationController.getMedication);
router.put('/medications/:id', medicationController.updateMedication);
router.delete('/medications/:id', medicationController.deleteMedication);

export default router;