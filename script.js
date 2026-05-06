/* =============================================
   Aurum Palace — Luxury Hotel
   script.js
   ============================================= */

'use strict';

// ── DATA ───────────────────────────────────────

const rooms = [
  {
    id: 'deluxe', name: 'Deluxe Room', emoji: '🛏️',
    price: 350, badge: 'Most Popular',
    bg: 'linear-gradient(135deg,#1a1208,#2a1e0e)',
    desc: 'Elegantly appointed room with city views, king-size bed, and marble bathroom.',
    features: ['King Bed', 'City View', 'Marble Bath', 'Mini Bar', 'Free WiFi'],
    size: '45 m²', guests: 2
  },
  {
    id: 'junior', name: 'Junior Suite', emoji: '🏛️',
    price: 580, badge: 'Best Value',
    bg: 'linear-gradient(135deg,#0e1a1a,#0e2a2a)',
    desc: 'Separate living area with panoramic views, premium amenities and butler service.',
    features: ['King Bed', 'Panoramic View', 'Living Room', 'Butler', 'Jacuzzi'],
    size: '70 m²', guests: 2
  },
  {
    id: 'royal', name: 'Royal Suite', emoji: '👑',
    price: 950, badge: 'Signature',
    bg: 'linear-gradient(135deg,#1a0e1a,#2a0e2a)',
    desc: 'Lavish suite with private terrace, dining room, and exclusive access to the Royal Lounge.',
    features: ['King Bed', 'Private Terrace', 'Dining Room', 'Royal Lounge', 'Spa Access'],
    size: '120 m²', guests: 3
  },
  {
    id: 'presidential', name: 'Presidential Suite', emoji: '🌟',
    price: 2500, badge: 'Ultra Luxury',
    bg: 'linear-gradient(135deg,#1a1400,#2a2000)',
    desc: 'The pinnacle of luxury. Two floors, private pool, personal chef, and full concierge.',
    features: ['2 Bedrooms', 'Private Pool', 'Personal Chef', 'Rolls-Royce', 'Helipad'],
    size: '350 m²', guests: 4
  },
  {
    id: 'garden', name: 'Garden Villa', emoji: '🌿',
    price: 1200, badge: 'Exclusive',
    bg: 'linear-gradient(135deg,#0e1a0e,#0e2a0e)',
    desc: 'A private villa nestled in our manicured gardens with outdoor plunge pool.',
    features: ['Private Villa', 'Plunge Pool', 'Garden', 'Fireplace', 'Golf Cart'],
    size: '180 m²', guests: 4
  },
  {
    id: 'penthouse', name: 'Penthouse', emoji: '🏙️',
    price: 3800, badge: 'Top Floor',
    bg: 'linear-gradient(135deg,#0a0e1a,#0e142a)',
    desc: 'The entire top floor. 360° skyline views, private elevator, grand piano, and rooftop terrace.',
    features: ['Full Floor', '360° Views', 'Private Elevator', 'Grand Piano', 'Rooftop'],
    size: '600 m²', guests: 6
  }
];

const roomPrices = { deluxe: 350, junior: 580, royal: 950, presidential: 2500 };

const galleryItems = [
  { emoji: '🏰', caption: 'Grand Façade', category: 'lobby' },
  { emoji: '🛏️', caption: 'Royal Suite Bedroom', category: 'rooms' },
  { emoji: '🍽️', caption: "L'Or Restaurant", category: 'dining' },
  { emoji: '🏊', caption: 'Infinity Pool', category: 'spa' },
  { emoji: '🌿', caption: 'Spa & Wellness', category: 'spa' },
  { emoji: '🥂', caption: 'Champagne Bar', category: 'dining' },
  { emoji: '🛁', caption: 'Marble Bathroom', category: 'rooms' },
  { emoji: '🎭', caption: 'Grand Ballroom', category: 'lobby' },
  { emoji: '🌅', caption: 'Rooftop Terrace', category: 'lobby' },
];

const menus = {
  breakfast: [
    { name: 'Continental Elegance', desc: 'Selection of pastries, fresh fruits, cold cuts & artisan cheeses', price: '$42', tag: 'Classic' },
    { name: 'Eggs Benedict Royale', desc: 'Poached eggs, smoked salmon, hollandaise on brioche', price: '$28', tag: 'Signature' },
    { name: 'Truffle Omelette', desc: 'Free-range eggs, black truffle, gruyère, fresh herbs', price: '$36', tag: 'Chef\'s Pick' },
    { name: 'Acai Power Bowl', desc: 'Acai, granola, seasonal berries, honey, coconut flakes', price: '$22', tag: 'Wellness' },
    { name: 'Champagne Breakfast', desc: 'Full continental spread with Moët & Chandon Brut', price: '$95', tag: 'Luxury' },
    { name: 'Japanese Breakfast', desc: 'Miso soup, steamed rice, grilled fish, pickled vegetables', price: '$38', tag: 'International' },
  ],
  lunch: [
    { name: 'Lobster Bisque', desc: 'Velvety bisque, cognac cream, claw garnish, caviar', price: '$48', tag: 'Starter' },
    { name: 'Wagyu Burger', desc: 'A5 Wagyu patty, aged cheddar, truffle mayo, brioche bun', price: '$65', tag: 'Signature' },
    { name: 'Niçoise Salad', desc: 'Yellowfin tuna, quail eggs, green beans, olives, anchovy dressing', price: '$38', tag: 'Light' },
    { name: 'Pasta al Tartufo', desc: 'Fresh tagliatelle, black truffle, parmigiano, butter sauce', price: '$55', tag: 'Vegetarian' },
    { name: 'Club Sandwich', desc: 'Triple-decker with roast chicken, foie gras, truffle chips', price: '$45', tag: 'Classic' },
    { name: 'Caesar Royale', desc: 'Romaine, white anchovies, 48-hr croutons, aged parmesan', price: '$32', tag: 'Salad' },
  ],
  dinner: [
    { name: 'Oysters Rockefeller', desc: '6 oysters, spinach, hollandaise, caviar garnish', price: '$62', tag: 'Starter' },
    { name: 'Beef Wellington', desc: '200g tenderloin, mushroom duxelles, prosciutto, puff pastry', price: '$125', tag: 'Signature' },
    { name: 'Dover Sole', desc: 'Whole grilled Dover sole, capers, lemon butter, haricots verts', price: '$95', tag: 'Seafood' },
    { name: 'Duck à l\'Orange', desc: 'Confit duck leg, orange gastrique, fondant potato, green peas', price: '$85', tag: 'Classic' },
    { name: 'Wagyu Striploin', desc: '300g A5 Wagyu, truffle jus, dauphinoise potato, seasonal greens', price: '$195', tag: 'Premium' },
    { name: 'Chocolate Soufflé', desc: 'Warm chocolate soufflé, Tahitian vanilla ice cream, gold leaf', price: '$28', tag: 'Dessert' },
  ],
  drinks: [
    { name: 'Aurum Signature', desc: 'Hennessy XO, elderflower, gold leaf, champagne float', price: '$45', tag: 'Signature' },
    { name: 'Vintage Champagne', desc: 'Dom Pérignon 2015, served with macarons', price: '$85', tag: 'Champagne' },
    { name: 'Japanese Whisky Flight', desc: 'Yamazaki 12, Hibiki Harmony, Hakushu 12', price: '$78', tag: 'Whisky' },
    { name: 'The Garden Spritz', desc: 'Hendrick\'s gin, cucumber, elderflower tonic, rose petal', price: '$32', tag: 'Cocktail' },
    { name: 'Non-Alcoholic Elixir', desc: 'Cold-pressed juices, house botanicals, sparkling water', price: '$22', tag: 'Wellness' },
    { name: 'Coffee & Cognac', desc: 'Single origin espresso, Rémy Martin XO, dark chocolate', price: '$38', tag: 'After Dinner' },
  ]
};

const reviews = [
  { name: 'Alexandra V.', stay: 'Royal Suite', rating: 5, date: 'March 2026', text: 'Absolutely breathtaking. From the moment we arrived, every detail was perfect. The butler service was anticipatory — they knew what we needed before we did.' },
  { name: 'James T.', stay: 'Presidential Suite', rating: 5, date: 'February 2026', text: 'Worth every penny. The private pool at night with Manhattan views is something I will never forget. The personal chef prepared the most exquisite meal of my life.' },
  { name: 'Priya M.', stay: 'Junior Suite', rating: 5, date: 'January 2026', text: 'I have stayed at many luxury hotels worldwide, but Aurum Palace stands apart. The attention to detail, the warmth of staff, the food — all exceptional.' },
  { name: 'Robert & Lisa K.', stay: 'Penthouse', rating: 5, date: 'December 2025', text: 'Our anniversary here was magical. The team arranged rose petals, champagne, and a private saxophone player. The penthouse views are simply unreal.' },
  { name: 'Chen Wei', stay: 'Deluxe Room', rating: 4, date: 'November 2025', text: 'Superb property. The breakfast spread is extraordinary. Minor point: the spa booking was slightly delayed. But overall a world-class experience.' },
  { name: 'Sophie D.', stay: 'Garden Villa', rating: 5, date: 'October 2025', text: 'The Garden Villa is an oasis in the city. Waking up to birdsong and then having your private plunge pool — it is a luxury unlike any other.' },
];

// ── STATE ──────────────────────────────────────
let selectedStars = 0;
let currentMenu = 'breakfast';
let currentGalleryFilter = 'all';

// ── INIT ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderRooms();
  renderGallery('all');
  renderMenu('breakfast');
  renderReviews();
  setDefaultDates();
  initNavScroll();
  initHamburger();
});

// ── NAVBAR ─────────────────────────────────────
function initNavScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  });
}

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
    btn.textContent = links.classList.contains('open') ? '✕' : '☰';
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.textContent = '☰';
    });
  });
}

// ── ROOMS ──────────────────────────────────────
function renderRooms() {
  document.getElementById('roomsGrid').innerHTML = rooms.map(r => `
    <div class="room-card" onclick="openRoomModal('${r.id}')">
      <div class="room-img" style="background:${r.bg}">
        ${r.emoji}
        <span class="room-badge">${r.badge}</span>
      </div>
      <div class="room-info">
        <h3 class="room-name">${r.name}</h3>
        <p class="room-desc">${r.desc}</p>
        <div class="room-features">
          ${r.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
        </div>
        <div class="room-footer">
          <div class="room-price">$${r.price}<span>/night</span></div>
          <button class="room-book">Book Now</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openRoomModal(id) {
  const room = rooms.find(r => r.id === id);
  if (!room) return;

  document.getElementById('modalContent').innerHTML = `
    <div style="text-align:center; font-size:4rem; margin-bottom:16px">${room.emoji}</div>
    <h3>${room.name}</h3>
    <p>${room.desc}</p>
    <div class="modal-detail"><span>Size</span><strong>${room.size}</strong></div>
    <div class="modal-detail"><span>Max Guests</span><strong>${room.guests} guests</strong></div>
    <div class="modal-detail"><span>Price</span><strong>$${room.price} / night</strong></div>
    <div class="modal-detail"><span>Features</span><strong>${room.features.join(' · ')}</strong></div>
    <div class="modal-confirm">
      <button class="btn-gold" style="width:100%;margin-top:8px" onclick="confirmBooking('${room.name}', ${room.price})">
        Reserve This Room
      </button>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('bookingModal').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('bookingModal').classList.remove('open');
}

function confirmBooking(roomName, price) {
  closeModal();
  showToast(`✦ ${roomName} reserved! Our team will contact you shortly.`);
  // Scroll to booking form
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// ── PRICE CALCULATOR ───────────────────────────
function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 3);

  const fmt = d => d.toISOString().split('T')[0];
  document.getElementById('checkIn').value = fmt(tomorrow);
  document.getElementById('checkOut').value = fmt(dayAfter);
  calculatePrice();
}

function calculatePrice() {
  const checkIn  = new Date(document.getElementById('checkIn').value);
  const checkOut = new Date(document.getElementById('checkOut').value);
  const roomType = document.getElementById('roomType').value;
  const guests   = parseInt(document.getElementById('guests').value);

  if (!checkIn || !checkOut || checkOut <= checkIn) {
    document.getElementById('priceResult').style.display = 'none';
    return;
  }

  const nights   = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  const baseRate = roomPrices[roomType] || 350;
  const baseTotal = baseRate * nights;
  const taxes     = Math.round(baseTotal * 0.12);
  const serviceCharge = Math.round(baseTotal * 0.05);
  const grandTotal = baseTotal + taxes + serviceCharge;

  document.getElementById('priceBreakdown').innerHTML = `
    <div class="price-row"><span>${baseRate}/night × ${nights} night${nights > 1 ? 's' : ''}</span><span>$${baseTotal}</span></div>
    <div class="price-row"><span>Taxes & Fees (12%)</span><span>$${taxes}</span></div>
    <div class="price-row"><span>Service Charge (5%)</span><span>$${serviceCharge}</span></div>
    <div class="price-row total"><span>Total Estimate</span><span>$${grandTotal}</span></div>
    <p style="color:rgba(255,255,255,0.4);font-size:0.78rem;margin-top:12px">
      ${nights} night${nights > 1 ? 's' : ''} · ${guests} guest${guests > 1 ? 's' : ''} · Prices in USD
    </p>
  `;
  document.getElementById('priceResult').style.display = 'block';
}

function bookNow() {
  const checkIn  = document.getElementById('checkIn').value;
  const checkOut = document.getElementById('checkOut').value;
  const roomType = document.getElementById('roomType').value;

  if (!checkIn || !checkOut) {
    showToast('⚠️ Please select check-in and check-out dates.');
    return;
  }

  const roomName = rooms.find(r => r.id === roomType)?.name || 'Selected Room';
  showToast(`✦ Checking availability for ${roomName}… We'll confirm within minutes!`);
}

// ── GALLERY ────────────────────────────────────
function renderGallery(filter) {
  const items = filter === 'all'
    ? galleryItems
    : galleryItems.filter(i => i.category === filter);

  const colors = [
    'linear-gradient(135deg,#1a0e0a,#2a1a0e)',
    'linear-gradient(135deg,#0a1a0e,#0e2a1a)',
    'linear-gradient(135deg,#0a0e1a,#0e152a)',
    'linear-gradient(135deg,#1a0a1a,#2a0e2a)',
    'linear-gradient(135deg,#1a1a0a,#2a2a0e)',
    'linear-gradient(135deg,#0a1a1a,#0e2a2a)',
  ];

  document.getElementById('galleryGrid').innerHTML = items.map((item, i) => `
    <div class="gallery-item" style="background:${colors[i % colors.length]}"
         onclick="openLightbox('${item.emoji}','${item.caption}')">
      ${item.emoji}
      <div class="gallery-overlay">
        <span class="gallery-caption">${item.caption}</span>
      </div>
    </div>
  `).join('');
}

function filterGallery(filter, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentGalleryFilter = filter;
  renderGallery(filter);
}

function openLightbox(emoji, caption) {
  document.getElementById('lightboxImg').textContent = emoji;
  document.getElementById('lightboxCaption').textContent = caption;
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

// ── MENU ───────────────────────────────────────
function renderMenu(type) {
  const items = menus[type] || [];
  document.getElementById('menuGrid').innerHTML = items.map(item => `
    <div class="menu-item">
      <div class="menu-item-header">
        <span class="menu-item-name">${item.name}</span>
        <span class="menu-item-price">${item.price}</span>
      </div>
      <p class="menu-item-desc">${item.desc}</p>
      <span class="menu-item-tag">${item.tag}</span>
    </div>
  `).join('');
}

function showMenu(type, btn) {
  document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentMenu = type;
  renderMenu(type);
}

// ── REVIEWS ────────────────────────────────────
function renderReviews(list = reviews) {
  document.getElementById('reviewsGrid').innerHTML = list.map(r => `
    <div class="review-card">
      <div class="review-top">
        <div class="reviewer-avatar">${r.name[0]}</div>
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-date">${r.date}</div>
        </div>
      </div>
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <p class="review-stay">✦ ${r.stay}</p>
    </div>
  `).join('');
}

function selectStar(val) {
  selectedStars = val;
  document.querySelectorAll('.star-pick').forEach((s, i) => {
    s.classList.toggle('active', i < val);
  });
}

function submitReview() {
  const name = document.getElementById('reviewName').value.trim();
  const text = document.getElementById('reviewText').value.trim();

  if (!name) { showToast('⚠️ Please enter your name.'); return; }
  if (!text)  { showToast('⚠️ Please write your review.'); return; }
  if (!selectedStars) { showToast('⚠️ Please select a star rating.'); return; }

  const newReview = {
    name, text, rating: selectedStars,
    stay: 'Recent Stay',
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  };

  reviews.unshift(newReview);
  renderReviews();

  // Reset form
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewText').value = '';
  selectedStars = 0;
  document.querySelectorAll('.star-pick').forEach(s => s.classList.remove('active'));

  showToast('✦ Thank you for your review!');

  // Scroll to reviews
  document.getElementById('reviewsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── TOAST ──────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 4000);
}
