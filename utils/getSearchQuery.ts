import { useSearchParams } from "next/navigation";
import { useHandleRouter } from "./useHandleRouter";
import { usePathname } from "@/navigation";

export const useGetSearchQuery = () => {
  const search = useSearchParams();
  const { handleRouter } = useHandleRouter();
  const pathname = usePathname();
  return {
    getSearchQuery: (key) => search.get(key),
    setSearchQuery: (key) => handleRouter(`${pathname}?${key}`),
    resetSearchQuery: (initialSearch?) => {
      initialSearch
        ? handleRouter(`${pathname}?${initialSearch}`)
        : handleRouter(`${pathname}`);
    },
  };
};
