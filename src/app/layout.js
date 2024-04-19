import './globals.css';
import './base.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'fresh harvest box',
  description: 'fresh harvest box',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className=''>
      <body className={dmSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
