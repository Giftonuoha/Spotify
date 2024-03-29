import { LandingPageHeader } from "../component/HeaderComponent/LandingPageHeader"
import { PremiumOffer } from "../component/HeroComponent/PremiumOffer"
import { Features } from "../component/Features/index"
import { PremiumPrice } from "../component/Pricing/index"
import Footer  from '../component/Footer/index.jsx'

export const Landing = () => {
    return (
        <>
            <LandingPageHeader/>
            <PremiumOffer/>
            <Features/>
            <PremiumPrice/>
            <Footer/>
           
            
        </>
        

    )
}