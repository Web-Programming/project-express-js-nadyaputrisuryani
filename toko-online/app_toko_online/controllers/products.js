var Product = require("../models/products");
var products = require('../../data/products.json');

const index = async (req, res) => {
  try {
    const prod = await Product.find({}); // mengambil seluruh data dari MongoDB
    res.render('index', {
      title: 'Toko Online Sederhana -> ini dari MongoDB',
      products: prod
    });
  } catch (err) {
    res.status(500).send("Gagal memuat produk");
  }
};

const detail = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send("Produk tidak ditemukan");
    }
    res.render('detail', {
      title: 'Detail Produk',
      product
    });
  } catch (err) {
    res.status(500).send("Gagal memuat detail produk");
  }
};
//CRUD CONTROLLER
const all = async (req, res) => {
 try {
  }catch(err){
    res.status(500).json({
      status: false,
      message: "Gagal memuat produk"
    });
  }
}
//create/insert Data
const create = async (req, res) => {
  try {
    //1. ambil data dari request body
     const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock || 0
 });
    //2. simpan data ke mongo db melalui model Product
    const product =  await newProduct.save();

    //3. kirim respon sukses ke user
     res.status(200).json({
            status: true,
            message: "Produk berhasil disimpan",
            data: product
        })
  }catch(err){
    res.status(500).json({
      status: false,
      message: "Internal server error"
    });
  }
}


//read one /detail product
const detailproduk = async(req, res) => {
  
};


//update data
const update = async(req, res) => {
};

//delete/remove/destroy data
const remove = async(req, res) => {
};

module.exports = {
  index,
  detail,
  all,
  create,
  detailproduk,
  update,
  remove
};


