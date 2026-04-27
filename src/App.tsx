/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight,
  HeartPulse,
  Award,
  Users,
  Send,
  Star,
  Phone,
  Mail,
  Facebook
} from 'lucide-react';

// --- CẤU HÌNH KẾT NỐI DỮ LIỆU (GOOGLE SHEETS) ---
const GOOGLE_SHEET_URL = ""; 

// --- Nhúng Phông chữ và Style để sửa lỗi hiển thị ---
const FontStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
    
    :root {
      --brand-green: #1B4332;
      --brand-light-green: #40916C;
      --brand-gold: #FFD700;
      --brand-white: #F8F9F8;
    }

    body {
      font-family: 'Lexend', sans-serif;
      color: var(--brand-green);
      line-height: 1.6;
      scroll-behavior: smooth;
    }

    .font-playfair {
      font-family: 'Playfair Display', serif;
    }

    h1, h2, h3, h4, span, p {
      letter-spacing: 0.01em !important;
    }

    .glass-nav {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
    }
    
    section {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  `}} />
);

// --- Thành phần: Navbar ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center shadow-md">
            <span className="text-[#FFD700] font-playfair font-bold text-xl uppercase">SV</span>
          </div>
          <span className="text-2xl font-playfair font-bold tracking-tighter uppercase text-[#1B4332]">SÂM VIỆT</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[#1B4332]">
          <a href="#story" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#40916C] transition-colors">Câu chuyện</a>
          <a href="#products" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#40916C] transition-colors">Sản phẩm</a>
          <a href="#region" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#40916C] transition-colors">Vùng trồng</a>
          <button 
            onClick={() => document.getElementById('order-section')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-[#1B4332] text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#40916C] transition-all border border-[#FFD700]/30 shadow-md"
          >
            Dùng thử ngay
          </button>
        </div>

        <button className="md:hidden text-[#1B4332]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t p-6 flex flex-col gap-4 shadow-2xl overflow-hidden">
            <a href="#story" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-playfair font-bold text-[#1B4332] py-2 border-b border-gray-100">Câu chuyện</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-playfair font-bold text-[#1B4332] py-2 border-b border-gray-100">Sản phẩm</a>
            <a href="#region" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-playfair font-bold text-[#1B4332] py-2 border-b border-gray-100">Vùng trồng</a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); document.getElementById('order-section')?.scrollIntoView({behavior: 'smooth'}); }}
              className="bg-[#1B4332] text-white py-4 rounded-full font-bold uppercase text-xs tracking-widest mt-4 shadow-lg"
            >
              Dùng thử ngay
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Thành phần: Hero ---
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-32 bg-[#F8F9F8] overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD700]/10 rounded-full blur-[120px] -z-10" />
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-block text-[#40916C] font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Tinh túy Sâm Bố Chính Tây Ninh</span>
        <h1 className="text-6xl lg:text-[5.5rem] font-playfair italic leading-[1.1] text-[#1B4332] mb-8">
          Sức Khỏe <br/> <span className="text-[#40916C] not-italic">Đại Chúng.</span>
        </h1>
        <p className="text-lg text-[#1B4332]/70 mb-10 max-w-xl leading-relaxed">
          Phá bỏ rào cản về giá. Mang sâm tiến Vua từ vùng đất Tây Ninh đến bàn ăn của mọi gia đình Việt.
          <span className="block mt-6 text-[#40916C] font-bold italic border-l-4 border-[#FFD700] pl-5 uppercase text-sm tracking-widest">Sâm mỗi ngày – Không cần giàu.</span>
        </p>
        <div className="flex items-center gap-10 mb-12">
          <div><p className="text-4xl font-playfair font-bold text-[#FFD700]">12k</p><p className="text-[10px] uppercase font-bold text-[#1B4332]/40 tracking-widest">VND / Ngày</p></div>
          <div className="w-px h-12 bg-gray-200" />
          <div><p className="text-4xl font-playfair font-bold text-[#FFD700]">100%</p><p className="text-[10px] uppercase font-bold text-[#1B4332]/40 tracking-widest">Tự nhiên</p></div>
        </div>
        <button 
          onClick={() => document.getElementById('order-section')?.scrollIntoView({behavior: 'smooth'})}
          className="bg-[#1B4332] text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#40916C] transition-all shadow-2xl border border-[#FFD700]/20"
        >
          Dùng thử ngay <ChevronRight size={18} />
        </button>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
        <div className="rounded-[50px] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-black/5">
          <img 
            src="https://images.unsplash.com/photo-1544027993-37dbfe43552e?auto=format&fit=crop&q=80&w=1200" 
            alt="Sâm Việt" 
            className="w-full aspect-[4/5] object-cover" 
          />
        </div>
        <div className="absolute -bottom-8 -right-8 bg-[#FFD700] w-28 h-28 rounded-full flex flex-col items-center justify-center p-4 text-center shadow-2xl border-4 border-white rotate-12">
          <span className="text-[#1B4332] font-extrabold text-[12px] uppercase leading-none">OCOP</span>
          <span className="text-[#1B4332] font-bold text-[10px] uppercase">4 Sao</span>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Thành phần: Core Values ---
const CoreValues = () => (
  <section id="region" className="py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-playfair italic font-bold text-[#1B4332] mb-4">Giá Trị Cốt Lõi</h2>
        <div className="w-16 h-1 bg-[#FFD700] mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {[
          { icon: <MapPin size={32} />, title: "Vùng trồng Tây Ninh", desc: "Hơn 50 hecta đạt chuẩn Organic tại vùng đất thánh Tây Ninh, kiểm soát từ hạt giống." },
          { icon: <ShieldCheck size={32} />, title: "Chuẩn Quốc Tế", desc: "Quy trình sản xuất đạt chuẩn GlobalGAP, đảm bảo hàm lượng Saponin cao nhất." },
          { icon: <Zap size={32} />, title: "Tiện dụng hiện đại", desc: "Dạng Stick xé dùng ngay, phù hợp với nhịp sống hối hả của người lao động." }
        ].map((v, i) => (
          <div key={i} className="p-12 bg-[#F8F9F8] rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-[#1B4332] mb-8 group-hover:scale-110 transition-transform origin-left">{v.icon}</div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-[#40916C]">{v.title}</h4>
            <p className="text-sm text-[#1B4332]/70 font-light leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Thành phần: Products ---
const Products = () => (
  <section id="products" className="py-32 bg-[#F8F9F8]">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1 relative">
        <div className="rounded-[40px] overflow-hidden shadow-2xl border-2 border-white">
          <img 
            src="https://images.unsplash.com/photo-1540333032115-4fc1424eb486?auto=format&fit=crop&q=80&w=1200" 
            alt="Sản phẩm Sâm Việt" 
            className="w-full aspect-[4/3] object-cover" 
          />
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <span className="text-[#FFD700] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Sản phẩm tiêu biểu</span>
        <h2 className="text-4xl lg:text-5xl font-playfair italic font-bold text-[#1B4332] mb-8 leading-tight">
          Gói Trọn Tinh Túy <br/> Trong Một Stick Sâm Việt.
        </h2>
        <p className="text-[#1B4332]/70 mb-10 leading-relaxed font-light">
          Chiết xuất từ nhân sâm được 5 năm tuổi, kết hợp công nghệ sấy lạnh ly tâm giữ trọn vẹn 10.5% Saponin quý giá. Dễ dàng sử dụng, dễ dàng mang đi.
        </p>
        <div className="grid grid-cols-2 gap-8 text-[#1B4332]">
          <div className="flex flex-col gap-2">
            <HeartPulse className="text-[#40916C]" size={24} />
            <h5 className="font-bold text-xs uppercase tracking-widest">Bồi bổ sức khỏe</h5>
          </div>
          <div className="flex flex-col gap-2">
            <Award className="text-[#40916C]" size={24} />
            <h5 className="font-bold text-xs uppercase tracking-widest">Chuẩn OCOP</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Thành phần: Testimonials ---
const Testimonials = () => (
  <section className="py-32 bg-[#1B4332] text-white overflow-hidden relative">
    <div className="container mx-auto px-6 relative z-10 text-center">
      <h2 className="text-4xl font-playfair italic font-bold mb-20">Cảm nhận từ khách hàng</h2>
      <div className="grid lg:grid-cols-3 gap-12 text-left">
        {[
          { name: "Anh Minh Quân", role: "Công nhân xưởng", content: "Lần đầu tôi thấy sâm chất lượng mà giá lại rẻ như ly cà phê sáng." },
          { name: "Chị Lan Hương", role: "Nhân viên văn phòng", content: "Dạng stick rất tiện, tôi luôn để trong túi xách để uống mỗi khi mệt mỏi." },
          { name: "Bác Hữu", role: "Hưu trí", content: "Sâm giúp tôi ngủ ngon và ăn khỏe hơn hẳn, cảm ơn Sâm Việt." }
        ].map((t, i) => (
          <div key={i} className="p-10 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 shadow-xl">
            <div className="flex gap-1 text-[#FFD700] mb-6">
              {Array(5).fill(0).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
            </div>
            <p className="italic text-lg mb-8 font-light leading-relaxed opacity-90">"{t.content}"</p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center font-bold text-[#1B4332]">{t.name[0]}</div>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest">{t.name}</p>
                <p className="text-[10px] uppercase opacity-50">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Thành phần: Footer (Đã cập nhật Địa chỉ & Thông tin liên hệ mới) ---
const Footer = () => (
  <footer className="bg-[#F8F9F8] text-[#1B4332] pt-32 pb-16 relative border-t border-gray-100">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-12 gap-20 mb-24">
        {/* Cột 1: Thương hiệu */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center">
              <span className="text-[#FFD700] font-playfair font-bold text-xl uppercase">SV</span>
            </div>
            <span className="text-2xl font-playfair font-bold tracking-tighter uppercase">SÂM VIỆT</span>
          </div>
          <p className="text-[#1B4332]/60 mb-10 max-w-sm font-light leading-relaxed">
            Vì sức khỏe của người lao động Việt Nam. Thảo dược quý, cách dùng hiện đại, giá thành đại chúng.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1B4332] hover:text-white transition-all cursor-pointer shadow-sm"><Facebook size={18} /></div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1B4332] hover:text-white transition-all cursor-pointer shadow-sm"><ShieldCheck size={18} /></div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1B4332] hover:text-white transition-all cursor-pointer shadow-sm"><Leaf size={18} /></div>
          </div>
        </div>

        {/* Cột 2: Thông tin Công ty */}
        <div className="lg:col-span-4">
          <h6 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-[#40916C]">Thông tin liên hệ</h6>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="text-[#40916C] shrink-0" size={20} />
              <span className="font-light">
                12A đường Nguyễn Văn Trỗi, áp Tân Trung, xã Tân Trung, tỉnh Tây Ninh
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="text-[#40916C] shrink-0" size={20} />
              <span className="font-bold tracking-widest text-[#1B4332]">
                0886 554 242 - 0919 257 757
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="text-[#40916C] shrink-0" size={20} />
              <span className="font-light">badenfarm2020@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Cột 3: Đăng ký nhận ưu đãi */}
        <div className="lg:col-span-4">
          <h6 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-[#40916C]">Đăng ký nhận ưu đãi</h6>
          <div className="space-y-6">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Nhận ngay Voucher 20% khi để lại email</p>
            <div className="bg-white border border-gray-200 p-1 flex rounded-2xl shadow-sm focus-within:ring-2 ring-[#40916C]/20 transition-all">
              <input type="email" placeholder="Email của bạn..." className="bg-transparent px-5 py-4 text-xs focus:outline-none w-full" />
              <button className="bg-[#1B4332] text-[#FFD700] font-bold px-8 py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-[#40916C] transition-all whitespace-nowrap flex items-center gap-2">
                GỬI <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold italic">© 2026 SÂM VIỆT — Tự hào sức khỏe Việt Nam.</p>
        <div className="flex gap-10 text-[10px] font-bold tracking-[0.4em] uppercase opacity-40">
           TÂM — TÍN — TINH
        </div>
      </div>
    </div>
  </footer>
);

// --- App ---
export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#FFD700]/40 overflow-x-hidden scroll-smooth">
      <FontStyles />
      <Navbar />
      
      <main>
        <Hero />
        <CoreValues />
        <Products />
        <Testimonials />

        {/* CTA Section */}
        <section id="order-section" className="py-48 text-center bg-white relative">
           <div className="absolute inset-0 bg-[#FFD700]/5 -z-10 skew-y-2"></div>
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-4xl lg:text-5xl font-playfair italic text-[#1B4332] mb-12 max-w-3xl mx-auto px-6 leading-tight">
                Sâm cho mọi nhà - Sức khỏe bền vững cho cộng đồng người Việt.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={() => document.getElementById('order-section')?.scrollIntoView({behavior: 'smooth'})}
                  className="bg-[#1B4332] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#40916C] transition-all shadow-2xl border border-[#FFD700]/30"
                >
                   Đặt dùng thử ngay
                </button>
                <button className="bg-white text-[#1B4332] px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-gray-50 transition-all border border-gray-200 shadow-sm">
                   Tìm hiểu thêm
                </button>
              </div>
           </motion.div>
        </section>
      </main>

      <Footer />
      
      {/* Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg z-40 border-t border-gray-100 shadow-xl">
        <button 
          onClick={() => document.getElementById('order-section')?.scrollIntoView({behavior: 'smooth'})}
          className="w-full bg-[#1B4332] text-[#FFD700] py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] shadow-lg active:scale-95 transition-all"
        >
          Dùng thử ngay
        </button>
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFD700] z-[60] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />
    </div>
  );
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)));
      }
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);
  return progress;
}
