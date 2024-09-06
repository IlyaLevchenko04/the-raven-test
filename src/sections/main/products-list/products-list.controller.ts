import { MouseEventHandler, useState } from "react";
import { addToCart } from "../../../redux/cart-slice/cart-slice";
import { useDispatch } from "react-redux";

export const useProductsListController = () => {
  const [cart, setCart] = useState<string[]>(
    JSON.parse(localStorage.getItem("cart") as string) || []
  );
  const dispatch = useDispatch();

  const onBuyClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { id } = e.target as HTMLButtonElement;

    localStorage.setItem(
      "cart",
      JSON.stringify(cart.includes(id) ? [...cart] : [...cart, id])
    );

    if (!cart.includes(id)) {
      dispatch(addToCart(id));
    }

    setCart((p) => {
      if (p.includes(id)) return p;

      return [...p, id];
    });
  };

  return {
    onBuyClick,
    cart,
  };
};
