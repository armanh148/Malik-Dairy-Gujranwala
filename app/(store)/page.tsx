import { Hero } from "@/components/store/hero";
import { ProductCategories } from "@/components/store/product-categories";
import { ProductGrid } from "@/components/store/product-grid";
import { StorySection } from "@/components/store/story-section";
import { ProjectsSection } from "@/components/store/projects-section";
import { WorkflowSection } from "@/components/store/workflow-section";
import { StatsBar } from "@/components/store/stats-bar";
import { Testimonials } from "@/components/store/testimonials";
import { FaqSection } from "@/components/store/faq-section";
import { BlogSection } from "@/components/store/blog-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <ProductGrid />
      <StorySection />
      <ProjectsSection />
      <WorkflowSection />
      <StatsBar />
      <Testimonials />
      <FaqSection />
      <BlogSection />
    </>
  );
}
