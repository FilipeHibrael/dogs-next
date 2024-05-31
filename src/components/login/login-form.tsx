'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';

function FormButton() {
  const { pending } = useFormStatus();

  return <Button disabled={pending}>Entrar</Button>;
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="usuario" />
        <input type="password" name="password" placeholder="senha" />
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  );
}
