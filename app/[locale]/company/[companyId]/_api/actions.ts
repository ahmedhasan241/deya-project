import { useMutation } from "@/swrstate/client/hooks";

export const useUserActions = () => {
  const { mutate: userEdit, isLoading: userEditLoading } = useMutation(
    "post",
    `/api/companies`
  );

  return {
    userEdit,
    userEditLoading,
    loading: userEditLoading,
  };
};
