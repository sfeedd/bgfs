import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Calendar } from "lucide-react";

export function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Thunder FC Wins Regional Championship",
      excerpt: "Our team secured the regional championship with a dominant 4-1 victory over rivals Lightning FC in the final match.",
      date: "2025-08-10",
      category: "Match Result",
      image: "https://images.unsplash.com/photo-1551390415-0de411440ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1MTgwNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "New Training Facility Opens",
      excerpt: "Thunder FC unveils state-of-the-art training facility with modern equipment and professional-grade futsal courts.",
      date: "2025-08-05",
      category: "Club News",
      image: "https://images.unsplash.com/photo-1581588535512-4dbe198fbbee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtJTIwbGlnaHRzfGVufDF8fHx8MTc1NTIyMzAyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Player of the Month: Diego Santos",
      excerpt: "Midfielder Diego Santos has been awarded Player of the Month for July after scoring 8 goals and providing 5 assists.",
      date: "2025-08-01",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1677119966332-8c6e9fb0efab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBhY3Rpb258ZW58MXx8fHwxNzU1MjIzMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      title: "Youth Academy Tryouts Open",
      excerpt: "Thunder FC announces open tryouts for the youth academy program. Applications are now being accepted for ages 12-18.",
      date: "2025-07-28",
      category: "Academy",
      image: "https://images.unsplash.com/photo-1680537732560-7dd5f9b1ed53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBpbmRvb3IlMjBzb2NjZXJ8ZW58MXx8fHwxNzU1MjIzMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Match Result":
        return "bg-green-100 text-green-800";
      case "Club News":
        return "bg-blue-100 text-blue-800";
      case "Awards":
        return "bg-yellow-100 text-yellow-800";
      case "Academy":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section id="news" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Latest News</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, match results, and announcements from Thunder Futsal Club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    index === 0 ? 'h-64' : 'h-48'
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.date)}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View All News →
          </a>
        </div>
      </div>
    </section>
  );
}