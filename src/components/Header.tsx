import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ThemeToggleButton from "./ui/theme-toggle-button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onStartTrial: () => void;
}

const Header = ({ onStartTrial }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Close drawer when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };

    if (menuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const navItems = ["Why", "Programs", "Features", "For Parents", "FAQ"];
  const navIds = ["why", "programs", "features", "for-parents", "faq"];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2 cursor-pointer transform transition duration-300 hover:scale-105">
          <div className="w-10 h-10 rounded-[18px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 shadow-md animate-pulse" />
          <span className="font-semibold text-lg text-black dark:text-white">
            Topmind Care
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${navIds[navItems.indexOf(item)]}`}
                className="text-purple-600 dark:text-purple-400 hover:underline hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="flex items-center">
            <ThemeToggleButton />
            <Button
              onClick={onStartTrial}
              variant="hero"
              size="lg"
              className="ml-2 px-5 py-2 bg-purple-600 text-white rounded-2xl font-semibold shadow hover:bg-purple-700 transition transform hover:scale-105"
            >
              Start Free
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-gray-800 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer & Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 h-screen w-72 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 overflow-y-auto ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header with Logo */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200 dark:border-gray-700">
            <div className="w-10 h-10 rounded-[18px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 shadow-md" />
            <span className="font-semibold text-lg text-black dark:text-white">
              Topmind Care
            </span>
          </div>

          {/* Drawer Nav */}
          <ul className="flex flex-col space-y-6 py-8 px-6 font-medium flex-grow">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-purple-600 dark:text-purple-400 hover:underline hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Drawer Footer */}
          <div className="flex flex-col items-start space-y-4 px-6 py-6 border-t border-gray-200 dark:border-gray-700">
            <ThemeToggleButton />
            <Button
              onClick={() => {
                onStartTrial();
                setMenuOpen(false);
              }}
              variant="hero"
              size="lg"
              className="w-full px-5 py-2 bg-purple-600 text-white rounded-2xl font-semibold shadow hover:bg-purple-700 transition transform hover:scale-105"
            >
              Start Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
