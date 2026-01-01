// HPI 1.6-V
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, CreditCard, RotateCcw, Star, Sparkles, CheckCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

// --- Utility Components for Motion ---

// 1. Reveal Animation (Intersection Observer)
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-in-right' | 'slide-in-left';
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className, 
  delay = 0,
  animation = 'fade-up' 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via style if needed, or just let CSS handle it
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
      switch(animation) {
          case 'fade-in': return 'opacity-0 transition-opacity duration-1000 ease-out';
          case 'scale-up': return 'opacity-0 scale-90 transition-all duration-700 ease-out cubic-bezier(0.34, 1.56, 0.64, 1)';
          case 'slide-in-right': return 'opacity-0 translate-x-20 transition-all duration-700 ease-out';
          case 'slide-in-left': return 'opacity-0 -translate-x-20 transition-all duration-700 ease-out';
          case 'fade-up': default: return 'opacity-0 translate-y-10 transition-all duration-700 ease-out';
      }
  };

  return (
    <div ref={ref} className={cn(getAnimationClass(), className, "[&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:scale-100 [&.is-visible]:translate-x-0")}>
      {children}
    </div>
  );
};

// 2. Parallax Element (Scroll Progress)
// Uses CSS variables for performance
const ParallaxElement: React.FC<{
  children: React.ReactNode;
  className?: string;
  speed?: number; // Negative for reverse direction
}> = ({ children, className, speed = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrollProgress = 1 - (rect.bottom / (window.innerHeight + rect.height));
      // Only update if in view (with some buffer)
      if (scrollProgress > -0.5 && scrollProgress < 1.5) {
        element.style.setProperty('--scroll-offset', `${scrollProgress * 100 * speed}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calc
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)} style={{ transform: 'translateY(var(--scroll-offset, 0px))' }}>
      {children}
    </div>
  );
};

// 3. Marquee Component
const Marquee: React.FC<{ children: React.ReactNode; direction?: 'left' | 'right'; speed?: number }> = ({ children, direction = 'left', speed = 20 }) => {
    return (
        <div className="flex overflow-hidden whitespace-nowrap w-full select-none bg-black py-4 border-y-4 border-white">
            <div className={cn("flex min-w-full shrink-0 items-center justify-around gap-10", direction === 'left' ? "animate-marquee" : "animate-marquee-reverse")} style={{ animationDuration: `${speed}s` }}>
                {children}
                {children}
            </div>
            <div aria-hidden="true" className={cn("flex min-w-full shrink-0 items-center justify-around gap-10", direction === 'left' ? "animate-marquee" : "animate-marquee-reverse")} style={{ animationDuration: `${speed}s` }}>
                {children}
                {children}
            </div>
        </div>
    );
};


export default function HomePage() {
  return (
    <div className="w-full bg-primary overflow-clip font-paragraph text-primary-foreground selection:bg-brandaccent selection:text-white">
      
      {/* Custom Styles for specific animations */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
        .text-stroke {
            -webkit-text-stroke: 2px black;
            color: transparent;
        }
        .text-stroke-white {
            -webkit-text-stroke: 2px white;
            color: transparent;
        }
        .clip-wave-bottom {
            clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      {/* Replicating the structure of the inspiration image: Full bleed color, large object left, bold text right */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Abstract shapes/blobs */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-sweetbackground rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-sourbackground rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
        </div>

        <div className="container mx-auto max-w-[120rem] px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Hero Image (The "Can" equivalent) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start order-2 lg:order-1">
              <ParallaxElement speed={-0.2} className="relative z-20">
                <div className="relative w-[300px] md:w-[500px] lg:w-[600px] aspect-[4/5] rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out cursor-pointer group">
                    {/* Sticker effect border */}
                    <div className="absolute inset-0 bg-white rounded-[3rem] scale-105 translate-y-2 shadow-2xl border-4 border-black group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-4 border-black bg-white">
                        <Image
                            src="https://static.wixstatic.com/media/663647_5a9eac63e18f43eb89c91afe1e74c070~mv2.png?originWidth=768&originHeight=960"
                            alt="Step Up Shoes Featured Product"
                            width={800}
                            className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-700"
                        />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -top-6 -right-6 bg-brandaccent text-white w-24 h-24 rounded-full flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
                        <span className="font-heading text-xl text-center leading-none rotate-12">New<br/>Drop!</span>
                    </div>
                </div>
              </ParallaxElement>
            </div>

            {/* Right: Typography (The "Let' Get GoSip" equivalent) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-1 lg:order-2">
                <AnimatedElement animation="slide-in-right" delay={200}>
                    <h1 className="font-heading text-7xl md:text-8xl lg:text-[10rem] leading-[0.9] text-primary-foreground drop-shadow-sm">
                        <span className="block -rotate-2">Step Into</span>
                        <span className="block text-brandaccent rotate-1 ml-4 md:ml-12">Style</span>
                    </h1>
                </AnimatedElement>
                
                <AnimatedElement animation="fade-up" delay={400}>
                    <p className="font-paragraph text-xl md:text-2xl font-bold max-w-xl mt-4 text-primary-foreground/90">
                        Premium footwear crafted by Knox. Designed for comfort, built for the bold.
                    </p>
                </AnimatedElement>

                <AnimatedElement animation="scale-up" delay={600} className="pt-4">
                    <Link 
                        to="/store"
                        className="group relative inline-flex items-center gap-3 bg-brandaccent text-white font-heading text-2xl px-10 py-5 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                        Explore Collection
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </AnimatedElement>
            </div>

          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-20">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                <path d="M0 50C240 100 480 100 720 50C960 0 1200 0 1440 50V100H0V50Z" fill="#FFFFFF"/>
            </svg>
        </div>
      </section>

      {/* --- MARQUEE SECTION --- */}
      <section className="bg-white pb-12">
        <div className="-rotate-1 transform origin-center scale-105">
            <Marquee speed={25} direction="left">
                <span className="text-4xl font-heading text-white mx-8 flex items-center gap-4">
                    <Star className="fill-brandaccent text-brandaccent w-8 h-8" /> FREE SHIPPING OVER PKR 5000
                </span>
                <span className="text-4xl font-heading text-stroke-white mx-8 flex items-center gap-4">
                    <Sparkles className="text-primary w-8 h-8" /> DESIGNED BY KNOX
                </span>
                <span className="text-4xl font-heading text-white mx-8 flex items-center gap-4">
                    <RotateCcw className="text-sourbackground w-8 h-8" /> 7-DAY EASY RETURNS
                </span>
            </Marquee>
        </div>
      </section>

      {/* --- FEATURES GRID (Sticker Style) --- */}
      <section className="w-full bg-white py-20 md:py-32 relative">
        <div className="mx-auto max-w-[120rem] px-4">
            <AnimatedElement className="text-center mb-20">
                <h2 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6">
                    Why Step Up?
                </h2>
                <div className="w-32 h-2 bg-brandaccent mx-auto rounded-full" />
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {/* Feature 1 */}
                <AnimatedElement delay={100} animation="scale-up">
                    <div className="group relative bg-sweetbackground p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300 rotate-1 hover:rotate-0 h-full flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-white rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-md">
                            <Truck className="w-10 h-10 text-brandaccent" />
                        </div>
                        <h3 className="font-heading text-3xl mb-4">Fast Delivery</h3>
                        <p className="font-paragraph text-lg font-medium leading-relaxed">
                            Get your kicks fast! Free shipping on all orders over PKR 5000. We deliver happiness to your doorstep.
                        </p>
                    </div>
                </AnimatedElement>

                {/* Feature 2 */}
                <AnimatedElement delay={200} animation="scale-up">
                    <div className="group relative bg-primary p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300 -rotate-1 hover:rotate-0 h-full flex flex-col items-center text-center z-10">
                        <div className="w-20 h-20 bg-white rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-md">
                            <CreditCard className="w-10 h-10 text-secondary" />
                        </div>
                        <h3 className="font-heading text-3xl mb-4">Flexible Payment</h3>
                        <p className="font-paragraph text-lg font-medium leading-relaxed">
                            Pay your way. We accept Cash on Delivery, Bank Transfers, and major cards. Secure and simple.
                        </p>
                    </div>
                </AnimatedElement>

                {/* Feature 3 */}
                <AnimatedElement delay={300} animation="scale-up">
                    <div className="group relative bg-sourbackground p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300 rotate-2 hover:rotate-0 h-full flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-white rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-md">
                            <RotateCcw className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-heading text-3xl text-white mb-4">Easy Returns</h3>
                        <p className="font-paragraph text-lg font-medium text-white leading-relaxed">
                            Not the perfect fit? No stress. Return or exchange within 7 days. We want you to love your step.
                        </p>
                    </div>
                </AnimatedElement>
            </div>
        </div>
      </section>

      {/* --- DESIGNER SPOTLIGHT (Sticky/Scroll) --- */}
      <section className="w-full bg-secondary py-24 relative overflow-hidden text-white">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full rotate-180 leading-none">
             <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                <path d="M0 30C240 60 480 60 720 30C960 0 1200 0 1440 30V60H0V30Z" fill="#FFFFFF"/>
            </svg>
        </div>

        <div className="mx-auto max-w-[120rem] px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Content */}
                <div className="space-y-8">
                    <AnimatedElement animation="slide-in-left">
                        <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full font-heading text-lg border-2 border-black mb-4 rotate-[-2deg]">
                            Meet The Creator
                        </div>
                        <h2 className="font-heading text-6xl md:text-8xl mb-6 leading-none">
                            Designed<br/>By <span className="text-primary">Knox</span>
                        </h2>
                    </AnimatedElement>
                    
                    <AnimatedElement animation="fade-up" delay={200}>
                        <p className="font-paragraph text-xl md:text-2xl leading-relaxed opacity-90 max-w-xl">
                            "Every pair of Step Up Shoes is a canvas. We combine artistic vision with functional excellence to create footwear that doesn't just walk—it performs."
                        </p>
                    </AnimatedElement>

                    <AnimatedElement animation="fade-up" delay={400}>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="font-bold">Hand-drawn Concepts</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="font-bold">Premium Materials</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="font-bold">Limited Editions</span>
                            </div>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement animation="scale-up" delay={600} className="pt-6">
                        <Link 
                            to="/about"
                            className="inline-flex items-center gap-2 bg-white text-secondary font-heading text-xl px-8 py-4 rounded-full border-4 border-transparent hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
                        >
                            Read The Story
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </AnimatedElement>
                </div>

                {/* Right: Image Frame */}
                <div className="relative flex justify-center lg:justify-end">
                    <ParallaxElement speed={0.1}>
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Decorative elements behind */}
                            <div className="absolute -top-10 -left-10 w-full h-full bg-brandaccent rounded-[3rem] border-4 border-black rotate-[-6deg]" />
                            <div className="absolute -bottom-10 -right-10 w-full h-full bg-primary rounded-[3rem] border-4 border-black rotate-[6deg]" />
                            
                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-black bg-white shadow-2xl rotate-0 hover:rotate-1 transition-transform duration-500">
                                <Image
                                    src="https://static.wixstatic.com/media/663647_cd6744c7ac2043e6984be46885e26ee6~mv2.png?originWidth=576&originHeight=576"
                                    alt="Knox Designer Portrait"
                                    width={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </ParallaxElement>
                </div>

            </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
             <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                <path d="M0 30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0V30Z" fill="#F7C948"/>
            </svg>
        </div>
      </section>

      {/* --- CTA / FOOTER PREVIEW --- */}
      <section className="w-full bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
            <AnimatedElement animation="scale-up">
                <div className="bg-white p-12 md:p-16 rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
                    {/* Decorative floating icons */}
                    <div className="absolute -top-8 -left-8 w-16 h-16 bg-sourbackground rounded-full border-4 border-black flex items-center justify-center animate-bounce">
                        <Star className="text-white w-8 h-8" />
                    </div>
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-sweetbackground rounded-full border-4 border-black flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                        <Sparkles className="text-white w-8 h-8" />
                    </div>

                    <h2 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6">
                        Ready to Step Up?
                    </h2>
                    <p className="font-paragraph text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Don't just walk. Strut. Browse our complete collection of premium footwear and find your perfect pair today.
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link 
                            to="/store"
                            className="inline-flex items-center gap-2 bg-brandaccent text-white font-heading text-2xl px-10 py-5 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                        >
                            Shop Now
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                        <Link 
                            to="/return-policy"
                            className="inline-flex items-center gap-2 bg-transparent text-primary-foreground font-heading text-xl px-8 py-4 rounded-full hover:bg-gray-100 transition-all"
                        >
                            View Return Policy
                        </Link>
                    </div>
                </div>
            </AnimatedElement>
        </div>
      </section>

    </div>
  );
}