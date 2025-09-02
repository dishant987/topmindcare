import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 py-7 px-2 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-7">
        {/* Brand + Copyright */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-xl bg-gradient-to-tr from-fuchsia-400 via-blue-400 to-cyan-300 flex items-center justify-center">
              {/* Square logo - gradient box */}
            </span>

            <div className="font-bold text-2xl text-gray-900 dark:text-gray-100">
              Topmind Care
            </div>
          </div>
          <div className="text-gray-400 dark:text-gray-400 text-sm">
            Mindfulness for growing minds. © {currentYear} Mindery Kids.
          </div>
        </div>

        {/* Contact links */}
        <div className="flex flex-col items-start  gap-1">
          <span className="text-gray-400 dark:text-gray-400 text-sm font-semibold select-none">
            Contact
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
            <Link
              to="#"
              className="text-violet-600 dark:text-violet-400 hover:underline transition"
            >
              Instagram
            </Link>
            <Link
              to="#"
              className="text-violet-600 dark:text-violet-400 hover:underline transition"
            >
              YouTube
            </Link>
            <Link
              to="#"
              className="text-violet-600 dark:text-violet-400 hover:underline transition"
            >
              X
            </Link>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-col items-start  gap-1">
          <span className="text-gray-400   dark:text-gray-400 text-sm font-semibold select-none">
            Legal
          </span>
          <div className="flex flex-wrap gap-x-2 mt-1">
            <Link
              to="#"
              className="text-violet-600 dark:text-violet-400 hover:underline transition"
            >
              Privacy
            </Link>
            <span className="text-gray-300 dark:text-gray-500">·</span>
            <Link
              to="#"
              className="text-violet-600 dark:text-violet-400 hover:underline transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
