import '@/app/ui/global.css';
import { poppins } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | BaseProject',
    default: 'BaseProject',
  },
  description: 'Projeto Base React .',
  metadataBase: new URL('https://github.com/feijaoguida/base_project'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
