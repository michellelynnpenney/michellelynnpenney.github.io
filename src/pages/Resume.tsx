
import { Download, BriefcaseBusiness, Mail, Linkedin, Github, MapPin, GraduationCap, Calendar, Infinity, Award, Code, Palette, Users, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  const skills = {
    design: ["Figma", "Prototyping", "User Research", "Wireframing", "Adobe Creative Suite"],
    development: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Node.js"],
    tools: ["Git", "Storybook", "VS Code", "Jira", "Confluence", "Miro", "MS Office"],
    methods: ["Agile", "Design Thinking", "User Testing", "A/B Testing", "Accessibility"]
  };

  const experience = [
    {
      title: "Senior Product Designer",
      company: "Cisco Systems",
      period: "2022 - Present",
      description: "Leads design for Cisco IT's Insights Center application serving 90K+ internal users.",
      achievements: [
        "Reduced development time by 40% through des/dev implementation practices",
        "Improved Product Owner satisfaction scores by 25% through UX research initiatives",
        "Led design for cross-functional team"
      ]
    },
    {
      title: "Program Designer",
      company: "IBM",
      period: "2021 - 2022",
      description: "Led the design for Learning from Incidents program, enhancing resilience engineering practices for 10K+ employees.",
      achievements: [
        "Designed and developed website, videos, and training materials",
        "Conducted user research with 100+ participants",
        "Maintained accessibility compliance (WCAG 2.1 AA) across all materials",
      ]
    },
    {
      title: "Chief of Staff",
      company: "IBM",
      period: "2019 - 2022",
      description: "Strategic advisor for VP of Design, managing design operations and team alignment.",
      achievements: [
        "Facilitated OKR alignment across 10+ teams",
        "Point of contact for executive leadership on design initiatives",
        "Mentored 3 junior designers in modern design and multimedia practices"
      ]
    },
        {
      title: "Associate Visual Designer",
      company: "IBM",
      period: "2016 - 2019",
      description: "Specialized in creating design deliverables for diverse client portfolio.",
      achievements: [
        "Created storyboards and videos for client presentations",
        "Collaborated with cross-functional teams to deliver high-quality design solutions",
        "Developed interactive prototypes for user testing and feedback"
      ]
    },
        {
      title: "Digital Marketing Specialist",
      company: "The Hartford Financial Services Group",
      period: "2014 - 2016",
      description: "Specialized in coding, creating, and testing email campaigns.",
      achievements: [
        "Deployed 100+ email campaigns with 98% deliverability",
        "Conducted A/B testing to optimize open rates by 20%",
        "Coded with dynamic content for personalized user experiences"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Fine Arts",
      school: "University of Connecticut",
      year: "2014",
      details: "Minor in Digital Media"
    }
  ];

  const certifications = [
    "HarvardX CS50 Intro to Computer Science",
    "Google Cloud Conversational AI",
    "IBM F&O Management Assessment Program",
    "WorkBoard OKR Expert",
    "IBM Agile Iteration Management",
    "IBM Design Thinking Practitioner",
    "General Assembly: UX Design Immersive",
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
            Full-stack Designer
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:michellelynnpenney@gmail.com" className="hover:text-blue-600 transition-colors">
                michellelynnpenney@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>NYC Metropolitan Area</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-2" />
              <a href="https://www.linkedin.com/in/michellelynnsargent/" className="hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Github className="h-4 w-4 mr-2" />
              <a href="https://github.com/michellelynnpenney/" className="hover:text-blue-600 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          <Button size="lg" className="hover-scale">
            <Download className="h-4 w-4 mr-2" />
            <a href="/Michelle-Sargent_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Download PDF Resume</a>
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
              Michelle has a decade of experience at the intersection of design, technology, and human-centered innovation. With a strong foundation in UI/UX Design and a passion for creating transformative internal experiences, Michelle leads cross-functional teams to shape intuitive, scalable, and inclusive solutions for Cisco's global workforce. <br></br><br></br> Whether coding alongside engineering partners, reviewing PRs, mentoring emerging talent, facilitating agile ceremonies, or advocating for the end user, Michelle brings energy, empathy, and excellence to everything she does.
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
                 <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Wrench className="h-4 w-4 mr-2 text-green-600" />
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Infinity className="h-4 w-4 mr-2 text-orange-600" />
                  Methodologies & Practices
                </h4>
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
              <BriefcaseBusiness className="h-5 w-5 mr-2 text-blue-600" />
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
                <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
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

export default Resume;
