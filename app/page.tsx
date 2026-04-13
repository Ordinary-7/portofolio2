"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ═══════════════════════════════════════════════════════════════
// 🔧 ZONA EDIT — Semua data kamu ada di bagian ini
//    Lihat file PANDUAN.md untuk instruksi lengkap
// ═══════════════════════════════════════════════════════════════

const PROFILE = {
  name: "Muh. Jabbar Muhaimin",
  tagline: "ndustrial and Organizational Psychology · Finance & HR · Business & Data",
  bio: "Mahasiswa Psikologi Universitas Negeri Makassar dengan minat kuat pada persimpangan antara data, sumber daya manusia, dan keuangan. Saya percaya keputusan terbaik lahir dari pemahaman manusia yang dalam, didukung analisis data yang baik.",
  location: "Makassar, Indonesia",
  email: "jabbarmuhaimin7@gmail.com",
  phone: "081393484073",
  linkedin: "https://www.linkedin.com/in/muh-jabbar-muhaimin-70880a334?utm_source=share_via&utm_content=profile&utm_medium=member_android",              // 🔧 Ganti dengan URL LinkedIn kamu
  photo: "/foto.jpg",                // 🔧 Ganti null dengan "/foto.jpg" lalu taruh foto di folder /public
  cv: "/CV_Muh. Jabbar Muhaimin Finance Staff",              // 🔧 Taruh file CV di /public dengan nama cv.pdf
  status: "Open to Work",
};

const HARD_SKILLS = [
  "Microsoft Excel", "Power BI", "Google Sheets", "SPSS",
  "BigQuery", "Looker", "Data Analysis", "SQL",
  "Microsoft Office", "Penyusunan Laporan", "Observasi", "Wawancara",
];

const SOFT_SKILLS = [
  "Attention to Detail", "Critical Thinking", "Problem Solving",
  "Adaptability", "Responsibility",
];

const EDUCATION = [
  {
    school: "Universitas Negeri Makassar",
    degree: "S1 Psikologi",
    period: "2023 – Sekarang",
    location: "Makassar, Indonesia",
    points: [
      "Penelitian kuantitatif: Pengaruh Kecerdasan Emosional terhadap Kecemasan Sosial pada Dewasa Awal",
      "Penelitian kualitatif: Disonansi Kognitif pada Pemain Judi Online di Kota Makassar",
      "Simulasi wawancara kerja dengan teknik BEI metode STAR",
    ],
  },
  {
    school: "SMA Negeri 1 Enrekang",
    degree: "MIPA",
    period: "2020 – 2023",
    location: "Enrekang, Indonesia",
    points: ["Lulus peringkat 10 besar umum di sekolah tahun 2023"],
  },
];

// ── Tipe TypeScript (jangan diubah) ──
type CertFilled = { empty?: false; name: string; issuer: string; year: string; desc: string; file: string | null };
type CertEmpty  = { empty: true };
type Cert = CertFilled | CertEmpty;

// 🔧 SERTIFIKAT
// - Untuk sertifikat yang ada: isi semua field
// - Untuk "file": isi path seperti "/sertif-google.pdf" setelah taruh file di /public
// - { empty: true } = slot kosong, akan muncul sebagai placeholder "+  Slot Kosong"
const CERTIFICATES: Cert[] = [
  {
    name: "Google Data Analytics",
    issuer: "Google Cloud Skills Boost",
    year: "2024",
    desc: "Analisis data, BigQuery, Looker, dan storytelling insight bisnis berbasis data.",
    file: "/sertifikat_course_905_5712638_080426202518.pdf,  // 🔧 contoh: "/sertif-google.pdf"
  },
  {
    name: "Introduction to Data Analytics",
    issuer: "RevoU",
    year: "2025",
    desc: "Dasar-dasar data analytics dan simulasi pemecahan masalah bisnis nyata.",
    file: null,
  },
  {
    name: "Data Analyst Career Path",
    issuer: "Microsoft Learn",
    year: "2025",
    desc: "Excel, SQL, Power BI untuk analisis data dan pengambilan keputusan bisnis.",
    file: null,
  },
  { empty: true }, // 🔧 Ganti ini dengan sertifikat baru kamu
  { empty: true }, // 🔧 Ganti ini dengan sertifikat baru kamu
  { empty: true }, // 🔧 Ganti ini dengan sertifikat baru kamu
];

// 🔧 PORTOFOLIO
// - "image": isi "/gambar.jpg" setelah taruh file gambar di /public, atau null untuk placeholder
// - Salin satu objek untuk menambah proyek baru
const PORTFOLIO = [
  {
    title: "Analisis Pasar Keuangan",
    tag: "Finance · Personal Experience",
    desc: "Analisis laporan keuangan perusahaan, evaluasi risiko, dan riset pasar sebagai pertimbangan keputusan investasi.",
    image: null,
    year: "2024",
  },
  {
    title: "Penelitian Kecerdasan Emosional",
    tag: "Psikologi · Kuantitatif",
    desc: "Studi kuantitatif tentang pengaruh kecerdasan emosional terhadap kecemasan sosial pada kelompok dewasa awal.",
    image: null,
    year: "2024",
  },
  {
    title: "Studi Disonansi Kognitif",
    tag: "Psikologi · Kualitatif",
    desc: "Penelitian kualitatif tentang gambaran disonansi kognitif pada pemain judi online dewasa awal di Kota Makassar.",
    image: null,
    year: "2024",
  },
  // 🔧 Tambahkan proyek baru di bawah ini — salin format di atas
];

// ════════════════════════════════════════════════════════════════
// IKON — Tidak perlu diubah
// ════════════════════════════════════════════════════════════════

const IcMail = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IcPhone = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcPin = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IcDownload = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const IcAward = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const IcPlus = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IcLinkedin = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IcGraduate = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IcExternal = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const IcChevDown = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

// ════════════════════════════════════════════════════════════════
// KOMPONEN ANIMASI — Tidak perlu diubah
// ════════════════════════════════════════════════════════════════

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0  },
};

import type { ReactNode } from "react";

interface RevealProps  { children: ReactNode; delay?: number; className?: string; }
interface ListProps    { children: ReactNode; className?: string; }
interface HeaderProps  { label: string; title: string; }

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

function RevealList({ children, className = "" }: ListProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      className={className}>
      {children}
    </motion.div>
  );
}
const RevealItem = ({ children, className = "" }: ListProps) => (
  <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className={className}>
    {children}
  </motion.div>
);

function SectionHeader({ label, title }: HeaderProps) {
  return (
    <Reveal className="mb-10 text-center">
      <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-3">{label}</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h2>
      <div className="mx-auto mt-4 h-px w-12 bg-white/15" />
    </Reveal>
  );
}

// ════════════════════════════════════════════════════════════════
// HALAMAN UTAMA
// ════════════════════════════════════════════════════════════════

export default function Portfolio() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        html { scroll-behavior: smooth; }
        body { background: #080808; margin: 0; }
        .ff-serif { font-family: 'Playfair Display', Georgia, serif; }
        .ff-sans  { font-family: 'DM Sans', system-ui, sans-serif; }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        .pulse { animation: pulse-glow 2.2s ease-in-out infinite; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .cert-slot:hover .slot-plus { color: rgba(255,255,255,0.4); }
      `}</style>

      <div className="ff-sans min-h-screen bg-[#080808] text-white overflow-x-hidden">

        {/* ── NAVIGASI ── */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#080808]/85 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <span className="ff-serif text-xl italic text-white/60">JM.</span>
            <nav className="hidden md:flex items-center gap-5">
              {["About", "Skills", "Education", "Certificates", "Portfolio", "Contact"].map((s) => (
                <a key={s} href={`#${s.toLowerCase()}`}
                  className="text-[11px] tracking-[0.12em] uppercase text-white/35 hover:text-white/75 transition-colors duration-200">
                  {s}
                </a>
              ))}
            </nav>
            <a href={PROFILE.cv} download
              className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-xs text-white/50 hover:bg-white/8 hover:text-white/80 transition-all duration-200">
              <IcDownload /> CV
            </a>
          </div>
        </motion.header>

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col justify-center px-5 pt-28 pb-20">
          <div className="grid-bg absolute inset-0 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-white/[0.022] blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-5xl w-full">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 mb-8"
            >
              <span className="pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-white/45">{PROFILE.status}</span>
            </motion.div>

            {/* Nama besar */}
            <motion.h1
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="ff-serif text-5xl sm:text-7xl lg:text-[88px] leading-[0.95] tracking-tight text-white mb-6"
            >
              Muh. Jabbar<br />
              <em className="text-white/35">Muhaimin.</em>
            </motion.h1>

            {/* Tag & lokasi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-white/35 mb-6"
            >
              {PROFILE.tagline.split(" · ").map((t, i, arr) => (
                <span key={t} className="flex items-center gap-3">
                  {t}
                  {i < arr.length - 1 && <span className="text-white/15">·</span>}
                </span>
              ))}
              <span className="flex items-center gap-1 text-white/25 ml-1"><IcPin />{PROFILE.location}</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="max-w-lg text-sm leading-7 text-white/45 mb-9"
            >
              {PROFILE.bio}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              <a href="#portfolio"
                className="group flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/88 transition-colors">
                Lihat Portfolio
                <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">→</span>
              </a>
              <a href={PROFILE.cv} download
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-7 py-3 text-sm text-white/60 hover:bg-white/8 hover:text-white/85 transition-all duration-200">
                <IcDownload /> Unduh CV
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/18"
          >
            <span className="text-[9px] tracking-[0.25em] uppercase">scroll</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
              <IcChevDown />
            </motion.div>
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-24 px-5">
          <div className="mx-auto max-w-5xl">
            <SectionHeader label="Tentang Saya" title="About" />
            <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
              {/* Kartu profil kiri */}
              <Reveal>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                  {/* Avatar */}
                  <div className="mb-5 mx-auto h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center overflow-hidden">
                    {PROFILE.photo
                      ? <img src={PROFILE.photo} alt={PROFILE.name} className="h-full w-full object-cover" />
                      : <span className="ff-serif text-2xl italic text-white/25">JM</span>
                    }
                  </div>
                  <h3 className="font-semibold text-white/85 text-base mb-0.5">{PROFILE.name}</h3>
                  <p className="text-xs text-white/35 mb-5">Mahasiswa Psikologi</p>
                  <div className="space-y-2.5">
                    <a href={`mailto:${PROFILE.email}`}
                      className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors">
                      <IcMail />{PROFILE.email}
                    </a>
                    <a href={`https://wa.me/62${PROFILE.phone.slice(1)}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors">
                      <IcPhone />{PROFILE.phone}
                    </a>
                    <span className="flex items-center gap-2 text-xs text-white/40">
                      <IcPin />{PROFILE.location}
                    </span>
                  </div>
                  <div className="mt-5 pt-5 border-t border-white/8">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-2.5">Bahasa</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/45">Bahasa Indonesia</span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/45">English (A2)</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Bio kanan */}
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 h-full flex flex-col gap-5">
                  <p className="text-sm leading-[1.9] text-white/55">{PROFILE.bio}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-auto">
                    {[
                      ["Universitas", "Universitas Negeri Makassar"],
                      ["Program Studi", "S1 Psikologi"],
                      ["Minat Utama", "Keuangan · Data · HR"],
                      ["Status", "Open to Work"],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
                        <p className="text-[10px] text-white/25 mb-1">{k}</p>
                        <p className="text-sm text-white/65 font-medium">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-24 px-5">
          <div className="mx-auto max-w-5xl">
            <SectionHeader label="Kemampuan" title="Skills" />
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: "Hard Skills", items: HARD_SKILLS },
                { label: "Soft Skills", items: SOFT_SKILLS },
              ].map(({ label, items }, gi) => (
                <Reveal key={label} delay={gi * 0.1}>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">{label}</p>
                    <RevealList className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <RevealItem key={s}>
                          <motion.span whileHover={{ scale: 1.04 }} transition={{ duration: 0.15 }}
                            className="inline-block rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-white/60 hover:bg-white/10 hover:text-white/85 transition-colors cursor-default">
                            {s}
                          </motion.span>
                        </RevealItem>
                      ))}
                    </RevealList>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="py-24 px-5">
          <div className="mx-auto max-w-5xl">
            <SectionHeader label="Riwayat Pendidikan" title="Education" />
            <RevealList className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <RevealItem key={i}>
                  <motion.div whileHover={{ borderColor: "rgba(255,255,255,0.18)" }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1 text-white/70">
                          <IcGraduate />
                          <h3 className="font-semibold text-white/85">{edu.school}</h3>
                        </div>
                        <p className="text-sm text-white/35">{edu.degree} · {edu.location}</p>
                      </div>
                      <span className="shrink-0 self-start rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/35">
                        {edu.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {edu.points.map((pt, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-white/45 leading-6">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/20" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </RevealItem>
              ))}
            </RevealList>
          </div>
        </section>

        {/* ── CERTIFICATES ── */}
        <section id="certificates" className="py-24 px-5">
          <div className="mx-auto max-w-5xl">
            <SectionHeader label="Sertifikasi" title="Certificates" />
            <Reveal className="text-center mb-6">
              <p className="text-xs text-white/22">
                Slot kosong akan diisi seiring sertifikat baru kamu dapatkan · Klik untuk melihat dokumen
              </p>
            </Reveal>
            <RevealList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATES.map((cert, i) => {
                if (cert.empty) {
                  return (
                    <RevealItem key={i}>
                      <div className="cert-slot group rounded-2xl border border-dashed border-white/10 p-6 flex flex-col items-center justify-center min-h-[178px] text-center hover:border-white/22 transition-colors duration-300">
                        <div className="slot-plus mb-2 text-white/18 transition-colors duration-300"><IcPlus /></div>
                        <p className="text-xs text-white/22">Slot Kosong</p>
                        <p className="text-[10px] text-white/14 mt-1">Sertifikat baru akan hadir di sini</p>
                      </div>
                    </RevealItem>
                  );
                }
                const c = cert as CertFilled;
                return (
                  <RevealItem key={i}>
                    <motion.div
                      whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.18)" }}
                      transition={{ duration: 0.22 }}
                      onClick={() => c.file && window.open(c.file, "_blank")}
                      className={`rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors duration-300 hover:bg-white/[0.055] h-full flex flex-col ${c.file ? "cursor-pointer" : "cursor-default"}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/40">
                          <IcAward />
                        </div>
                        <span className="text-xs text-white/28">{c.year}</span>
                      </div>
                      <h3 className="font-semibold text-white/82 text-sm mb-1">{c.name}</h3>
                      <p className="text-xs text-white/35 mb-3">{c.issuer}</p>
                      <p className="text-xs leading-5 text-white/48 flex-1">{c.desc}</p>
                      {c.file && (
                        <div className="mt-3 flex items-center gap-1.5 text-xs text-white/30 hover:text-white/55 transition-colors">
                          <IcExternal /> Lihat Sertifikat
                        </div>
                      )}
                    </motion.div>
                  </RevealItem>
                );
              })}
            </RevealList>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section id="portfolio" className="py-24 px-5">
          <div className="mx-auto max-w-5xl">
            <SectionHeader label="Proyek & Karya" title="Portfolio" />
            <RevealList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PORTFOLIO.map((item, i) => (
                <RevealItem key={i}>
                  <motion.div
                    whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.16)" }}
                    transition={{ duration: 0.22 }}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden h-full flex flex-col"
                  >
                    {/* Image area */}
                    <div className="aspect-video bg-white/[0.022] border-b border-white/8 flex items-center justify-center overflow-hidden">
                      {item.image
                        ? <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                        : <span className="ff-serif text-4xl italic text-white/8">{String(i + 1).padStart(2, "0")}</span>
                      }
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/28 mb-2">{item.tag}</p>
                      <h3 className="font-semibold text-white/80 text-sm mb-2">{item.title}</h3>
                      <p className="text-xs leading-6 text-white/45 flex-1">{item.desc}</p>
                      <p className="mt-3 text-[10px] text-white/22">{item.year}</p>
                    </div>
                  </motion.div>
                </RevealItem>
              ))}
              {/* Slot tambah */}
              <RevealItem>
                <div className="cert-slot group rounded-2xl border border-dashed border-white/10 p-6 flex flex-col items-center justify-center min-h-[240px] text-center hover:border-white/22 transition-colors duration-300">
                  <div className="slot-plus mb-2 text-white/18 transition-colors duration-300"><IcPlus /></div>
                  <p className="text-xs text-white/22">Tambah Proyek</p>
                  <p className="text-[10px] text-white/14 mt-1 max-w-[130px]">Edit array PORTFOLIO di page.js</p>
                </div>
              </RevealItem>
            </RevealList>
          </div>
        </section>

        {/* ── UNDUH CV ── */}
        <section className="py-24 px-5">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-12 text-center">
                <div className="grid-bg absolute inset-0 pointer-events-none opacity-60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/25 mb-4">Curriculum Vitae</p>
                  <h2 className="ff-serif text-3xl sm:text-4xl text-white mb-3">
                    Unduh CV Lengkap
                  </h2>
                  <p className="text-sm text-white/38 mb-8 max-w-sm mx-auto leading-7">
                    Riwayat pendidikan, kursus, keterampilan, dan pengalaman dalam satu dokumen yang siap dibagikan.
                  </p>
                  <a href={PROFILE.cv} download
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/88 transition-colors">
                    <IcDownload /> Unduh CV (.pdf)
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 px-5">
          <div className="mx-auto max-w-5xl">
            <SectionHeader label="Hubungi Saya" title="Let's Connect" />
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { icon: <IcMail size={18} />, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
                  { icon: <IcPhone size={18} />, label: "WhatsApp", value: PROFILE.phone, href: `https://wa.me/62${PROFILE.phone.slice(1)}` },
                  { icon: <IcLinkedin size={18} />, label: "LinkedIn", value: "Lihat Profil →", href: PROFILE.linkedin },
                ].map(({ icon, label, value, href }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.18)" }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-7 text-center transition-colors duration-200 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/45">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-white/28 mb-1">{label}</p>
                      <p className="text-sm text-white/58">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-white/[0.06] py-8 px-5">
          <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/18">
            <span className="ff-serif text-xl italic">JM.</span>
            <span>© {new Date().getFullYear()} Muh. Jabbar Muhaimin · Makassar, Indonesia</span>
            <span>Psychology × Data × Finance</span>
          </div>
        </footer>

      </div>
    </>
  );
}