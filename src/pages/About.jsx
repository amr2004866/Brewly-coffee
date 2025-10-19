import logo from "../assets/images/Logo.png";
import { useTranslation } from "react-i18next";



export default function About() {
    const { t, i18n } = useTranslation();

  return (
    <section className="bg-[#F8F5F2] py-12 text-[#6B4226]">
      <div className="container mx-auto px-6">
        
       
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
         
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed">
             {t("about.text")}
            </p>
          </div>

        
          <div className="md:w-1/2 flex justify-center">
            <img
              src={logo}
              alt="Brewly Coffee"
              className="w-64 md:w-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
