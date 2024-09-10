import { createLazyFileRoute } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";

export const Route = createLazyFileRoute("/thanks")({
  component: () => (
    <div className="h-[400px] flex flex-col gap-[12px] justify-center items-center">
      <h2
        className={twMerge(
          "mb-[20px] font-bold",
          "text-[3.4rem] leading-[1.2]",
          "tablet:text-[4.6rem]"
        )}
      >
        Thank you for your order!
      </h2>
      <p>Our manager will contact you soon.</p>
    </div>
  ),
});
