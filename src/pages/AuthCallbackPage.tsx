import React, { useEffect, useRef } from 'react'
import { useCreateUser } from '@/api/UserApi'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';

//Página para redirigir la App una vez que el usuario inició sesión
export default function AuthCallbackPage() {
  const{user}=useAuth0();
  const createUserRequest = useCreateUser();
  const navigate = useNavigate();

  const hasCreatedUser = useRef(false);

  useEffect( ()=>{
    if(user?.sub && user?.email && !hasCreatedUser.current){
      createUserRequest.mutate({auth0Id: user.sub, email: user.email});
      hasCreatedUser.current = true;
    }
    navigate('/');
  }, [createUserRequest,navigate,user]); //Indica que este UE se ejecutará únicamente una vez al cargar el componente

  return (
    <div>Loading...</div>
  )
}