import { useQuery, useMutation } from '@tanstack/react-query';

const fetchUsers = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  return res.json();
}

const createLead = async (inputObj) => {

  const res = await fetch('http://localhost:8080/createLead', {
    method: 'POST',
    body: JSON.stringify(inputObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export const useToGetUsers = (inputObj = {}) => {
  const info = useQuery({
    queryKey: ['users', inputObj.name],
    queryFn: () => fetchUsers(inputObj.name),
    enabled: true,
  })
 return info;
}

export const useToSendLead = () => {
  return useMutation({
    mutationFn: (inputObj) => createLead(inputObj),
  })
}
