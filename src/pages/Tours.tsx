import { useState } from 'react';
import TourCard from '@/components/TourCard';
import { tours } from '@/data/tours';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const locations = [...new Set(tours.map(tour => tour.location))];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         tour.location === selectedFilter ||
                         (selectedFilter === 'featured' && tour.featured);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-deep-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Tour Packages</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover amazing destinations across India with our carefully curated tour packages
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Button
                variant={selectedFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('all')}
                className={selectedFilter === 'all' ? 'bg-saffron hover:bg-deep-orange' : ''}
              >
                All Tours
              </Button>
              <Button
                variant={selectedFilter === 'featured' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('featured')}
                className={selectedFilter === 'featured' ? 'bg-saffron hover:bg-deep-orange' : ''}
              >
                Featured
              </Button>
              {locations.map(location => (
                <Button
                  key={location}
                  variant={selectedFilter === location ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter(location)}
                  className={selectedFilter === location ? 'bg-saffron hover:bg-deep-orange' : ''}
                >
                  {location}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredTours.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-muted-foreground">
                  Showing {filteredTours.length} tour{filteredTours.length !== 1 ? 's' : ''}
                  {selectedFilter !== 'all' && ` in ${selectedFilter}`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} {...tour} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No tours found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your search criteria or browse all available tours.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilter('all');
                }}
                className="bg-gradient-to-r from-saffron to-deep-orange hover:from-deep-orange hover:to-saffron"
              >
                Show All Tours
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tours;