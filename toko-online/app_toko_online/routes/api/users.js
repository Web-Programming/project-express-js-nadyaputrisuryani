const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user');

// POST: Membuat User baru (registrasi)
router.post('/', userController.createUser);

// GET: Mengambil semua User (hanya untuk Admin)
router.get('/', userController.getAllUsers);

// GET: Mengambil satu User berdasarkan ID
router.get('/:id', userController.getUserById);

// PUT: Memperbarui data User
router.put('/:id', userController.updateUser);

// DELETE: Menghapus User
router.delete('/:id', userController.deleteUser);

module.exports = router;
