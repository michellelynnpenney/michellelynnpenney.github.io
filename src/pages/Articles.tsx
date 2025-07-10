
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "The Tale of the Des/Dev Alliance",
      description: "This is the story of how magic happens when design and development don't just coexist but truly join forces together.",
      readTime: "8 min read",
      date: "Jul 15, 2025",
      category: "Case Study",
      image: "/desdev.png",
      featured: true,
    },
    {
      id: 2,
      title: "Becoming a Design Workshop Facilitator",
      description: "A workshop facilitator is a role that is in service to the workshop attendees, and indirectly, the end user we are collectively striving to build a better experience for.",
      readTime: "5 min read",
      date: "Mar 20, 2025",
      category: "Workshop",
      image: "/workshop.png",
      url: "https://www.linkedin.com/pulse/becoming-design-workshop-facilitator-michelle-sargent-ri2pe/",
      featured: true,
    },
    {
      id: 3,
      title: "Article Coming Soon...",
      description: "More articles are on the way! Stay tuned for insights on design, development, and user experience.",
      readTime: "X min read",
      date: "TBD",
      category: "Accessibility",
      featured: false,
    },
    {
      id: 4,
      title: "Article Coming Soon...",
      description: "More articles are on the way! Stay tuned for insights on design, development, and user experience.",
      readTime: "X min read",
      date: "TBD",
      category: "UX Design",
      featured: false,
    },
    {
      title: "Article Coming Soon...",
      description: "More articles are on the way! Stay tuned for insights on design, development, and user experience.",
      readTime: "X min read",
      date: "TBD",
      category: "Research",
      featured: false,
    },
    {
      id: 6,
      title: "Article Coming Soon...",
      description: "More articles are on the way! Stay tuned for insights on design, development, and user experience.",
      readTime: "X min read",
      date: "TBD",
      category: "Development",
      featured: false,
    },
    {
      id: 7,
      title: "Article Coming Soon...",
      description: "More articles are on the way! Stay tuned for insights on design, development, and user experience.",
      readTime: "X min read",
      date: "TBD",
      category: "UI Design",
      featured: false,
    },
    {
      id: 8,
      title: "Article Coming Soon...",
      description: "More articles are on the way! Stay tuned for insights on design, development, and user experience.",
      readTime: "X min read",
      date: "TBD",
      category: "Prototyping",
      featured: false,
    },
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Design Systems": "bg-blue-100 text-blue-800",
      "Career": "bg-green-100 text-green-800",
      "Accessibility": "bg-purple-100 text-purple-800",
      "UX Design": "bg-pink-100 text-pink-800",
      "Research": "bg-orange-100 text-orange-800",
      "Development": "bg-indigo-100 text-indigo-800",
      "UI Design": "bg-teal-100 text-teal-800",
      "Prototyping": "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Articles & Insights
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Thoughts on design, development, and the intersection of creativity and technology. 
            Sharing what I've learned along the way.
          </p>
        </div>

        

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <span className="w-1 h-6 bg-blue-600 mr-3"></span>
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover-scale group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <span className="w-1 h-6 bg-indigo-600 mr-3"></span>
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover-scale group border-0 shadow-md hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-slate-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                    <span className="text-slate-400">{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Articles;
