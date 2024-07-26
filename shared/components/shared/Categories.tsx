"use client";

import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/Category";
import { Category } from "@prisma/client";
import Link from "next/link";

interface categoriesProps {
  items: Category[];
  className?: string;
}

export const Categories = ({ items, className }: categoriesProps) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);


  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", {}, [
        className,
      ])}
    >
      {items.map(({ id, name }, index) => (
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
