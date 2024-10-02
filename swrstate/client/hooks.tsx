"use client";
import useSWR from "swr";
import instance from ".";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAdminStore } from "@/store/adminStore";
import { ResponseType } from "axios";
import { useRouter } from "next/navigation";

export const useQuery = (
  url,
  params = {},
  skip = false,
  onSuccess = undefined,
  noTimeOut = false
) => {
  const { push } = useRouter();
  const { AppLogout, isLogin } = useAdminStore();

  const optionSwr = onSuccess
    ? {
        revalidateOnFocus: false,
        enabled: false,
        onSuccess,
      }
    : {
        revalidateOnFocus: false,
        enabled: false,
      };
  // .get(url, { params, timeout: !noTimeOut ? 100000 : undefined })
  const { data, error, mutate, isLoading } = useSWR(
    skip || !isLogin ? null : [url, params],
    () =>
      instance
        .get(url, { params })
        .then((res) => res.data)
        .catch((reason) => {
          toast.error(`Error: ${reason.message}`);
          if (reason.response?.status === 401) {
            push("/login");
            AppLogout();
          }
          console.log(
            "🚀 ~ useQuery ~ reason:",
            reason.response?.data?.message
          );
        }),
    optionSwr
  );

  const refetch = async () => {
    try {
      await mutate();
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return {
    data,
    isLoading,
    isError: error,
    refetch,
  };
};

interface UseMutationResult {
  mutate: (
    params: any,
    id?: string,
    responseType?: ResponseType
  ) => Promise<any>;
  isLoading: boolean;
}

export const useMutation = (
  method: "post" | "put" | "patch" | "delete" | "get",
  url: string
): UseMutationResult => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const { AppLogout, token } = useAdminStore();
  console.log("method" + method);

  const mutation = async (
    params: any,
    id?: string,
    responseType: ResponseType = "json"
  ): Promise<any> => {
    try {
      setIsLoading(true);

      const response = await instance[method](
        id ? `${url}/${id}` : url,
        params,
        { responseType }
      );

      console.log("response-new", response);

      if (response?.data?.code < 300 || !response?.data?.code) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }

      // if (response.data?.original?.message?.length) {
      //   toast.error(
      //     response.data?.original.message
      //       ?.map((item) => item?.message)
      //       ?.join(", ")
      //   );
      // }

      return response;
    } catch (error: any) {
      console.log("error-new", error);

      if (error?.response?.status === 401) {
        push("/login");
        AppLogout();
      }
      if (error?.response?.data?.errors) {
        Object.keys(error?.response?.data?.errors).map((key) => {
          toast.error(error?.response?.data?.errors[key][0]);
        });
        toast.error(error?.response?.data?.message);
      } else {
        toast.error(`Error: ${error?.response?.data?.message}`);
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate: mutation, isLoading };
};
