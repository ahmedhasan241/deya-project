import { useQuery } from "@/swrstate/client/hooks";
import { User } from "./types";

export const useGetIndividuals = (): { data: User[]; loading: boolean; refetch :any} => {
  const { data , isLoading , refetch } = useQuery("/api/companies");

  return {
    data: data?.data?.list,
    loading: isLoading,
    refetch: refetch
  };
};


export const useGetStatistics = () => {
  const { data, isLoading , refetch } = useQuery("/api/companies/statistics");

  return {
    data: data,
    loading: isLoading,
    refetch: refetch
  };
};
export const useGetSingleIndividual = ({ individualId, params = {} })  => {
  
  const { data, isLoading, refetch } = useQuery(
    `/api/companies/${individualId}`,
    params
  );
  return {
    data: data,
    loading: isLoading,
    refetch: refetch
  };
};