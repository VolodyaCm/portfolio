import { SyntheticEvent, useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useAuth } from '@/fireb/db/me';
import { useRouter } from 'next/router';
import { ILoginUser } from '@/ptypes/user';
import cn from '@/helpers/classNames';

const LoginContainer = () => {
  const { login, currentUser, loading } = useAuth();
  const router = useRouter();
  const [state, setState] = useState<ILoginUser>({
    email: '',
    password: '',
  });

  if (currentUser) {
    router.push('/admin/main-info');
    return null;
  }

  const handleChange =
    (name: string) =>
    ({ target }: SyntheticEvent<HTMLInputElement>) => {
      const { value } = target as HTMLInputElement;
      setState({ ...state, [name]: value });
    };

  const handleLogin = async () => {
    console.log('Login | state: ', state);
    await login(state);
  };

  return (
    <div
      className={cn([
        'bg-gradient-to-r',
        'from-[rgba(116,66,120,4%)] to-[rgba(0,212,255,3%)]',
      ])}
    >
      <div className="container h-screen flex justify-center items-center">
        <form className="grid gap-6 w-80 bg-[rgba(80,80,87,40%)] p-7 rounded">
          <h1 className="text-4xl text-white font-bold">Login</h1>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white font-bold pb-2">
              Email
            </label>
            <Input
              name="email"
              type="email"
              value={state.email}
              onChange={handleChange('email')}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pass" className="text-white font-bold pb-2">
              Password
            </label>
            <Input
              type="password"
              name="pass"
              value={state.password}
              onChange={handleChange('password')}
            />
          </div>
          <Button
            primary
            loading={loading}
            onClick={handleLogin}
            className="py-2 text-base font-bold text-white uppercase"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
