
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(images.length).fill(false));

  const handleImageLoad = (index: number) => {
    const newLoadedState = [...isLoaded];
    newLoadedState[index] = true;
    setIsLoaded(newLoadedState);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const selectThumbnail = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl border mb-4">
        {images.map((image, index) => (
          <div
            key={`main-${index}`}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            {!isLoaded[index] && (
              <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-t-rwanda-blue border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
              </div>
            )}
            <img
              src={image}
              alt={`${productName} - Image ${index + 1}`}
              className="w-full h-full object-cover"
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur-md border border-border hover:bg-background/80 rounded-full"
          onClick={goToPrevious}
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur-md border border-border hover:bg-background/80 rounded-full"
          onClick={goToNext}
        >
          <ChevronRight size={20} />
        </Button>
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-none py-2">
        {images.map((image, index) => (
          <button
            key={`thumb-${index}`}
            className={cn(
              "relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200",
              currentIndex === index ? "ring-2 ring-rwanda-blue" : "opacity-70 hover:opacity-100"
            )}
            onClick={() => selectThumbnail(index)}
          >
            <img
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
