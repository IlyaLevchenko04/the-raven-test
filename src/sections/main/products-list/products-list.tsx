import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { fetchProducts } from "../../../redux/products-slice/products-operations";

import { Section } from "../../../shared/components/common/section/section";
import { Container } from "../../../shared/components/common/container/container";
import { Item } from "../../../shared/types/product";
import { DEFAULT_PHOTOS } from "../../../constants/default-products-photos";
import { twMerge } from "tailwind-merge";
import { useProductsListController } from "./products-list.controller";

const LIMIT = "6";

export const ProductsList = () => {
  const { onBuyClick } = useProductsListController();

  const count = useSelector((state: RootState) => state.products.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchProducts({
        limit: LIMIT,
        page: "1",
        currency: "UAH",
        filter: "DESC_PRICE",
      }) as any
    );
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <h2
          className={twMerge(
            "mb-[20px] font-bold",
            "text-[3.4rem] leading-[1.2]",
            "tablet:text-[4.6rem]"
          )}
        >
          Tranding
        </h2>

        <ul className="grid gap-[16px] tablet-vertical:grid-cols-2">
          {count.map((item: Item) => (
            <li
              key={item._id}
              className="flex flex-col gap-[16px] bg-light-04 p-[16px]"
            >
              <img
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
              </div>

              <button
                className="bg-brand hover:bg-orange-02 w-full tablet-vertical:w-[184px] text-white py-[12px] px-[8px] mx-auto ease-linear transition-all"
                id={item._id}
                onClick={onBuyClick}
              >
                Buy
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
