import { createLazyFileRoute } from "@tanstack/react-router";
import { CartInfo } from "../sections/cart/cart-info/cart-info";

export const Route = createLazyFileRoute("/cart")({
  component: Cart,
});

function Cart() {
  return (
    <main>
      <CartInfo />
    </main>
  );
}
