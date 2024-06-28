import "./globals.css";
import AOSWrapper from "@/components/aos-wrapper";
import { ToastContainer } from "react-toastify"

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
          <AOSWrapper>{children}</AOSWrapper>
          <ToastContainer />
      </body>
    </html>
  );
}
