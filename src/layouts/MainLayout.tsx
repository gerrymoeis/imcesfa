import { Outlet } from "react-router-dom";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />
      <main className="flex-grow container mx-auto pt-24 pb-12 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
