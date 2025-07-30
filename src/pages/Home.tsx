import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TourCard from '@/components/TourCard';
import { tours } from '@/data/tours';
import { Link } from 'react-router-dom';
import { Star, Users, MapPin, Shield } from 'lucide-react';
import heroKashmir from '@/assets/hero-kashmir.jpg';

const Home = () => {
  const featuredTours = tours.filter(tour => tour.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroKashmir})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-deep-orange/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Explore Incredible
            <span className="block bg-gradient-to-r from-gold to-sunset bg-clip-text text-transparent">
              India
            </span>
            with Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover the beauty, culture, and adventure that India has to offer with our expertly crafted tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours">
              <Button size="lg" className="bg-gradient-to-r from-saffron to-deep-orange hover:from-deep-orange hover:to-saffron text-lg px-8 py-3">
                Explore Tours
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide unforgettable travel experiences with personalized service and local expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-saffron to-deep-orange rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Expert Guides</h3>
                <p className="text-muted-foreground">
                  Our experienced local guides ensure you get authentic insights and hidden gems
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-forest-green rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Small Groups</h3>
                <p className="text-muted-foreground">
                  Intimate group sizes for personalized attention and better cultural immersion
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-sunset rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Safe Travel</h3>
                <p className="text-muted-foreground">
                  Your safety is our priority with comprehensive insurance and 24/7 support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Tour Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular destinations and create memories that last a lifetime
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/tours">
              <Button size="lg" className="bg-gradient-to-r from-saffron to-deep-orange hover:from-deep-orange hover:to-saffron">
                View All Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-deep-orange text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Tour Packages</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-white/80">Destinations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you create unforgettable memories exploring the incredible beauty of India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours">
              <Button size="lg" className="bg-gradient-to-r from-saffron to-deep-orange hover:from-deep-orange hover:to-saffron">
                Browse Tours
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;