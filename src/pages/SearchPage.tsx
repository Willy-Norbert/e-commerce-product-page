import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { products } from '../data/products';
import ProductCard from '@/components/ProductCard';
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowLeft } from 'lucide-react';
import Footer from '@/components/ui/footer';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // All available categories from products
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Filter products based on search query and category
  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProducts(filtered);
    
    // Update URL params
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory) params.set('category', selectedCategory);
    
    const newUrl = `${location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [searchQuery, selectedCategory, location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Already handled in the useEffect
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    navigate('/search');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24  px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Button variant="ghost" onClick={() => navigate('/')} className="p-2">
              <ArrowLeft size={18} />
            </Button>
            <h1 className="text-2xl font-bold">Search Products</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Filters panel */}
            <div className="bg-muted p-4 rounded-lg">
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Button 
                        variant={!selectedCategory ? "default" : "outline"}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory('')}
                      >
                        All Categories
                      </Button>
                    </div>
                    
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <Button 
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            </div>
            
            {/* Results panel */}
            <div className="md:col-span-3">
              <form onSubmit={handleSearch} className="mb-6 flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
              
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} found
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory && ` in ${selectedCategory}`}
                </p>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl font-medium mb-2">No products found</p>
                  <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
     < Footer />
    </div>
  );
};

export default SearchPage;
