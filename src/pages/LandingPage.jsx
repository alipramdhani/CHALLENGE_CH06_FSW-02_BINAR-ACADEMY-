import BannerCTA from "../components/Banner";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Services from "../components/Service";
import Testimonial from "../components/Testimonial";
import WhyUs from "../components/WhyUs";

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
  );
}
export default LandingPage;
