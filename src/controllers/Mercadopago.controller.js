require('dotenv').config();
const cors = require('cors');

const mercadopago = require('mercadopago')
const { update } = require('../models/Product.model');
// // Requerir MercadoPagoConfig y Preference
const { MercadoPagoConfig, Preference } = require('mercadopago');

const client = new MercadoPagoConfig({
    accessToken:process.env.accessToken,
})
app.use(cors());



const payProduct = async (req, res) => {  

    try {
        const body ={
            items:[{
                title: req.body.title,
                quantity: Number(req.body.quantity),
                unit_price: Number(req.body.price),
                currency_id:"CLP",
            },
        ],
        back_urls:{
            success: "www.girona.cl",
            failure: "www.ipchile.cl",
            pending: "www.myportal.cl",
        },
        auto_return: "approved",

        };
        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        });

    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    payProduct
};