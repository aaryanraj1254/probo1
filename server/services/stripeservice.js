const stripe=require('stripe');
const stripe=Stripe(process.env.STRIPE_SECRET_KEY);

async function createpaymentIntent(amount){
    try{
        const paymentIntent=await stripe.paymentIntents.create({
            amount,
            currency:'usd',
        });

        return paymentIntent;  
    }catch(error){
        throw new Error('Payment intent creation failed');
    }
}
module.exports={createPaymentIntent};
