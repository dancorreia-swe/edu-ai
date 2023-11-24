import Features from "@/pages/landing/Features";
import Footer from "@/pages/landing/Footer";
import Hero from "@/pages/landing/Hero";
import IconSection from "@/pages/landing/IconSection";
import Navbar from "@/pages/landing/Navbar";
import ParticlesBackground from "@/pages/landing/Particles";
import React from "react";
import BoxSection from "@/pages/landing/Case";
import Trybtn from "@/pages/landing/TryBtn";

type Props = {};

const LandingHome = (props: Props) => {
  return (
    <>
      <Navbar />
      <Hero />
      <IconSection />
      <Features />
      <BoxSection />
      <Trybtn />
      <Footer />
    </>
  );
};

export default LandingHome;
