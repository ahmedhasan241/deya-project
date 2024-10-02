import { useMutation } from "@/swrstate/client/hooks";

export const useAuthActions = () => {
  const { mutate: login, isLoading: loginLoading } = useMutation(
    "post",
    "/api/login"
  );

  return {
    login,
    loginLoading,
  };
};
