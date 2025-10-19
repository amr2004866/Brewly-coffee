import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#F8F5F2]/90 backdrop-blur-md border-b border-[#EADBC8]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            
            <div className="flex items-center">
           
              <Link to="/" className="text-2xl font-extrabold text-[#6B4226] ml-3">
                Brewly
              </Link>
              <img src={logo} alt="Brewly Logo" className="w-8 h-8 ml-2" />
              <span className="ml-3 text-sm text-[#8B5E3C] hidden md:inline">
               {t("navbar.subtitle")}
              </span>
            </div>

        
            <div className="hidden md:flex items-center justify-between space-x-6">
                 <button
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
                }
                className=" bg-[#8B5E3C] px-3 py-1 rounded text-white "
              >
                {i18n.language === "en" ? "العربية" : "English"}
              </button>
              <Link to="/" className="text-[#8B5E3C] hover:text-[#6B4226]">
                {t("navbar.home")}
              </Link>
              <Link to="/about" className="text-[#8B5E3C] hover:text-[#6B4226]">
                {t("navbar.about")}
              </Link>
              <Link to="/menu" className="text-[#8B5E3C] hover:text-[#6B4226]">
                {t("navbar.menu")}
              </Link>
              <Link to="/contact" className="text-[#8B5E3C] hover:text-[#6B4226]">
                {t("navbar.contact")}
              </Link>

              <Link
                to="/contact"
                className="ml-4 inline-block px-4 py-2 bg-[#6B4226] text-white rounded-md shadow-sm hover:bg-[#8B5E3C]"
              >
                {t("navbar.get_in_touch")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-[#6B4226] focus:outline-none"
              >
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden flex flex-col space-y-3 mt-3 pb-4 border-t border-[#EADBC8]">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-[#8B5E3C] hover:text-[#6B4226]"
              >
                {t("navbar.home")}
              </Link>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="text-[#8B5E3C] hover:text-[#6B4226]"
              >
                {t("navbar.about")}
              </Link>
              <Link
                to="/menu"
                onClick={() => setOpen(false)}
                className="text-[#8B5E3C] hover:text-[#6B4226]"
              >
                {t("navbar.menu")}
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="text-[#8B5E3C] hover:text-[#6B4226]"
              >
                {t("navbar.contact")}
              </Link>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-block px-4 py-2 bg-[#6B4226] text-white rounded-md hover:bg-[#8B5E3C] text-center shadow-sm"
              >
                {t("navbar.get_in_touch")}
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
