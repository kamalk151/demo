import { useState } from 'react'
import { CustomButton, Spacer, CustomInput, CustomTextArea } from './styledComponents'
import { useToSendLead } from './helper'

const TestLeadForm = () => {
  const [inputObj, setInputObj] = useState({
    name: '',
    phone: '',
    address: '',
    emailTo: '',
    phoneTo: ''
  })

  const { mutate, isError, isSuccess} = useToSendLead();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputObj((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async () => { 
    console.log('inputObj', inputObj) 
    mutate(inputObj)
  } 
  return (
    <div className="TestLeadForm textArea" style={{ display: 'flex', justifyContent: 'space-around'}}>
      <div style={{ minWidth: '40%', padding: '0px 20px' }}>
        <h2>Test Send-Message to whatsapp contact</h2>
        <p>Kindly allow us to send the form details to your WhatsApp number by sending a message with
          the word `Hi` to this number: 8010258023
        <br />Email will send from ( test@gmail.com )</p>

        <fieldset>
          <legend>Reciever Details:-</legend>
          <CustomInput
            type='text'
            name='emailTo'
            placeholder='Enter Email-Id *'
            data-testid='emailTo'
            value={inputObj.emailTO}
            onChange={handleChange}
          />
          <Spacer />
          <CustomInput
            name='phoneTo'
            placeholder='Enter Phone Number'
            data-testid='phoneTo'
            value={inputObj.phoneTo}
            onChange={handleChange}
          />
        </fieldset>
        <Spacer />
        <fieldset>
          <legend>Sender (Leads) Details:-</legend>
          <CustomInput
            name='name'
            placeholder='Enter Name'
            data-testid='name'
            value={inputObj.name}
            onChange={handleChange}
          />
          <CustomInput
             name='phone'
             placeholder='Enter Phone Number'
             data-testid='phone'
             value={inputObj.phone}
             onChange={handleChange}
          />
          <Spacer />
          <CustomTextArea
            name='address'
            placeholder='Enter Address'
            data-testid='address'
            value={inputObj.address}
            onChange={handleChange}
          />
        </fieldset>
        <Spacer />
        <CustomButton onClick={handleSubmit}> Send </CustomButton>
      </div>

      <div className='users' style={{ minWidth: '40%' }}> 
      { isError? (
      <div>An error occurred: {isError.message}</div>
    ) : null}
    <Spacer />
    {isSuccess ? <div>Lead added!</div> : null}
      
        { /**isPending && <div>Loading...</div> **/}
        {/* isError && <div>Something went wrong...</div> */}
        {/* data && data.map((user) => (
          <div key={user.id}>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address.street}</p>
          </div>
          ))
        */}
      </div>
    </div>
  )
}

export default TestLeadForm