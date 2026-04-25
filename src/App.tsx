/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Câu chuyện', href: '#story' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Vùng trồng', href: '#region' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-green flex items-center justify-center rounded-full">
            <span className="text-brand-gold font-serif font-bold text-xl uppercase">SV</span>
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tighter uppercase transition-colors ${isScrolled ? 'text-brand-green' : 'text-brand-green'}`}>
            SÂM VIỆT
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand-earth transition-colors tracking-[0.2em] uppercase"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-green text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-earth transition-all border border-brand-gold/30 shadow-lg">
            Dùng thử ngay
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-green"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-brand-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif font-medium hover:text-brand-gold py-2 tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-green text-white px-6 py-4 rounded-full text-center font-bold uppercase tracking-widest text-xs border border-brand-gold/30">
                Dùng thử ngay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-brand-white">
      {/* Decorative Blur Elements */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-green/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-7"
        >
          <span className="inline-block text-brand-earth font-medium tracking-[0.3em] uppercase text-xs mb-6">
            Tinh túy Sâm Bố Chính Tây Ninh
          </span>
          <h1 className="text-6xl md:text-[5.5rem] font-serif leading-[0.9] text-brand-green italic mb-8">
            Sức Khỏe <br/> <span className="text-brand-earth not-italic">Đại Chúng.</span>
          </h1>
          <p className="text-xl text-brand-green/80 mb-10 max-w-lg leading-relaxed font-light">
            Phá bỏ rào cản về giá. Mang sâm tiến Vua từ vùng đất Tây Ninh đến bàn ăn của mọi gia đình Việt. <br/>
            <span className="text-brand-earth font-bold italic uppercase text-sm tracking-[0.15em] block mt-4">
              Sâm mỗi ngày – Không cần giàu.
            </span>
          </p>
          
          <div className="flex items-center gap-8 mb-12">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-brand-gold">12k</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-green/60">VND / Mỗi ngày</span>
            </div>
            <div className="w-px h-12 bg-brand-gold/30" />
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-brand-gold">100%</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-green/60">Tây Ninh Organic</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-brand-green text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-brand-earth transition-all shadow-2xl border border-brand-gold/30 group">
              Dùng thử ngay
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="md:col-span-5 relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-brand-gold/20 to-transparent rounded-[48px] blur-sm opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative glass-card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43552e?auto=format&fit=crop&q=80&w=1200" 
                alt="Sâm Bố Chính" 
                className="w-full aspect-[4/5] object-cover mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 to-transparent" />
              
              {/* Floating Glass Badge */}
              <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-6 right-6 bg-brand-gold rounded-full w-24 h-24 flex items-center justify-center p-4 text-center leading-none shadow-2xl border-4 border-white/20"
              >
                <span className="text-brand-green font-bold text-[10px] uppercase tracking-tighter">Đạt chuẩn OCOP 4 Sao</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section id="story" className="py-32 bg-brand-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold mb-4 block">Định hướng thương hiệu</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 italic text-brand-green">Phá Bỏ Định Kiến Về "Sâm"</h2>
          <p className="text-brand-green/70 text-lg font-light leading-relaxed">
            Trong nhiều thập kỷ, nhân sâm luôn được coi là xa xỉ phẩm chỉ dành cho giới thượng lưu. 
            Sâm Việt ra đời để thay đổi điều đó bằng triết lý <span className="font-serif italic text-brand-earth">"Đại chúng hóa sâm tiến Vua"</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="glass-card p-12 bg-white/40"
          >
            <div className="text-brand-earth mb-8">
              <X size={32} />
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brand-earth">Nỗi đau thị trường</h3>
            <ul className="space-y-6">
              {[
                "Sâm ngoại nhập (Hàn, Mỹ) có giá thành cực kỳ đắt đỏ.",
                "Hàng giả, hàng kém chất lượng trôi nổi khó kiểm soát.",
                "Cách chế biến truyền thống (hầm, ngâm) tốn thời gian."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 text-brand-green/70 font-light border-b border-brand-gold/10 pb-4">
                  <span className="text-brand-earth font-serif">0{idx+1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-12 bg-brand-green text-white border-transparent overflow-hidden"
          >
            <div className="text-brand-gold mb-8">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brand-gold">Giải pháp từ Sâm Việt</h3>
            <ul className="space-y-6 relative z-10">
              {[
                "Giá thành thực tế: Chỉ từ 12k - 25k mỗi ngày.",
                "Chính gốc Tây Ninh: Vùng trồng đạt chuẩn GlobalGAP.",
                "Dạng Stick/Nước đóng chai: Xé dùng ngay, mang đi mọi nơi."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 text-white/80 font-light border-b border-white/10 pb-4">
                  <CheckCircle2 size={18} className="shrink-0 text-brand-gold mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Leaf size={180} className="absolute -bottom-10 -right-10 text-white/5 rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    {
      icon: <MapPin size={24} />,
      title: "Chủ động vùng trồng",
      desc: "Hơn 50 hecta sâm tại Tây Ninh, kiểm soát 100% từ khâu gieo hạt."
    },
    {
      icon: <Users size={24} />,
      title: "Giá rẻ cho người Việt",
      desc: "Mô hình Farm-to-Table cắt bỏ hoàn toàn trung gian, đưa sâm đến tay bạn."
    },
    {
      icon: <Zap size={24} />,
      title: "Dạng Stick tiện lợi",
      desc: "Công nghệ chiết xuất lạnh, giữ trọn dưỡng chất trong từng gói nhỏ."
    }
  ];

  return (
    <section id="region" className="py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass-card bg-white/60 hover:bg-white/80 transition-all border-brand-gold/10"
            >
              <div className="text-brand-green mb-6 flex justify-center md:justify-start">
                {v.icon}
              </div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-4 text-brand-earth">{v.title}</h4>
              <p className="text-brand-green/60 text-sm font-light leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <div className="relative p-1">
               <div className="absolute inset-0 bg-brand-gold/10 blur-3xl -z-10 rounded-full" />
               <div className="rounded-[3rem] overflow-hidden border-2 border-brand-gold/10 p-2 bg-white/40 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1540333032115-4fc1424eb486?auto=format&fit=crop&q=80&w=1200" 
                  alt="Product Showcase" 
                  className="rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">Sản phẩm tiêu biểu</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic mb-8 text-brand-green leading-tight">Gói Trọn Tinh Túy <br/>Trong Một Stick Sâm Việt.</h2>
            <p className="text-brand-green/70 mb-10 text-lg font-light leading-relaxed">
              Chiết xuất từ nhân sâm được 5 năm tuổi, kết hợp công nghệ sấy lạnh ly tâm giữ trọn vẹn 10.5% Saponin quý giá.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: <HeartPulse />, title: "Tăng đề kháng", text: "Hàm lượng Saponin dồi dào." },
                { icon: <Award />, title: "An toàn tuyệt đối", text: "Đạt chuẩn OCOP & ISO." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3 p-6 glass-card bg-white/30 border-brand-gold/5">
                  <div className="text-brand-gold">{item.icon}</div>
                  <h5 className="text-[10px] uppercase font-bold tracking-widest">{item.title}</h5>
                  <p className="text-[9px] uppercase tracking-tighter text-brand-green/60">{item.text}</p>
                </div>
              ))}
            </div>

            <button className="w-full sm:w-auto bg-brand-earth text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-green transition-all shadow-xl">
              Khám phá thực đơn sâm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const tmx = [
    {
      name: "Anh Minh Quân",
      role: "Công nhân xưởng may",
      content: "Cuối cùng cũng có loại sâm tôi có thể uống hàng ngày mà không lo về giá.",
      avatar: "https://i.pravatar.cc/150?u=1"
    },
    {
      name: "Chị Thảo Nguyên",
      role: "Nhân viên văn phòng",
      content: "Dạng stick rất gọn, tôi để sẵn trong túi xách đi làm mỗi sáng.",
      avatar: "https://i.pravatar.cc/150?u=2"
    },
    {
      name: "Bác Sáu",
      role: "Hưu trí tại Tây Ninh",
      content: "Tự hào quê mình có sản phẩm tốt thế này cho người cao tuổi.",
      avatar: "https://i.pravatar.cc/150?u=3"
    }
  ];

  return (
    <section className="py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif italic font-bold mb-4 text-brand-green">Trải Nghiệm Từ Khách Hàng</h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tmx.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="glass-card p-10 bg-white/60 flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                <img src={t.avatar} className="w-16 h-16 rounded-full border-2 border-brand-gold grayscale group-hover:grayscale-0 transition-all" alt={t.name} />
                <div className="absolute -bottom-2 -right-2 bg-brand-green p-1.5 rounded-full text-white">
                  <CheckCircle2 size={12} />
                </div>
              </div>
              <span className="text-[10px] italic font-serif text-brand-green/80 flex-1 mb-6 leading-relaxed">"{t.content}"</span>
              <div className="pt-6 border-t border-brand-gold/10 w-full">
                <h6 className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-earth mb-1">{t.name}</h6>
                <p className="text-[8px] uppercase tracking-widest text-brand-green/40">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-green text-brand-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-white flex items-center justify-center rounded-full">
                <span className="text-brand-gold font-serif font-bold text-xl uppercase">SV</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tighter uppercase text-white">SÂM VIỆT</span>
            </div>
            <p className="text-white/60 mb-10 max-w-sm font-light text-sm leading-relaxed">
              Vì sức khỏe của người lao động Việt Nam. Thảo dược quý, cách dùng hiện đại, giá thành đại chúng.
            </p>
            <div className="flex gap-6">
              {[Zap, ShieldCheck, Leaf].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-green transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-brand-gold">Hệ thống</h6>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Về chúng tôi</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Vùng trồng Tây Ninh</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Quy trình GlobalGAP</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Chính sách vận chuyển</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-brand-gold">Tin tức mới nhất</h6>
            <div className="flex flex-col gap-4">
              <div className="glass-card bg-white/5 border-white/10 p-1 flex overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="bg-transparent px-4 py-3 text-xs focus:outline-none w-full text-white"
                />
                <button className="bg-brand-gold text-brand-green font-bold px-6 text-[10px] uppercase tracking-widest hover:bg-white transition-all rounded-2xl whitespace-nowrap">
                  Gửi ngay
                </button>
              </div>
              <p className="text-[10px] text-white/30 tracking-tight uppercase">Nhận voucher 20% cho lần thử đầu tiên</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium italic">© 2026 SÂM VIỆT — Tự hào sức khỏe Việt Nam.</p>
          <div className="flex gap-12 text-[10px] font-medium tracking-[0.3em] uppercase opacity-60">
             TÂM — TÍN — TINH
          </div>
        </div>
      </div>
      
      {/* Footer Branding Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold/30">
      <Navbar />
      
      <main>
        <Hero />
        <ProblemSolution />
        <CoreValues />
        <Products />
        <Testimonials />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md z-40">
        <button className="w-full bg-brand-green text-white py-4 rounded-2xl font-bold shadow-2xl active:scale-95 transition-all">
          Dùng thử ngay
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[60] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />
    </div>
  );
}

// --- Custom Hooks ---

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
