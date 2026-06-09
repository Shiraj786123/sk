import Signup from '@/src/views/Signup';

export const metadata = {
  title: 'Sign Up | ZonzocTech',
  description: 'Create your ZonzocTech client account.',
  robots: { index: false },
};

export default function SignupPage() {
  return <Signup />;
}
