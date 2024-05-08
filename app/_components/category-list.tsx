import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  // -pegar as categorias do banco de dados
  // renderizar um item pra cada categoria
  return (
    <>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </>
  );
};

export default CategoryList;
