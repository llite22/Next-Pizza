import { mapPizzaType, PizzaType } from './../constants/pizza';
import { PizzaSize } from "../constants/pizza";
import { CalcTotalPizzaPrice } from "./CalcTotalPizzaPrice";
import { Ingredient, ProductItem } from '@prisma/client';

export const GetPizzaDetails = (
    size: PizzaSize,
    type: PizzaType,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
) => {
    const totalPrice = CalcTotalPizzaPrice(
        items,
        type,
        size,
        ingredients,
        selectedIngredients
    );
    const textDetaills = `${size} см, ${mapPizzaType[type]} пицца`;

    return { totalPrice, textDetaills }
}