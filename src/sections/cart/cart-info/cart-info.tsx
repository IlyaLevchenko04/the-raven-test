import { twMerge } from "tailwind-merge";
import { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../../../shared/components/common/container/container";
import { Section } from "../../../shared/components/common/section/section";

import { RootState } from "../../../redux/store";
import { changeQuantity } from "../../../redux/cart-slice/cart-slice";
import { Form } from "./components/form/form";

export const CartInfo = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const currency = useSelector((state: RootState) => state.products.currency);

  const dispatch = useDispatch();

  const addOne: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { id } = e.target as HTMLButtonElement;

    const newQuantityCart = cart.map((item) => {
      if (item._id !== id) return item;

      return {
        ...item,
        quantity: item.quantity + 1,
      };
    });

    localStorage.setItem("cart", JSON.stringify(newQuantityCart));

    dispatch(changeQuantity({ type: "plus", id }));
  };

  const minusOne: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { id } = e.target as HTMLButtonElement;

    dispatch(changeQuantity({ type: "minus", id }));

    const newQuantityCart = cart
      .map((item) => {
        if (item._id !== id) return item;

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      })
      .filter((item) => item?.quantity > 0);

    if (!cart.map((item) => item._id).includes(id)) {
      localStorage.setItem(
        "cart",
        JSON.stringify(cart.filter((item) => item._id !== id))
      );
    }

    localStorage.setItem("cart", JSON.stringify(newQuantityCart));
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

        {cart.length > 0 ? (
          <div className="flex gap-[28px] flex-col tablet-vertical:flex-row">
            <div className="flex flex-col gap-[20px] grow">
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

                    <div className="flex gap-[12px] items-center">
                      <button
                        className="w-[48px] h-[48px] text-white font-bold bg-light-01 flex justify-center items-center hover:bg-white hover:text-dark-01 ease-linear transition-all"
                        onClick={minusOne}
                        id={item._id}
                      >
                        -
                      </button>

                      <span className="text-default-text font-bold text-center">
                        {item.quantity}
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

              {cart.length > 0 && (
                <p
                  className={twMerge(
                    "text-[2rem] leading-[1.4]",
                    "tablet:text-[2.2rem]"
                  )}
                >
                  Total:{" "}
                  {cart.reduce((acc, item) => {
                    acc += item.quantity * item.price;

                    return acc;
                  }, 0)}{" "}
                  {currency}
                </p>
              )}
            </div>

            <Form />
          </div>
        ) : (
          <div className="flex justify-center items-center h-[300px]">
            <p
              className={twMerge(
                "text-[2rem] leading-[1.4]",
                "tablet:text-[2.2rem]"
              )}
            >
              No items in your cart
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
};
