import { useMutation } from "@/swrstate/client/hooks";

export const useUserActions = () => {
  const { mutate: userEdit, isLoading: userEditLoading } = useMutation(
    "post",
    `/api/indiviuals`
  );

  return {
    userEdit,
    userEditLoading,
    loading: userEditLoading,
  };
};
