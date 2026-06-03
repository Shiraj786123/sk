import Login from '@/src/views/Login';

export const metadata = {
  title: 'Client Login | ZonzocTech',
  description: 'Log in to your ZonzocTech client account.',
  robots: { index: false },
};

export default function LoginPage() {
  return <Login />;
}
