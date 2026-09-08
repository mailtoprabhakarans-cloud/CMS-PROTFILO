import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crown,
  Images,
  Instagram,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  category: 'all' | 'blouse' | 'aari' | 'tops' | 'saree' | 'bottoms' | 'kids' | 'finishing';
  number: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  images: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'blouse-design',
    category: 'blouse',
    number: '01',
    badge: 'Signature Specialist',
    title: 'Designer Blouse Tailoring',
    description: 'Bespoke blouse cuts tailored to sculpt your body perfectly with superior padding, necklines, and back designs.',
    highlights: ['Princess Cut', 'Katori Cut', 'Hi-Neck', 'Back Open', 'Lining & Ordinary Blouse', 'Deep Back Models'],
    image: '/images/service-blouse.jpg',
    images: [
      '/images/service-blouse.jpg',
      '/images/service-blouse-2.jpg',
      '/images/service-blouse-3.jpg',
    ],
  },
  {
    id: 'aari-work',
    category: 'aari',
    number: '02',
    badge: 'Haute Bridal Handwork',
    title: 'Aari & Zardozi Hand Embroidery',
    description: 'Exquisite bridal handwork featuring genuine zari, cut beads, kundans, and silk thread embroidery customized to your saree motif.',
    highlights: ['Bridal Necklines', 'Custom Motif Sleeves', 'Zardozi Embroidery', 'Peacock & Floral Handwork', 'Border Detailing'],
    image: '/images/service-aari.jpg',
    images: [
      '/images/service-aari.jpg',
      '/images/service-aari-2.jpg',
      '/images/service-aari-3.jpg',
    ],
  },
  {
    id: 'saree-pleating',
    category: 'saree',
    number: '03',
    badge: '23+ Draping Styles',
    title: 'Saree Pre-Pleating & Draping',
    description: 'Master studio for 23+ pre-pleating & couture draping styles. Turn any Kanchipuram silk, net, or georgette into an effortless 60-second ready drape.',
    highlights: ['23+ Draping Styles', 'Box & Hanger Folding', 'Madisar & Kerala Draping', 'Mermaid & Cancan Draping', 'Two Saree & Net Draping', 'Heatless & Straightener Set'],
    image: '/images/service-saree-box1.jpg',
    images: [
      '/images/service-saree-box1.jpg',
      '/images/service-saree-box2.jpg',
      '/images/service-saree-box3.jpg',
    ],
  },
  {
    id: 'tops-kurtis',
    category: 'tops',
    number: '04',
    badge: 'Everyday & Occasion',
    title: 'Designer Tops & Kurtis',
    description: 'Flattering silhouettes designed with thoughtful necklines, sleeves, and tailored panels for work, festivals, and celebrations.',
    highlights: ['Anarkali Silhouette', 'Panel Cut Tops', 'Collar Neck Kurtis', 'Back Zip Models', 'Shirt Kurti Models', 'Lining Tops'],
    image: '/images/service-tops.jpg',
    images: [
      '/images/service-tops.jpg',
      '/images/service-tops-2.jpg',
      '/images/service-tops-3.jpg',
    ],
  },
  {
    id: 'pants-bottoms',
    category: 'bottoms',
    number: '05',
    badge: 'Perfect Comfort & Fall',
    title: 'Pants & Custom Separates',
    description: 'Comfortable, high-finish bottoms cut to move effortlessly with you, pairing seamlessly with any kurti or tunic.',
    highlights: ['Semi Patiala', 'Full Patiala', 'Crush Pants', 'Straight Cut Trouser', 'Palazzo Pants', 'Comfort Pyjama'],
    image: '/images/service-pants.jpg',
    images: [
      '/images/service-pants.jpg',
      '/images/test-pants1.jpg',
      '/images/test-pants2.jpg',
    ],
  },
  {
    id: 'kids-wear',
    category: 'kids',
    number: '06',
    badge: 'Cute & Gentle On Skin',
    title: 'Custom Kidswear & Pattu Pavadai',
    description: 'Handcrafted traditional pattu pavadai sets, peplum lehengas, and festival wear tailored with child-safe soft linings and custom embroidery.',
    highlights: ['Elephant Motif Pattu Pavadai', 'Peplum & Floral Lehenga', 'Pattu Top & Skirt', 'Designer Frocks', 'Matching Tassels & Latkans', 'Child-Safe Soft Lining'],
    image: '/images/service-kids-1.png',
    images: [
      '/images/service-kids-1.png',
      '/images/service-kids-2.png',
      '/images/service-kids.jpg',
    ],
  },
  {
    id: 'designing-concepts',
    category: 'blouse',
    number: '07',
    badge: 'Couture Styling',
    title: 'Sleeve & Neck Designing Concepts',
    description: 'Creative pattern making for cowl drape sleeves, ruched puff sleeves, potli button cuffs, cutout patterns, and bespoke necklines.',
    highlights: ['Cowl Draped Sleeves', 'Potli Button Cuffs', 'Ruched Puff Sleeves', 'Slit & Cutout Sleeves', 'Pearl Neckline Detailing', 'Roll-up Tab Sleeves'],
    image: '/images/service-concept-1.png',
    images: [
      '/images/service-concept-1.png',
      '/images/service-concept-2.png',
      '/images/service-concept-3.png',
    ],
  },
  {
    id: 'sudithar-stitching',
    category: 'finishing',
    number: '08',
    badge: 'Precision Fit',
    title: 'Sudithar Stitching & Finishing',
    description: 'All styles of Sudithar and Salwar stitching with designer neck patterns, custom patchwork collars, neat overlock seams, and comfortable fit.',
    highlights: ['18+ Custom Neck Models', 'Asymmetric Wrap Collars', 'Pintuck & Potli Buttons', 'Triangle Border Notches', 'Overlock Seams & Slits', 'Lining Reinforcement'],
    image: '/images/service-sudithar-1.png',
    images: [
      '/images/service-sudithar-1.png',
      '/images/service-sudithar-2.png',
      '/images/service-sudithar-3.png',
    ],
  },
  {
    id: 'general-alterations',
    category: 'finishing',
    number: '09',
    badge: 'Essential Studio Service',
    title: 'In-Skirt, Nighty & Alterations',
    description: 'Professional alteration services to breathe new life into your cherished outfits, plus bespoke tailored in-skirts, nighties, and garment remodeling.',
    highlights: ['Before & After Remodeling', 'Custom Pockets & Waist Fit', '4/6 Part In-Skirt', 'Bespoke Nighty', 'Blouse Alterations', 'Saree Fall & Pico'],
    image: '/images/service-alterations-1.png',
    images: [
      '/images/service-alterations-1.png',
      '/images/service-alterations-2.png',
      '/images/service-alterations.jpg',
    ],
  },
];

export interface SareeDrapingStyle {
  no: string;
  id: string;
  name: string;
  category: 'bridal' | 'heritage' | 'modern' | 'care' | 'fusion';
  badge: string;
  tag: string;
  description: string;
}

export const drapingCategories = [
  { id: 'all', label: 'All Styles', count: 23 },
  { id: 'bridal', label: 'Bridal & Grandeur', count: 4 },
  { id: 'heritage', label: 'Heritage & Regional', count: 6 },
  { id: 'modern', label: 'Modern & Silhouette', count: 6 },
  { id: 'care', label: 'Folding & Fabric Care', count: 5 },
  { id: 'fusion', label: 'Fusion & Half Saree', count: 2 },
];

export const sareeDrapingStyles: SareeDrapingStyle[] = [
  {
    no: '01',
    id: 'saree-draping',
    name: 'Saree Draping',
    category: 'modern',
    badge: 'Signature Standard',
    tag: 'Classic Elegance',
    description: 'Bespoke full-length classical saree draping tailored to your exact height, posture, and pallu length for effortless grace.',
  },
  {
    no: '02',
    id: 'draping-side-pleat',
    name: 'Draping Side Pleat',
    category: 'modern',
    badge: 'Modern Silhouette',
    tag: 'Slender Contoured Fit',
    description: 'Sculpted knife-edge side pleating contouring around the waist and hip curve to deliver an elongated, slimming hourglass drape.',
  },
  {
    no: '03',
    id: 'one-pleat-draping',
    name: 'One Pleat Draping',
    category: 'modern',
    badge: 'Chic Minimalist',
    tag: 'Single Flowing Pallu',
    description: 'Crisply pinned single-pleat open pallu draped across the torso with discreet anchoring for an effortless, royal modern presence.',
  },
  {
    no: '04',
    id: 'ironing-pre-pleating-tips',
    name: 'Ironing and Pre Pleating Tips etc.',
    category: 'care',
    badge: 'Fabric Care Masterclass',
    tag: 'Temperature-Safe Setting',
    description: 'Professional steam and temperature regulation, anti-wrinkle crease maintenance, and storage practices to safeguard pure silk and zari.',
  },
  {
    no: '05',
    id: 'mermaid-draping',
    name: 'Mermaid Draping',
    category: 'bridal',
    badge: 'Couture Silhouette',
    tag: 'Sculpted Fishtail Flare',
    description: 'Dramatic fishtail styling hugging snugly through the hips and knees, sweeping outward into a flared mermaid train for evening receptions.',
  },
  {
    no: '06',
    id: 'puffy-pleated-draping',
    name: 'Puffy Pleated Draping',
    category: 'bridal',
    badge: 'Royal Grandeur',
    tag: 'Elevated 3D Volume',
    description: 'Architecturally puffed and elevated shoulder and waist pleats designed to give regal 3D volume and dimensional richness to wedding silks.',
  },
  {
    no: '07',
    id: 'cancan-draping',
    name: 'Cancan Draping',
    category: 'bridal',
    badge: 'Bridal Ballgown Flare',
    tag: 'Full Circular Volume',
    description: 'Structured under-saree cancan support layering that transforms traditional South silk and Banarasi sarees into majestic flared ballgowns.',
  },
  {
    no: '08',
    id: 'draping-with-two-saree',
    name: 'Draping with Two Sarees',
    category: 'bridal',
    badge: 'Bridal Dual Fusion',
    tag: 'Dual Saree Grandeur',
    description: 'Exquisite fusion draping uniting two complementary sarees into a multi-layered royal masterpiece with double contrasting pallus.',
  },
  {
    no: '09',
    id: 'net-saree-draping',
    name: 'Net Saree Draping',
    category: 'modern',
    badge: 'Delicate Sheer Specialist',
    tag: 'Non-Slip Grip Anchoring',
    description: 'Anti-tear, slip-resistant anchoring crafted specially for delicate net, tissue, organza, and sheer embellished sarees without pin-holes.',
  },
  {
    no: '10',
    id: 'madisar-draping',
    name: 'Madisar Draping',
    category: 'heritage',
    badge: 'Tamil Brahmin Heritage',
    tag: 'Authentic 9-Yard (9 Gaja)',
    description: 'Mastery in both Iyer and Iyengar 9-yard Madisar draping, ensuring authentic ritual conformity, maximum comfort, and walking ease.',
  },
  {
    no: '11',
    id: 'kerala-saree-draping',
    name: 'Kerala Saree Draping',
    category: 'heritage',
    badge: 'God’s Own Country',
    tag: 'Kasavu Golden Border',
    description: 'Traditional Kasavu drape featuring precise pleating that honors the pure cream cotton and gleaming gold borders for temple and Onam events.',
  },
  {
    no: '12',
    id: 'set-mundu-draping',
    name: 'Set Mundu Draping',
    category: 'heritage',
    badge: 'Kerala Traditional',
    tag: 'Mundum Neriyathum',
    description: 'Classic two-piece Kerala Mundum Neriyathum draping with crisp chest pleats and symmetrical golden border alignment.',
  },
  {
    no: '13',
    id: 'north-indian-style-draping',
    name: 'North Indian Style Draping',
    category: 'heritage',
    badge: 'Festive Classic',
    tag: 'Front Seedha Pallu',
    description: 'Royal Seedha Pallu drape sweeping from back to front over the right shoulder, highlighting ornate front chest borders and heavy zari work.',
  },
  {
    no: '14',
    id: 'rajasthani-style-draping',
    name: 'Rajasthani Style Draping',
    category: 'heritage',
    badge: 'Royal Marwari Heritage',
    tag: 'Ghoonghat & Bandhani',
    description: 'Iconic royal Rajasthani draping with sweeping chest pleats, vibrant Bandhej tucks, and regal ghoonghat alignment.',
  },
  {
    no: '15',
    id: 'back-kosuvam-draping',
    name: 'Back Kosuvam Draping',
    category: 'heritage',
    badge: 'Chettinad Heritage',
    tag: 'Tamil Back-Pleated Kosuvam',
    description: 'Traditional Tamil heritage back-pleating technique evoking vintage Chettinad nobility with balanced, non-shifting pleats.',
  },
  {
    no: '18',
    id: 'half-chest-covered-draping',
    name: 'Half Chest Covered Draping',
    category: 'modern',
    badge: 'Graceful & Modest',
    tag: 'Sophisticated Diagonal',
    description: 'Carefully measured diagonal pallu drape offering graceful modest chest coverage while highlighting temple necklace jewelry.',
  },
  {
    no: '19',
    id: 'georgette-saree-draping',
    name: 'Georgette Saree Draping',
    category: 'modern',
    badge: 'Soft & Flowy',
    tag: 'Fluid Feather Fall',
    description: 'Special micro-pinning and crease-free tucking engineered to tame slippery, lightweight georgette and crepe fabrics seamlessly.',
  },
  {
    no: '20',
    id: 'heatless-draping',
    name: 'Heatless Draping',
    category: 'care',
    badge: 'Zero-Heat Silk Safe',
    tag: 'Zari & Antique Silk Safe',
    description: 'Proprietary manual finger-pressing and compression folding with zero heat application, protecting fragile gold threads from damage.',
  },
  {
    no: '21',
    id: 'box-folding',
    name: 'Box Folding',
    category: 'care',
    badge: 'Express Ready-to-Wear',
    tag: 'Wear in Under 60 Seconds',
    description: 'Complete pre-pleated, anchored, and steam-locked saree neatly packed in an elegant presentation box, ready to slip on in 60 seconds.',
  },
  {
    no: '22',
    id: 'hanger-folding',
    name: 'Hanger Folding',
    category: 'care',
    badge: 'Wardrobe Crease-Free',
    tag: 'Bridal Suite Ready',
    description: 'Pre-pleated and suspended on custom wooden hangers, keeping pallu and waist pleats razor-sharp and wrinkle-free for your wedding morning.',
  },
  {
    no: '23',
    id: 'straightener-draping',
    name: 'Straightener Draping',
    category: 'care',
    badge: 'Razor-Sharp Pleating',
    tag: 'Ceramic Precision Heat Lock',
    description: 'High-precision ceramic styling press technique creating crisp, razor-sharp, uniform pleats that remain locked all day without creasing.',
  },
  {
    no: '24',
    id: 'lehenga-draping',
    name: 'Lehenga Draping',
    category: 'fusion',
    badge: 'Saree-to-Lehenga',
    tag: 'Sangeet & Party Flare',
    description: 'Ingenious draping method converting your 6-yard saree into a flared lehenga-style skirt with a dramatic pleated or floating dupatta.',
  },
  {
    no: '25',
    id: 'davani-draping',
    name: 'Davani Draping',
    category: 'fusion',
    badge: 'South Half Saree',
    tag: 'Langa Voni Traditional',
    description: 'Youthful South Indian Half-Saree (Pavadai Davani) drape with pleated cross-body pallu, hip gathers, and neat safety anchoring.',
  },
];

interface BlouseStyle {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  badge: string;
  description: string;
  suitableFor: string;
  features: string[];
  image: string;
}

const blouseStyles: BlouseStyle[] = [
  {
    id: 'princess-cut',
    name: 'Princess Cut with Sweetheart Neck',
    shortName: 'Princess Cut',
    subtitle: 'Flawless Contour & Seamless Draping',
    badge: 'Most Popular for Silk Sarees',
    description: 'A seamless curved seam flowing from armhole to hem, sculpting the bust naturally with zero bulk. Accented with a flattering sweetheart neckline that enhances traditional temple jewelry.',
    suitableFor: 'Kanchipuram Silks, Banarasi, Soft Silks & Crepes',
    features: ['Padding Included', 'Zero Side Wrinkles', 'Armhole Precision', 'Deep Sweetheart Front'],
    image: '/images/service-blouse.jpg',
  },
  {
    id: 'bridal-aari',
    name: 'Haute Bridal Aari with Peacock Sleeves',
    shortName: 'Bridal Aari',
    subtitle: 'Elbow-Length Royal Embellishment',
    badge: 'The Muhurtham Masterpiece',
    description: 'Heavy authentic metallic zari, cutdana, stone, and pearl embroidery custom-crafted onto your sleeve. Features a magnificent peacock motif aligned precisely to your wedding saree borders.',
    suitableFor: 'Bridal Muhurtham Sarees & Reception Lehengas',
    features: ['Handcrafted Zari & Kundans', 'Motif Color Matching', 'Reinforced Net Backing', 'Contrast Bead Detailing'],
    image: '/images/service-aari.jpg',
  },
  {
    id: 'hi-neck',
    name: 'Royal Hi-Neck with Zari Collar',
    shortName: 'Royal Hi-Neck',
    subtitle: 'Sophisticated Aristocratic Elegance',
    badge: 'Timeless Statement Piece',
    description: 'An aristocratic high-standing collar paired with a sheer illusion back or keyhole opening. Imparts an elongated, regal posture perfect for high-profile weddings and receptions.',
    suitableFor: 'Tussar Silk, Organza, Chiffon & Heirloom Sarees',
    features: ['Structured Soft Collar', 'Keyhole Back Cutout', 'Delicate Button Closures', 'Zari Border Trim'],
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'katori-deep',
    name: 'Katori Cut with Deep Open Back & Latkans',
    shortName: 'Katori Cut',
    subtitle: 'Traditional South Indian Cup Silhouette',
    badge: 'Classic Heritage Tailoring',
    description: 'The beloved traditional cup-tailored silhouette providing supreme support and classic structure. Finished with a dramatic deep back neck, dori ties, and handcrafted silk tassel latkans.',
    suitableFor: 'Traditional Wedding Sarees, Festive Silk Sarees',
    features: ['Dual Cup Architecture', 'Handcrafted Latkans', 'Reinforced Dori Ties', 'Deep U or Square Back'],
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'boat-cutwork',
    name: 'Boat Neck with Cutwork & Sheer Detailing',
    shortName: 'Boat Cutwork',
    subtitle: 'Modern Minimalist Couture',
    badge: 'Contemporary Favorite',
    description: 'An expansive horizontal neckline highlighting the collarbones, adorned with delicate thread cutwork along the perimeter and elbow sleeves. Offers a graceful, chic modern appearance.',
    suitableFor: 'Contemporary Drapes, Tissue Sarees & Georgettes',
    features: ['Clean Edge Cutwork', 'Collarbone Framing', 'Elbow Sleeves', 'Back Keyhole Opening'],
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
  },
];

const portfolioLooks = [
  {
    title: 'Heirloom Kanchipuram Bridal Edit',
    category: 'Bridal Saree & Aari Blouse',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Intricate Maggam Handwork & Zari',
    category: 'Aari Hand Embroidery',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Royal Anarkali Occasion Silhouette',
    category: 'Designer Kurti & Tops',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pattu Pavadai Bridal Traditions',
    category: 'Kids Ethnic Wear',
    image: '/images/service-kids.jpg',
  },
  {
    title: 'Bespoke Blouse Tailoring Art',
    category: 'Designer Blouse Craft',
    image: '/images/service-blouse.jpg',
  },
  {
    title: 'Aari Embroidery in Studio',
    category: 'Handcrafted Bridal Work',
    image: '/images/service-aari.jpg',
  },
];

const testimonials = [
  {
    name: 'Priyadharshini R.',
    role: 'Bride · Peelamedu, Coimbatore',
    comment: 'The bridal aari work on my Muhurtham blouse was breathtaking! Perfect fitting on the very first trial without a single adjustment needed. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Kavitha Sundaram',
    role: 'Regular Client · Hope College',
    comment: 'Their saree pre-pleating service saved me so much time during my sister’s wedding! I was ready in 2 minutes flat. The finishing on all my blouses is unmatched.',
    rating: 5,
  },
  {
    name: 'Ananya Nair',
    role: 'Festival Wear · Ramanathapuram',
    comment: 'Best boutique in Coimbatore for custom kurtis and princess cut blouses. The stitching quality, timely delivery, and attention to detail are top-notch.',
    rating: 5,
  },
];

const WHATSAPP_PHONE = '919976963056';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_PHONE}`;
const STUDIO_EMAIL = 'cmsfashiondesigner@gmail.com';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenLightbox: (service: ServiceItem, index: number) => void;
  whatsAppLink: string;
}

function ServiceCard({ service, onOpenLightbox, whatsAppLink }: ServiceCardProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = service.images && service.images.length > 0 ? service.images : [service.image];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <article className="service-card">
      <div className="service-card-top">
        <div
          className="service-card-img-wrap"
          onClick={() => onOpenLightbox(service, activeIdx)}
          role="button"
          tabIndex={0}
          title="Click to view full photo"
        >
          <img
            src={images[activeIdx]}
            alt={`${service.title} - Sample ${activeIdx + 1}`}
            className="service-card-img"
            loading="lazy"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="service-img-nav-btn prev"
                onClick={handlePrev}
                aria-label="Previous Photo"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className="service-img-nav-btn next"
                onClick={handleNext}
                aria-label="Next Photo"
              >
                <ChevronRight size={16} />
              </button>
              <div className="service-photo-counter">
                <Images size={12} />
                <span>
                  {activeIdx + 1}/{images.length}
                </span>
              </div>
            </>
          )}

          <button
            type="button"
            className="service-zoom-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(service, activeIdx);
            }}
            aria-label="View Fullscreen"
          >
            <Maximize2 size={13} />
          </button>
        </div>

        {/* Thumbnail Selector Strip */}
        {images.length > 1 && (
          <div className="service-thumb-strip" aria-label="Photo Thumbnails">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className={`service-thumb-item ${idx === activeIdx ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx(idx);
                }}
                aria-label={`View photo ${idx + 1}`}
              >
                <img src={img} alt={`${service.title} thumbnail ${idx + 1}`} />
                <span className="thumb-index-dot">{idx + 1}</span>
              </button>
            ))}
          </div>
        )}

        <div className="service-badge-row">
          <span className="service-badge">{service.badge}</span>
          <span className="service-num">{service.number}</span>
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.description}</p>
        <div className="service-highlights">
          {service.highlights.map((item) => (
            <span className="highlight-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
        {service.id === 'saree-pleating' && (
          <a href="#saree-styles" className="service-saree-action-pill">
            <Sparkles size={13} />
            <span>Explore All 23 Draping Styles</span>
            <ArrowRight size={13} />
          </a>
        )}
      </div>

      <div className="service-footer">
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noreferrer"
          className="service-cta-link"
        >
          <span>Inquire On WhatsApp</span>
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

const heroShowcaseImages = [
  {
    src: '/images/service-blouse-2.jpg',
    alt: 'Bespoke Emerald Green Sweetheart Bridal Blouse in Atelier',
  },
  {
    src: '/images/service-aari.jpg',
    alt: 'Haute Bridal Aari & Zardozi Hand Embroidery',
  },
  {
    src: '/images/service-blouse-3.jpg',
    alt: 'Crimson Red Deep-Back Bridal Blouse with Royal Tassels',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedBlouseStyle, setSelectedBlouseStyle] = useState<BlouseStyle>(blouseStyles[0]);
  const [heroImgIdx, setHeroImgIdx] = useState(0);
  const [lightboxData, setLightboxData] = useState<{
    service: ServiceItem;
    index: number;
  } | null>(null);

  const handleOpenLightbox = (service: ServiceItem, index: number) => {
    setLightboxData({ service, index });
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  const handleLightboxPrev = () => {
    if (!lightboxData) return;
    const count = lightboxData.service.images.length;
    setLightboxData({
      service: lightboxData.service,
      index: (lightboxData.index - 1 + count) % count,
    });
  };

  const handleLightboxNext = () => {
    if (!lightboxData) return;
    const count = lightboxData.service.images.length;
    setLightboxData({
      service: lightboxData.service,
      index: (lightboxData.index + 1) % count,
    });
  };

  const currentBlouseIndex = blouseStyles.findIndex((s) => s.id === selectedBlouseStyle.id);

  const handlePrevBlouseStyle = () => {
    const prevIndex = (currentBlouseIndex - 1 + blouseStyles.length) % blouseStyles.length;
    setSelectedBlouseStyle(blouseStyles[prevIndex]);
  };

  const handleNextBlouseStyle = () => {
    const nextIndex = (currentBlouseIndex + 1) % blouseStyles.length;
    setSelectedBlouseStyle(blouseStyles[nextIndex]);
  };

  // Consultation Estimator & Booking Wizard State
  const [wizardService, setWizardService] = useState('Bridal Blouse & Aari Work');
  const [wizardUrgency, setWizardUrgency] = useState('Standard (3-5 Days)');
  const [clientName, setClientName] = useState('');
  const [occasionDate, setOccasionDate] = useState('');

  const closeMenu = () => setMobileMenuOpen(false);

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const namePart = clientName.trim() ? `Client Name: ${clientName.trim()}\n` : '';
    const datePart = occasionDate.trim() ? `Approximate Event Date: ${occasionDate.trim()}\n` : '';
    const subject = `Consultation Inquiry: ${wizardService} ${clientName.trim() ? `- ${clientName.trim()}` : ''}`;
    const body = `Hello CMS Fashion Designer Team,\n\nI would like to book a consultation for:\n\n• Service: ${wizardService}\n• Turnaround Urgency: ${wizardUrgency}\n${namePart ? `• ${namePart}` : ''}${datePart ? `• ${datePart}` : ''}\nPlease share consultation availability, design catalogs, and pricing details.\n\nThank you!`;

    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppSubmit = () => {
    const namePart = clientName.trim() ? `My name is ${clientName.trim()}. ` : '';
    const datePart = occasionDate.trim() ? `for my upcoming event around ${occasionDate}. ` : '';
    const message = `Hello CMS Fashion Designer! ${namePart}I would like to book a consultation for ${wizardService} with ${wizardUrgency} timeline ${datePart}Could you please share appointment details and design options?`;
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const createWhatsAppServiceLink = (serviceTitle: string) => {
    const text = `Hello CMS Fashion Designer, I am interested in your "${serviceTitle}" service. Could you please share the design options and pricing?`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  };

  const createBlouseStyleWhatsAppLink = (styleName: string) => {
    const text = `Hello CMS Fashion Designer, I love your "${styleName}" design. Can I book an appointment to get this tailored for my saree?`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  };

  // Saree Draping & Pre-Pleating Styles Filter & Search
  const [drapingFilter, setDrapingFilter] = useState<string>('all');
  const [drapingSearch, setDrapingSearch] = useState<string>('');

  const filteredDrapingStyles = sareeDrapingStyles.filter((style) => {
    const matchesCategory = drapingFilter === 'all' || style.category === drapingFilter;
    const query = drapingSearch.trim().toLowerCase();
    const matchesSearch = !query ||
      style.name.toLowerCase().includes(query) ||
      style.tag.toLowerCase().includes(query) ||
      style.badge.toLowerCase().includes(query) ||
      style.description.toLowerCase().includes(query) ||
      style.no.includes(query);
    return matchesCategory && matchesSearch;
  });

  const createDrapingWhatsAppLink = (styleName: string, styleNo: string) => {
    const text = `Hello CMS Fashion Designer, I would like to book the "${styleName}" (#${styleNo}) saree pre-pleating / draping service. Could you please share appointment availability and pricing?`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="site-shell">
      {/* Top Announcement Ribbon */}
      <div className="top-announcement">
        <Sparkles size={14} color="#f5df97" />
        <span>Coimbatore's Premier Bespoke & Bridal Atelier</span>
        · Est. 2022 · Peelamedu Hope College ·
        <a
          href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hello CMS Fashion Designer, I would like to book a bridal consultation.')}`}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline', color: 'var(--gold-bright)', fontWeight: 700 }}
        >
          Book Consultation
        </a>
      </div>

      {/* Sticky Luxury Navbar */}
      <header className="site-header">
        <div className="container-max">
          <div className="nav-inner">
            <a href="#top" className="brand-link" aria-label="CMS Fashion Designer Home">
              <div className="brand-crest">
                <img src="/cms-logo.jpg" alt="CMS Fashion Designer Crest Logo" />
              </div>
              <div className="brand-text">
                <span className="brand-title">CMS</span>
                <span className="brand-tagline">Fashion Designer</span>
              </div>
            </a>

            <nav className="nav-menu" aria-label="Main Navigation">
              <a href="#studio" className="nav-link">The Studio</a>
              <a href="#blouses" className="nav-link">Blouse Styles</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#saree-styles" className="nav-link">Saree Draping</a>
              <a href="#craftsmanship" className="nav-link">Craftsmanship</a>
              <a href="#portfolio" className="nav-link">Lookbook</a>
              <a href="#testimonials" className="nav-link">Reviews</a>
              <a href="#contact" className="nav-link">Location</a>
            </nav>

            <div className="nav-actions">
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hello CMS Fashion Designer, I would like to book an appointment.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold nav-cta"
              >
                <Crown size={14} />
                <span>Book Appointment</span>
              </a>

              <button
                className="mobile-toggle"
                type="button"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-nav-links">
              <a href="#studio" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">01</span>
                <span>The Studio</span>
              </a>
              <a href="#blouses" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">02</span>
                <span>Blouse Styles Explorer</span>
              </a>
              <a href="#services" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">03</span>
                <span>All Tailoring Services</span>
              </a>
              <a href="#saree-styles" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">04</span>
                <span>Saree Draping (23 Styles)</span>
              </a>
              <a href="#craftsmanship" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">05</span>
                <span>The CMS Craftsmanship</span>
              </a>
              <a href="#portfolio" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">06</span>
                <span>Selected Lookbook</span>
              </a>
              <a href="#testimonials" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">07</span>
                <span>Client Reviews</span>
              </a>
              <a href="#contact" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">08</span>
                <span>Studio Location & Contact</span>
              </a>
            </div>

            <div className="mobile-drawer-footer">
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hello CMS Fashion Designer, I would like to book a bridal consultation.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={closeMenu}
              >
                <Crown size={15} />
                <span>Book Consultation</span>
              </a>
              <a
                href="tel:+919976963056"
                className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                onClick={closeMenu}
              >
                <Phone size={15} />
                <span>Call Studio (+91 99769 63056)</span>
              </a>
              <p className="mobile-drawer-timing">
                Mon – Sun: 7:00 AM – 10:00 PM (All 7 Days Open) · Hope College, Peelamedu
              </p>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero Section (Grand Magazine Atelier) */}
        <section className="hero-section">
          <div className="container-max">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-badge">
                  <Crown size={15} />
                  <span>Est. 2022 · Coimbatore's Haute Couture Atelier</span>
                </div>

                <h1 className="hero-title">
                  Where Royal Tradition Meets <br />
                  <em>Bespoke Modern Luxury.</em>
                </h1>

                <p className="hero-subtitle">
                  Bespoke bridal blouses, exquisite hand Aari embroidery, custom designer kurtis, and effortless saree pre-pleating — sculpted to celebrate your unique beauty with absolute precision.
                </p>

                <div className="hero-ctas">
                  <a
                    href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hello CMS Fashion Designer, I would like to book a consultation for my upcoming celebration.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold"
                  >
                    <Crown size={16} />
                    <span>Book Bridal Consultation</span>
                  </a>
                  <a href="#blouses" className="btn btn-outline">
                    <span>Explore Blouse Styles</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Years of Mastery</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3,000+</span>
                    <span className="stat-label">Bespoke Fits</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Fit Guarantee</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">4.9 ★</span>
                    <span className="stat-label">500+ Happy Brides</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual Centerpiece with Official Logo Emblem */}
              <div className="hero-visual-card">
                <div className="hero-visual-aura" />

                {/* Floating Glass Pill Top */}
                <div className="floating-pill floating-pill-top">
                  <div className="pill-icon">
                    <Crown size={18} />
                  </div>
                  <div className="pill-text">
                    <span className="pill-title">Bridal Aari Suite</span>
                    <span className="pill-sub">Pure Zari & Kundan Handwork</span>
                  </div>
                </div>

                <div className="hero-frame">
                  <div className="hero-frame-inner">
                    <img
                      src={heroShowcaseImages[heroImgIdx].src}
                      alt={heroShowcaseImages[heroImgIdx].alt}
                      loading="eager"
                    />
                    <div className="hero-img-dots" role="tablist" aria-label="Hero Bridal Highlights">
                      {heroShowcaseImages.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`hero-dot ${i === heroImgIdx ? 'active' : ''}`}
                          onClick={() => setHeroImgIdx(i)}
                          aria-label={`View bridal showcase ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Glass Pill Bottom */}
                <div className="floating-pill floating-pill-bottom">
                  <div className="pill-icon">
                    <Zap size={18} />
                  </div>
                  <div className="pill-text">
                    <span className="pill-title">Ready-in-48h Express</span>
                    <span className="pill-sub">Fast Bridal Turnaround</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Blouse Style & Neckline Explorer */}
        <section id="blouses" className="explorer-section">
          <div className="container-max">
            <div className="section-header-center">
              <div className="section-eyebrow">
                <span /> 01 / Interactive Blouse Guide <span />
              </div>
              <h2 className="section-title">
                Explore Signature <br />
                <em>Blouse Silhouettes & Cuts.</em>
              </h2>
              <p className="section-desc">
                Select a silhouette to discover our bespoke tailoring craftsmanship, neckline architecture, and recommended saree fabrics.
              </p>
            </div>

            {/* Mobile Horizontal Category Selector (visible < 992px) */}
            <div className="explorer-mobile-nav">
              <div className="explorer-mobile-pills" role="tablist" aria-label="Blouse silhouettes">
                {blouseStyles.map((style, idx) => (
                  <button
                    key={style.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedBlouseStyle.id === style.id}
                    className={`explorer-mobile-pill ${selectedBlouseStyle.id === style.id ? 'active' : ''}`}
                    onClick={() => setSelectedBlouseStyle(style)}
                  >
                    <span className="mobile-pill-num">0{idx + 1}</span>
                    <span className="mobile-pill-name">{style.shortName}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="explorer-grid">
              {/* Left Desktop Style Buttons (visible >= 992px) */}
              <div className="explorer-tabs" role="tablist" aria-label="Blouse silhouettes list">
                {blouseStyles.map((style, idx) => (
                  <button
                    key={style.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedBlouseStyle.id === style.id}
                    className={`explorer-tab-btn ${selectedBlouseStyle.id === style.id ? 'active' : ''}`}
                    onClick={() => setSelectedBlouseStyle(style)}
                  >
                    <div className="tab-btn-idx">0{idx + 1}</div>
                    <div className="tab-btn-content">
                      <h4>{style.name}</h4>
                      <p>{style.subtitle}</p>
                    </div>
                    <div className="tab-btn-arrow">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Interactive Detail Card */}
              <div className="explorer-preview-card">
                <div className="preview-top-bar">
                  <span className="preview-badge">{selectedBlouseStyle.badge}</span>
                  <div className="preview-nav-controls">
                    <button
                      type="button"
                      className="preview-nav-btn"
                      onClick={handlePrevBlouseStyle}
                      aria-label="Previous Blouse Style"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="preview-counter">
                      0{currentBlouseIndex + 1} / 0{blouseStyles.length}
                    </span>
                    <button
                      type="button"
                      className="preview-nav-btn"
                      onClick={handleNextBlouseStyle}
                      aria-label="Next Blouse Style"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="preview-media-wrap">
                  <img
                    src={selectedBlouseStyle.image}
                    alt={selectedBlouseStyle.name}
                    className="preview-media-img"
                    key={selectedBlouseStyle.id}
                  />
                  <div className="preview-media-badge">
                    <Sparkles size={13} />
                    <span>CMS Bespoke Fit</span>
                  </div>
                </div>

                <h3 className="preview-title">{selectedBlouseStyle.name}</h3>
                <p className="preview-subtitle">{selectedBlouseStyle.subtitle}</p>
                <p className="preview-desc">{selectedBlouseStyle.description}</p>

                <div className="preview-suitable-box">
                  <span className="preview-suitable-label">
                    Best Suited For:
                  </span>
                  <p className="preview-suitable-text">
                    {selectedBlouseStyle.suitableFor}
                  </p>
                </div>

                <div className="preview-features">
                  {selectedBlouseStyle.features.map((feat) => (
                    <div className="preview-feature-pill" key={feat}>
                      <CheckCircle2 size={15} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile Prev / Next Quick Nav Bar */}
                <div className="preview-mobile-footer-nav">
                  <button
                    type="button"
                    className="preview-step-btn"
                    onClick={handlePrevBlouseStyle}
                  >
                    <ChevronLeft size={16} />
                    <span>Previous Cut</span>
                  </button>
                  <button
                    type="button"
                    className="preview-step-btn"
                    onClick={handleNextBlouseStyle}
                  >
                    <span>Next Cut</span>
                    <ChevronRight size={16} />
                  </button>
                </div>

                <a
                  href={createBlouseStyleWhatsAppLink(selectedBlouseStyle.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={16} />
                  <span>Enquire For This Blouse Style on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Studio Intro Section */}
        <section id="studio" className="section-pad">
          <div className="container-max">
            <div className="section-header-center">
              <div className="section-eyebrow">
                <span /> 02 / The Atelier <span />
              </div>
              <h2 className="section-title">
                Where Personal Elegance <br />
                <em>Finds Its True Expression.</em>
              </h2>
              <p className="section-desc">
                Located in Hope College, Peelamedu, CMS Fashion Designer has spent nearly a decade perfecting the craft of bespoke womenswear. From timeless South Indian silk saree blouses to contemporary festive kurtis, our studio blends heritage needlework with modern silhouette design.
              </p>
            </div>
          </div>
        </section>

        {/* Full-Bleed Services Catalog */}
        <section id="services" className="services-section section-pad" style={{ paddingTop: 0 }}>
          <div className="container-max">
            <div className="section-header-center">
              <div className="section-eyebrow">
                <span /> 03 / Our Offerings <span />
              </div>
              <h2 className="section-title">
                Comprehensive Studio <br />
                <em>Tailoring & Designing Services.</em>
              </h2>
              <p className="section-desc">
                Every service in our studio is carried out with meticulous care, premium stitching materials, and attention to comfort.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="service-filter-bar">
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Offerings ({servicesData.length})
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'blouse' ? 'active' : ''}`}
                onClick={() => setActiveCategory('blouse')}
              >
                Blouses & Design
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'aari' ? 'active' : ''}`}
                onClick={() => setActiveCategory('aari')}
              >
                Aari Handwork
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'saree' ? 'active' : ''}`}
                onClick={() => setActiveCategory('saree')}
              >
                Saree Pre-Pleating
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'tops' ? 'active' : ''}`}
                onClick={() => setActiveCategory('tops')}
              >
                Tops & Kurtis
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'bottoms' ? 'active' : ''}`}
                onClick={() => setActiveCategory('bottoms')}
              >
                Pants & Bottoms
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'kids' ? 'active' : ''}`}
                onClick={() => setActiveCategory('kids')}
              >
                Kids Wear
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'finishing' ? 'active' : ''}`}
                onClick={() => setActiveCategory('finishing')}
              >
                Stitching & Alterations
              </button>
            </div>

            {/* Services Cards Grid */}
            <div className="services-grid">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onOpenLightbox={handleOpenLightbox}
                  whatsAppLink={createWhatsAppServiceLink(service.title)}
                />
              ))}
            </div>

            {/* Bridal & Saree Spotlight Banner */}
            <div className="spotlight-banner">
              <div className="spotlight-grid">
                <div className="spotlight-copy">
                  <div className="hero-badge" style={{ marginBottom: '1rem' }}>
                    <Crown size={15} />
                    <span>Specialized Bridal Suite</span>
                  </div>
                  <h3>
                    Planning Your Big Day? <br />
                    <em>Let us craft your dream wedding blouse.</em>
                  </h3>
                  <p>
                    From customized couple portrait aari embroidery to matching the zari shade of your heirloom wedding saree, we provide one-on-one design sessions to make sure you look radiant on your wedding day.
                  </p>

                  <div className="spotlight-features">
                    <div className="spotlight-feature-item">
                      <CheckCircle2 size={18} />
                      <span>Custom Neckline & Sleeve Sketching</span>
                    </div>
                    <div className="spotlight-feature-item">
                      <CheckCircle2 size={18} />
                      <span>Heavy Zardozi, Cut Beads & Stones</span>
                    </div>
                    <div className="spotlight-feature-item">
                      <CheckCircle2 size={18} />
                      <span>Ready-to-Wear Saree Pre-Pleating</span>
                    </div>
                    <div className="spotlight-feature-item">
                      <CheckCircle2 size={18} />
                      <span>Pre-Wedding Fitting Trials</span>
                    </div>
                  </div>

                  <a
                    href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hello CMS Fashion Designer, I am looking for bridal blouse stitching and Aari embroidery. Please let me know how to book an appointment.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold"
                  >
                    <MessageCircle size={16} />
                    <span>Discuss Bridal Package</span>
                  </a>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div className="hero-frame" style={{ margin: '0 auto', maxWidth: '340px' }}>
                    <div className="hero-frame-inner">
                      <img
                        src="/images/service-blouse.jpg"
                        alt="CMS Haute Bridal Couture Blouse"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Saree Pre-Pleating & Draping Styles Showcase Section */}
        <section id="saree-styles" className="saree-styles-section section-pad">
          <div className="container-max">
            <div className="section-header-center">
              <div className="section-eyebrow">
                <span /> 03.B / Master Saree Studio <span />
              </div>
              <h2 className="section-title">
                23+ Specialized Saree <br />
                <em>Pre-Pleating & Draping Styles.</em>
              </h2>
              <p className="section-desc">
                From heritage Tamil Madisar and Kerala Kasavu to modern Mermaid, Cancan, Double Saree, and 60-Second Box Folding—our Coimbatore master drapists bring you wrinkle-free, runway-ready perfection.
              </p>
            </div>

            {/* Controls: Category Filter Tabs & Live Search */}
            <div className="saree-controls-wrap">
              <div className="saree-filter-tabs">
                {drapingCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`draping-tab-btn ${drapingFilter === cat.id ? 'active' : ''}`}
                    onClick={() => setDrapingFilter(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span className="tab-count">{cat.count}</span>
                  </button>
                ))}
              </div>

              <div className="saree-search-box">
                <Search size={16} className="saree-search-icon" />
                <input
                  type="text"
                  className="saree-search-input"
                  placeholder="Search draping styles (e.g. Madisar, Mermaid, Box fold, Heatless)..."
                  value={drapingSearch}
                  onChange={(e) => setDrapingSearch(e.target.value)}
                />
                {drapingSearch && (
                  <button
                    type="button"
                    className="saree-search-clear"
                    onClick={() => setDrapingSearch('')}
                    aria-label="Clear Search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Results Count Bar */}
            <div className="saree-count-bar">
              <span>
                Showing <strong>{filteredDrapingStyles.length}</strong> of 23 Specialist Draping Services
              </span>
              {drapingSearch && (
                <span className="saree-search-indicator">
                  Filtered by: <em>"{drapingSearch}"</em>
                </span>
              )}
            </div>

            {/* 23 Draping Styles Grid */}
            <div className="saree-styles-grid">
              {filteredDrapingStyles.map((item) => (
                <div className="saree-style-card" key={item.id}>
                  <div className="saree-card-top">
                    <span className="saree-card-no">#{item.no}</span>
                    <span className="saree-card-badge">{item.badge}</span>
                  </div>

                  <h3 className="saree-card-title">{item.name}</h3>

                  <div className="saree-card-tag">
                    <Sparkles size={12} />
                    <span>{item.tag}</span>
                  </div>

                  <p className="saree-card-desc">{item.description}</p>

                  <div className="saree-card-footer">
                    <a
                      href={createDrapingWhatsAppLink(item.name, item.no)}
                      target="_blank"
                      rel="noreferrer"
                      className="saree-card-btn"
                    >
                      <MessageCircle size={14} />
                      <span>Book #{item.no} on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Atelier Quality Assurance Ribbon */}
            <div className="saree-perks-strip">
              <div className="saree-perk-item">
                <div className="saree-perk-icon-wrap">
                  <Zap size={22} />
                </div>
                <div>
                  <h4>60-Second Wear</h4>
                  <p>Pre-pleated, anchored & boxed—slip into your saree in under a minute on busy event mornings.</p>
                </div>
              </div>

              <div className="saree-perk-item">
                <div className="saree-perk-icon-wrap">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4>Zari & Fabric Safe</h4>
                  <p>Specialized steam-set or 100% heatless finger-pleating to protect pure gold zari threads.</p>
                </div>
              </div>

              <div className="saree-perk-item">
                <div className="saree-perk-icon-wrap">
                  <Clock3 size={22} />
                </div>
                <div>
                  <h4>Express Turnaround</h4>
                  <p>Same-day and 24-hour express pre-pleating options available for urgent celebrations.</p>
                </div>
              </div>

              <div className="saree-perk-item">
                <div className="saree-perk-icon-wrap">
                  <Crown size={22} />
                </div>
                <div>
                  <h4>Bridal Studio Assistance</h4>
                  <p>In-studio professional draping sessions for brides, mothers, and bridesmaids in Coimbatore.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Process */}
        <section id="craftsmanship" className="process-section section-pad">
          <div className="container-max">
            <div className="section-header-center">
              <div className="section-eyebrow">
                <span /> 04 / The CMS Way <span />
              </div>
              <h2 className="section-title">
                Our 4-Step Journey to <br />
                <em>Your Flawless Fit.</em>
              </h2>
              <p className="section-desc">
                How we turn your chosen fabric and style into a showstopping outfit that brings you comfort and compliments.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-step-card">
                <div className="step-num">01</div>
                <h4 className="step-title">Style Consultation</h4>
                <p className="step-desc">
                  Bring your saree, fabric, or Pinterest ideas. We advise on the necklines, sleeves, and cut that best accentuate your style.
                </p>
              </div>

              <div className="process-step-card">
                <div className="step-num">02</div>
                <h4 className="step-title">Precision Measurements</h4>
                <p className="step-desc">
                  We capture your specific measurements taking shoulder slope, armhole depth, and posture into account for 100% comfort.
                </p>
              </div>

              <div className="process-step-card">
                <div className="step-num">03</div>
                <h4 className="step-title">Artisanal Handcrafting</h4>
                <p className="step-desc">
                  Master cutters cut each panel by hand, followed by intricate aari embroidery, high-grade lining attachment, and reinforced stitching.
                </p>
              </div>

              <div className="process-step-card">
                <div className="step-num">04</div>
                <h4 className="step-title">Trial & Finishing</h4>
                <p className="step-desc">
                  Try on your outfit in our studio. We make any micro-adjustments on the spot and deliver your piece pressed and ready to shine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / Selected Work */}
        <section id="portfolio" className="section-pad">
          <div className="container-max">
            <div className="section-header-center">
              <div className="section-eyebrow">
                <span /> 05 / Lookbook <span />
              </div>
              <h2 className="section-title">
                Textures, Silhouettes & <br />
                <em>Handcrafted Detailing.</em>
              </h2>
              <p className="section-desc">
                A preview of our recent bespoke creations for Coimbatore brides, festive celebrations, and everyday couture.
              </p>
            </div>

            <div className="portfolio-grid">
              {portfolioLooks.map((look) => (
                <div className="portfolio-card" key={look.title}>
                  <img src={look.image} alt={look.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">{look.category}</span>
                    <h4 className="portfolio-title">{look.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hello CMS Fashion Designer, I would like to view your latest bridal and blouse design catalog.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <span>Request Latest Design Catalog on WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section id="testimonials" className="section-pad" style={{ paddingTop: 0 }}>
          <div className="container-max">
            <div className="section-header-center">
              <div className="section-eyebrow">
                <span /> 06 / Client Reviews <span />
              </div>
              <h2 className="section-title">
                Loved by Brides & <br />
                <em>Fashion Lovers Across Coimbatore.</em>
              </h2>
              <p className="section-desc">
                Our reputation is built on trust, impeccable finishing, and delighted smiles from our clients.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <div className="testimonial-card" key={t.name}>
                  <div>
                    <div className="rating-stars">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={17} fill="#ffc107" color="#ffc107" />
                      ))}
                    </div>
                    <p className="testimonial-quote">"{t.comment}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">{t.name[0]}</div>
                    <div className="author-info">
                      <h5>{t.name}</h5>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Interactive Consultation Wizard */}
        <section id="contact" className="contact-section section-pad">
          <div className="container-max">
            <div className="contact-card-main">
              {/* Studio Details */}
              <div className="contact-details">
                <div className="section-eyebrow">
                  <span /> 07 / Visit Our Studio <span />
                </div>
                <h2 className="section-title">
                  Let’s Create Your <br />
                  <em>Next Masterpiece.</em>
                </h2>
                <p className="section-desc">
                  Visit our studio in Peelamedu, Coimbatore or message us directly on WhatsApp for design consultations, fabric recommendations, and appointments.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-entry">
                    <div className="contact-info-icon">
                      <MapPin size={22} />
                    </div>
                    <div className="contact-info-text">
                      <h5>Studio Address</h5>
                      <p>
                        No. 42/30, Velappan Nagar,<br />
                        Masakalipalayam Road, Hope College,<br />
                        Peelamedu, Coimbatore – 641004
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-entry">
                    <div className="contact-info-icon">
                      <Phone size={22} />
                    </div>
                    <div className="contact-info-text">
                      <h5>Direct Phone & WhatsApp</h5>
                      <p>
                        <a href="tel:+919976963056">+91 99769 63056</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-entry">
                    <div className="contact-info-icon">
                      <Mail size={22} />
                    </div>
                    <div className="contact-info-text">
                      <h5>Official Email</h5>
                      <p>
                        <a href={`mailto:${STUDIO_EMAIL}`} style={{ color: 'var(--gold-bright)' }}>
                          {STUDIO_EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-entry">
                    <div className="contact-info-icon">
                      <Clock3 size={22} />
                    </div>
                    <div className="contact-info-text">
                      <h5>Studio Timings</h5>
                      <p>
                        Monday – Sunday: 7:00 AM – 10:00 PM<br />
                        <span style={{ color: 'var(--gold-bright)', fontWeight: 600 }}>Open All 7 Days (Sunday Working Day)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Booking Wizard */}
              <div className="consultation-box">
                <h3 className="consultation-title">
                  Book Consultation
                </h3>
                <p className="consultation-desc">
                  Select your service, preferred turnaround time, and event date to send your consultation inquiry directly to <strong style={{ color: 'var(--gold-bright)' }}>{STUDIO_EMAIL}</strong> or via WhatsApp.
                </p>

                <form onSubmit={handleWizardSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="client-name">Your Name (Optional)</label>
                    <input
                      id="client-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Priya"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service-select">Select Service</label>
                    <select
                      id="service-select"
                      className="form-select"
                      value={wizardService}
                      onChange={(e) => setWizardService(e.target.value)}
                    >
                      <option value="Bridal Blouse & Aari Work">Bridal Blouse & Aari Handwork</option>
                      <option value="Princess Cut / Designer Blouse">Designer Blouse (Princess/Katori/Hi-Neck)</option>
                      <option value="Saree Pre-Pleating & Draping (23+ Styles)">Saree Pre-Pleating (23+ Styles: Box Fold, Madisar, Mermaid, etc.)</option>
                      <option value="Tops & Kurtis (Anarkali/Collar)">Tops & Kurtis (Anarkali / Panel Cut)</option>
                      <option value="Pants & Palazzos">Pants & Bottoms (Patiala / Palazzo)</option>
                      <option value="Custom Kidswear (Pattu Pavadai/Frock)">Kids Wear (Pattu Pavadai / Frocks)</option>
                      <option value="Sudithar Stitching & Alterations">Sudithar Stitching & Alterations</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="urgency-select">Turnaround Urgency</label>
                    <select
                      id="urgency-select"
                      className="form-select"
                      value={wizardUrgency}
                      onChange={(e) => setWizardUrgency(e.target.value)}
                    >
                      <option value="Standard (3-5 Days)">Standard Delivery (3-5 Days)</option>
                      <option value="Express Bridal (48 Hours)">Express Bridal Stitching (Within 48 Hours)</option>
                      <option value="Same Day Saree Pleating">Same Day Saree Pre-Pleating</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="occasion-date">Approximate Event Date (Optional)</label>
                    <input
                      id="occasion-date"
                      type="text"
                      className="form-input"
                      placeholder="e.g. 15th of next month"
                      value={occasionDate}
                      onChange={(e) => setOccasionDate(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold"
                    style={{ width: '100%', marginTop: '0.95rem', padding: '1rem 1.6rem', justifyContent: 'center' }}
                  >
                    <Mail size={19} />
                    <span>Send Email Inquiry ({STUDIO_EMAIL})</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="btn btn-whatsapp"
                    style={{ width: '100%', marginTop: '0.65rem', padding: '0.85rem 1.6rem', justifyContent: 'center' }}
                  >
                    <MessageCircle size={18} />
                    <span>Or Send via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container-max">
          <div className="footer-top">
            <a href="#top" className="brand-link" aria-label="CMS Fashion Designer Home">
              <div className="brand-crest">
                <img src="/cms-logo.jpg" alt="CMS Logo" />
              </div>
              <div className="brand-text">
                <span className="brand-title">CMS</span>
                <span className="brand-tagline">Fashion Designer</span>
              </div>
            </a>

            <div className="footer-social-links">
              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="footer-social-link"
                style={{ color: 'var(--gold-bright)' }}
              >
                <Mail size={18} /> {STUDIO_EMAIL}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                style={{ color: 'var(--gold-light)' }}
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hello CMS Fashion Designer!')}`}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                style={{ color: '#25D366' }}
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 CMS Fashion Designer. All Rights Reserved. Peelamedu, Coimbatore.</span>
            <span style={{ fontStyle: 'italic', color: 'var(--gold-bright)', fontSize: '0.95rem' }}>
              Your Style, Our Passion.
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hello CMS Fashion Designer, I would like to inquire about tailoring and bridal design.')}`}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <span className="floating-whatsapp-pulse" />
        <MessageCircle size={32} />
      </a>

      {/* Service Photo Lightbox Modal */}
      {lightboxData && (
        <div
          className="lightbox-overlay"
          onClick={handleCloseLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Service Photo Gallery"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={handleCloseLightbox}
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>

            <div className="lightbox-stage">
              {lightboxData.service.images.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn prev"
                  onClick={handleLightboxPrev}
                  aria-label="Previous Photo"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <div className="lightbox-image-holder">
                <img
                  src={lightboxData.service.images[lightboxData.index]}
                  alt={`${lightboxData.service.title} Photo ${lightboxData.index + 1}`}
                  className="lightbox-img"
                />
              </div>

              {lightboxData.service.images.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn next"
                  onClick={handleLightboxNext}
                  aria-label="Next Photo"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            <div className="lightbox-info">
              <div className="lightbox-info-header">
                <div>
                  <div className="service-badge-row" style={{ marginBottom: '6px' }}>
                    <span className="service-badge">{lightboxData.service.badge}</span>
                    <span className="service-photo-counter" style={{ position: 'static', opacity: 1 }}>
                      <Images size={11} />
                      Photo {lightboxData.index + 1} of {lightboxData.service.images.length}
                    </span>
                  </div>
                  <h3 className="lightbox-title">{lightboxData.service.title}</h3>
                </div>

                <a
                  href={createWhatsAppServiceLink(lightboxData.service.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <MessageCircle size={15} />
                  <span>Inquire This Look</span>
                </a>
              </div>

              {/* Lightbox Thumbnails Strip */}
              {lightboxData.service.images.length > 1 && (
                <div className="lightbox-thumbs">
                  {lightboxData.service.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`lightbox-thumb ${idx === lightboxData.index ? 'active' : ''}`}
                      onClick={() => setLightboxData({ service: lightboxData.service, index: idx })}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                      <span>{idx + 1}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
