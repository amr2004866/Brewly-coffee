 import { Button } from "@/components/ui/button"
 import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card" ;

 import  cappuccino from "../assets/images/product1.jpg";
  import latte from "../assets/images/product2.jpg";
  import espresso from "../assets/images/product3.jpg";
import { useTranslation } from "react-i18next";


    export default function Menu(){
    const { t, i18n } = useTranslation();


    return (   

        <section className="bg-[#F8F5F2] py-12">
         <div className="container mx-auto px-6 text-[#6B4226]">

 <div className="text-center mb-12">
           <h2 className="text-4xl font-extrabold mb-2">{t("menu.title")}</h2>
            <p className="text-lg text-[#8B5E3C]">
              {t("menu.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* card1 */}
          <Card className="bg-white shadow-md rounded-md overflow-hidden">
      
    
       <CardHeader>
        <img src={espresso} alt="espresso" className="h-48 w-full object-cover"/>
        
       
         <CardTitle>{t("menu.products.espresso.name")}</CardTitle>
        
      
         <CardDescription>{t("menu.products.espresso.desc")}</CardDescription>
       </CardHeader>
      
    
     
      
    
       <CardFooter>
         <Button className="w-full bg-[#6B4226] hover:bg-[#8B5E3C] text-white">{t("menu.button")}</Button>
         
       </CardFooter>
      
     </Card>

     {/* card2 */}
   <Card className="bg-white shadow-md rounded-md overflow-hidden">
      
    
       <CardHeader>
        <img src={latte} alt="espresso" className="h-48 w-full object-cover"/>
        
     
         <CardTitle>{t("menu.products.latte.name")}</CardTitle>
        
       
         <CardDescription>{t("menu.products.latte.desc")}</CardDescription>
       </CardHeader>
      
    
     
      
    
       <CardFooter>
         <Button className="w-full bg-[#6B4226] hover:bg-[#8B5E3C] text-white">{t("menu.button")}</Button>
       </CardFooter>
      
     </Card>
     {/* card3 */}
 <Card className="bg-white shadow-md rounded-md overflow-hidden">
      
    
       <CardHeader>
        <img src={cappuccino} alt="espresso" className="h-48 w-full object-cover"/>
        
       
         <CardTitle>{t("menu.products.cappuccino.name")}</CardTitle>
        
        
         <CardDescription>{t("menu.products.cappuccino.desc")}</CardDescription>
       </CardHeader>
      
    
     
      
    
       <CardFooter>
         <Button className="w-full bg-[#6B4226] hover:bg-[#8B5E3C] text-white">{t("menu.button")}</Button>
       </CardFooter>
      
     </Card>




          </div>






         </div>

      
     
             </section>   );

   }
