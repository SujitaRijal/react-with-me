import React, { useMemo } from "react";
import content from "../../data/content.json";
import FilterIcon from "../../components/common/FilterIcon";
import Categories from "../../components/Filters/Categories";
import PriceFilter from "../../components/Filters/PriceFilter";
import ColorsFilter from "../../components/Filters/ColorsFilter";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductCard from "./ProductCard";

const categories = content.categories;

const ProductListPage = ({ categoryType }) => {
  const categoryContent = useMemo(() => {
    return categories.find((category) => category.code === categoryType);
  }, [categoryType]);

  const productListItems = useMemo(() => {
    return content.products.filter(
      (product) => product.category_id === categoryContent.id
    );
  }, [categoryContent]);

  return (
    <div className="left-0 pt-24 text-left ">
      <div className="flex items-start gap-8 py-5">
        <div className="p-1 py-2 w-[30%] h-full border rounded-lg ">
          <div className="flex items-center justify-between">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>
          <div>
            <p className="text-[16px] text-black text-left mt-5">CATEGORIES</p>
            <Categories types={categoryContent.types}></Categories>
            <hr></hr>
          </div>
          <div>
            <PriceFilter />
            <hr></hr>

            <ColorsFilter colors={categoryContent.meta_data.colors} />
            <hr></hr>
            <SizeFilter sizes={categoryContent.meta_data.sizes} />
          </div>
        </div>

        <div className="w-full p-1">
          <p className="text-lg text-black">
            {categoryContent.description || "Category not found"}
          </p>
          <div className="grid grid-cols-4 gap-4 px-1 pt-4">
            {productListItems.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
