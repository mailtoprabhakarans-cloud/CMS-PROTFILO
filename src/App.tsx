import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crown,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
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
  },
  {
    id: 'saree-pleating',
    category: 'saree',
    number: '03',
    badge: 'Trending & Convenient',
    title: 'Saree Pre-Pleating & Draping',
    description: 'Transform any Kanchipuram, Banarasi, or party saree into a ready-to-wear 60-second drape with immaculate iron-set pleats.',
    highlights: ['Ready-to-Wear Box Fold', 'Neat Shoulder Pleats', 'Waist Pleat Anchoring', 'Safe Fabric Pressing', 'Bridal Saree Ready'],
    image: '/images/service-saree.jpg',
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
  },
  {
    id: 'kids-wear',
    category: 'kids',
    number: '06',
    badge: 'Cute & Gentle On Skin',
    title: 'Custom Kidswear & Pattu Pavadai',
    description: 'Adorable traditional and modern outfits made with child-safe soft linings and breathable luxury fabrics.',
    highlights: ['Pattu Top & Skirt', 'Circular Skirt', 'Designer Frocks', 'Pinafore Skirts', 'Zapla Newborn Wear'],
    image: '/images/service-kids.jpg',
  },
  {
    id: 'designing-concepts',
    category: 'blouse',
    number: '07',
    badge: 'Couture Styling',
    title: 'Sleeve & Neck Designing Concepts',
    description: 'Creative pattern making for puff sleeves, elbow-cutout designs, sweetheart necklines, and modern sheer panels.',
    highlights: ['Puff & Bell Sleeves', 'Keyhole & Boat Necks', 'Cutwork Styling', 'Sheer Net Insets', 'Border Piping'],
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sudithar-stitching',
    category: 'finishing',
    number: '08',
    badge: 'Precision Fit',
    title: 'Sudithar Stitching & Finishing',
    description: 'All styles of Sudithar and Salwar stitching with clean overlock finishes, neat seams, and long-lasting durability.',
    highlights: ['All Sudithar Models', 'Overlock Seams', 'Custom Slit Lengths', 'Lining Reinforcement', 'Comfort Sizing'],
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'general-alterations',
    category: 'finishing',
    number: '09',
    badge: 'Essential Studio Service',
    title: 'In-Skirt, Nighty & Alterations',
    description: 'Professional alteration services to breathe new life into your cherished outfits, plus bespoke tailored essentials.',
    highlights: ['4/6 Part In-Skirt', 'Bespoke Nighty', 'Size Adjustments', 'Blouse Alterations', 'Saree Fall & Pico'],
    image: '/images/service-alterations.jpg',
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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedBlouseStyle, setSelectedBlouseStyle] = useState<BlouseStyle>(blouseStyles[0]);

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

  return (
    <div className="site-shell">
      {/* Top Announcement Ribbon */}
      <div className="top-announcement">
        <Sparkles size={14} color="#f5df97" />
        <span>Coimbatore's Premier Bespoke & Bridal Atelier</span>
        · Est. 2016 · Peelamedu Hope College ·
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
              <a href="#craftsmanship" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">04</span>
                <span>The CMS Craftsmanship</span>
              </a>
              <a href="#portfolio" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">05</span>
                <span>Selected Lookbook</span>
              </a>
              <a href="#testimonials" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">06</span>
                <span>Client Reviews</span>
              </a>
              <a href="#contact" onClick={closeMenu} className="mobile-nav-item">
                <span className="mobile-nav-num">07</span>
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
                Mon – Sat: 10:00 AM – 7:00 PM · Hope College, Peelamedu
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
                  <span>Est. 2016 · Coimbatore's Haute Couture Atelier</span>
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
                    <span className="stat-number">5,000+</span>
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
                      src="/cms-logo.jpg"
                      alt="CMS Fashion Designer Official Gold Logo"
                      loading="eager"
                    />
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
                Saree Pleating
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
                <article className="service-card" key={service.id}>
                  <div className="service-card-top">
                    <div className="service-card-img-wrap">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-card-img"
                        loading="lazy"
                      />
                    </div>
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
                  </div>

                  <div className="service-footer">
                    <a
                      href={createWhatsAppServiceLink(service.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="service-cta-link"
                    >
                      <span>Inquire On WhatsApp</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
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
                      <Clock3 size={22} />
                    </div>
                    <div className="contact-info-text">
                      <h5>Studio Timings</h5>
                      <p>
                        Monday – Saturday: 10:00 AM – 7:00 PM<br />
                        Sunday: By Prior Appointment
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
                  Select your service, preferred turnaround time, and event date to generate your personalized WhatsApp consultation message.
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
                      <option value="Saree Pre-Pleating & Draping">Saree Pre-Pleating (Ready-to-Wear)</option>
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
                    className="btn btn-whatsapp"
                    style={{ width: '100%', marginTop: '0.85rem', padding: '1rem 1.6rem' }}
                  >
                    <MessageCircle size={20} />
                    <span>Send Consultation Inquiry</span>
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
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                style={{ color: 'var(--gold-bright)' }}
              >
                <Instagram size={18} /> Follow on Instagram
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
    </div>
  );
}
