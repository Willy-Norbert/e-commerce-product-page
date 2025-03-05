
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toast } = useToast();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'RWF'
    }).format(price);
  };
  
  const calculateDiscount = () => {
    if (!product.originalPrice) return 0;
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  };
  
  const discount = calculateDiscount();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation on button click
    
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

  return (
    <Card className="overflow-hidden group card-hover border">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          {product.isNew && (
            <Badge className="absolute top-2 left-2 z-10 bg-rwanda-green text-white">
              New
            </Badge>
          )}
          
          {discount > 0 && (
            <Badge className="absolute top-2 right-2 z-10 bg-rwanda-yellow text-foreground">
              Save {discount}%
            </Badge>
          )}
          
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">{product.vendor}</span>
            <div className="flex items-center">
              <Star size={14} className="fill-rwanda-yellow text-rwanda-yellow" />
              <span className="text-sm ml-1">{product.rating}</span>
            </div>
          </div>
          
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          
          <p className="text-sm text-muted-foreground mt-1 mb-2 line-clamp-2">
            {product.shortDescription}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
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
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} />
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
