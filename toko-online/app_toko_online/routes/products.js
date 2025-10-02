var express= requeire ("express");
var router = express.Router();
var products= require('../data/products.json')

router.get ("/:id", function (req,res, next){
  // untuk variabel statis
    const productId = parseInt(req.params.id); //tangkap ID dari URL
    const product = products.find(p => p.id === productId) // cari produk by id

    if (!product){ // jika tdk ditemukan
        return res.status(404).send('Produk tidak ditemukan!');
    }
    res.render ('product-detail',
        {
            title : product.name,
            product: product
        }
    )

});
module.exports =router;