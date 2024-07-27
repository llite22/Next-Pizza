"use client";
import { cn } from "@/shared/lib/utils";
import { Ingredient, ProductItem } from "@prisma/client";
import { Button } from "../ui";
import { PizzaImage } from "./ProductImage";
import { Title } from "./Title";
import { GroupVariants } from "./GroupVariants";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { IngredientItem } from "./IngredientItem";
import { GetPizzaDetails, UsePizzaOptions } from "@/shared/lib";

interface ChoosePizzaFormProps {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  name,
  ingredients,
  items,
  loading,
  onClickAddCart,
  className,
}: ChoosePizzaFormProps) => {
  const {
    size,
    type,
    setType,
    setSize,
    selectedIngredients,
    availableSizes,
    addIngredient,
  } = UsePizzaOptions(items);
  const { totalPrice, textDetaills } = GetPizzaDetails(
    size,
    type,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    onClickAddCart?.();
  };

  return (
    <div className={cn("flex flex-1", {}, [className])}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>
        <div className="flex flex-col gap-4">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={handleClickAdd}
          loading={loading}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
