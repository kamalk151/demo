import { sanitizeText } from '../utils/sanitized'
export const templateBody = (inputObj) => {

  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": `${inputObj.phoneTo}`,
    "type": "template",
    "template": {
      "namespace": "3083e5b9_ac7c_4811_b303_00dfd8f48fb3",
      "name": "new_lead", // lead_event
      "language": {
        "code": "en"
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
}

export const textBody = (inputObj) => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": `${inputObj.phoneTo}`, //req.body.phone,
    "text": {
      "body": `Hello,\nPlease find the below customer details\n***********************************\nName: ${sanitizeText(inputObj.name)} \nPhone: ${sanitizeText(inputObj.phone)} \nAddress: ${sanitizeText(inputObj.address)}`,
      "preview_url": false
    }
  }
}
