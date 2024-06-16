require('dotenv').config();
const mercadopago = require('mercadopago')
const { update } = require('../models/Product.model');

// // Requerir MercadoPagoConfig y Preference
const { MercadoPagoConfig, Preference } = require('mercadopago');


// // Configura tus credenciales de acceso
const mp = new MercadoPagoConfig({
access_token: 'TEST-1899159482044925-052500-1b30f6160798927355decf7da80b604b-56139632', // Reemplaza con tu access token
});

const payProduct = async (req, res) => {  
    
    try {
        mercadopago.configure({
            access_token: 'TEST-1899159482044925-052500-1b30f6160798927355decf7da80b604b-56139632'//  process.env.ACCESS_TOKEN
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