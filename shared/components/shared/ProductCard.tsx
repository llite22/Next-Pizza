import { cn } from "@/shared/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui";
import { Title } from "./Title";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className,
}: ProductCardProps) => {
  return (
    <div className={cn("", {}, [className])}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img width={215} height={215} src={imageUrl} alt={name} />
        </div>
        <Title text={name} size={"sm"} className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Цыпленок,моцарелла, сыр чеддер и пармезан, выпеченное куриное филе,
          помидоры
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
