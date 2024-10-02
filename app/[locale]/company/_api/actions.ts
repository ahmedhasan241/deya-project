import { useMutation } from "@/swrstate/client/hooks";

export const useIndividualsActions = () => {
  const { mutate: deleteIndividual, isLoading: deleteIndividualLoading } =
    useMutation("delete", `/api/companies`);

  return {
    deleteIndividual,
    deleteIndividualLoading,
  };
};
export const useIndividualsStatus = () => {
  const { mutate: changeStatus, isLoading: changeStatusLoading } =  useMutation("post", `/api/companies/9/status`);
  return {
    changeStatus,
    changeStatusLoading,
  };
};
