import { useQuery } from '@tanstack/react-query';

const fetchUsers = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  return res.json();
}

const useUsers = (inputObj = {}) => {
  const info = useQuery({
    queryKey: ['users', inputObj.name],
    queryFn: () => fetchUsers(inputObj.name),
    enabled: true,
  })
 return info;
} 

export default useUsers;