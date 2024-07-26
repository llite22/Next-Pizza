import { cn } from "@/shared/lib/utils";
import { Category } from "@prisma/client";
import { Categories } from "./Categories";
import { Container } from "./Container";
import { SortPopup } from "./SortPopup";

interface topBarProps {
  categories: Category[];
  className?: string;
}

export const TopBar = ({ categories, className }: topBarProps) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
