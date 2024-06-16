require('dotenv').config();
const mercadopago = require('mercadopago')
const { update } = require('../models/Product.model');

// // Requerir MercadoPagoConfig y Preference
const { MercadoPagoConfig, Preference } = require('mercadopago');


// // Configura tus credenciales de acceso
const mp = new MercadoPagoConfig({
access_token: 'TEST-8656165071536227-061600-b0de2d2f618d0f3ba6f1eab7744b1b49-1048615732', // Reemplaza con tu access token
});


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