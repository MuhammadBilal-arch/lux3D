import "./globals.css";
import { Suspense } from 'react'
import AOSWrapper from "@/components/aos-wrapper";
import { ToastContainer } from "react-toastify"
import Loading from "./loading";

export const metadata = {
  title: "Lux 3D",
  description: "Lux 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="font-metropolis">
        <Suspense fallback={<Loading/>}>
          <AOSWrapper>{children}</AOSWrapper>
          <ToastContainer />
        </Suspense>
      </body>
    </html>
  );
}
