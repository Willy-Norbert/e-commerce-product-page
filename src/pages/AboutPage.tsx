import React from 'react';
import Navbar from '../components/Navbar';
import { Separator } from "@/components/ui/separator";
import Footer from '@/components/ui/footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Irabaruta Shop</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Irabaruta Shop was founded in 2018 with a simple mission: to share the beautiful craftsmanship of Rwandan artisans with the world while ensuring fair compensation and sustainable business practices.
              </p>
              <p className="text-muted-foreground mb-4">
                What began as a small market stall in Kigali has grown into an internationally recognized brand, connecting skilled artisans with customers who appreciate handcrafted quality and cultural authenticity.
              </p>
              <p className="text-muted-foreground">
                Each product tells a story - of Rwanda's rich artistic heritage, of individual artisans and their communities, and of the path toward economic empowerment through traditional craftsmanship.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden h-80">
              <img 
                src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212" 
                alt="Artisans at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <Separator className="my-10" />
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Quality Craftsmanship</h3>
                <p className="text-muted-foreground">
                  We believe in the exceptional quality of handmade items. Each product in our collection is crafted with skill, attention to detail, and pride in Rwandan artisanal traditions.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Fair Trade</h3>
                <p className="text-muted-foreground">
                  We ensure all artisans receive fair compensation for their work. By eliminating middlemen and working directly with cooperatives, we maximize the economic benefit to the creators.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  From materials to packaging, we prioritize environmental sustainability. We use locally sourced, renewable materials and minimize waste throughout our supply chain.
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-10" />
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Meet Our Artisans</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3" 
                    alt="Artisan portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Mutoni Grace</h3>
                <p className="text-sm text-muted-foreground">Master Weaver, Gahaya Links</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1508440767412-59ce0b206bbc" 
                    alt="Artisan portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Nshimiyimana Jean</h3>
                <p className="text-sm text-muted-foreground">Woodcarver, Urugero Crafts</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1499155286265-79a9dc9c6380" 
                    alt="Artisan portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Uwase Claudine</h3>
                <p className="text-sm text-muted-foreground">Imigongo Artist, Nyakarambi Collective</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      

      <Footer />
    </div>
  );
};

export default AboutPage;
