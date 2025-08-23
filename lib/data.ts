export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  dataAiHint: string;
  description: string;
  longDescription: string;
  ingredients: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "luminescence-body-oil",
    name: "Luminescence Body Oil",
    category: "Body Oils",
    price: 355.0,
    image: "/luminescence.jpg",
    dataAiHint: "cosmetic oil bottle",
    description:
      "A luxurious blend of shea and baobab oil to deeply nourish and hydrate your skin.",
    longDescription:
      "Our Revitalizing Shea Body Oil is a potent elixir designed to restore your skin's natural glow. Enriched with pure, cold-pressed shea and baobab oils from Ghana, this fast-absorbing formula provides intense hydration, improves skin elasticity, and leaves a silky, non-greasy finish. Perfect for all skin types.",
    ingredients: [
      "Butyrospermum Parkii (Shea) Oil",
      "Adansonia Digitata (Baobab) Seed Oil",
      "Vitamin E (Tocopherol)",
      "Essential Oil Blend",
    ],
  },
  {
    id: 2,
    slug: "skin-perfecting",
    name: "Skin Perfecting Body Exfoliante",
    category: "Scrubs",
    price: 160.0,
    image: "/perfecting.jpg",
    dataAiHint: "cosmetic scrub jar",
    description:
      "Gently exfoliate and brighten your complexion with hibiscus and fine sugar crystals.",
    longDescription:
      "Unveil smoother, more radiant skin with our Purifying Hibiscus Scrub. This gentle yet effective exfoliator uses fine sugar crystals to buff away dead skin cells, while antioxidant-rich hibiscus flower extract helps to purify pores and even out skin tone. Coconut oil ensures your skin is left feeling soft and moisturized.",
    ingredients: [
      "Sucrose (Sugar)",
      "Cocos Nucifera (Coconut) Oil",
      "Hibiscus Sabdariffa Flower Extract",
      "Cetearyl Olivate",
      "Sorbitan Olivate",
    ],
  },
  {
    id: 3,
    slug: "clair-body-wash",
    name: "Clair Body Wash",
    category: "Body Wash",
    price: 250.0,
    image: "/clair.jpg",
    dataAiHint: "body wash jar",
    description:
      "Nourish and protect your lips with the richness of pure Ghanaian cocoa butter.",
    longDescription:
      "Say goodbye to dry, chapped lips with our ultra-nourishing Cocoa Butter Lip Balm. Formulated with pure, unrefined cocoa butter from Ghana and a touch of sweet almond oil, this balm provides a protective barrier that locks in moisture for hours. Your lips will feel soft, smooth, and supple.",
    ingredients: [
      "Theobroma Cacao (Cocoa) Seed Butter",
      "Cera Alba (Beeswax)",
      "Prunus Amygdalus Dulcis (Sweet Almond) Oil",
      "Vitamin E (Tocopherol)",
    ],
  },
  {
    id: 4,
    slug: "revive-and-balance",
    name: "Revive & Balance Body Oil",
    category: "Body Oils",
    price: 200.0,
    image: "/RandB.jpg",
    dataAiHint: "cosmetic spray bottle",
    description:
      "Soothe and refresh your skin instantly with our pure aloe vera facial mist.",
    longDescription:
      "A quick spritz of our Calming Aloe Vera Mist provides instant relief for tired, irritated, or sun-exposed skin. Made with 99% pure Ghanaian aloe vera, this mist cools, soothes, and replenishes moisture levels throughout the day. Keep it in your bag for a refreshing boost anytime, anywhere.",
    ingredients: [
      "Aloe Barbadensis Leaf Juice",
      "Glycerin",
      "Rosa Damascena (Rose) Flower Water",
      "Sodium Benzoate",
      "Potassium Sorbate",
    ],
  },
  {
    id: 5,
    slug: "calma-body-wash",
    name: "Calma Body Wash",
    category: "Body Wash",
    price: 170.0,
    image: "/calina.jpg",
    dataAiHint: "body wash jar",
    description:
      "A powerful serum with Vitamin C and Baobab to brighten and even skin tone.",
    longDescription:
      "Achieve a truly radiant complexion with our Glow Face Serum. This lightweight, powerful formula combines the brightening effects of Vitamin C with the antioxidant-rich properties of Baobab oil. It targets dark spots, evens out skin tone, and protects against environmental stressors, revealing a brighter, more youthful glow.",
    ingredients: [
      "Adansonia Digitata (Baobab) Seed Oil",
      "Tetrahexyldecyl Ascorbate (Vitamin C)",
      "Squalane",
      "Simmondsia Chinensis (Jojoba) Seed Oil",
    ],
  },
  {
    id: 6,
    slug: "rejuva-body-oil",
    name: "Rejuva Body Oil",
    category: "Body Oils",
    price: 250.0,
    image: "/rejuva.jpg",
    dataAiHint: "cosmetic oil bottle",
    description:
      "A luxurious blend of shea and baobab oil to deeply nourish and hydrate your skin.",
    longDescription:
      "Our Revitalizing Shea Body Oil is a potent elixir designed to restore your skin's natural glow. Enriched with pure, cold-pressed shea and baobab oils from Ghana, this fast-absorbing formula provides intense hydration, improves skin elasticity, and leaves a silky, non-greasy finish. Perfect for all skin types.",
    ingredients: [
      "Butyrospermum Parkii (Shea) Oil",
      "Adansonia Digitata (Baobab) Seed Oil",
      "Vitamin E (Tocopherol)",
      "Essential Oil Blend",
    ],
  },
];
