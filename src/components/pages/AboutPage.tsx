import { Image } from '@/components/ui/image';
import { Heart, Sparkles, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6">
              About Step Up Shoes
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-primary-foreground">
              Where artistry meets comfort in every step you take
            </p>
          </div>
        </div>
      </section>

      {/* Designer Section */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6">
                Meet Knox
              </h2>
              <p className="font-paragraph text-lg text-foreground mb-4">
                Knox is the creative force behind Step Up Shoes, bringing years of passion and expertise in footwear design to every collection. With a keen eye for detail and a commitment to quality, Knox has built a brand that stands for both style and substance.
              </p>
              <p className="font-paragraph text-lg text-foreground mb-4">
                Drawing inspiration from contemporary art, street culture, and timeless craftsmanship, Knox creates shoes that are more than just accessories—they're expressions of individuality and confidence.
              </p>
              <p className="font-paragraph text-lg text-foreground">
                Each design is carefully crafted to ensure the perfect balance between aesthetic appeal and everyday comfort, making Step Up Shoes the ideal choice for those who refuse to compromise on either.
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-full max-w-md">
                <Image
                  src="https://static.wixstatic.com/media/663647_d740c8a2f04f458e86d810d2a3eed7d3~mv2.png?originWidth=448&originHeight=448"
                  alt="Knox, the designer behind Step Up Shoes"
                  width={500}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-secondary-foreground text-center mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-background rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-brandaccent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-buttontextprimary" />
              </div>
              <h3 className="font-heading text-2xl text-primary-foreground mb-4">
                Passion
              </h3>
              <p className="font-paragraph text-base text-foreground">
                We pour our heart into every design, ensuring each pair reflects our dedication to excellence and innovation in footwear.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-background rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl text-primary-foreground mb-4">
                Quality
              </h3>
              <p className="font-paragraph text-base text-foreground">
                Only the finest materials and meticulous craftsmanship go into our shoes, guaranteeing durability and lasting comfort.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-background rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-buttonbackgroundsecondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-buttontextprimary" />
              </div>
              <h3 className="font-heading text-2xl text-primary-foreground mb-4">
                Purpose
              </h3>
              <p className="font-paragraph text-base text-foreground">
                Our mission is to empower you to step confidently into any situation with footwear that supports your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-sweetbackground py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground text-center mb-8">
              Our Story
            </h2>
            <div className="space-y-6">
              <p className="font-paragraph text-lg text-foreground">
                Step Up Shoes was born from a simple belief: footwear should be both beautiful and functional. Knox started this journey with a sketchbook full of ideas and a determination to create shoes that people would love to wear every single day.
              </p>
              <p className="font-paragraph text-lg text-foreground">
                What began as a small passion project has grown into a thriving online shop, serving customers across Pakistan with premium footwear that combines artistic design with practical comfort. Each collection tells a story, and every pair is made with the same care and attention to detail that defined our very first design.
              </p>
              <p className="font-paragraph text-lg text-foreground">
                Today, Step Up Shoes continues to push boundaries, exploring new styles and techniques while staying true to our core values of quality, creativity, and customer satisfaction. We're not just selling shoes—we're helping you step up your style, your confidence, and your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6">
              Our Mission
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground">
              To design and deliver exceptional footwear that empowers individuals to express their unique style while experiencing unmatched comfort. We believe everyone deserves shoes that make them feel confident, comfortable, and ready to take on the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
