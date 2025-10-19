import heroimg from "../assets/images/heroimg.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";




export default function Hero() {
    const { t, i18n } = useTranslation();
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${heroimg})` }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="relative container mx-auto px-6 text-white z-10 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-4">Brewly Coffee </h1>
        <p className="text-lg mb-6 max-w-md">
          {t("hero.desc")}
        </p>

        
         <Link to="/contact"className="bg-[#6B4226] text-white px-6 py-3 rounded-md hover:bg-[#8B5E3C] transition" >{t("hero.button")}</Link>
        
      </div>
    </section>
  );
}