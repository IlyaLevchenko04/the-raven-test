import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SectionProps {
  className?: string;
  children: ReactNode;
}

export const Section = (props: SectionProps) => (
  <section
    className={twMerge(
      "tablet:py-[100px] py-[36px] flex flex-col",
      props.className
    )}
  >
    {props.children}
  </section>
);
