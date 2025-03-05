
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface CartButtonProps {
  productId: string;
  productName: string;
  productPrice: number;
  className?: string;
}

const CartButton: React.FC<CartButtonProps> = ({ 
  productId, 
  productName, 
  productPrice, 
  className 
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    setIsAdding(true);
    
    setTimeout(() => {
      // Get the current cart from localStorage
      const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
      
      // Check if the product is already in the cart
      const existingProductIndex = currentCart.findIndex(
        (item: any) => item.id === productId
      );
      
      if (existingProductIndex >= 0) {
        // Update quantity if product exists
        currentCart[existingProductIndex].quantity += quantity;
      } else {
        // Add new product to cart
        currentCart.push({
          id: productId,
          name: productName,
          price: productPrice,
          quantity: quantity
        });
      }
      
      // Save updated cart
      localStorage.setItem('cart', JSON.stringify(currentCart));
      
      // Dispatch event to notify other components of cart update
      window.dispatchEvent(new Event('cart-updated'));
      
      // Show success message
      setIsAdding(false);
      setIsAdded(true);
      
      toast({
        title: "Added to cart",
        description: `${quantity} × ${productName} added to your cart`,
      });
      
      // Reset button state after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 600);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      {/* Quantity Selector */}
      <div className="flex items-center justify-center rounded-full border p-1">
        <Button 
          type="button"
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 rounded-full"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          <Minus size={16} />
        </Button>
        <span className="w-8 text-center">{quantity}</span>
        <Button 
          type="button"
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 rounded-full"
          onClick={increaseQuantity}
        >
          <Plus size={16} />
        </Button>
      </div>
      
      <Button 
        type="button"
        className={`w-full ${isAdded ? 'bg-rwanda-green hover:bg-rwanda-green/90' : 'bg-rwanda-blue hover:bg-rwanda-blue/90'} text-white flex items-center justify-center gap-2 overflow-hidden relative group transition-all duration-300`}
        disabled={isAdding}
        onClick={handleAddToCart}
      >
        {isAdding ? (
          <span className="animate-pulse">Adding...</span>
        ) : isAdded ? (
          <>
            <Check size={18} className="animate-fade-in" />
            <span>Added to Cart</span>
          </>
        ) : (
          <>
            <ShoppingCart size={18} className="group-hover:translate-x-1 transition-transform" />
            <span>Add to Cart</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default CartButton;
