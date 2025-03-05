import React, { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Define Review type
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

interface ReviewSectionProps {
  reviews: Review[];
  productName: string;
  onAddReview: (newReview: Review) => void; // Function to add a new review
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, productName, onAddReview }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting your review.",
        variant: "destructive",
      });
      return;
    }

    if (reviewText.trim().length < 10) {
      toast({
        title: "Review Too Short",
        description: "Please write a review with at least 10 characters.",
        variant: "destructive",
      });
      return;
    }

    // Create new review object
    const newReview: Review = {
      id: Math.random().toString(36).substr(2, 9),
      userName: "Anonymous",
      rating,
      date: new Date().toISOString(),
      title: "New Review",
      content: reviewText,
      images: [],
      userImage: "https://via.placeholder.com/40",
      helpfulCount: 0,
      verified: true,
    };

    // Call parent function to update reviews
    onAddReview(newReview);

    toast({
      title: "Review Submitted",
      description: "Thank you for your review! It has been posted.",
    });

    // Reset form
    setReviewText("");
    setRating(0);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4" id="reviews">
      <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-card rounded-xl p-6 border shadow-sm">
            <div className="flex items-start space-x-3">
              <Avatar>
                <AvatarImage src={review.userImage} alt={review.userName} />
                <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">{review.userName}</h4>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} className={star <= review.rating ? "fill-yellow-500" : "text-gray-300"} />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-2">{review.content}</p>
          </div>
        ))}
      </div>

      {/* Add New Review Form */}
      <div className="mt-8 pt-8 border-t">
        <h3 className="text-xl font-semibold mb-4">Write a Review for {productName}</h3>
        <form onSubmit={handleReviewSubmit}>
          {/* Star Rating Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Rating*</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-1 focus:outline-none"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    size={24}
                    className={star <= (hoveredRating || rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Text Input */}
          <Textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
            className="w-full"
            rows={5}
          />

          {/* Submit Button */}
          <Button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewSection;
