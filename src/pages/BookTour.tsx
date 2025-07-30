import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Users, IndianRupee, MapPin, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { tours } from '@/data/tours';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const BookTour = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const tour = tours.find(t => t.id === id);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    numberOfGuests: '2',
    travelDate: undefined as Date | undefined,
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!tour) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-8">The tour you're trying to book doesn't exist.</p>
          <Link to="/tours">
            <Button className="bg-gradient-to-r from-saffron to-deep-orange hover:from-deep-orange hover:to-saffron">
              View All Tours
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.travelDate) {
      toast({
        title: "Please select a travel date",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate booking submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Booking Submitted Successfully!",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      numberOfGuests: '2',
      travelDate: undefined,
      specialRequests: ''
    });
    setIsSubmitting(false);
  };

  const totalPrice = tour.price * parseInt(formData.numberOfGuests);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-deep-orange text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Book Your Tour</h1>
          <p className="text-xl opacity-90">Complete your booking for an incredible experience</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Booking Details</CardTitle>
                <p className="text-muted-foreground">
                  Please fill in your details to complete the booking
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
                    
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Travel Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Travel Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Number of Guests *
                        </label>
                        <Select value={formData.numberOfGuests} onValueChange={(value) => setFormData(prev => ({ ...prev, numberOfGuests: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[...Array(10)].map((_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString()}>
                                {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Preferred Travel Date *
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !formData.travelDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.travelDate ? format(formData.travelDate, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.travelDate}
                              onSelect={(date) => setFormData(prev => ({ ...prev, travelDate: date }))}
                              disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
                      Special Requests (Optional)
                    </label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Any dietary requirements, accessibility needs, or special occasions..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-saffron to-deep-orange hover:from-deep-orange hover:to-saffron"
                    size="lg"
                  >
                    {isSubmitting ? "Processing Booking..." : "Submit Booking Request"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our terms and conditions. 
                    We'll contact you within 24 hours to confirm your booking.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2">{tour.title}</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {tour.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      {tour.groupSize}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Price per person:</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4" />
                        <span>{tour.price.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Number of guests:</span>
                      <span>{formData.numberOfGuests}</span>
                    </div>
                    {formData.travelDate && (
                      <div className="flex justify-between">
                        <span>Travel date:</span>
                        <span>{format(formData.travelDate, "MMM dd, yyyy")}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount:</span>
                    <div className="flex items-center text-saffron">
                      <IndianRupee className="h-5 w-5" />
                      <span>{totalPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    * Final price may vary based on availability and season
                  </p>
                </div>

                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What's Next?</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• We'll review your booking request</li>
                    <li>• Confirm availability for your dates</li>
                    <li>• Send payment instructions</li>
                    <li>• Provide detailed itinerary</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Need Help?</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Phone:</span>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Email:</span>
                    <span>bookings@incredibleindiatours.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">WhatsApp:</span>
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTour;