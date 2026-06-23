import { useState } from 'react';
import * as coffee from '../../assets/components/website/coffee';

const coffeeMenu = {
  'Iced coffee': [
    { name: 'Espresso', desc: 'pure strong coffee', price: 5.70, image: coffee.espresso },
    { name: 'Americano', desc: 'espresso + hot water', price: 4.50, image: coffee.americano },
    { name: 'Latte', desc: 'espresso + lots of milk + little foam', price: 4.30, image: coffee.latte },
    { name: 'Macchiato', desc: 'espresso + small milk foam', price: 5.50, image: coffee.macchiato },
    { name: 'Irish Coffee', desc: 'coffee + whiskey + cream', price: 5.40, image: coffee.irish },
    { name: 'Flat White', desc: 'espresso + thin layer of milk foam', price: 4.20, image: coffee.flatwhite },
    { name: 'Lungo', desc: 'long espresso, more water', price: 4.80, image: coffee.lungo },
    { name: 'Vienna Coffee', desc: 'espresso + whipped cream', price: 5.20, image: coffee.vienna },
  ],
  'Milk-Based Coffee': [
    { name: 'Cappuccino', desc: 'espresso + steamed milk + foam', price: 4.80, image: coffee.cappuccino },
    { name: 'Mocha', desc: 'espresso + chocolate + milk', price: 5.20, image: coffee.mocha },
    { name: 'Caramel Latte', desc: 'espresso + milk + caramel', price: 5.60, image: coffee.caramel },
    { name: 'Vanilla Latte', desc: 'espresso + milk + vanilla syrup', price: 5.30, image: coffee.latte },
    { name: 'Cortado', desc: 'espresso + warm milk', price: 4.10, image: coffee.macchiato },
    { name: 'Breve', desc: 'espresso + half & half', price: 5.00, image: coffee.flatwhite },
    { name: 'Dirty Chai', desc: 'chai tea + espresso shot', price: 5.40, image: coffee.americano },
    { name: 'Hazelnut Latte', desc: 'espresso + milk + hazelnut', price: 5.50, image: coffee.vienna },
  ],
  'Classic Coffee': [
    { name: 'Drip Coffee', desc: 'classic brewed coffee', price: 3.50, image: coffee.espresso },
    { name: 'French Press', desc: 'full-bodied brew', price: 4.00, image: coffee.lungo },
    { name: 'Pour Over', desc: 'hand-crafted filter coffee', price: 4.50, image: coffee.americano },
    { name: 'Turkish Coffee', desc: 'finely ground, unfiltered', price: 4.80, image: coffee.macchiato },
    { name: 'Cold Brew', desc: 'slow-steeped, smooth', price: 4.20, image: coffee.irish },
    { name: 'Ristretto', desc: 'short, concentrated shot', price: 3.80, image: coffee.espresso },
    { name: 'Red Eye', desc: 'drip coffee + espresso shot', price: 4.50, image: coffee.cappuccino },
    { name: 'Black Coffee', desc: 'simple, bold, classic', price: 3.20, image: coffee.espresso },
  ],
  'Specialty Coffee': [
    { name: 'Affogato', desc: 'espresso + vanilla gelato', price: 6.20, image: coffee.mocha },
    { name: 'Nitro Cold Brew', desc: 'nitrogen-infused cold brew', price: 5.80, image: coffee.americano },
    { name: 'Rose Latte', desc: 'espresso + rose syrup + milk', price: 5.90, image: coffee.caramel },
    { name: 'Lavender Mocha', desc: 'espresso + lavender + chocolate', price: 6.10, image: coffee.vienna },
    { name: 'Coconut Latte', desc: 'espresso + coconut milk', price: 5.40, image: coffee.latte },
    { name: 'Matcha Espresso', desc: 'espresso + matcha + oat milk', price: 6.00, image: coffee.macchiato },
    { name: 'Honey Bee Latte', desc: 'espresso + honey + lavender', price: 5.70, image: coffee.lungo },
    { name: 'Turmeric Latte', desc: 'espresso + turmeric + oat milk', price: 5.50, image: coffee.flatwhite },
  ],
  'Sweet Coffee': [
    { name: 'Caramel Macchiato', desc: 'vanilla + milk + caramel drizzle', price: 5.80, image: coffee.caramel },
    { name: 'White Mocha', desc: 'espresso + white chocolate + milk', price: 5.60, image: coffee.vienna },
    { name: 'S\'mores Latte', desc: 'espresso + chocolate + marshmallow', price: 6.20, image: coffee.mocha },
    { name: 'Toffee Nut Latte', desc: 'espresso + toffee nut syrup', price: 5.50, image: coffee.lungo },
    { name: 'Cookie Cream Frappe', desc: 'blended coffee + cookies', price: 6.50, image: coffee.americano },
    { name: 'Chocolate Frappe', desc: 'blended coffee + chocolate', price: 6.00, image: coffee.cappuccino },
    { name: 'Maple Latte', desc: 'espresso + maple syrup + milk', price: 5.40, image: coffee.latte },
    { name: 'Brown Sugar Latte', desc: 'espresso + brown sugar + oat milk', price: 5.70, image: coffee.macchiato },
  ],
};

const menuCategories = Object.keys(coffeeMenu);

function CoffeeNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 bg-[#1a1207] sticky top-0 z-50">
      <span className="text-white text-2xl font-black italic tracking-tight">Drinko</span>
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        <li><a href="#home" className="text-white/60 hover:text-white transition">Home</a></li>
        <li><a href="#menu" className="text-white font-semibold border-b border-white pb-0.5">Menu</a></li>
        <li><a href="#delivery" className="text-white/60 hover:text-white transition">Delivery</a></li>
      </ul>
      <div className="hidden md:flex items-center gap-5 text-white/70">
        <button className="hover:text-white transition" aria-label="Wishlist">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
        <button className="hover:text-white transition" aria-label="Account">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </button>
        <button className="hover:text-white transition" aria-label="Cart">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </button>
      </div>
      <button className="md:hidden text-white text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? '✕' : '☰'}
      </button>
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1207] border-t border-white/10 md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-6 text-white text-sm font-medium">
            <li><a href="#home" onClick={() => setMobileOpen(false)}>Home</a></li>
            <li><a href="#menu" onClick={() => setMobileOpen(false)}>Menu</a></li>
            <li><a href="#delivery" onClick={() => setMobileOpen(false)}>Delivery</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function CoffeeHero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-end justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${coffee.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a0a]/90 via-[#2a1a0a]/40 to-[#2a1a0a]/30"></div>
      <div className="relative z-10 w-full flex items-end justify-center pb-16 md:pb-24 px-6">
        <div className="flex items-end justify-center gap-4 md:gap-8 w-full max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-wider leading-none">
            ORDER
          </h1>
          <div className="flex flex-col items-end">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-wider leading-none">
              COFFEE
            </span>
            <span className="text-[#d4a574] text-xl md:text-2xl italic font-light -mt-1">Welcome</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoffeeCard({ item }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl border-2 border-[#d4a574]/30 overflow-hidden mb-3 bg-[#f9f3ed] flex items-center justify-center group-hover:border-[#8b5e3c] transition-colors">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h4 className="text-[#2a1a0a] font-bold text-sm mb-0.5">{item.name}</h4>
      <p className="text-[#8b7355] text-xs text-center mb-2 max-w-[140px] leading-snug">{item.desc}</p>
      <div className="flex items-center gap-3">
        <span className="text-[#2a1a0a] font-bold text-sm">{item.price.toFixed(2)}$</span>
        <button className="text-[#8b5e3c] text-xs border border-[#8b5e3c] px-3 py-1 rounded-full hover:bg-[#8b5e3c] hover:text-white transition font-medium">
          to cart
        </button>
      </div>
    </div>
  );
}

function CoffeeMenu() {
  const [activeCategory, setActiveCategory] = useState('Iced coffee');
  const [cartCount, setCartCount] = useState(0);

  const items = coffeeMenu[activeCategory] || [];
  const topRow = items.slice(0, 4);
  const bottomRow = items.slice(4, 8);

  return (
    <section id="menu" className="py-16 px-6 md:px-12 lg:px-20 bg-[#faf6f1]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-[#2a1a0a] text-3xl md:text-4xl font-black italic">Menu</h2>
            <span className="text-[#8b5e3c] text-lg italic font-light">drinks</span>
          </div>
          <button className="border-2 border-[#2a1a0a] text-[#2a1a0a] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#2a1a0a] hover:text-white transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            my basket{cartCount > 0 && <span className="bg-[#8b5e3c] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>}
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {menuCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-[#8b5e3c] text-white'
                  : 'bg-[#e8ddd1] text-[#5c4a3a] hover:bg-[#d4c4b0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative mb-10">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white transition z-10 hidden lg:flex">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {topRow.map((item, i) => (
              <CoffeeCard key={i} item={item} />
            ))}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white transition z-10 hidden lg:flex">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="relative mb-12">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white transition z-10 hidden lg:flex">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {bottomRow.map((item, i) => (
              <CoffeeCard key={i} item={item} />
            ))}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white transition z-10 hidden lg:flex">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="text-center">
          <button className="bg-[#8b5e3c] text-white font-semibold px-10 py-3 rounded-full hover:bg-[#6d4830] transition text-sm">
            More
          </button>
        </div>
      </div>
    </section>
  );
}

function CoffeeNewDrink() {
  return (
    <section className="bg-[#f5c6c6] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <div className="mb-4">
            <span className="text-[#8b5e3c] text-4xl md:text-5xl font-black italic leading-none">New</span>
            <span className="text-[#8b5e3c]/60 text-lg italic font-light ml-2">attention</span>
          </div>
          <h2 className="text-[#2a1a0a] text-5xl md:text-6xl font-black leading-none mb-6">drink</h2>
          <h3 className="text-[#2a1a0a] text-2xl font-bold italic mb-3">Iced Latte</h3>
          <p className="text-[#5c4a3a] text-sm leading-relaxed mb-8 max-w-sm">
            A refreshing coffee drink made with espresso, cold milk, and ice. It has a smooth, light flavor, balancing the strength of espresso with the creaminess of milk. Perfect for hot days or when you want a cool, energizing coffee without being too strong.
          </p>
          <div className="flex items-center gap-10 pt-4 border-t border-[#2a1a0a]/10">
            <div>
              <span className="text-[#2a1a0a] text-2xl font-black">3</span>
              <span className="text-[#2a1a0a] text-sm font-medium ml-1">Syrups</span>
              <p className="text-[#8b7355] text-xs mt-0.5">vanilla, caramel,<br />hazelnut</p>
            </div>
            <div>
              <span className="text-[#2a1a0a] text-lg font-bold">With</span>
              <p className="text-[#8b7355] text-xs mt-0.5">espresso +<br />cold milk + ice</p>
            </div>
            <div>
              <span className="text-[#8b5e3c] text-2xl font-black">20%</span>
              <p className="text-[#8b7355] text-xs mt-0.5">Sale</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative flex items-center justify-center">
          <img
            src={coffee.newdrink}
            alt="Iced Latte"
            className="w-64 h-80 object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute top-4 right-4 lg:right-10 text-right">
            <span className="text-[#8b5e3c] text-4xl md:text-5xl font-black">6.50$</span>
            <br />
            <span className="text-[#5c4a3a]/50 text-lg line-through">7.80$</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoffeeDelivery() {
  return (
    <section id="delivery" className="py-16 px-6 md:px-12 lg:px-20 bg-[#faf6f1]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2a1a0a] text-3xl md:text-4xl font-black italic mb-2">Delivery</h2>
          <p className="text-[#8b7355] text-sm">We deliver your favorite coffee right to your door</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              ),
              title: 'Fast Delivery',
              desc: 'Get your coffee delivered in under 30 minutes, hot and fresh.',
            },
            {
              icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              ),
              title: 'Safe Packaging',
              desc: 'Eco-friendly, spill-proof packaging to keep your drink perfect.',
            },
            {
              icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              ),
              title: 'Live Tracking',
              desc: 'Track your order in real-time from our barista to your doorstep.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition group">
              <div className="text-[#8b5e3c] mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-[#2a1a0a] font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-[#8b7355] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoffeeFooter() {
  return (
    <footer className="py-14 px-6 md:px-12 lg:px-20 bg-[#1a1207]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <span className="text-white text-2xl font-black italic tracking-tight block mb-3">Drinko</span>
            <p className="text-white/50 text-xs leading-relaxed">
              Crafting the finest coffee experience since 2015. Every cup tells a story.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigate</h4>
            <ul className="space-y-2 text-white/50 text-xs">
              <li><a href="#home" className="hover:text-[#d4a574] transition">Home</a></li>
              <li><a href="#menu" className="hover:text-[#d4a574] transition">Menu</a></li>
              <li><a href="#delivery" className="hover:text-[#d4a574] transition">Delivery</a></li>
              <li><a href="#" className="hover:text-[#d4a574] transition">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Categories</h4>
            <ul className="space-y-2 text-white/50 text-xs">
              <li><a href="#" className="hover:text-[#d4a574] transition">Iced Coffee</a></li>
              <li><a href="#" className="hover:text-[#d4a574] transition">Classic Coffee</a></li>
              <li><a href="#" className="hover:text-[#d4a574] transition">Specialty</a></li>
              <li><a href="#" className="hover:text-[#d4a574] transition">Sweet Coffee</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-white/50 text-xs">
              <li>123 Coffee Lane, NY 10001</li>
              <li>+1 (555) 987-6543</li>
              <li>hello@drinko.com</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {['Ig', 'Fb', 'Tw'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-[#8b5e3c] hover:text-white transition text-xs font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-xs">&copy; 2025 Drinko Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function CoffeeShop() {
  return (
    <div className="min-h-screen bg-[#faf6f1] font-sans overflow-hidden w-full">
      <CoffeeNav />
      <CoffeeHero />
      <CoffeeMenu />
      <CoffeeNewDrink />
      <CoffeeDelivery />
      <CoffeeFooter />
    </div>
  );
}

export default CoffeeShop;
