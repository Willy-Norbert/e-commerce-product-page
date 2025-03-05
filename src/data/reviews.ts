
export interface Review {
  id: string;
  productId: string;
  userName: string;
  userImage?: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpfulCount: number;
  verified: boolean;
  images?: string[];
}

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "p4", // Peace Basket
    userName: "Mugisha Jean",
    rating: 5,
    title: "Beautiful craftsmanship!",
    content: "I purchased this peace basket as a gift for my sister who lives abroad, and she was absolutely thrilled with it. The craftsmanship is exceptional, and the colors are even more vibrant than they appear in the photos. I appreciate that it came with information about the women who made it and their cooperative. A truly meaningful piece of Rwanda to share with others.",
    date: "2023-05-12",
    helpfulCount: 14,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1551477279-7cab5d9e696e",
      "https://images.unsplash.com/photo-1600058644231-c99658f0a0db"
    ]
  },
  {
    id: "r2",
    productId: "p4", // Peace Basket
    userName: "Uwase Marie",
    userImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    rating: 5,
    title: "Exceeded my expectations",
    content: "This basket is simply stunning and much larger than I expected! I've placed it in my living room and it has become a conversation piece whenever friends visit. The weaving is tight and precise, and I love that each purchase supports women artisans in Rwanda. The basket was carefully packed for shipping and arrived in perfect condition. Will definitely purchase more as gifts.",
    date: "2023-06-23",
    helpfulCount: 9,
    verified: true
  },
  {
    id: "r3",
    productId: "p4", // Peace Basket
    userName: "Gasana Eric",
    rating: 4,
    title: "Beautiful but slightly different colors",
    content: "I'm very happy with the quality of this peace basket. The weaving is tight and the design is beautiful. My only small complaint is that the colors are a bit different than what was shown online - there's more green and less blue in the pattern. That said, I understand these are handmade items and each one is unique. It's still gorgeous and I'm using it to store blankets in my living room.",
    date: "2023-03-15",
    helpfulCount: 5,
    verified: true
  },
  {
    id: "r4",
    productId: "p4", // Peace Basket
    userName: "Hakizimana Claude",
    userImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    rating: 5,
    title: "A piece of Rwanda in my home",
    content: "As a Rwandan living abroad, this basket brings a piece of home to my apartment. The quality is impeccable - exactly like the ones my grandmother used to have. The weaving is tight and precise, and the natural fibers give off a pleasant, subtle scent. I've purchased several more as gifts for colleagues who always admire mine when they visit. Highly recommend supporting this traditional craft!",
    date: "2023-07-18",
    helpfulCount: 11,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38"
    ]
  },
  {
    id: "r5",
    productId: "p4", // Peace Basket
    userName: "Rebecca Johnson",
    rating: 4,
    title: "Lovely basket, took long to arrive",
    content: "The peace basket is absolutely beautiful and exactly as pictured. The weaving is tight and the colors are vibrant. I'm using it to hold magazines in my living room and it looks stunning. I removed one star because shipping took quite a bit longer than estimated - about 3 weeks instead of the promised 10 days. That said, it was worth the wait and I would still recommend this product to others.",
    date: "2023-01-29",
    helpfulCount: 3,
    verified: true
  }
];

// Function to get reviews for a specific product
export const getReviewsForProduct = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};
