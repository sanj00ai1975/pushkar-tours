import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppWidget } from "./WhatsAppWidget";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
