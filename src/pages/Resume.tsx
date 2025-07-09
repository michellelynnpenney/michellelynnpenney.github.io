
import { Download, Mail, Linkedin, Github, MapPin, Calendar, Award, Code, Palette, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  const skills = {
    design: ["Figma", "Sketch", "Adobe Creative Suite", "Prototyping", "User Research", "Wireframing"],
    development: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Node.js"],
    tools: ["Git", "Webpack", "Jest", "Storybook", "Jira", "Confluence"],
    methods: ["Agile", "Design Thinking", "User Testing", "A/B Testing", "Accessibility", "Performance"]
  };

  const experience = [
    {
      title: "Senior UX Engineer",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      description: "Leading design system development and UX engineering for enterprise SaaS platform serving 50K+ users.",
      achievements: [
        "Reduced development time by 40% through design system implementation",
        "Improved user satisfaction scores by 25% through UX research initiatives",
        "Led cross-functional team of 8 designers and developers"
      ]
    },
    {
      title: "UX Designer & Frontend Developer",
      company: "InnovateLab",
      period: "2020 - 2022",
      description: "Hybrid role focusing on user-centered design and frontend implementation for fintech applications.",
      achievements: [
        "Designed and developed 3 mobile-first web applications",
        "Conducted user research with 200+ participants across 5 projects",
        "Increased conversion rates by 35% through UX optimization"
      ]
    },
    {
      title: "Frontend Developer",
      company: "CreativeWorks Agency",
      period: "2018 - 2020",
      description: "Specialized in creating responsive, accessible websites for diverse client portfolio.",
      achievements: [
        "Delivered 25+ responsive websites with 99.9% uptime",
        "Achieved AA accessibility compliance across all projects",
        "Mentored 3 junior developers in modern frontend practices"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Human-Computer Interaction",
      school: "Carnegie Mellon University",
      year: "2018",
      details: "Focus on User Research and Interface Design"
    },
    {
      degree: "Bachelor of Computer Science",
      school: "University of California, Berkeley",
      year: "2016",
      details: "Minor in Cognitive Science"
    }
  ];

  const certifications = [
    "Google UX Design Professional Certificate",
    "AWS Certified Developer Associate",
    "Certified Usability Analyst (CUA)",
    "Accessibility Developer Certification"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Michelle Sargent
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            UX Engineer & Designer
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:michelle@example.com" className="hover:text-blue-600 transition-colors">
                michelle@example.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-2" />
              <a href="#" className="hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Github className="h-4 w-4 mr-2" />
              <a href="#" className="hover:text-blue-600 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          <Button size="lg" className="hover-scale">
            <Download className="h-4 w-4 mr-2" />
            Download PDF Resume
          </Button>
        </div>

        {/* Summary */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              Passionate UX Engineer with 6+ years of experience bridging the gap between design and development. 
              Specialized in creating user-centered digital experiences through research-driven design and modern 
              frontend technologies. Proven track record of improving user satisfaction, reducing development time, 
              and leading cross-functional teams in fast-paced environments.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Zap className="h-5 w-5 mr-2 text-blue-600" />
              Core Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Palette className="h-4 w-4 mr-2 text-purple-600" />
                  Design
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Code className="h-4 w-4 mr-2 text-blue-600" />
                  Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.development.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Methods & Practices</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.methods.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-100 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                    <p className="text-slate-500 text-sm">{job.period}</p>
                  </div>
                  <p className="text-slate-700 mb-3">{job.description}</p>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Award className="h-5 w-5 mr-2 text-blue-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-slate-900">{edu.degree}</h3>
                    <p className="text-blue-600">{edu.school}</p>
                    <p className="text-slate-500 text-sm">{edu.year}</p>
                    <p className="text-slate-600 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Award className="h-5 w-5 mr-2 text-blue-600" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-slate-700 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
