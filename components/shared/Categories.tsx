"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/Category";
import Link from "next/link";

interface categoriesProps {
  className?: string;
}

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Сендвичи" },
  { id: 3, name: "Салаты" },
  { id: 4, name: "Десерты" },
  { id: 5, name: "Напитки" },
  { id: 6, name: "Закуски" },
];

export const Categories = ({ className }: categoriesProps) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  console.log(categoryActiveId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", {}, [
        className,
      ])}
    >
      {cats.map(({ id, name }, index) => (
        <Link
          href={`/#${name}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{name}</button>
        </Link>
      ))}
    </div>
  );
};
