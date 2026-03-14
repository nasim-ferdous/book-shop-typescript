import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import NewsLetter from "@/components/home/NewsLetter";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Categories></Categories>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <NewsLetter></NewsLetter>
    </div>
  );
}
