import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any) {
  const [data, setData] = useState<T[]>();
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          if (err instanceof CanceledError) return;
          setErrors(err.message);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, errors, isLoading };
}
