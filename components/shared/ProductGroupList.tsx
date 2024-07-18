"use client";

import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { ProductCard } from "./ProductCard";
import { useIntersection } from "react-use";
import { useEffect, useRef } from "react";
import { useCategoryStore } from "@/store/Category";

interface ProductGroupListProps {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductGroupList = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}: ProductGroupListProps) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.2,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div id={title} className={cn("", {}, [className])} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", {}, [listClassName])}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
