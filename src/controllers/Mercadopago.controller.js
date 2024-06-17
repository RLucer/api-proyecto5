//require('dotenv').config();
import cors from 'cors';


const mercadopago = require('mercadopago')
const { update } = require('../models/Product.model');
// // Requerir MercadoPagoConfig y Preference
const { MercadoPagoConfig, Preference } = require('mercadopago');


// // Configura tus credenciales de acceso
// const mp = new MercadoPagoConfig({
// access_token: 'TEST-6835877501988408-061604-b5245bbe1c05815bfb81f93a88e845e0-56139632', // Reemplaza con tu access token
// });

const client = new MercadoPagoConfig({
    accessToken:'TEST-6835877501988408-061604-b5245bbe1c05815bfb81f93a88e845e0-56139632',
})




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
            success: "www.diestro.cl",
            failure: "www.ipchile.cl",
            pending: "www.myportal.cl",
        },
        auto_return: "approved",

        };
        const preference = new Preference(cliente);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        });

    } catch (error) {
        console.log(error);
    }
    
    // try {
    //     mercadopago.configure({
    //         access_token: 'TEST-6835877501988408-061604-b5245bbe1c05815bfb81f93a88e845e0-56139632'//  process.env.ACCESS_TOKEN
    //     })

    //     const preference = req.body

    //     const responseMP = await mercadopago.Preferences.create(preference)

    //     console.log(responseMP)

    //     res.json({
    //         checkoutId: responseMP.body.id
    //     });

    // } catch (error) {
    //     return res.json({
    //         message: "Error desde backend",
    //         detail: error.message,
    //     });
    // }
};

module.exports = {
    payProduct
};