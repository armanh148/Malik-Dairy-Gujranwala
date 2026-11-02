import { Hero } from "@/components/store/hero";
import { ProductCategories } from "@/components/store/product-categories";
import { ProductGrid } from "@/components/store/product-grid";
import { StorySection } from "@/components/store/story-section";
import { ProjectsSection } from "@/components/store/projects-section";
import { WorkflowSection } from "@/components/store/workflow-section";
import { TeamSection } from "@/components/store/team-section";
import { Testimonials } from "@/components/store/testimonials";
import { FaqSection } from "@/components/store/faq-section";
import { BlogSection } from "@/components/store/blog-section";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Misty Agricultural Tractor + Yellow Trust Bar */}
      <Hero />

      {/* 2. We Offers Eco & Agriculture Services (3 Green Cards) */}
      <ProductCategories />

      {/* 3. Farm Fresh Pantry Products (Shop / Add to Cart) */}
      <ProductGrid />

      {/* 4. Welcome To All Express Nature & Organic Farm (Dark Green Story Section) */}
      <StorySection />

      {/* 5. Recently Completed Project (4 Tall Gallery Cards) */}
      <ProjectsSection />

      {/* 6. How We Do Agricultural Work (Process with Woman & 4 Steps) */}
      <WorkflowSection />

      {/* 7. We Have A Lot Of Experience Team Members (Dark Green Section) */}
      <TeamSection />

      {/* 8. Trusted By 1000+ Customers (Testimonials) */}
      <Testimonials />

      {/* 9. How Can We Help You? (Split FAQ Section) */}
      <FaqSection />

      {/* 10. Our Blog & Articles (Magazine Grid) */}
      <BlogSection />
    </>
  );
}