import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import './global.css'; // Импортируем как обычный CSS

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      <Header />

      <div className="background left1"></div>
      <div className="background left2"></div>
      <div className="background left3"></div>
      <div className="background right1"></div>
      <div className="background right2"></div>
      <div className="background right3"></div>

      {children}

      <Footer />
    </div>
  );
}
