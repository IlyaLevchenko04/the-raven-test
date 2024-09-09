import { twMerge } from "tailwind-merge";
import { DEFAULT_PHOTOS } from "../../../../constants/default-products-photos";
import { Item } from "../../../../shared/types/product";
import { useProductsListController } from "../products-list.controller";

export const ProductCard: React.FC<{ item: Item }> = ({ item }) => {
  const { onBuyClick } = useProductsListController(item);

  return (
    <li
      key={item._id}
      className="flex flex-col gap-[16px] bg-light-04 p-[16px]"
    >
      <img
        aria-hidden
        className=" tablet-vertical:h-[600px] w-full"
        src={
          item.mainPhoto === DEFAULT_PHOTOS.depracetedPhoto
            ? DEFAULT_PHOTOS.default
            : item.mainPhoto
        }
        alt=""
      />

      <div className="flex flex-col gap-[8px]">
        <h3
          className={twMerge(
            "font-semi-bold",
            "text-[2.4rem] leading-[1.4]",
            "tablet:text-[3rem]"
          )}
        >
          {item.title}
        </h3>

        <p>{item.description}</p>

        <span className="font-bold mx-auto">
          {item.price} {item.currency}
        </span>
      </div>

      <button
        className="bg-brand hover:bg-orange-02 w-full tablet-vertical:w-[184px] text-white py-[12px] px-[8px] mx-auto ease-linear transition-all"
        id={item._id}
        onClick={onBuyClick}
      >
        Buy
      </button>
    </li>
  );
};
