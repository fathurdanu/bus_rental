require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ItemRoutes = require('./routes/itemRoutes');
app.use('/items', ItemRoutes);
const UserRoutes = require('./routes/userRoutes');
app.use('/users', UserRoutes);
const BrandRoutes = require('./routes/brandRoutes');
app.use('/brands', BrandRoutes);

app.listen(port,()=>{
    console.log(`port : ${port}`);
});