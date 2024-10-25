 const index = (req, res) => {
 	res.render('index', { title: 'Express' }); 
}; 


// Buat Controller untuk halaman kontak
const kontak = (req,res) => {
    res.render('kontak',{title:'Express'})
};

module.exports = { index , kontak}; 
