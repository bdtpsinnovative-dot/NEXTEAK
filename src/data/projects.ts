export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  vessel: string;
  vesselType: string;
  location: string;
  year: string;
  deckArea: string;
  teakSpec: string;
  coating: string;
  cardImage: string;
  heroImage: string;
  galleryImages: {
    src: string;
    caption: string;
  }[];
  shortDescription: string;
  overview: string;
  craftsmanshipNotes: string;
  keyFeatures: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "superyacht-foredeck",
    title: "AURA SUPERYACHT FOREDECK",
    subtitle: "PRECISION-ENGINEERED MARINE TEAK",
    category: "Superyacht Marine Decking",
    vessel: "68M Custom Displacement Motor Yacht",
    vesselType: "Megayacht / Custom Build",
    location: "Port Hercule, Monaco",
    year: "2026",
    deckArea: "380 sq.m",
    teakSpec: "Quarter-Sawn First-European Quality Myanmar Teak (12mm)",
    coating: "Carbon Quantum Dot (CQD) Hydrophobic Protection",
    cardImage: "/images/hero/2.jpg",
    heroImage: "/images/hero/2.jpg",
    galleryImages: [
      {
        src: "/images/hero/2.jpg",
        caption: "Bespoke foredeck layout following continuous curved hull margin lines",
      },
      {
        src: "/images/hero/1.jpg",
        caption: "Seamless aerial perspective demonstrating grain uniformity and seam balance",
      },
      {
        src: "/images/story/artboard-6.jpg",
        caption: "Hand-finished edge margin joints crafted to zero-tolerance marine standards",
      },
      {
        src: "/images/innovation/carbon-quantum-dot-coating.jpg",
        caption: "Nano-scale Carbon Quantum Dot molecular sealant repelling saltwater & UV radiation",
      },
    ],
    shortDescription:
      "Precision-crafted foredeck teak installation engineered to withstand extreme maritime environments while preserving the golden radiance of natural teak wood.",
    overview:
      "Commissioned for a 68-meter custom displacement megayacht, this foredeck installation represents the peak of NEXTEAK's marine joinery and high-performance composite integration. The deck layout honors traditional maritime aesthetics while utilizing our proprietary vacuum-infused adhesion method to eliminate penetrative mechanical fastenings, ensuring zero risk of water ingress across decades of offshore navigation.",
    craftsmanshipNotes:
      "Every single teak plank was quarter-sawn with vertical grain orientation exceeding 85%, sourced from sustainably managed heritage reserves. The decking is fortified with NEXTEAK's proprietary Carbon Quantum Dot coating, which reflects damaging UV wavelengths, suppresses thermal buildup under midday sun, and yields an unmatched velvet tactile grip for barefoot comfort.",
    keyFeatures: [
      "Proprietary Carbon Quantum Dot UV & Saltwater Molecular Barrier",
      "Vacuum-infusion zero-fastener marine bonding system",
      "Acoustic and thermal dampening honeycomb substructure",
      "Precision-curved king plank and margin board integration",
      "35% weight reduction over conventional solid 22mm teak decks",
    ],
    specs: [
      { label: "Vessel Type", value: "68m Custom Motor Yacht" },
      { label: "Deck Area", value: "380 sq.m (Foredeck & Jacuzzi Terrace)" },
      { label: "Teak Origin", value: "FSC-Certified Heritage Grade" },
      { label: "Plank Profile", value: "Quarter-Sawn Vertical Grain, 48mm × 12mm" },
      { label: "Caulking System", value: "High-Modulus Marine Polymer (Charcoal)" },
      { label: "Protective Finish", value: "Carbon Quantum Dot Invisible Shield" },
      { label: "Substrate", value: "Carbon-Reinforced Marine Composite" },
      { label: "Completion", value: "2026 Season Delivery" },
    ],
  },
  {
    id: "02",
    slug: "luxury-yacht-terrace",
    title: "OCEANIC HORIZONS EXPEDITION",
    subtitle: "EXPEDITION AFT TERRACE & FLYBRIDGE",
    category: "Expedition Marine Decking",
    vessel: "52M Long-Range Explorer Yacht",
    vesselType: "Explorer Yacht / Commercial Ice-Class",
    location: "Cannes Marina, French Riviera",
    year: "2025",
    deckArea: "420 sq.m",
    teakSpec: "Thin-Veneer Engineered Teak on Composite Core (10mm)",
    coating: "Deep Sea Marine Resin & CQD Anti-Wear Armor",
    cardImage: "/images/hero/1.jpg",
    heroImage: "/images/hero/1.jpg",
    galleryImages: [
      {
        src: "/images/hero/1.jpg",
        caption: "Expansive aft terrace showcasing unified plank alignment from salon to swim platform",
      },
      {
        src: "/images/hero/3.jpg",
        caption: "Sunset lounge terrace with integrated ambient deck lighting channels",
      },
      {
        src: "/images/innovation/engineered-for-the-sea.jpg",
        caption: "Precision CNC pre-fabricated panels prior to vacuum installation",
      },
      {
        src: "/images/story/artboard-5.jpg",
        caption: "Sustainable timber selection ensuring consistent color tone and grain density",
      },
    ],
    shortDescription:
      "Expansive aft terrace decking delivering flawless seamless flow between open-air salon lounges and descending sea platforms.",
    overview:
      "Designed for extreme open-ocean voyages ranging from the Mediterranean to sub-Arctic waters, Oceanic Horizons demanded teak decking capable of handling high temperature swings without cracking, expanding, or loosening caulking seams. NEXTEAK deployed our Thin-Veneer Engineered composite solution, pre-fabricated in modular CNC panels for millimeter accuracy.",
    craftsmanshipNotes:
      "By stabilizing natural teak surface layers over high-density marine composite backing, we eliminated dimensional distortion caused by fluctuating humidity. The continuous planking geometry visually elongates the aft deck, creating an uninterrupted sightline extending directly into the horizon.",
    keyFeatures: [
      "Multi-climate dimensional stability (-20°C to +60°C)",
      "Continuous flush-mounted marine drainage channels",
      "Integrated step margin lighting and illuminated stair nosings",
      "Full resistance to sunscreen oils, diesel soot, and red wine stains",
      "Engineered for 100% recyclability and sustainable stewardship",
    ],
    specs: [
      { label: "Vessel Type", value: "52m Long-Range Explorer" },
      { label: "Deck Area", value: "420 sq.m (Main Aft Deck, Beach Club & Bridge)" },
      { label: "Teak Origin", value: "Controlled Sustainable Plantation Teak" },
      { label: "Plank Profile", value: "Engineered Pre-Grooved, 55mm × 10mm" },
      { label: "Caulking System", value: "UV-Resistant Flexible Silane Polymer" },
      { label: "Protective Finish", value: "CQD Marine Nano-Penetrating Barrier" },
      { label: "Substrate", value: "Aramid-Honeycomb Marine Sandwich Panel" },
      { label: "Completion", value: "2025" },
    ],
  },
  {
    id: "03",
    slug: "sunset-yacht-terrace",
    title: "SUNSET BREEZE LOUNGE DECK",
    subtitle: "CUSTOM CATAMARAN SUNDECK & SALON",
    category: "Custom Marine Solutions",
    vessel: "45M High-Performance Sailing Catamaran",
    vesselType: "Performance Multihull / Luxury Cruiser",
    location: "Royal Phuket Marina, Andaman Sea",
    year: "2025",
    deckArea: "310 sq.m",
    teakSpec: "Heritage Natural Teak Veneer with Eco-Polymer Core (8mm)",
    coating: "Thermal Dissipation CQD Matte Clear Coat",
    cardImage: "/images/hero/3.jpg",
    heroImage: "/images/hero/3.jpg",
    galleryImages: [
      {
        src: "/images/hero/3.jpg",
        caption: "Sunset observation platform glowing warmly under golden hour lighting",
      },
      {
        src: "/images/hero/2.jpg",
        caption: "Precision transition between teak deck and carbon fiber cockpit structure",
      },
      {
        src: "/images/innovation/thin-veneer-engineering.jpg",
        caption: "Ultra-lightweight composite cross-section providing high structural rigidity",
      },
      {
        src: "/images/story/artboard-7.jpg",
        caption: "Hand-sanded satin finish bringing out natural teak golden luster",
      },
    ],
    shortDescription:
      "Sunset observation platform combining ultra-lightweight marine composites with the rich, textured warmth of genuine natural teak.",
    overview:
      "Weight optimization is the single most critical criterion for luxury sailing multihulls. For the Sunset Breeze catamaran, NEXTEAK custom-formulated an ultra-lightweight 8mm teak composite deck that reduced topside weight by over 1.2 metric tons compared to conventional solid teak, substantially increasing sailing velocity and stability without conceding an ounce of maritime opulence.",
    craftsmanshipNotes:
      "Our master naval carpenters hand-selected individual grain bundles to create gentle radial curvatures echoing the twin hulls of the vessel. The surface remains up to 8°C cooler under direct equatorial sun thanks to our thermal-dissipating coating, making the lounge deck comfortable to walk on even during peak tropical afternoons.",
    keyFeatures: [
      "Over 1.2 Metric Tons saved topside weight for multihull speed",
      "Thermal-dissipating technology (up to 8°C cooler barefoot feel)",
      "Flush-mounted carbon fiber deck hatches and anchor wells",
      "Superior non-skid performance in heavy sea spray",
      "Rapid maintenance rinse-down protocol with neutral water",
    ],
    specs: [
      { label: "Vessel Type", value: "45m Performance Sailing Catamaran" },
      { label: "Deck Area", value: "310 sq.m (Cockpit, Foredeck & Flybridge)" },
      { label: "Teak Origin", value: "Responsibly Sourced Myanmar Teak" },
      { label: "Plank Profile", value: "Thin-Veneer Micro-Bevel, 42mm × 8mm" },
      { label: "Caulking System", value: "Marine Low-Profile Grey Caulking" },
      { label: "Protective Finish", value: "Thermal-Reflective CQD Coating" },
      { label: "Substrate", value: "Carbon Honeycomb Ultra-Lite Subfloor" },
      { label: "Completion", value: "2025" },
    ],
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
