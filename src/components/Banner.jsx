import React, { useEffect, useState } from 'react'
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
 
// Replace these with your own images (e.g. import banner1 from '../assets/banner1.png')
const slides = [
  {
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "New Season",
    title: "Gear up for the drop",
    sub: "Fresh electronics, fashion & more — up to 40% off",
  },
  {
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Fashion Week",
    title: "Styles made for you",
    sub: "Curated dresses & everyday essentials",
  },
  {
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Beauty Edit",
    title: "Glow, your way",
    sub: "Skincare and beauty picks trending now",
  },
  {
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Sneaker Drop",
    title: "Step into something new",
    sub: "The season's freshest kicks, just landed",
  },
  {
    img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Tech Deals",
    title: "Smarter gadgets, better prices",
    sub: "Top-rated electronics at prices you'll love",
  },
];
 
const Banner = () => {
  const [active, setActive] = useState(0);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);
 
  const goTo = (i) => setActive(i);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);
 
  return (
    <div className='relative w-full h-72 sm:h-96 lg:h-130 overflow-hidden'>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <img src={slide.img} className='w-full h-full object-cover' alt={slide.title} />
          <div className='absolute inset-0 bg-linear-to-r from-[#0c0f1a]/90 via-[#0c0f1a]/40 to-transparent' />
          <div className='absolute left-6 sm:left-14 top-1/2 -translate-y-1/2 max-w-md'>
            <span className='inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#ffd23f] mb-2'>
              {slide.eyebrow}
            </span>
            <h2 className='text-3xl sm:text-5xl font-bold text-white leading-tight' style={{fontFamily:"'Space Grotesk', sans-serif"}}>
              {slide.title}
            </h2>
            <p className='text-[#c9cedb] mt-3 text-sm sm:text-base'>{slide.sub}</p>
          </div>
        </div>
      ))}
 
      {/* prev / next arrows */}
      <button onClick={prev} className='absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#ff4d6d] text-white p-2 rounded-full transition-colors'>
        <IoChevronBack size={20} />
      </button>
      <button onClick={next} className='absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#ff4d6d] text-white p-2 rounded-full transition-colors'>
        <IoChevronForward size={20} />
      </button>
 
      {/* dots */}
      <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-[#ff4d6d]' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  )
}
 
export default Banner
 