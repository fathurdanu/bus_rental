require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) =>{res.json({message: "welcome to bus_rental API"})});
const ItemRoutes = require('./routes/itemRoutes');
app.use('/items', ItemRoutes);
const UserRoutes = require('./routes/userRoutes');
app.use('/users', UserRoutes);
const BrandRoutes = require('./routes/brandRoutes');
app.use('/brands', BrandRoutes);

app.listen(port,()=>{
    console.log(`port : ${port}`);
});