import { useRouter } from "next/navigation";
import { useEffect } from "react";
import qs from "qs";
import { Filters } from "./useFilters";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();

    const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes),
        ingredients: Array.from(filters.selectedIngredients),
    };

    useEffect(() => {
        const query = qs.stringify(params, { arrayFormat: "comma" });
        router.push(`?${query}`, { scroll: false });
    }, [filters, router]);
}