// Initiate WhatsApp chat with a phone number
const whatsApp = async (req, res) => {

  if(req.body.phoneTo) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.WHATSAPP_TOKEN}`);
    
    const templateBody = JSON.stringify({
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": `${req.body.phoneTo}`, //req.body.phone,
      "text": {
        "body": `Hello,\nPlease find the below customer details\n***********************************\nName: ${req.body.name} \nPhone: ${req.body.phone} \nAddress: ${req.body.address}`,
        "preview_url": false
      }
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: templateBody,
      redirect: "follow"
    };
    
    fetch("https://graph.facebook.com/v22.0/583050101549726/messages", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    
  }
}
module.exports = whatsApp