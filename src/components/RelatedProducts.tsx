
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface RelatedProductsProps {
  products: Product[];
  currentProductId: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, currentProductId }) => {
  const { toast } = useToast();
  
  // Filter out the current product
  const relatedProducts = products.filter(product => product.id !== currentProductId).slice(0, 4);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'RWF'
    }).format(price);
  };
  
  const handleAddToCart = (product: Product) => {
    // Get the current cart from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if the product is already in the cart
    const existingProductIndex = currentCart.findIndex(
      (item: any) => item.id === product.id
    );
    
    if (existingProductIndex >= 0) {
      // Update quantity if product exists
      currentCart[existingProductIndex].quantity += 1;
    } else {
      // Add new product to cart
      currentCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
    
    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
    // Dispatch event to notify other components of cart update
    window.dispatchEvent(new Event('cart-updated'));
    
    // Show success message
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
    });
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1 border">
            <div className="relative aspect-square overflow-hidden">
              {product.isNew && (
                <Badge className="absolute top-2 left-2 z-10 bg-rwanda-green text-white">
                  New
                </Badge>
              )}
              {product.originalPrice && (
                <Badge className="absolute top-2 right-2 z-10 bg-rwanda-yellow text-foreground">
                  Sale
                </Badge>
              )}
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"></div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{product.vendor}</span>
                <div className="flex items-center">
                  <Star size={14} className="fill-rwanda-yellow text-rwanda-yellow" />
                  <span className="text-sm ml-1">{product.rating}</span>
                </div>
              </div>
              
              <h3 className="font-medium text-base mb-1 line-clamp-1">{product.name}</h3>
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 rounded-full"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
