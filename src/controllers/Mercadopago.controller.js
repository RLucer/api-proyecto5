require('dotenv').config();
const mercadopago = require('mercadopago')
const { update } = require('../models/Product.model');
// // Requerir MercadoPagoConfig y Preference
const { MercadoPagoConfig, Preference } = require('mercadopago');


// // Configura tus credenciales de acceso
const mp = new MercadoPagoConfig({
access_token: 'TEST-6835877501988408-061604-b5245bbe1c05815bfb81f93a88e845e0-56139632', // Reemplaza con tu access token
});

const payProduct = async (req, res) => {  
    
    try {
        mercadopago.configure({
            access_token: 'TEST-6835877501988408-061604-b5245bbe1c05815bfb81f93a88e845e0-56139632'//  process.env.ACCESS_TOKEN
        })

        const preference = req.body

        const responseMP = await mercadopago.Preferences.create(preference)

        console.log(responseMP)

        res.json({
            checkoutId: responseMP.body.id
        });

    } catch (error) {
        return res.json({
            message: "Error desde backend",
            detail: error.message,
        });
    }
};

module.exports = {
    payProduct
};