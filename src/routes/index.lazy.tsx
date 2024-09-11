import { createLazyFileRoute } from '@tanstack/react-router';
import { Hero } from '../sections/main/hero/hero';
import { ProductsList } from '../sections/main/products-list/products-list';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />

      <ProductsList />
    </main>
  );
}
