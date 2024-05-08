import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div>
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />
    </div>
  );
};

export default CategoryItem;
