import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/ui/footer';
import { products, featuredProduct } from '../data/products';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      <section className="py-12 bg-muted">

      </section>

      {/* Feutured products Secdion */}
      <section className=" bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <hr className='bg-slate-900' />
            <Button variant="ghost" className="flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
 
      
     <Footer />
    </div>
  );
};

export default Index;
