import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";


export default function Contact(){

    const { t, i18n } = useTranslation();
    return(
<section className="bg-[#F8F5F2] py-12 text-[#6B4226]">
<div className="container">

 <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
           <p className="text-center mb-6 text-[#8B5E3C]">
         {t("contact.subtitle")}
        </p>
        </div>
        <form  className="flex flex-col gap-4">
            <input type="text"  placeholder={t("contact.namePlaceholder")} className="p-3 rounded-md border border-gray-300" />
             <input type="email"  placeholder={t("contact.emailPlaceholder")} className="p-3 rounded-md border border-gray-300" />
          <textarea  placeholder={t("contact.messagePlaceholder")} rows="5" className="p-3 rounded-md border border-gray-300"></textarea>
          <button className="bg-[#6B4226] hover:bg-[#8B5E3C] text-white px-6 py-3 rounded-md mt-2"> {t("contact.button")}  </button>





        </form>
      










</div>




</section>





    );
}