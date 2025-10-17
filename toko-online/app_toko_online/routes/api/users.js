const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users');

// POST: Membuat User baru (registrasi)
router.post('/', usersController.createUsers);

// GET: Mengambil semua User (hanya untuk Admin)
router.get('/', usersController.getAllUsers);

// GET: Mengambil satu User berdasarkan ID
router.get('/:id', usersController.getUserById);

// PUT: Memperbarui data User
router.put('/:id', usersController.updateUser);

// DELETE: Menghapus User
router.delete('/:id', usersController.deleteUser);

module.exports = router;
