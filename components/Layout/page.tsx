import { ReactNode } from "react";
import Header from "../Header/page";
import Footer from "../Footer/page";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 p-4 overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}