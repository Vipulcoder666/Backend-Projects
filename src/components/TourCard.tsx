import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, MapPin, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TourCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  location: string;
  groupSize: string;
  featured?: boolean;
}

const TourCard = ({
  id,
  title,
  description,
  image,
  duration,
  price,
  location,
  groupSize,
  featured = false
}: TourCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <Badge className="absolute top-4 left-4 bg-saffron text-white">
            Popular
          </Badge>
        )}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
          <div className="flex items-center text-sm font-semibold">
            <IndianRupee className="h-4 w-4" />
            <span>{price.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-saffron transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{groupSize}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 space-y-3">
        <div className="w-full space-y-2">
          <Link to={`/tours/${id}`} className="block">
            <Button variant="outline" className="w-full border-saffron text-saffron hover:bg-saffron hover:text-white">
              View Details
            </Button>
          </Link>
          <Link to={`/book/${id}`} className="block">
            <Button className="w-full bg-gradient-to-r from-saffron to-deep-orange hover:from-deep-orange hover:to-saffron">
              Book Now
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TourCard;