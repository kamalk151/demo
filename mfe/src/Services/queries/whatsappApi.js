import axios from 'axios'
import { textBody } from './messageTemplate'
/* sendLead function is used to send the lead details to the whatsapp contact */
export const sendToCreateLead = async (inputObj) => {
  console.log('inputObj', inputObj)
  const templateBody = textBody(inputObj)
  const res = await axios.post('https://graph.facebook.com/v22.0/583050101549726/messages',
    templateBody,
    { 
      headers: {'Authorization': `Bearer ${process.env.REACT_APP_WHATSAPP_TOKEN}`},
      redirect: 'follow'
    }
  )
  return res.data
}

