import { createLazyFileRoute } from '@tanstack/react-router'
import { twMerge } from 'tailwind-merge'
import { ROUTER_BOOK } from '../constants/router-book'

export const Route = createLazyFileRoute('/500')({
  component: () => <main className="h-[400px] flex flex-col gap-[12px] justify-center items-center">
    <p className={twMerge(
          "mb-[20px] font-bold",
          "text-[3.4rem] leading-[1.2]",
          "tablet:text-[4.6rem]"
        )}>500 - Internal Server Error</p>
    <p>Sorry, but the server encountered an error.</p>
    <p>Please try again later.</p>
    <a href={ROUTER_BOOK.baseUrl} className='text-brand relative after:content-[""] after:absolute after:left-0 after:bg-brand after:w-0 after:h-[4px] hover:after:w-full after:bottom-[-4px] after:transition-[width] after:duration-300 after:ease-linear'
    >Back to home</a>
  </main>
})