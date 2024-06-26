// import { Metropolis } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/components/aos-wrapper";
import { ToastContainer } from "react-toastify"
import { Providers } from "@/redux/provider"


// const metropolis = Metropolis({ subsets: ["latin"] });

export const metadata = {
  title: "Lux 3D",
  description: "Lux 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      </head>
      <body className="font-metropolis">
        <Providers>
          <AOSWrapper>{children}</AOSWrapper>
          <ToastContainer />
        </Providers>

      </body>
    </html>
  );
}
