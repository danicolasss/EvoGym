import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = { 
    setSelectedPage: (value: SelectedPage)=>void 
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id="accueil" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"> 
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Accueil)} className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 ">
            <div className="z-10 mt-32 md:basis-3/5 ">

                <motion.div initial="hidden" whileInView="visible" viewport={{once:true , amount :0.5 }} transition={{duration:0.5 }} variants={{ hidden:{opacity :0, x:-50 },visible:{opacity:1 ,x: 0}}} className="md:-mt-20 ">
                    <div className="relative ">
                        <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                            <img className="" src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>
                    <p className="mt-8 text-sm md:text-start ">
                    Gym sans rival. Entraînements de qualité supérieure. 
                    Des classes de fitness de classe mondiale pour atteindre les formes de corps que vous désirez. 
                    Obtenez votre corps parfait dès maintenant.
                    </p>
                </motion.div>
                <motion.div  initial="hidden" whileInView="visible" viewport={{once:true , amount :0.5 }} transition={{delay:0.2, duration:0.5 }} variants={{ hidden:{opacity :0, x:-50 },visible:{opacity:1 ,x: 0}}}  className="mt-8 flex items-center gap-8 ">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Rejoignez nous
                    </ActionButton>
                    <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={()=>setSelectedPage(SelectedPage.Contact)} href={`#${SelectedPage.Contact}`}>
                        <p>En savoir plus</p>
                    </AnchorLink>
                </motion.div>
            </div>
            <div>
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end ">
                    <img src={HomePageGraphic} alt="home-pageGraphic" />
                </div>
            </div>
        </motion.div>
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10 ">
                <div className="mx-auto w-5/6 ">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img src={SponsorRedBull} alt="redbull" />
                        <img src={SponsorFortune} alt="Fortune" />
                        <img src={SponsorForbes} alt="Forbes" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home