import { cn } from "@/lib/utils";
import { Categories } from "./Categories";
import { Container } from "./Container";
import { SortPopup } from "./SortPopup";

interface topBarProps {
  className?: string;
}

export const TopBar = ({ className }: topBarProps) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
