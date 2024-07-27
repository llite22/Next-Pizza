import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

export const CalcTotalPizzaPrice = (items: ProductItem[], type: PizzaType, size: PizzaSize, ingredients: Ingredient[], selectedIngredients: Set<number>) => {
    const pizzaPrice =
        items.find((item) => item.pizzaType === type && item.size === size)
            ?.price ?? 0;
    const totalIngredientsPrice = ingredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((accumulator, ingredient) => accumulator + ingredient.price, 0);


    return pizzaPrice + totalIngredientsPrice;
}