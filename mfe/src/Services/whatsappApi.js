import axios from 'axios'

/* sendLead function is used to send the lead details to the whatsapp contact */
export const sendToCreateLead = async (inputObj) => {
  const templateBody = {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": `${inputObj.phoneTo}`, //req.body.phone,
    "text": {
      "body": `Hello,\nPlease find the below customer details\n***********************************\nName: ${inputObj.name} \nPhone: ${inputObj.phone} \nAddress: ${inputObj.address}`,
      "preview_url": false
    }
  }
  const res = await axios.post('https://graph.facebook.com/v22.0/583050101549726/messages',
    templateBody,
    { 
      headers: {'Authorization': `Bearer ${process.env.REACT_APP_WHATSAPP_TOKEN}`},
      redirect: 'follow'
    }
  )
  return res.data
}

