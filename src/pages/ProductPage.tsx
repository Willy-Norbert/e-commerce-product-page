import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductView from "../components/ProductView";
import ReviewSection from "../components/ReviewSection";
import RelatedProducts from "../components/RelatedProducts";
import { products } from "../data/products";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/ui/footer";

// Default review image
const DEFAULT_REVIEW_IMAGE =
  "https://swahilimarket.com/wp-content/uploads/2020/06/AkabangaFullbox.jpg";

// Define Review type to match ReviewSection
interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  images: string[];
  userImage: string;
  helpfulCount: number;
  verified: boolean;
}

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [productReviews, setProductReviews] = useState<Review[]>([]);

  // Find the product
  const product = products.find((p) => p.id === productId);

  // Redirect to 404 if product not found
  useEffect(() => {
    if (!product && productId) {
      navigate("/not-found");
    }
  }, [product, productId, navigate]);

  // Fetch reviews from local storage
  useEffect(() => {
    if (product) {
      const storedReviews = localStorage.getItem(`reviews-${product.id}`);
      if (storedReviews) {
        setProductReviews(JSON.parse(storedReviews));
      } else {
        // If no reviews exist, store the default review
        const defaultReviews: Review[] = [
          {
            id: Math.random().toString(36).substr(2, 9),
            userName: "Anonymous",
            rating: 5,
            date: new Date().toISOString(),
            title: "Great Product!",
            content: "I love this product! Highly recommended.",
            images: [product.images[0] || DEFAULT_REVIEW_IMAGE], // ✅ Fix
            userImage: "https://via.placeholder.com/40",
            helpfulCount: 0,
            verified: false,
          },
        ];
        localStorage.setItem(`reviews-${product.id}`, JSON.stringify(defaultReviews));
        setProductReviews(defaultReviews);
      }
    }
  }, [product]);

  // Function to handle new review submission
  const handleNewReview = (newReview: Review) => {
    const updatedReviews = [...productReviews, newReview];
    setProductReviews(updatedReviews);
    localStorage.setItem(`reviews-${product?.id}`, JSON.stringify(updatedReviews));
  };

  // Show loading screen if product is still undefined
  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="py-10 bg-muted"></section>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <ProductView product={product} />
        <Separator className="max-w-7xl mx-auto" />

        {/* Pass handleNewReview function */}
        <ReviewSection
          reviews={productReviews}
          productName={product.name}
          onAddReview={handleNewReview}
        />

        <Separator className="max-w-7xl mx-auto" />
        <RelatedProducts products={products} currentProductId={product.id} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
