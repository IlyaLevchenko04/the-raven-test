import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

import { RootState } from "../../../redux/store";
import { fetchProducts } from "../../../redux/products-slice/products-operations";

import { Section } from "../../../shared/components/common/section/section";
import { Container } from "../../../shared/components/common/container/container";
import { Item } from "../../../shared/types/product";

import { ProductCard } from "./components/product-card";

const LIMIT = "6";

export const ProductsList = () => {
  const cart = useSelector((state: RootState) => state.products.items);
  const currency = useSelector((state: RootState) => state.products.currency);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length > 0) return;

    dispatch(
      fetchProducts({
        limit: LIMIT,
        page: "1",
        currency,
        filter: "DESC_PRICE",
      }) as any
    );
  }, [dispatch, currency, cart.length]);

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

        {isLoading ? (
          <div className="flex justify-center items-center h-fit">
            <div className="w-16 h-16 border-4 border-brand border-dashed rounded-full animate-spin" />
          </div>
        ) : (
          <ul className="grid gap-[16px] tablet-vertical:grid-cols-2">
            {cart.map((item: Item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
};
