import { useEffect, useState } from "react";
import { Variant } from "../components/shared/GroupVariants";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { GetAvialblePizzaSizes } from "./GetAvialblePizzaSizes";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
    size: PizzaSize;
    type: PizzaType;
    setType: (type: PizzaType) => void;
    setSize: (size: PizzaSize) => void;
    selectedIngredients: Set<number>;
    addIngredient: (ingredientId: number) => void;
    availableSizes: Variant[]
}

export const UsePizzaOptions = (items: ProductItem[]): ReturnProps => {
    const [size, setSize] = useState<PizzaSize>(20);
    const [type, setType] = useState<PizzaType>(1);
    const [selectedIngredients, { toggle: addIngredient }] = useSet(
        new Set<number>([])
    );
    const availableSizes = GetAvialblePizzaSizes(items, type);

    useEffect(() => {
        const isAvailableSize = availableSizes?.find(
            (item) => Number(item.value) === size && !item.disabled
        );
        const availableSize = availableSizes?.find((item) => !item.disabled);

        if (!isAvailableSize && availableSize) {
            setSize(Number(availableSize.value) as PizzaSize);
        }
    }, [type, size]);

    return {
        size,
        type,
        setType,
        setSize,
        selectedIngredients,
        addIngredient,
        availableSizes
    }
}