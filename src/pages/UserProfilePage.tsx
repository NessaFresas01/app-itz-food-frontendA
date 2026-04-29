import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
//import { useUpdateUser, useGetUser } from "@/api/UserApi";
import { useUpdateUser, useGetUser } from "../api/UserApi";
import { toast } from "sonner";
import LoadingButton from "@/components/LoadingButton";

export default function UserProfilePage() {
  const { data: user, isLoading, isError } = useGetUser();
  const updateUserRequest = useUpdateUser();

  if (isLoading) {
    return (
     <LoadingButton /> 
    )
  }

  if (isError ||!user) {
    toast.error("Error al cargar los datos del usuarios")
    return(
      <span>No se pudieron obtener los datos los datos del usuario</span>
    )
  }

  return (
    <UserProfileForm
      onSave={updateUserRequest.mutate}
      getUser={user}
    />
  );
}