import { useMutation } from '@tanstack/react-query'
import axiosInstance from './../axiosInstance'
import { sendToCreateLead } from './../Services/whatsappApi'

// const fetchUsers = async (id) => {
//   // const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
//   // return res.json();
// }

// export const useToGetUsers = (inputObj = {}) => {
//   const info = useQuery({
//     queryKey: ['users', inputObj.name],
//     queryFn: () => fetchUsers(inputObj.name),
//     enabled: true,
//   })
//  return info;
// }

// function to create a lead and send mail to user
// const createLead = async (inputObj) => {
//   const res = await axiosInstance.post('/createLead', inputObj)
//   return res.data
// }

const createLead = async (inputObj) => {
  // for creating mail
  await sendToCreateLead(inputObj)
  // for sending mail
  await axiosInstance.post('/sendMail', inputObj)
}

export const useToSendLead = () => {
  return useMutation({
    mutationFn: (inputObj) => createLead(inputObj),
  })
}
