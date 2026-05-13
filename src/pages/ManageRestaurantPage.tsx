import { useCreateRestaurante, useGetRestaurante, useUpdateRestaurante } from "@/api/RestauranteApi";
import ManageRestaurantForm from "@/forms/manage-restarurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {
    const createRestaurantRequest = useCreateRestaurante();
    const { data:restaurante, isLoading } = useGetRestaurante();
    const updateRestauranteRequest =  useUpdateRestaurante();

    const isEdditing = !!restaurante;
    return (
        <ManageRestaurantForm
            restaurante={restaurante}
            onSave={isEdditing? updateRestauranteRequest.mutate : createRestaurantRequest.mutate}
            isLoading={isLoading}
        />
    )
}