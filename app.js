const twilio = require('twilio');
const express = require('express')
const dotenv = require('dotenv')
const app = express()
// Your Twilio Account SID and Auth Token

dotenv.config()

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;


// Function to send WhatsApp messages
async function sendWhatsAppMessage(to, message) {
  try {
    const client = new twilio.Twilio(accountSid, authToken)
    return client.messages
    .create({body:"hello",from:"+14782493980",to:"+201006106484"})
    .then(message  => {
        console.log(message, "message sent")
    })
  } catch (error) {
    console.error(`Error sending message to ${to}:`, error);
  }
}
sendWhatsAppMessage()

app.listen(3000, () => {
    console.log("at port 3000")
})
