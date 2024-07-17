import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";

interface FiltersProps {
  className?: string;
}

export const Filters = ({ className }: FiltersProps) => {
  return (
    <div className={cn("", {}, [className])}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      {/* Фильтр по цене */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            defaultValue={0}
          />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title={"Ингридиенты"}
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "соус", value: "1" },
          { text: "салат", value: "2" },
          { text: "сыр", value: "3" },
          { text: "помидоры", value: "4" },
          { text: "моцарелла", value: "5" },
          { text: "томаты", value: "6" },
          { text: "огурцы", value: "7" },
          { text: "оливковое масло", value: "8" },
          { text: "масло", value: "9" },
          { text: "перец", value: "10" },
          { text: "соус", value: "11" },
          { text: "салат", value: "12" },
          { text: "сыр", value: "13" },
          { text: "помидоры", value: "14" },
          { text: "моцарелла", value: "15" },
          { text: "томаты", value: "16" },
          { text: "огурцы", value: "17" },
          { text: "оливковое масло", value: "18" },
          { text: "масло", value: "19" },
          { text: "перец", value: "20" },
        ]}
        items={[
          { text: "соус", value: "1" },
          { text: "салат", value: "2" },
          { text: "сыр", value: "3" },
          { text: "помидоры", value: "4" },
          { text: "моцарелла", value: "5" },
          { text: "томаты", value: "6" },
          { text: "огурцы", value: "7" },
          { text: "оливковое масло", value: "8" },
          { text: "масло", value: "9" },
          { text: "перец", value: "10" },
          { text: "соус", value: "11" },
          { text: "салат", value: "12" },
          { text: "сыр", value: "13" },
          { text: "помидоры", value: "14" },
          { text: "моцарелла", value: "15" },
          { text: "томаты", value: "16" },
          { text: "огурцы", value: "17" },
          { text: "оливковое масло", value: "18" },
          { text: "масло", value: "19" },
          { text: "перец", value: "20" },
        ]}
      />
    </div>
  );
};
