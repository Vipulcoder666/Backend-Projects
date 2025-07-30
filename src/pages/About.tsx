import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Heart, Star, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for India",
      description: "We are passionate about showcasing the incredible diversity and beauty of our homeland."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction and safety are our top priorities in everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in service delivery and creating unforgettable experiences."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We promote responsible tourism that benefits local communities and preserves culture."
    }
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      experience: "15+ years in tourism",
      speciality: "Heritage & Culture Tours"
    },
    {
      name: "Priya Patel",
      role: "Operations Director",
      experience: "12+ years experience",
      speciality: "Adventure & Trekking"
    },
    {
      name: "Amit Kumar",
      role: "Guest Relations Manager",
      experience: "10+ years experience",
      speciality: "Customer Service"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-deep-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Your trusted partner in exploring the incredible beauty, rich culture, and diverse experiences that India has to offer
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <Badge className="bg-saffron text-white mb-8">Est. 2009</Badge>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Incredible India Tours was born from a simple yet powerful vision: to share the magic of India with travelers from around the world. Founded in 2009 by a group of passionate travel enthusiasts, we started as a small family business with big dreams.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Over the years, we have grown from organizing local trips to becoming one of India's most trusted travel agencies. Our journey has been marked by countless smiles, unforgettable memories, and lasting friendships formed along the way.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Today, we are proud to have served over 5,000 happy travelers, covering more than 25 destinations across India. From the snow-capped peaks of the Himalayas to the pristine beaches of Goa, from the royal palaces of Rajasthan to the serene backwaters of Kerala, we have been creating magical experiences for over 15 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-saffron to-deep-orange rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide authentic, safe, and memorable travel experiences that showcase the true essence of India while supporting local communities and preserving cultural heritage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-forest-green rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be India's leading travel agency, recognized for our commitment to excellence, sustainability, and creating transformative travel experiences that connect people and cultures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape every experience we create
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-saffron to-deep-orange rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to making your travel dreams come true
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <CardContent className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-saffron to-deep-orange rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-saffron font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                    <Badge variant="outline" className="mt-2">{member.speciality}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Incredible India Tours?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground">Deep knowledge of Indian culture, traditions, and hidden gems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Personalized Service</h3>
                  <p className="text-muted-foreground">Customized itineraries tailored to your preferences and interests</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock assistance during your journey</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Best Value</h3>
                  <p className="text-muted-foreground">Competitive pricing with no compromise on quality</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Safety First</h3>
                  <p className="text-muted-foreground">Comprehensive safety measures and emergency protocols</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Sustainable Tourism</h3>
                  <p className="text-muted-foreground">Committed to responsible travel practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;