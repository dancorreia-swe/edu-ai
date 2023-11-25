import Features from "@/pages/landing/Features";
import Footer from "@/pages/landing/Footer";
import Hero from "@/pages/landing/Hero";
import IconSection from "@/pages/landing/IconSection";
import Navbar from "@/pages/landing/Navbar";
import React from "react";
import TryBtn from "@/pages/landing/CtaSection";
import CaseCard from "@/pages/landing/UseCaseSection";

const LandingHome = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <IconSection />
      <Features />
      <CaseCard />
      <TryBtn />
      <Footer />
    </>
  );
};

export default LandingHome;
