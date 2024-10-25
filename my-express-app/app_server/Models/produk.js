 let mongoose = require("mongoose");

//https://mongoosejs.com/docs/schematypes.html
//Create Collection Schema
let schemaPrd = new mongoose.Schema({

  nama: String,

  deskripsi: {
    type: String,
    require: true,
  },
  harga: {
    type: Number,
    require: true,
  },
    stok: {
    type: Number,
    },
  kategori_id: {
    type :Object,
  },

});

//create Model from Schema
mongoose.model("produk", schemaPrd);