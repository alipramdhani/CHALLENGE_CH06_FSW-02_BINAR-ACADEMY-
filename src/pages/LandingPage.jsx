import BannerCTA from "../components/pages.landingpage.components/Banner"
import Faq from "../components/pages.landingpage.components/Faq"
import Hero from "../components/pages.landingpage.components/Hero"
import Services from "../components/pages.landingpage.components/Service"
import Testimonial from "../components/pages.landingpage.components/Testimonial"
import WhyUs from "../components/pages.landingpage.components/WhyUs"

function LandingPage() {
  return (
    <>
      <Hero landingPage={true} />
      <Services />
      <WhyUs />
      <Testimonial />
      <BannerCTA />
      <Faq />
    </>
  )
}
export default LandingPage
