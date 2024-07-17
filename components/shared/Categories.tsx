import { cn } from "@/lib/utils";
import Link from "next/link";

interface categoriesProps {
  className?: string;
}

const cats = ["Бургеры", "Сендвичи", "Салаты", "Десерты", "Напитки", "Закуски"];
const activeIndex = 0;

export const Categories = ({ className }: categoriesProps) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", {}, [
        className,
      ])}
    >
      {cats.map((cat, index) => (
        <Link
          href="/"
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{cat}</button>
        </Link>
      ))}
    </div>
  );
};
