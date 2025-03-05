
export interface ProductColor {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  vendor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  features?: string[];
  images: string[];
  colors?: ProductColor[];
  sizes?: string[];
  stockQuantity: number;
  inStock: boolean;
  isNew: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Handcrafted Rwandan Coffee Table",
    vendor: "Urugero Crafts",
    price: 10000,
    originalPrice: 12000,
    rating: 4.8,
    reviewCount: 32,
    description: "This exquisite coffee table is handcrafted by skilled artisans in Rwanda using locally sourced hardwood. Each piece is uniquely designed with traditional Rwandan patterns carved into the surface and legs. The tabletop features an intricate mosaic of reclaimed wood pieces, showcasing a variety of natural wood tones and textures. The sturdy construction ensures durability while the carefully applied finish protects the wood while highlighting its natural beauty. This coffee table not only serves as a functional piece of furniture but also as a conversation piece that brings a touch of Rwandan craftsmanship to your home.",
    shortDescription: "Handcrafted coffee table made by skilled artisans in Rwanda using traditional techniques and locally sourced hardwood.",
    features: [
      "Made from sustainably harvested Rwandan hardwood",
      "Hand-carved traditional Rwandan patterns",
      "Natural finish that highlights wood grain",
      "Sturdy construction with mortise and tenon joints",
      "Each piece is unique with slight variations in wood grain and color",
      "Dimensions: 120cm x 70cm x 45cm (L x W x H)"
    ],
    images: [
      "https://den.mercer.edu/wp-content/uploads/2022/01/IMG_1619-2-scaled.jpg",
      "https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2019/11/18/31020791103_a637f4c6c7_k.jpg",
      "https://www.ukumbi.org/images/stories/ukumbi/projects/agaseke-rwanda/handicrafts.jpg",
      "https://i0.wp.com/herost.org/wp-content/uploads/2020/09/redrocks3.jpg?fit=1080%2C720&ssl=1"
    ],
    stockQuantity: 5,
    inStock: true,
    isNew: false,
    category: "Furniture"
  },
  {
    id: "p2",
    name: "Premium Rwandan Coffee Beans - Arabica",
    vendor: "Kinazi Coffee",
    price: 15000,
    rating: 4.9,
    reviewCount: 124,
    description: "Experience the rich flavor of Rwanda's finest coffee beans, grown at high elevations in the volcanic soils near Lake Kivu. These premium Arabica beans are carefully hand-picked and processed using the washed method, resulting in a cup with bright acidity, medium body, and delightful notes of citrus, caramel, and florals. Our direct trade practices ensure that the farmers receive fair compensation for their exceptional coffee. Each bag contains 250g of whole beans, roasted to perfection to bring out the unique characteristics of Rwandan coffee.",
    shortDescription: "Premium Arabica coffee beans from Rwanda's volcanic highlands, featuring bright acidity with notes of citrus and caramel.",
    features: [
      "Single-origin from the shores of Lake Kivu",
      "Altitude: 1,700-2,000 meters",
      "Tasting notes: Citrus, caramel, floral",
      "Medium roast profile",
      "Washed processing method",
      "Direct trade, supporting local farmers",
      "250g resealable bag"
    ],
    images: [
      "https://www.rwashoscco.com/wp-content/uploads/2014/10/MG_0535.jpg",
      "https://stir-tea-coffee.com/downloads/3858/download/Newsletter-624x366-Rwanda-01.jpg?cb=bde63333d94ee3fd373c5e667b16bfa5",
      "https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2021/09/15/packages-of-rwandan-coffee-that-are-sold-at-the-international-market-file.jpg",
      "https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2019/02/11/rwanda-coffee.jpg"
    ],
    stockQuantity: 150,
    inStock: true,
    isNew: false,
    category: "Food & Beverages"
  },
  {
    id: "p3",
    name: "Imigongo Wall Art - Traditional Pattern",
    vendor: "Nyakarambi Arts Collective",
    price: 78000,
    rating: 4.7,
    reviewCount: 18,
    description: "Imigongo is a traditional Rwandan art form characterized by geometric patterns created using cow dung. This authentic piece was hand-crafted by artisans from the Nyakarambi Arts Collective in Eastern Rwanda, following techniques that date back to the 18th century. The cow dung is mixed with ash, formed into relief patterns on wooden boards, and then painted with natural pigments in traditional colors of black, white, and red ochre. This striking geometric piece measures 30cm x 30cm and comes ready to hang, making it a distinctive addition to any art collection and a meaningful piece of Rwanda's cultural heritage.",
    shortDescription: "Traditional Rwandan Imigongo wall art featuring geometric patterns created using centuries-old techniques.",
    features: [
      "Authentic Imigongo artwork from Eastern Rwanda",
      "Made with traditional materials including cow dung and natural pigments",
      "Handcrafted by skilled artisans from the Nyakarambi collective",
      "Traditional color palette of black, white, and red ochre",
      "Distinctive geometric patterns with cultural significance",
      "Dimensions: 30cm x 30cm",
      "Comes ready to hang with mounting hardware"
    ],
    images: [
      "https://i.pinimg.com/736x/f8/b3/4c/f8b34c62723365f90e2b8fb53245dc0b.jpg",
      "https://murukali.com/cdn/shop/files/imigongo-African-wall-art-sets-of-three-murukali-com-675.jpg?v=1710024695",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Imigongo_traditional_patterns_(1).jpg",
      "https://i.etsystatic.com/24925941/r/il/70b164/2936664664/il_570xN.2936664664_d9hm.jpg"
    ],
    stockQuantity: 12,
    inStock: true,
    isNew: true,
    category: "Art & Decor"
  },
  // {
  //   id: "p4",
  //   name: "Handwoven Peace Basket - Large",
  //   vendor: "Gahaya Links",
  //   price: 45000,
  //   originalPrice: 52000,
  //   rating: 4.9,
  //   reviewCount: 67,
  //   description: "hello",
  //   shortDescription: "Traditional Rwandan peace basket (agaseke) handwoven by women artisans using natural fibers and dyes.",
  //   features: [
  //     "Hand-woven by skilled Rwandan women artisans",
  //     "Made from locally sourced sisal and sweet grass",
  //     "Natural dyes create vibrant patterns",
  //     "Fair Trade certified product",
  //     "Each purchase supports women's cooperatives",
  //     "Approximate dimensions: 30cm diameter x 20cm height",
  //     "Each basket has unique variations in pattern and color"
  //   ],
  //   images: [
  //     "https://images.unsplash.com/photo-1509048763289-db6809238a70",
  //     "https://images.unsplash.com/photo-1544030530-d9f3d308988f",
  //     "https://images.unsplash.com/photo-1594713346321-7919c478897f",
  //     "https://images.unsplash.com/photo-1555529771-7888783a18d3"
  //   ],
  //   colors: [
  //     { name: "Natural", value: "#e4d7c5" },
  //     { name: "Blue Accent", value: "#5b8ca1" },
  //     { name: "Green Accent", value: "#667e55" },
  //     { name: "Red Accent", value: "#a24936" }
  //   ],
  //   sizes: ["Small", "Medium", "Large"],
  //   stockQuantity: 25,
  //   inStock: true,
  //   isNew: false,
  //   category: "Home Decor"
  // },
  {
    id: "p5",
    name: "Kitenge Print Tote Bag",
    vendor: "Indego Africa",
    price: 18500,
    rating: 4.6,
    reviewCount: 42,
    description: "This vibrant tote bag showcases the beautiful kitenge fabrics of Rwanda, with bold geometric patterns in eye-catching colors. Each bag is handmade by women artisans in Kigali who carefully select the fabric patterns and sew each piece with precision. The spacious interior and sturdy cotton handles make this tote perfect for everyday use, while the colorful African prints ensure you'll stand out from the crowd. The bag features an interior pocket for small items and a zipper closure for security. By purchasing this product, you're supporting skills training and employment for women in Rwanda.",
    shortDescription: "Colorful tote bag made from traditional Rwandan kitenge fabric by women artisans in Kigali.",
    features: [
      "Authentic kitenge fabric in traditional Rwandan patterns",
      "Handcrafted by women artisans in Kigali",
      "Interior pocket and secure zipper closure",
      "Sturdy cotton handles with reinforced stitching",
      "Dimensions: 40cm x 35cm x 10cm",
      "Fair trade product supporting women's economic empowerment",
      "Machine washable (cold, gentle cycle)"
    ],
    images: [
      "https://projecthavehope.org/cdn/shop/products/patch_1720x.jpg?v=1656614117",
      "https://images.squarespace-cdn.com/content/v1/5ae1dd8ac258b484763b3b83/1642378410687-B02TV87DUXZUBVU4S9L7/CO7Oi2EmR2azswusDraa3Q_thumb_3c9e.jpg?format=1500w",
      "https://www.blackartdepot.com/cdn/shop/products/0000885_0000885_0_1800x1800.jpg?v=1513272422",
      "https://static.wixstatic.com/media/2fccc1_ecb9954e0f174634955c2ea331507e11~mv2_d_2083_1390_s_2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2fccc1_ecb9954e0f174634955c2ea331507e11~mv2_d_2083_1390_s_2.jpg"
    ],
    colors: [
      { name: "Blue Pattern", value: "#2c5f8e" },
      { name: "Green Pattern", value: "#48794f" },
      { name: "Orange Pattern", value: "#cf6d30" }
    ],
    stockQuantity: 60,
    inStock: true,
    isNew: true,
    category: "Accessories"
  },
  {
    id: "p6",
    name: "Organic Akabanga Chili Oil",
    vendor: "Nyirangarama Products",
    price: 3800,
    rating: 4.8,
    reviewCount: 93,
    description: "Akabanga is Rwanda's famous chili oil, known for its extreme potency and distinctive flavor. This organic version is made from sun-ripened hot peppers grown in the fertile volcanic soils of northern Rwanda. The peppers are carefully selected, dried, and then infused in locally produced sunflower oil to create a condiment that adds incredible depth and heat to any dish. Just a drop or two is enough to transform your cooking. The convenient dropper bottle helps control the amount you use. Akabanga has gained international recognition as a gourmet ingredient, beloved by chefs and heat-seekers worldwide.",
    shortDescription: "Rwanda's famous hot chili oil made from sun-ripened peppers grown in volcanic soil. Extremely potent with incredible flavor.",
    features: [
      "Made from organic chilies grown in Rwanda's volcanic soil",
      "Extremely potent - just a drop or two is enough",
      "No preservatives or artificial ingredients",
      "Convenient dropper bottle for precise serving",
      "Great with grilled meats, soups, stews, or eggs",
      "20ml bottle lasts for months of regular use",
      "Vegan and gluten-free"
    ],
    images: [
      "https://murukali.com/cdn/shop/files/Akabanga-100ml-murukali-com-8463.jpg?v=1724666483",
      "https://karibumarket.com/cdn/shop/files/akabanga-small_07b7fe64-f3cc-4090-a6c9-404bb2cad039.png?v=1691279561",
      "https://img.atlasobscura.com/wXJs0cSCJOyy92KygknvGRJIAa3QE2RZai__fKfEPlc/rs:fill:580:580:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3RoaW5n/X2ltYWdlcy9iY2U3/ZGU1NS1iZmJmLTQw/MWYtOTg3OS0xNDg4/ZDdiOGI5ZDkwZjg2/MjlmOWVlNDgyMDli/NDlfYWthYmFuZ2Ff/a2VycnlqYnJlbi5q/cGc.jpg",
      "https://swahilimarket.com/wp-content/uploads/2020/06/AkabangaFullbox.jpg"
    ],
    stockQuantity: 200,
    inStock: true,
    isNew: false,
    category: "Food & Beverages"
  }
];

export const featuredProduct = products[3]; // Peace Basket
