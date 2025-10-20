exports.adminOnly = (req, res, next) => {
    const isAdmin = req.body.isAdmin; // Contoh: dikirim dari body request

    if (isAdmin === true) {
        console.log('Middleware: Akses Admin Diberikan.');
        // lanjut ke route berikutnya
        next();
    } else {
        // 403 Forbidden
        return res.status(403).json({
            success: false,
            message: 'Akses Ditolak. Endpoint ini membutuhkan hak Admin.'
        });
    }
};