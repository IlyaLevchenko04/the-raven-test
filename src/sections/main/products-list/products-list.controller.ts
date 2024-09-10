import { MouseEventHandler } from "react";
import { addToCart } from "../../../redux/cart-slice/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../../../shared/types/product";
import { RootState } from "../../../redux/store";

export const useProductsListController = (cartItem: Item) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const onBuyClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { id } = e.target as HTMLButtonElement;

    const cartIds = cart.map((item) => item._id);

    if (cartIds.includes(id)) return;

    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...cartItem, quantity: 1 }])
    );

    dispatch(addToCart({ ...cartItem, quantity: 1 }));
  };

  return {
    onBuyClick,
    cart,
  };
};
