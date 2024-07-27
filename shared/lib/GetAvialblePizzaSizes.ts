import { ProductItem } from "@prisma/client";
import { pizzaSizes, PizzaType } from "../constants/pizza";

export const GetAvialblePizzaSizes = (items: ProductItem[], type: PizzaType) => {
    const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
    return pizzaSizes.map((item) => ({
        name: item.name,
        value: item.value,
        disabled: !filteredPizzasByType.some(
            (pizza) => Number(pizza.size) === Number(item.value)
        ),
    }));
}