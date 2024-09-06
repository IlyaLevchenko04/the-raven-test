import { twMerge } from "tailwind-merge";
import { Container } from "../../../shared/components/common/container/container";
import { Section } from "../../../shared/components/common/section/section";

export const Hero = () => (
  <Section className="bg-blue-01">
    <Container className="text-center">
      <h1
        className={twMerge(
          "font-bold text-center mb-[12px]",
          "text-[44px] leading-[1.2]",
          "tablet:text-[54px]"
        )}
      >
        Welcome to our store!
      </h1>

      <p>Check out our products.</p>
    </Container>
  </Section>
);
