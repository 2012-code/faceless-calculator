import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SignupPage() {
  // Redirect to home, but the metadata above tells Google to stop indexing this URL
  redirect('/');
}
