import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Signin from '@/components/Signin';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

type Props = {
  searchParams: { callbackUrl: string };
};
const SignPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions); // 서버 컴포넌트에서 세션 가져올 때

  if (session) redirect('/');
  const providers = (await getProviders()) ?? {};

  return (
    <section className='flex justify-center mt-24'>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  );
};

export default SignPage;
