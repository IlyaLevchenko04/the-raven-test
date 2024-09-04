import { Link } from '@tanstack/react-router';
import { NAV_ITEMS } from '../../../constants/nav-items';
import { ROUTER_BOOK } from '../../../constants/router-book';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-16">
          {Object.entries(NAV_ITEMS).map(([key, value]) => (
            <li>
              <Link
                to={ROUTER_BOOK[key as keyof typeof ROUTER_BOOK]}
                className="font-semi-bold"
              >
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
