import { twMerge } from "tailwind-merge";
import { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../../../shared/components/common/container/container";
import { Section } from "../../../shared/components/common/section/section";

import { RootState } from "../../../redux/store";
import { changeQuantity } from "../../../redux/cart-slice/cart-slice";

export const CartInfo = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const quantityCart = useSelector(
    (state: RootState) => state.cart.cartQuantity
  );

  const dispatch = useDispatch();

  const addOne: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { id } = e.target as HTMLButtonElement;

    const newQuantityCart = quantityCart.map((item) => {
      if (item.id !== id) return item;

      return {
        ...item,
        quantity: item.quantity + 1,
      };
    });

    localStorage.setItem("quantity", JSON.stringify(newQuantityCart));

    dispatch(changeQuantity({ type: "plus", id }));
  };

  const minusOne: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { id } = e.target as HTMLButtonElement;

    dispatch(changeQuantity({ type: "minus", id }));

    const newQuantityCart = quantityCart
      .map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      })
      .filter((item) => item?.quantity > 0);

    if (!newQuantityCart.map((item) => item.id).includes(id)) {
      localStorage.setItem(
        "cart",
        JSON.stringify(cart.filter((item) => item._id !== id))
      );
    }

    localStorage.setItem("quantity", JSON.stringify(newQuantityCart));
  };

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
          Cart
        </h2>

        <ul className="flex flex-col gap-[20px]">
          {cart.map((item) => (
            <li
              key={item._id}
              className="bg-light-04 px-[16px] py-[20px] flex justify-between"
            >
              <div>
                <h3>{item.title}</h3>
                <span>
                  {item.price} {item.currency}
                </span>
              </div>

              <div className="flex gap-[8px] items-center">
                <button
                  className="w-[48px] h-[48px] text-white font-bold bg-light-01 flex justify-center items-center hover:bg-white hover:text-dark-01 ease-linear transition-all"
                  onClick={minusOne}
                  id={item._id}
                >
                  -
                </button>

                <span className="text-default-text font-bold text-center">
                  {quantityCart.map((quantity) => {
                    if (quantity.id === item._id) {
                      return quantity.quantity;
                    }

                    return null;
                  })}
                </span>

                <button
                  className="w-[48px] h-[48px] text-white font-bold bg-light-01 flex justify-center items-center hover:bg-white hover:text-dark-01 ease-linear transition-all"
                  onClick={addOne}
                  id={item._id}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
