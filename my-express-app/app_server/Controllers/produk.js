const mongoose = require("mongoose");
const produk = mongoose.model("produk");

//untuk menghandle request get all mahasiswa
const index = (req, res, next) => {
    produk.find({}, { __v: 0 })
      .then((Prd) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: Prd
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const Prd = new produk({
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      harga : req.body.harga,
      stok: req.body.stok,
      kategori_id: true
    });
  
    Prd
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

//untuk menghandle request update mahasiswa
const update = (req, res, next) => {
     produk
       .findByIdAndUpdate(req.params.id,{
             nama: req.body.nama,
        deskripsi: req.body.deskripsi,
         harga : req.body.harga,
        stok: req.body.stok,
        kategori_id: true
      })
        .then((result) => {
            produk
            .findById(req.params.id)
            .then((Prd) =>{
                const responseMessage = {
                    code: 200,
                    success: true,
                    message: "Successfull",
                    data: Prd
                };
                res.status(200).json(responseMessage);
            });        
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });
};

//untuk menghandle request show detail
const show = (req, res, next) => {
    produk
        .findById(req.params.id)
        .then((Prd) =>{
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: todo
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
            };
            res.status(404).json(responseMessage);
        });
};


//untuk menghandle request delete
const destroy = (req, res, next) => {
    produk
        .findByIdAndDelete(req.params.id)
        .then((Prd) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
            };
            res.status(200).json(responseMessage);
        });
        /*.catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });*/
};

module.exports = {
    index, insert, update, show, destroy
}