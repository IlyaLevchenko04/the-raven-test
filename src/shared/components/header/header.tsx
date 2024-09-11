import { Link, useLocation } from '@tanstack/react-router';
import { NAV_ITEMS } from '../../../constants/nav-items';
import { ROUTER_BOOK } from '../../../constants/router-book';
import { Logo } from '../icons/logo';
import { Container } from '../common/container/container';
import { twMerge } from 'tailwind-merge';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Cart } from '../icons/cart';
import { CURRENCY } from '../../../constants/currency';
import { MouseEventHandler, useState } from 'react';
import { setCurrency } from '../../../redux/products-slice/products-slice';
import { ArrowDown } from '../icons/arrow-down';

export const Header = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector((state: RootState) => state.cart.cart);
  const currency = useSelector((state: RootState) => state.products.currency);
  const dispatch = useDispatch();

  const toggleOpen = () => setIsOpen(p => !p);

  const onCurrencyClick: MouseEventHandler<HTMLLIElement> = e => {
    const { textContent } = e.target as HTMLLIElement;

    dispatch(setCurrency(textContent as 'UAH' | 'EUR' | 'USD'));

    localStorage.setItem('currency', JSON.stringify(textContent as string));

    toggleOpen();
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-[1px] border-b-light-01">
      <Container className="py-[16px]">
        <nav className="flex justify-between">
          <Link to="/" className="flex gap-[4px] hover:text-brand">
            <Logo className="w-[24px] h-[24px] flex justify-center items-center ease-linear transition-all" />

            <span className="hover:text-brand ease-linear transition-all">
              OrangeStore
            </span>
          </Link>

          <ul className="flex gap-[16px]">
            {Object.entries(ROUTER_BOOK).map(([key, value]) => (
              <li key={key}>
                <Link
                  to={value}
                  className={twMerge(
                    'font-semi-bold ease-linear transition-all',
                    'hover:text-brand',
                    location.pathname === value && 'text-brand'
                  )}
                >
                  {NAV_ITEMS[key as keyof typeof NAV_ITEMS]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-[8px]">
            <div className="flex gap-[4px] justify-center items-center">
              <Link to={`/cart`}>
                <Cart className="w-[24px] h-[24px] z-5 hover:fill-brand ease-linear transition-all" />
              </Link>

              {cart.length > 0 && (
                <span className="bg-orange-02 text-white rounded-full w-[28px] h-[28px] text-center">
                  {cart.length}
                </span>
              )}
            </div>

            <div className="relative bg-white min-w-[48px]">
              <div
                className="border-[1px] border-light-01 p-[4px] cursor-pointer w-full flex gap-[8px] justify-center items-center"
                onClick={toggleOpen}
              >
                <p>{currency}</p>

                <ArrowDown
                  className={twMerge(
                    'w-[16px] h-[16px] ease-linear transition-all',
                    isOpen && 'rotate-180'
                  )}
                />
              </div>

              <ul
                className={twMerge(
                  'invisible hidden border-[1px] border-t-transparent border-light-01 absolute w-full h-fit top-full bg-white opacity-0  ease-linear transition-all',
                  isOpen && 'opacity-100 flex flex-col visible'
                )}
              >
                {Object.values(CURRENCY).map(item => (
                  <li
                    key={item}
                    className={twMerge(
                      'cursor-pointer p-[4px] hover:bg-light-04',
                      currency === item &&
                        'bg-light-01 text-white hover:bg-light-01'
                    )}
                    onClick={onCurrencyClick}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
