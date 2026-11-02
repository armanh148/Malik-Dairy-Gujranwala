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
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Misty Agricultural Tractor + Yellow Trust Bar */}
      <Hero />

      {/* 2. We Offers Eco & Agriculture Services (3 Green Cards) */}
      <ScrollReveal direction="up" delay={40}>
        <ProductCategories />
      </ScrollReveal>

      {/* 3. Farm Fresh Pantry Products (Shop / Add to Cart) */}
      <ScrollReveal direction="up" delay={40}>
        <ProductGrid />
      </ScrollReveal>

      {/* 4. Welcome To Malik Dairy Farm (Dark Green Story Section) */}
      <ScrollReveal direction="up" delay={40}>
        <StorySection />
      </ScrollReveal>

      {/* 5. Recently Completed Project (4 Tall Gallery Cards) */}
      <ScrollReveal direction="up" delay={40}>
        <ProjectsSection />
      </ScrollReveal>

      {/* 6. How We Do Agricultural Work (Process with Woman & 4 Steps) */}
      <ScrollReveal direction="up" delay={40}>
        <WorkflowSection />
      </ScrollReveal>

      {/* 7. We Have A Lot Of Experience Team Members (Dark Green Section) */}
      <ScrollReveal direction="up" delay={40}>
        <TeamSection />
      </ScrollReveal>

      {/* 8. Trusted By 1000+ Customers (Testimonials) */}
      <ScrollReveal direction="up" delay={40}>
        <Testimonials />
      </ScrollReveal>

      {/* 9. How Can We Help You? (Split FAQ Section) */}
      <ScrollReveal direction="up" delay={40}>
        <FaqSection />
      </ScrollReveal>

      {/* 10. Our Blog & Articles (Magazine Grid) */}
      <ScrollReveal direction="up" delay={40}>
        <BlogSection />
      </ScrollReveal>
    </>
  );
}
