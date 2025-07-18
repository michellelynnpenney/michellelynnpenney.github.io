
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "HarvardX CS50 Final Project",
      description: "Final project submission of a web application that generates random inspirational quotes and allows users to add their own quotes.",
      image: "/quotes.png",
      tags: ["Bootstrap 5", "JavaScript", "Node.js", "SQLite"],
      liveUrl: "https://www.youtube.com/watch?v=jAODOdZIjYQ",
      codeUrl: "https://github.com/michellelynnpenney/cs50-final-project",
    },
    {
      id: 2,
      title: "Cisco IT Hackathon 2025",
      description: "Team submission that leverages existing intercept surveys, AI provides links and walkthroughs directly into high-friction areas of Cisco's intranet sites.",
      image: "/taskie.png",
      tags: ["Data Science", "Research", "Prototyping", "AI"],
      liveUrl: "https://app.vidcast.io/share/79a1d3f5-b334-4bd6-9b66-e743c6b0e473",
      codeUrl: "https://github.com/cisco-it-hackathon/frictionless-futures-ai",
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in UX design, frontend development, 
            and user-centered problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="hover-scale group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Watch Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 p-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
          <Button size="lg" asChild className="hover-scale">
            <a href="mailto:michellelynnpenney@gmail.com">
              Start a Conversation
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
