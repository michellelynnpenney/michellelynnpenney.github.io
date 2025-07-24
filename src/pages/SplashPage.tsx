
import { ArrowRight, Sparkles, Palette, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%236366f1%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Michelle
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              A passionate <strong>Full-stack Designer</strong> crafting beautiful, 
              intuitive digital experiences that bridge the gap between design and development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="hover-scale group">
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <Link to="/resume">
                  See Resume
                </Link>
              </Button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 opacity-20 animate-bounce">
              <Sparkles className="h-8 w-8 text-purple-500" />
            </div>
            <div className="absolute top-32 right-16 opacity-20 animate-bounce delay-1000">
              <Palette className="h-6 w-6 text-blue-500" />
            </div>
            <div className="absolute bottom-32 left-20 opacity-20 animate-bounce delay-500">
              <Code className="h-7 w-7 text-indigo-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What I Do Best
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Combining design thinking with technical expertise to create exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover-scale">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">UX/UI Design</h3>
              <p className="text-slate-600">
                Creating intuitive interfaces and seamless user journeys through research-driven design.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover-scale">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Frontend Development</h3>
              <p className="text-slate-600">
                Bringing designs to life with clean, performant code using modern web technologies.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl hover-scale">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">User Research</h3>
              <p className="text-slate-600">
                Understanding user needs through testing, interviews, and data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Ready to discuss your next project? I'd love to hear about it.
          </p>
          <Button asChild size="lg" variant="secondary" className="hover-scale">
            <a href="mailto:michellelynnpenney@gmail.com">
              Get In Touch
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SplashPage;
