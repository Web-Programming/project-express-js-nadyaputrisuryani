const mongoose = require ('mongoose');

//buat skema product
const ProductSchema = new mongoose.Schema({
    //tidk perlu buat properti id karena dibuat otomatis
    // dengan nama id

    name: {
        type:"String",
        required:[true,"Nama produk harus diisi"],
        trim: true,

    },
    price: {
        type:Number,
        required :[true,"Harga produk harus diisi"],
        min:[ 1000, "harga produk minimal 1000"] 
    },
    description: {
        type:String,
        required :false
    },
    stock: {
        type:String,
        default:0,
    },
    created: {
        type:Date,
        default:Date.now,
    },

 

});

const product= mongoose.model('product',ProductSchema);

module.exports = product;