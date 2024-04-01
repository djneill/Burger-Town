import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Menu from '@/components/Menu'
import Slider from "@/components/Slider";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burger Town",
  description: "The best burgers in Austin, TX",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Slider />
      <Features />
      <Video />
      <Menu />
      <Locations />
      <Contact />
    </>
  );
}
