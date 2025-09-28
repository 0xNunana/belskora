export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  dataAiHint: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  quantity?: number;
  extra?: string;
  nb?: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "luminescence-body-oil",
    name: "Luminescence Body Oil",
    category: "Body Oils",
    price: 355.0,
    image: "/luminescence.jpg",
    dataAiHint: "cosmetic oil bottle",
    description:
      "This body oil flawlessly brightens, fade dark spots and evens out your skin tone with a unique blend of modern skin lightening actives and fine plants oils enriched with vitamins A, B, C and  E which are essential for a radiantly firm glowing skin.",
    longDescription:
      "Simply put a few drops in the palm of your hand, rub your hands together to warm the oil, and massage it into your damp skin immediately after a shower.",
    ingredients: [
      "Carrot oil",
      "Rice bran Oil",
      "Sweet Almond Oil",
      "Turmeric Oil",
      "Isoamyl Laurate",
      "Laurocapram",
      "Undecylenoyl Phenylalanine",
      "Phenylethyl Resorcinol",
      "Vitamin E",
      "Fragrance",
    ],
    extra:
      "Avoid or prevent excessive sun exposure while using this product and keep product in a cool place away from sunlight.",
  },
  {
    id: "2",
    slug: "skin-perfecting",
    name: "Skin Perfecting Body Exfoliant",
    category: "Scrubs",
    price: 160.0,
    image: "/perfecting.jpg",
    dataAiHint: "cosmetic scrub jar",
    description:
      "This body scrub is made to buff off dead skin cells to reveal a radiant smooth & soft blemish free firm skin. With botanicals like camwood and roselle which is full of antioxidants and AHA components together with salicylic acid creates an excellent formula for both surface and deep skin exfoliation.",
    longDescription:
      "On a wet skin, take a generous amount of scrub on your palm and apply it to your body by massaging in gentle, circular motions for two to three minutes from shoulders to toes and rinse off.  Should be used 2 to 3 times in a week.",
    ingredients: [
      "Sugar",
      "Sunflower Oil",
      "Shea butter",
      "Emulsifying wax",
      "Cetyl alcohol",
      "Beeswax",
      "Salicylic acid",
      "Licorice root extract",
      "Roselle flower powder",
      "Camwood Powder",
      "Fragrance",
    ],
  },
  {
    id: "3",
    slug: "clair-body-wash",
    name: "Clair Body Wash",
    category: "Body Wash",
    price: 250.0,
    image: "/clair.jpg",
    dataAiHint: "body wash jar",
    description:
      "A body wash formula made in skincare heaven to gently exfoliate dead skin from the skin's surface, retaining moisture and allowing for smoother, brighter skin with a boost of antioxidants from papaya and mulberry extracts for a glowing skin",
    longDescription:
      "Wet your skin and lather the body wash on a sponge or washcloth. Apply a generous layer all over your skin and rinse it off.For maximum benefit, let it sit on the skin for 2-3 minutes then rinse off",
    ingredients: [
      "Distilled water",
      "Sodium c14-16 olefin Sulfonate",
      "Cocamidopropyl betaine",
      "Glycerin",
      "Glycolic acid",
      "Kojic acid",
      "Mulberry extract",
      "Papaya extract",
      "Cationic guar",
      "Hydroxyethylcellulose",
      "Fragrance",
      "Germal plus",
      "EDTA",
      "Mica",
    ],

    nb: "Because this is an exfoliating product containing an AHA, some lndividuals may experience their skin peeling after a while of use, you may want to dial down on the frequency of use to avoid over exfoliation.",
  },
  {
    id: "4",
    slug: "revive-and-balance",
    name: "Revive & Balance Body Oil",
    category: "Body Oils",
    price: 200.0,
    image: "/RandB.jpg",
    dataAiHint: "cosmetic spray bottle",
    description:
      "The R & B body oil is a skin healer with a blend of nourishing plant oils and botanicals, the oil tackles skin issues like eczema, psoriasis, body acne, rashes etc. The oil restores the skin’s integrity by balancing its pH, calm inflammation and protects the skin’s microbiome.",

    longDescription:
      " Simply put a few drops in the palm of your hand, rub your hands together to warm the oil, and massage it into your damp skin immediately after a shower.",
    ingredients: [
      "Sunflower Oil",
      "Shea Oil",
      "Coconut Oil",
      "Calendula Oil",
      "Cassia Alata Oil",
      "Olive Oil",
      "Tea tree Oil",
      "Vitamin E",
    ],
    extra:
      "Avoid or prevent excessive sun express while using this product and Keep product in a cool place away from sunlight",
  },
  {
    id: "5",
    slug: "calma-body-wash",
    name: "Calma Body Wash",
    category: "Body Wash",
    price: 170.0,
    image: "/calina.jpg",
    dataAiHint: "body wash jar",
    description:
      "As the name implies, this body wash was formulated with sensitive and irritated skin in mind to help soothe and calm skin conditions like inflammation, itchy skin, rashes etc. The goodness of this blend gives your skin the warm embrace it needs to refresh and be calm",
    longDescription:
      "Wet your skin and lather the body wash on a sponge or washcloth. Apply a generous layer all over your skin and rinse it off.For maximum benefit, let it sit on the skin for 2-3 minutes then rinse off.",
    ingredients: [
      "Distilled water",
      "Cocamidopropyl betaine",
      "Sodium C14-16 olefin Sulfonate",
      "Glycerin",
      "Honey",
      "Zinc oxide",
      "Colloidal oats",
      "Chamomile extract",
      "Xanthan gum",
      "Citric acid",
      "Germal plus",
      "EDTA",
    ],
  },
  {
    id: "6",
    slug: "rejuva-body-oil",
    name: "Rejuva Body Oil",
    category: "Body Oils",
    price: 250.0,
    image: "/rejuva.jpg",
    dataAiHint: "cosmetic oil bottle",
    description:
      "This oil blend is an ultimate elixir for a vibrant youthful appearance. With top anti aging oils with unique fatty acid profiles that deeply moistures the skin, reducing the appearance of scars and wrinkles. Potent antioxidant astaxanthin and anti aging compound retinol firms and tones up the skin while simultaneously building up collagen with vitamin C.",
    longDescription:
      "Simply put a few drops in the palm of your hand, rub your hands together to warm the oil, and massage it into your damp skin immediately after a shower.",
    ingredients: [
      "Sunflower Oil",
      "Baobab Oil",
      "Castor Oil",
      "Sesame Oil",
      "Isoamyl laurate",
      "Retinol Palmitate",
      "Astaxanthin",
      "Vitamin E",
      "Fragrance",
    ],
    extra: `Avoid or prevent excessive sun exposure while using this product and keep product in a cool place away from sunlight.

Pregnant and breastfeeding women should avoid retinol or retinol derivatives products`,
    nb: "Pregnant and breastfeeding women cannot use retinol or it’s derivatives and this product is not an exemption hence, it should be avoided",
  },
];
