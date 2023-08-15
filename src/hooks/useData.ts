import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(url, { signal: controller.signal })
      .then((response) => setData(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { data, error, loading };
};

export default useData;
