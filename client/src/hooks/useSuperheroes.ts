import { useCallback, useEffect, useState } from "react";
import { getSuperheroes } from "../services/superheroService";
import { ISuperhero } from "../interfaces/ISuperhero";

export const useSuperheroes = (limit: number) => {
  const [superheroes, setSuperheroes] = useState<ISuperhero[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const {
        page: currentPage,
        result,
        total,
      } = await getSuperheroes(page, limit);
      setSuperheroes(result);
      setTotal(total);
      setPage(Number(currentPage));
    } catch (error) {
      console.error("Failed to fetch superheroes:", error);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    superheroes,
    page,
    setPage,
    total,
    refetch: fetchData,
  };
};
