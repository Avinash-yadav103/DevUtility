import { useState } from 'react';
import * as gym from '../../assets/components/website/gym';

const scheduleData = {
  Classes: {
    Monday: ['9:00am - 10:00am', '', '11:00am - 12:00pm', '', '5:00pm - 6:00pm', ''],
    Tuesday: ['', '10:00am - 11:00am', '', '', '5:00pm - 6:00pm', ''],
    Wed: ['8:30am - 10:00am', '', '10:30am - 12:00pm', '', '', ''],
    Thursday: ['9:00am - 10:00am', '', '', '9:30am - 10:00pm', '', '9:30am - 10:00pm'],
    Friday: ['8:00am - 9:00am', '', '', '', '', ''],
    Saturday: ['9:00am - 10:30am', '8:00am - 10:00pm', '', '8:00am - 2:00pm', '', '8:00am - 1:00pm'],
  },
  Flexibility: {
    Monday: ['', '10:00am - 11:00am', '', '', '', ''],
    Tuesday: ['9:00am - 10:00am', '', '', '4:00pm - 5:00pm', '', ''],
    Wed: ['', '', '11:00am - 12:00pm', '', '', ''],
    Thursday: ['', '10:00am - 11:00am', '', '', '4:00pm - 5:00pm', ''],
    Friday: ['9:00am - 10:00am', '', '', '', '', '5:00pm - 6:00pm'],
    Saturday: ['', '10:00am - 11:00am', '', '', '', ''],
  },
  Cardio: {
    Monday: ['6:00am - 7:00am', '', '5:00pm - 6:00pm', '', '', ''],
    Tuesday: ['', '7:00am - 8:00am', '', '5:30pm - 6:30pm', '', ''],
    Wed: ['6:00am - 7:00am', '', '', '', '5:00pm - 6:00pm', ''],
    Thursday: ['', '7:00am - 8:00am', '', '', '', '5:30pm - 6:30pm'],
    Friday: ['6:00am - 7:00am', '', '5:00pm - 6:00pm', '', '', ''],
    Saturday: ['8:00am - 9:00am', '', '', '4:00pm - 5:00pm', '', ''],
  },
  HIIT: {
    Monday: ['', '', '12:00pm - 1:00pm', '', '6:00pm - 7:00pm', ''],
    Tuesday: ['7:00am - 8:00am', '', '', '12:00pm - 1:00pm', '', ''],
    Wed: ['', '', '', '', '6:00pm - 7:00pm', '7:00am - 8:00am'],
    Thursday: ['', '12:00pm - 1:00pm', '', '', '', '6:00pm - 7:00pm'],
    Friday: ['7:00am - 8:00am', '', '', '', '12:00pm - 1:00pm', ''],
    Saturday: ['', '', '10:00am - 11:00am', '', '', ''],
  },
  Bodybuilding: {
    Monday: ['10:00am - 12:00pm', '', '', '4:00pm - 6:00pm', '', ''],
    Tuesday: ['', '10:00am - 12:00pm', '', '', '', '4:00pm - 6:00pm'],
    Wed: ['', '', '10:00am - 12:00pm', '', '4:00pm - 6:00pm', ''],
    Thursday: ['10:00am - 12:00pm', '', '', '', '', '4:00pm - 6:00pm'],
    Friday: ['', '10:00am - 12:00pm', '', '4:00pm - 6:00pm', '', ''],
    Saturday: ['10:00am - 12:00pm', '', '', '', '4:00pm - 6:00pm', ''],
  },
  CrossFit: {
    Monday: ['', '8:00am - 9:00am', '', '', '5:00pm - 6:00pm', ''],
    Tuesday: ['', '', '8:00am - 9:00am', '', '', '5:00pm - 6:00pm'],
    Wed: ['8:00am - 9:00am', '', '', '5:00pm - 6:00pm', '', ''],
    Thursday: ['', '8:00am - 9:00am', '', '', '', '5:00pm - 6:00pm'],
    Friday: ['', '', '8:00am - 9:00am', '', '5:00pm - 6:00pm', ''],
    Saturday: ['9:00am - 10:00am', '', '', '', '', '4:00pm - 5:00pm'],
  },
};

const categories = ['Classes', 'Flexibility', 'Cardio', 'HIIT', 'Bodybuilding', 'CrossFit'];
const days = ['Monday', 'Tuesday', 'Wed', 'Thursday', 'Friday', 'Saturday'];

function GymNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 bg-[#111] border-b border-gray-800 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-[#ff4500] text-2xl font-bold">🔥</span>
        <span className="text-white text-xl font-bold tracking-wide">FIT<span className="text-[#ff4500]">ZONE</span></span>
      </div>
      <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm font-medium">
        <li><a href="#hero" className="hover:text-white transition">Home</a></li>
        <li><a href="#programs" className="hover:text-white transition">Programs</a></li>
        <li><a href="#schedule" className="hover:text-white transition">Schedule</a></li>
        <li><a href="#about" className="hover:text-white transition">About</a></li>
        <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
      </ul>
      <a href="#join" className="hidden md:inline-block bg-[#ff4500] text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-[#e03e00] transition">
        Join Now
      </a>
      <button className="md:hidden text-white text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? '✕' : '☰'}
      </button>
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111] border-t border-gray-800 md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-300 text-sm font-medium">
            <li><a href="#hero" onClick={() => setMobileOpen(false)} className="hover:text-white">Home</a></li>
            <li><a href="#programs" onClick={() => setMobileOpen(false)} className="hover:text-white">Programs</a></li>
            <li><a href="#schedule" onClick={() => setMobileOpen(false)} className="hover:text-white">Schedule</a></li>
            <li><a href="#about" onClick={() => setMobileOpen(false)} className="hover:text-white">About</a></li>
            <li><a href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-white">Contact Us</a></li>
            <li><a href="#join" onClick={() => setMobileOpen(false)} className="bg-[#ff4500] text-white px-6 py-2 rounded-md">Join Now</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function GymHero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${gym.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-2xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-3 h-3 bg-[#ff4500] rounded-full animate-pulse"></span>
          <span className="text-[#ff4500] text-xs font-semibold uppercase tracking-widest">Strength Builds You</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
          UNLEASH YOUR<br />
          <span className="text-[#ff4500]">POTENTIAL</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
          Join a community where goals are crushed, strength is built, and potential becomes power.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#programs" className="bg-[#ff4500] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#e03e00] transition text-sm">
            Get Started
          </a>
          <a href="#about" className="border border-white/30 text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition text-sm">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ image, title, description }) {
  return (
    <div className="relative group rounded-lg overflow-hidden cursor-pointer">
      <img src={image} alt={title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-5">
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-300 text-xs leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#ff4500] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

function GymPrograms() {
  const programs = [
    {
      image: gym.personal,
      title: 'PERSONAL TRAINING',
      description: 'One-on-one coaching tailored to your unique goals, schedule, and fitness level.',
    },
    {
      image: gym.strength,
      title: 'STRENGTH TRAINING',
      description: 'Build muscle, increase power, and transform your physique.',
    },
    {
      image: gym.hiit,
      title: 'HIIT CLASSES',
      description: 'High-intensity interval training that burns calories and builds endurance in record time.',
    },
    {
      image: gym.fitness,
      title: 'FITNESS TRAINING',
      description: 'One-on-one coaching tailored to your unique goals, schedule, and fitness level.',
    },
  ];

  return (
    <section id="programs" className="py-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">OUR PROGRAMS</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Discover the perfect programs to match your goals and fitness level.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={i} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GymAbout() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-[#111]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 relative">
          <img
            src={gym.about}
            alt="Fitness Training"
            className="rounded-lg w-full object-cover h-[400px] grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
            GIVE SHAPE TO<br />YOUR BODY
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            At <span className="text-[#ff4500] font-semibold">FITZONE</span>, we help you build strength, confidence, and lasting habits. With expert coaches and proven programs, we guide you toward your best shape.
          </p>
          <a href="#programs" className="inline-block bg-[#ff4500] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#e03e00] transition text-sm">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}

function GymSchedule() {
  const [activeCategory, setActiveCategory] = useState('Classes');

  return (
    <section id="schedule" className="py-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">OUR SCHEDULE</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
                activeCategory === cat
                  ? 'bg-[#ff4500] text-white'
                  : 'border border-gray-600 text-gray-300 hover:border-[#ff4500] hover:text-[#ff4500]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="text-left text-gray-400 text-xs font-semibold uppercase py-3 px-4 border-b border-gray-800 w-28"></th>
                {['Time Slot 1', 'Time Slot 2', 'Time Slot 3', 'Time Slot 4', 'Time Slot 5', 'Time Slot 6'].map((_, i) => (
                  <th key={i} className="text-center text-gray-500 text-xs font-medium py-3 px-2 border-b border-gray-800"></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map(day => (
                <tr key={day} className="border-b border-gray-800/50 hover:bg-gray-900/30 transition">
                  <td className="py-4 px-4">
                    <span className="text-[#ff4500] font-semibold text-sm border border-[#ff4500]/30 px-3 py-1 rounded">{day}</span>
                  </td>
                  {(scheduleData[activeCategory]?.[day] || []).map((time, i) => (
                    <td key={i} className="py-4 px-2 text-center">
                      {time ? (
                        <span className="text-gray-300 text-xs bg-gray-800/50 px-3 py-1.5 rounded inline-block">{time}</span>
                      ) : (
                        <span className="text-gray-700 text-xs">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function GymTrainers() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#111]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#ff4500] rounded-sm -z-0"></div>
          <img
            src={gym.trainers}
            alt="Trainers"
            className="rounded-lg w-full object-cover h-[400px] relative z-10"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight uppercase">
            Get Stronger and Fitter with Our Experienced Trainers
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Build strength and confidence with support from our expert trainers, dedicated to your success.
          </p>
          <div className="space-y-5">
            {[
              { label: 'Fitness Training', value: 84 },
              { label: 'Cardio Training', value: 62 },
              { label: 'Body Building', value: 73 },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-300 font-medium">{item.label}</span>
                  <span className="text-[#ff4500] font-semibold">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-[#ff4500] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GymPricing() {
  const plans = [
    {
      name: 'Basic Plan',
      description: "Great for beginners. Enjoy access to all basic equipment and facilities at our gym.",
      price: 299,
      featured: false,
    },
    {
      name: 'Regular Plan',
      description: "Perfect for fitness enthusiasts. Includes group classes, personal training sessions, and priority access.",
      price: 399,
      featured: true,
    },
    {
      name: 'Premium Plan',
      description: "The ultimate fitness experience. Unlimited access, personal trainer, nutrition plans, and spa.",
      price: 599,
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white text-2xl md:text-3xl font-bold uppercase mb-3">
            Start Your Body Goal From<br />Choosing Our Package
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
            Kickstart your fitness journey with a package tailored to your needs. Whether you are aiming to build strength, lose weight, improve overall wellness, or simply feel more confident — there is a plan for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-lg p-8 flex flex-col transition-transform hover:-translate-y-1 ${
                plan.featured
                  ? 'border-2 border-[#ff4500] bg-[#111]'
                  : 'border border-gray-800 bg-[#111]'
              }`}
            >
              {plan.featured && (
                <div className="bg-[#ff4500] text-white text-xs font-bold px-3 py-1 rounded self-start mb-4 uppercase">
                  Popular
                </div>
              )}
              <h3 className="text-white text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-1">{plan.description}</p>
              <div className="mb-6">
                <span className="text-white text-4xl font-black">${plan.price}</span>
                <span className="text-gray-500 text-sm">/month</span>
              </div>
              <a
                href="#join"
                className={`text-center py-3 rounded-md font-semibold text-sm transition ${
                  plan.featured
                    ? 'bg-[#ff4500] text-white hover:bg-[#e03e00]'
                    : 'border border-[#ff4500] text-[#ff4500] hover:bg-[#ff4500] hover:text-white'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GymFooter() {
  return (
    <footer id="contact" className="py-16 px-6 md:px-12 lg:px-20 bg-[#111] border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#ff4500] text-2xl font-bold">🔥</span>
              <span className="text-white text-xl font-bold">FIT<span className="text-[#ff4500]">ZONE</span></span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Transform your body and mind with our expert trainers and world-class facilities.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="#hero" className="hover:text-[#ff4500] transition">Home</a></li>
              <li><a href="#programs" className="hover:text-[#ff4500] transition">Programs</a></li>
              <li><a href="#schedule" className="hover:text-[#ff4500] transition">Schedule</a></li>
              <li><a href="#pricing" className="hover:text-[#ff4500] transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="#" className="hover:text-[#ff4500] transition">Personal Training</a></li>
              <li><a href="#" className="hover:text-[#ff4500] transition">Strength Training</a></li>
              <li><a href="#" className="hover:text-[#ff4500] transition">HIIT Classes</a></li>
              <li><a href="#" className="hover:text-[#ff4500] transition">CrossFit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>📍 123 Fitness Street, NY 10001</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@fitzone.com</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {['facebook', 'twitter', 'instagram'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#ff4500] hover:text-white transition text-xs">
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">© 2025 FITZONE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Gym() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden w-full">
      <GymNav />
      <GymHero />
      <GymPrograms />
      <GymAbout />
      <GymSchedule />
      <GymTrainers />
      <GymPricing />
      <GymFooter />
    </div>
  );
}

export default Gym;
