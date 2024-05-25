require('dotenv').config();
const mercadopago = require('mercadopago')
const { update } = require('../models/Product.model');

// // Requerir MercadoPagoConfig y Preference
// const { MercadoPagoConfig, Preference } = require('mercadopago');


// // Configura tus credenciales de acceso
// const mp = new MercadoPagoConfig({
// access_token: '', // Reemplaza con tu access token
// });


const payProduct = async (req, res) => {  
    
    try {
        mercadopago.configure({
            access_token: process.env.ACCESS_TOKEN
        })

        const preference = req.body

        const responseMP = await mercadopago.preferences.create(preference)

        console.log(responseMP)

        res.json({
            checkoutId: responseMP.body.id
        });

    } catch (error) {
        return res.json({
            message: "Error",
            detail: error.message,
        });
    }
};

module.exports = {
    payProduct
};