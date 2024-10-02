import { useQuery } from "@/swrstate/client/hooks";
import { User } from "./types";

export const useGetIndividuals = (): { data: User[]; loading: boolean; refetch :any} => {
  const { data , isLoading , refetch } = useQuery("/api/indiviuals");

  return {
    data: data?.data?.list,
    loading: isLoading,
    refetch: refetch
  };
};


export const useGetStatistics = () => {
  const { data, isLoading , refetch } = useQuery("/api/indiviuals/statistics");

  return {
    data: data,
    loading: isLoading,
    refetch: refetch
  };
};
export const useGetSingleIndividual = ({ individualId, params = {} })  => {
  
  const { data, isLoading, refetch } = useQuery(
    `/api/indiviuals/${individualId}`,
    params
  );
  return {
    data: data,
    loading: isLoading,
    refetch: refetch
  };
};