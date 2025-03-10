import axios from 'axios'

// Function to sanitize text (removes newlines, tabs, and excessive spaces)
const sanitizeText = (text)=>  {
  return text
    .replace(/\n/g, ' ')  // Replace newline characters with a single space
    .replace(/\t/g, ' ')  // Replace tab characters with a single space
    .replace(/ {5,}/g, ' ') // Replace 5 or more consecutive spaces with a single space
    .trim(); // Remove leading and trailing spaces
}
/* sendLead function is used to send the lead details to the whatsapp contact */
export const sendToCreateLead = async (inputObj) => {
  console.log('inputObj', inputObj)
  const templateBody = {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": `${inputObj.phoneTo}`,
    "type": "template",
    "template": {
      "namespace": "3083e5b9_ac7c_4811_b303_00dfd8f48fb3",
      "name": "lead_event",
      "language": {
        "code": "en_US"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": sanitizeText(inputObj.name)
            },
            {
              "type": "text",
              "text": sanitizeText(inputObj.phone)
            },
            {
              "type": "text",
              "text":  sanitizeText(inputObj.address)
            }
          ]
        }
      ]
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

