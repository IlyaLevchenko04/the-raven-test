import { twMerge } from "tailwind-merge";
import { useFormController } from "./form.controller";

export const Form = () => {
  const { onSubmit, errors } = useFormController();

  return (
    <div>
      <p
        className={twMerge(
          "mb-[16px] font-bold",
          "text-[2rem] leading-[1.4]",
          "tablet:text-[2.2rem]"
        )}
      >
        Create your order
      </p>

      <form
        className="flex flex-col gap-[16px]"
        id="cart-form"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="name">Name</label>

          <input
            placeholder="Name"
            type="text"
            id="name"
            className="border-[1px] border-light-01 px-[8px] py-[4px]"
          />

          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-[8px]">
          <label htmlFor="surname">Surname</label>

          <input
            placeholder="Surname"
            type="text"
            id="surname"
            className="border-[1px] border-light-01 px-[8px] py-[4px]"
          />

          {errors.surname && <p>{errors.surname}</p>}
        </div>

        <div className="flex flex-col gap-[8px]">
          <label htmlFor="phone">Phone</label>

          <input
            placeholder="Phone"
            type="tel"
            id="phone"
            className="border-[1px] border-light-01 px-[8px] py-[4px]"
          />

          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-dark-01 px-[8px] py-[12px] text-white hover:shadow-left-shadow-black-button ease-linear transition-all"
        >
          Create order
        </button>
      </form>
    </div>
  );
};
