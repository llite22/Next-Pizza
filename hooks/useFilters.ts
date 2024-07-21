import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps {
    pizzaTypes: string;
    sizes: string;
    ingredients: string;
}

export interface Filters {
    selectedIngredients: Set<string>;
    prices: PriceProps;
    pizzaTypes: Set<string>;
    sizes: Set<string>;
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setPizzaTypes: (value: string) => void;
    setSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<
        keyof QueryFilters,
        string
    >;
    // фильтр ингредиентов
    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get("ingredients")?.split(",")));
    // фильтр цены
    const [prices, setPrices] = useState<PriceProps>({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined,
    });
    // фильтр размеров
    const [sizes, { toggle: toggleSizes }] = useSet(
        new Set<string>(
            searchParams.get("sizes") ? searchParams.get("sizes")?.split(",") : []
        )
    );
    // фильтр типа  пиццы
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
        new Set<string>(
            searchParams.get("pizzaTypes")
                ? searchParams.get("pizzaTypes")?.split(",")
                : []
        )
    );

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices(prev => ({ ...prev, [name]: value }));
    };


    return { selectedIngredients, prices, sizes, pizzaTypes, setPrices: updatePrice, setPizzaTypes: togglePizzaTypes, setSizes: toggleSizes, setSelectedIngredients: toggleIngredients };
}