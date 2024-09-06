import { Link, useLocation } from "@tanstack/react-router";
import { NAV_ITEMS } from "../../../constants/nav-items";
import { ROUTER_BOOK } from "../../../constants/router-book";
import { Logo } from "../icons/logo";
import { Container } from "../common/container/container";
import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Cart } from "../icons/cart";

export const Header = () => {
  const location = useLocation();

  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-[1px] border-b-light-01">
      <Container className="py-[16px]">
        <nav className="flex justify-between">
          <Link
            to={ROUTER_BOOK.baseUrl}
            className="flex gap-[4px] hover:text-brand"
          >
            <Logo className="w-[24px] h-[24px] flex justify-center items-center ease-linear transition-all" />

            <span className="hover:text-brand ease-linear transition-all">
              OrangeStore
            </span>
          </Link>

          <ul className="flex gap-16">
            {Object.entries(ROUTER_BOOK).map(([key, value]) => (
              <li key={key}>
                <Link
                  to={value}
                  className={twMerge(
                    "font-semi-bold ease-linear transition-all",
                    "hover:text-brand",
                    location.pathname === value && "text-brand"
                  )}
                >
                  {NAV_ITEMS[key as keyof typeof NAV_ITEMS]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-[4px] justify-center items-center">
            <Link to={ROUTER_BOOK.cart}>
              <Cart className="w-[24px] h-[24px] z-5 hover:fill-brand ease-linear transition-all" />
            </Link>

            {cart.length > 0 && (
              <span className="bg-orange-02 text-white rounded-full w-[28px] h-[28px] text-center">
                {cart.length}
              </span>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};
