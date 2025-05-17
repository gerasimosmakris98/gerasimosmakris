
import React from 'react';
import { FileText, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-dark-100">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-highlight-purple/20 to-highlight-blue/20 z-0"></div>
              <img 
                src="/placeholder.svg" 
                alt="Gerasimos Makris"
                className="object-cover w-full h-full z-10 mix-blend-luminosity opacity-80"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-200 z-20">
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <MapPin size={18} />
                  <span>Madrid, Spain (Originally from Athens, Greece)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="uppercase tracking-widest text-gray-400 text-sm mb-3 block">
              About Me
            </span>
            <h2 className="heading-lg mb-6">
              Bridging Design & <span className="text-gradient">Social Strategy</span>
            </h2>
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                I'm a passionate web designer and social media manager with a keen eye for modern aesthetics and engaging digital experiences.
              </p>
              <p>
                Originally from Athens, Greece, I now call Madrid my home, bringing a unique Mediterranean perspective to my creative work.
              </p>
              <p>
                My approach combines technical precision with artistic vision, resulting in designs that not only look beautiful but also drive engagement and achieve business goals.
              </p>
              <p>
                With expertise in both design and social media strategy, I help brands establish a cohesive online presence that resonates with their target audience.
              </p>
            </div>
            
            <Button className="bg-highlight-purple hover:bg-highlight-purple/90 mb-8 flex items-center gap-2 transition-all duration-300 hover:scale-105">
              <FileText size={18} />
              Download CV
            </Button>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-4 rounded-lg transition-transform hover:translate-y-[-5px] duration-300">
                <h3 className="text-3xl font-bold mb-2 text-gradient">5+</h3>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="glass-panel p-4 rounded-lg transition-transform hover:translate-y-[-5px] duration-300">
                <h3 className="text-3xl font-bold mb-2 text-gradient">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
