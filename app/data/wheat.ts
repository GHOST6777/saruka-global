import { Product } from "@/app/types/product";

const wheatProducts: Product[] = [
  {
    name: "Sharbati Wheat",
    tag: "Premium",
    image: "/images/wheat/sharbati.jpg",
    desc: "Premium-quality Sharbati Wheat known for its golden grains, natural sweetness, soft texture and excellent flour quality. Highly preferred for premium flour production and traditional Indian breads.",
    origin: "Madhya Pradesh",
    purity: "Export Grade",
    packaging: "25kg & 50kg PP / Jute Bags",
    shelfLife: "12 Months",
  },

  {
    name: "Lokwan Wheat",
    tag: "Popular",
    image: "/images/wheat/lokwan.jpg",
    desc: "High-quality Lokwan Wheat widely preferred for flour milling, chapati making and bulk food processing due to its consistent grain quality and excellent milling performance.",
    origin: "Maharashtra, Gujarat, Madhya Pradesh",
    purity: "Export Grade",
    packaging: "25kg & 50kg Bags",
    shelfLife: "12 Months",
  },

  {
    name: "Durum Wheat",
    tag: "Export Grade",
    image: "/images/wheat/durum.jpg",
    desc: "Premium Durum Wheat with hard amber grains and high protein content. Ideal for pasta, semolina, macaroni and premium food processing industries.",
    origin: "Madhya Pradesh, Rajasthan",
    purity: "Premium Grade",
    packaging: "25kg & 50kg Bags",
    shelfLife: "12 Months",
  },
];

export default wheatProducts;