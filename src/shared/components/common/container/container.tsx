import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container = (props: ContainerProps) => (
  <div
    className={twMerge(
      "px-[16px]",
      "tablet:w-t-container tablet:mx-auto tablet:px-0",
      "tablet-vertical:w-t-v-container",
      "laptop:w-l-container",
      "desktop:w-d-container",
      props.className
    )}
  >
    {props.children}
  </div>
);
