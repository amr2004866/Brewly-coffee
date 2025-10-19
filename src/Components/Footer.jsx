import logo from "../assets/images/Logo.png"
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t, i18n } = useTranslation();

  return (
    <footer className="bg-[#6B4226] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
       <div className="flex">
        <div className="text-2xl font-extrabold mb-4 md:mb-0"> Brewly Coffee </div>
         <img src={logo} alt="Brewly Logo" className="w-8 h-8 ml-2" />
       </div>
        

       
        <div className="text-sm text-[#EADBC8]">{t("footer.copyright")}</div>
      </div>
    </footer>
  );
}
