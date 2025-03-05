
import React, { useState } from 'react';
import { Star, Heart, Share2, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import ProductGallery from "./ProductGallery";
import CartButton from "./CartButton";
import { Product } from "@/data/products";

interface ProductViewProps {
  product: Product;
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.value || "");
  const [isFavorite, setIsFavorite] = useState(false);
  
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

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Gallery */}
        <div className="w-full">
          <ProductGallery images={product.images} productName={product.name} />
        </div>
        
        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          {/* Product Title and Badges */}
          <div>
            {product.isNew && (
              <Badge className="mb-2 bg-rwanda-green text-white">New Arrival</Badge>
            )}
            {discount > 0 && (
              <Badge className="mb-2 ml-2 bg-rwanda-yellow text-foreground">
                Save {discount}%
              </Badge>
            )}
            <h1 className="text-3xl font-bold">{product.name}</h1>
            
            {/* Vendor and Rating */}
            <div className="flex items-center mt-2 space-x-4">
              <span className="text-muted-foreground">{product.vendor}</span>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={cn(
                        star <= product.rating
                          ? "fill-rwanda-yellow text-rwanda-yellow"
                          : "text-muted stroke-muted-foreground fill-none"
                      )}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.reviewCount} reviews
                </span>
              </div>
            </div>
          </div>
          
          {/* Price */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Short Description */}
          <p className="text-muted-foreground">{product.shortDescription}</p>
          
          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3">Color: {product.colors.find(c => c.value === selectedColor)?.name}</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 transition-all duration-200 flex items-center justify-center",
                      selectedColor === color.value
                        ? "border-primary"
                        : "border-transparent"
                    )}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                    aria-label={`Select ${color.name} color`}
                  >
                    {selectedColor === color.value && (
                      <Check 
                        size={16} 
                        className={`text-${getTextColor(color.value)}`} 
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">Size: {selectedSize}</h3>
                <button className="text-sm text-primary">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={cn(
                      "px-3 py-1.5 rounded-md border transition-all duration-200",
                      selectedSize === size
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-muted-foreground"
                    )}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Availability */}
          <div className="flex items-center text-sm text-muted-foreground">
            <div className={cn(
              "w-2 h-2 rounded-full mr-2",
              product.inStock ? "bg-rwanda-green" : "bg-destructive"
            )}></div>
            {product.inStock ? `In Stock (${product.stockQuantity})` : "Out of Stock"}
          </div>
          
          {/* Add to Cart and Wishlist */}
          <div className="flex space-x-4 mt-2">
            <CartButton 
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              className="flex-1"
            />
            
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full transition-all duration-300",
                isFavorite && "text-destructive border-destructive"
              )}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart 
                size={20} 
                className={cn(isFavorite && "fill-destructive")} 
              />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                // Here you could also show a toast
              }}
            >
              <Share2 size={20} />
            </Button>
          </div>
          
          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="w-full mt-6">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <div className="prose max-w-none text-foreground">
                <p>{product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={16} className="mr-2 text-rwanda-green mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <div className="space-y-4">
                <p>We deliver across all provinces in Rwanda:</p>
                <ul className="space-y-2">
                  <li>Kigali City: 1-2 business days</li>
                  <li>Eastern Province: 2-3 business days</li>
                  <li>Northern Province: 2-3 business days</li>
                  <li>Southern Province: 2-3 business days</li>
                  <li>Western Province: 3-4 business days</li>
                </ul>
                <p>Free shipping on orders over 50,000 RWF.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// Helper function to determine text color based on background color
function getTextColor(hexColor: string): string {
  // For simplicity, we'll use a simple approach
  // Convert hex to RGB and check the brightness
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Calculate perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  // Return white for dark colors, black for light colors
  return brightness > 128 ? "black" : "white";
}

export default ProductView;
