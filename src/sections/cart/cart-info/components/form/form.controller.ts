import { FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { z, ZodError } from 'zod';
import { clearCart } from '../../../../../redux/cart-slice/cart-slice';
import { useNavigate } from '@tanstack/react-router';
import { ROUTER_BOOK } from '../../../../../constants/router-book';

const defaultErrorsState = {
  name: '',
  phone: '',
  surname: '',
};

export const useFormController = () => {
  const [errors, setErrors] = useState(defaultErrorsState);
  const navigate = useNavigate();

  const orderSchema = z
    .object({
      name: z.string().min(1, { message: 'Name is required' }),
      surname: z.string().min(1, { message: 'Surname is required' }),
      phone: z
        .string()
        .regex(/^\+?\d[\d\s-]{8,14}$/, { message: 'Invalid phone number' }),
    })
    .required();

  type OrderSchema = z.infer<typeof orderSchema>;

  const dispatch = useDispatch();

  const validate = (data: OrderSchema) => {
    try {
      orderSchema.parse(data);

      return true;
    } catch (e) {
      const err = e as unknown as ZodError;

      const _errors = {
        name: '',
        surname: '',
        phone: '',
      };

      err.issues.forEach(error => {
        const key = error.path[0] as keyof typeof _errors;
        const value = error.message;

        _errors[key] = value;
      });

      setErrors(_errors);

      return false;
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    setErrors(defaultErrorsState);

    const form = e.target as HTMLFormElement;

    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const surnameInput = form.elements.namedItem('surname') as HTMLInputElement;
    const phoneInput = form.elements.namedItem('phone') as HTMLInputElement;

    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const phone = phoneInput.value.trim();

    const isFormValid = validate({ name, surname, phone });

    if (!isFormValid) return;

    const formData = {
      name,
      surname,
      phone,
    };

    console.log(formData);

    localStorage.removeItem('cart');
    dispatch(clearCart());

    navigate({ to: ROUTER_BOOK.thanks });
  };

  return {
    onSubmit,
    errors,
  };
};
