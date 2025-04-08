import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface CacheEntry<T> {
  timestamp: number;
  data: T[];
}

const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours

function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps: any[] = [], shouldCache: boolean = false) {
  const [data, setData] = useState<T[]>();
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      if (shouldCache) {
        const cached = localStorage.getItem(endpoint);
        if (cached) {
          const parsed: CacheEntry<T> = JSON.parse(cached);
          const isExpired = Date.now() - parsed.timestamp > CACHE_TTL;

          if (!isExpired) {
            setData(parsed.data);
            setIsLoading(false);
            return;
          } else {
            localStorage.removeItem(endpoint);
          }
        }
      }

      setIsLoading(true);
      try {
        const res = await apiClient.get(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        });

        setData(res.data.results);
        if (shouldCache) {
          const cacheEntry: CacheEntry<T> = {
            timestamp: Date.now(),
            data: res.data.results,
          };
          localStorage.setItem(endpoint, JSON.stringify(cacheEntry));
        }
      } catch (err: any) {
        if (err instanceof CanceledError) return;
        setErrors([err.message]);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();

    return () => controller.abort();
  }, deps);

  return { data, errors, isLoading };
}

export default useData;
