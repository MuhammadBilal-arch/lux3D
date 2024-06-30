import "./globals.css";
import { Suspense, lazy } from 'react';

// Lazy load components
const AOSWrapper = lazy(() => import('@/components/aos-wrapper'));
const ToastContainer = lazy(() => import('react-toastify').then(module => ({ default: module.ToastContainer })));
const Loading = lazy(() => import('./loading'));

export const metadata = {
  title: "Lux 3D",
  description: "Lux 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Metropolis:wght@400;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Metropolis:wght@400;700&display=swap"
        />
      </head>
      <body className="font-metropolis">
        <Suspense fallback={<Loading />}>
          <AOSWrapper>{children}</AOSWrapper>
          <ToastContainer />
        </Suspense>
      </body>
    </html>
  );
}
