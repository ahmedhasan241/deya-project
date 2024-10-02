import { useMutation } from "@/swrstate/client/hooks";

export const useIndividualsActions = () => {
  const { mutate: deleteIndividual, isLoading: deleteIndividualLoading } =
    useMutation("delete", `/api/indiviuals`);

  return {
    deleteIndividual,
    deleteIndividualLoading,
  };
};
export const useIndividualsStatus = () => {
  const { mutate: changeStatus, isLoading: changeStatusLoading } =  useMutation("post", `/api/indiviuals/9/status`);
  return {
    changeStatus,
    changeStatusLoading,
  };
};
