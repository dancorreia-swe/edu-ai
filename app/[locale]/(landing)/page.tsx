import Features from "@/components/pages/landing/Features";
import Footer from "@/components/pages/landing/Footer";
import Hero from "@/components/pages/landing/Hero";
import IconSection from "@/components/pages/landing/IconSection";
import Navbar from "@/components/pages/landing/Navbar";
import CtaSection from "@/components/pages/landing/CtaSection";
import UseCaseSection from "@/components/pages/landing/UseCaseSection";
import { unstable_setRequestLocale } from "next-intl/server";

type LandingHomeProps = {
  params: {
    locale: string;
  };
};

const LandingHome = ({ params: { locale } }: LandingHomeProps) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <Hero />
      <IconSection />
      <Features />
      <UseCaseSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default LandingHome;
