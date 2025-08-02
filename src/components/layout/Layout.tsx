import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: any;
  title?: string;
  description?: string;
}

export const Layout = ({
  children,
  title = "AgenticPH",
  description = "Next-gen community of Filipino developers, AI builders, and creative technologists",
}: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
