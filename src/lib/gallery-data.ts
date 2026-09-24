import heroImage from "@/assets/ing-yve-hero.jpg";
import collectionImage from "@/assets/ing-yve-collections.jpg";
import craftImage from "@/assets/ing-yve-craft.jpg";
import foundersImage from "@/assets/ing-yve-founders.jpg";

export const imagery = { heroImage, collectionImage, craftImage, foundersImage };

export const products = [
  { id: "1", title: "The Rock No. 1", material: "Stoneware · Wool felt", price: "€ 1.295", category: "Table Lamps", materialFilter: "Ceramics", image: heroImage, position: "center" },
  { id: "2", title: "Iris No. 3", material: "Glazed ceramic · Silk", price: "€ 1.475", category: "Table Lamps", materialFilter: "Ceramics", image: collectionImage, position: "left" },
  { id: "3", title: "The Rock Pendant", material: "Wool felt · Leather", price: "€ 895", category: "Pendant Lights", materialFilter: "Felt", image: craftImage, position: "center" },
  { id: "4", title: "Botanical Memory", material: "Personal textile · Oak", price: "From € 745", category: "Custom", materialFilter: "Wood", image: collectionImage, position: "right" },
  { id: "5", title: "Iris No. 7", material: "Sea glaze · Wool felt", price: "€ 1.650", category: "Table Lamps", materialFilter: "Felt", image: collectionImage, position: "left" },
  { id: "6", title: "Karst No. 2", material: "Friesian clay · Oak", price: "€ 1.195", category: "Table Lamps", materialFilter: "Wood", image: heroImage, position: "left" },
];

export const pageMeta = (title: string, description: string, path: string, type = "website") => ({
  meta: [
    { title: `${title} — ING & YVE` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — ING & YVE` },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: path }],
});