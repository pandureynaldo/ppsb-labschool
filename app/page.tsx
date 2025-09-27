"use client";

import Image from "next/image";
import CaptchaSearch from "../components/CaptchaSearch";
import { useState } from "react";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const faqData = [
    {
      question: "Kapan pendaftaran siswa baru dibuka?",
      answer:
        "Pendaftaran siswa baru SMP Labschool Jakarta biasanya dibuka pada bulan Januari - Maret setiap tahunnya. Untuk informasi lebih detail, silakan kunjungi website resmi atau hubungi bagian administrasi sekolah.",
    },
    {
      question: "Apa saja persyaratan pendaftaran?",
      answer:
        "Persyaratan pendaftaran meliputi:\n1) Fotokopi raport kelas 5 dan 6 SD\n2) Fotokopi ijazah SD (jika sudah ada)\n3) Pas foto 3x4 sebanyak 2 lembar\n4) Fotokopi akta kelahiran\n5) Fotokopi kartu keluarga\n6) Surat keterangan sehat dari dokter\n7) Mengisi formulir pendaftaran online",
    },
    {
      question: "Berapa biaya pendaftaran dan SPP?",
      answer:
        "Biaya pendaftaran sebesar Rp 500.000 (tidak dapat dikembalikan). SPP bulanan sebesar Rp 1.200.000. Biaya ini sudah termasuk uang pangkal, uang gedung, dan fasilitas pembelajaran. Untuk informasi biaya lengkap, silakan hubungi bagian keuangan sekolah.",
    },
    {
      question: "Apakah ada tes masuk?",
      answer:
        "Ya, ada tes masuk yang meliputi:\n1) Tes akademik (Matematika, IPA, Bahasa Indonesia, Bahasa Inggris)\n2) Tes psikologi\n3) Wawancara\n\nTes biasanya dilaksanakan pada bulan April - Mei. Hasil tes akan diumumkan melalui website sekolah dan SMS.",
    },
    {
      question: "Berapa kuota siswa baru per tahun?",
      answer:
        "SMP Labschool Jakarta menerima 240 siswa baru per tahun yang terbagi menjadi 8 kelas dengan masing-masing kelas berisi 30 siswa. Penerimaan didasarkan pada hasil tes dan prestasi akademik.",
    },
    {
      question: "Apa keunggulan SMP Labschool Jakarta?",
      answer:
        "Keunggulan SMP Labschool Jakarta meliputi:\n1) Kurikulum berkualitas tinggi dengan pengajar berpengalaman\n2) Fasilitas modern dan lengkap\n3) Program ekstrakurikuler beragam\n4) Prestasi akademik dan non-akademik yang membanggakan\n5) Lingkungan belajar yang kondusif\n6) Akreditasi A dan sertifikasi ISO 9001:2015",
    },
    {
      question: "Bagaimana sistem pembelajaran di Labschool?",
      answer:
        "Sistem pembelajaran menggunakan kurikulum nasional yang diperkaya dengan program unggulan Labschool. Pembelajaran dilaksanakan dengan metode yang variatif, menggunakan teknologi modern, dan didukung oleh fasilitas lengkap. Siswa juga dibekali dengan pendidikan karakter dan life skills.",
    },
    {
      question: "Apakah ada program beasiswa?",
      answer:
        "Ya, SMP Labschool Jakarta menyediakan program beasiswa untuk siswa berprestasi dan siswa kurang mampu. Beasiswa meliputi:\n1) Beasiswa prestasi akademik\n2) Beasiswa prestasi non-akademik\n3) Beasiswa sosial\n\nInformasi lengkap dapat diperoleh di bagian administrasi sekolah.",
    },
    {
      question: "Bagaimana cara menghubungi sekolah?",
      answer:
        "Anda dapat menghubungi SMP Labschool Jakarta melalui:\n1) Alamat: Jl. Pemuda No. 248, Rawamangun, Jakarta Timur 13220\n2) Telepon: (021) 4894-4009\n3) Email: tusmplabsjkt@labschool.xyz\n4) Jam operasional: Senin-Jumat 07:00-16:00, Sabtu 07:00-12:00",
    },
    {
      question: "Apakah ada program ekstrakurikuler?",
      answer:
        "SMP Labschool Jakarta menyediakan lebih dari 25 program ekstrakurikuler yang beragam, meliputi:\n1) Olahraga: basket, futsal, voli, badminton\n2) Seni: tari, musik, teater, lukis\n3) Sains: robotik, astronomi, biologi\n4) Bahasa: Inggris, Mandarin, Jepang\n5) Organisasi: OSIS, PMR, Pramuka",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="/" className="logo">
              <div className="" style={{ marginTop: "10px" }}>
                <Image src="/logo-smp-labschool.png" alt="SMP Labschool Jakarta" width={40} height={40} /> 
              </div>
              <span className="logo-text">SMP Labschool Jakarta</span>
            </a>
            <nav>
              <ul className="nav">
                <li>
                  <a href="#beranda">Beranda</a>
                </li>
                <li>
                  <a href="https://smplabschooljakarta.sch.id/tentang">Tentang</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#kontak">Kontak</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="title-section">
        <div className="container">
          <h1 className="main-title">FAQ PPSB SMP Labschool Jakarta</h1>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-container">
            <CaptchaSearch onVerified={() => {}} />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="separator">
        <div className="separator-line"></div>
        <div className="separator-text">Pertanyaan yang Sering Diajukan</div>
        <div className="separator-line"></div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="faq-accordion">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-accordion-item">
                <button
                  className="faq-accordion-header"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openAccordion === index}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                >
                  <span className="faq-accordion-question">{faq.question}</span>
                  <span className={`faq-accordion-icon ${openAccordion === index ? 'open' : ''}`} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div 
                  className={`faq-accordion-content ${openAccordion === index ? 'open' : ''}`}
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  aria-hidden={openAccordion !== index}
                >
                  <div className="faq-accordion-answer">
                    {faq.answer.split('\n').map((line, lineIndex) => (
                      <div key={lineIndex} className="faq-answer-line">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SMP Labschool Jakarta</h3>
              <p>
                Sekolah Menengah Pertama terbaik di Jakarta dengan fasilitas
                modern dan kurikulum berkualitas tinggi.
              </p>
            </div>
            <div className="footer-section">
              <h3>Kontak Kami</h3>
              <p>Jl. Pemuda No. 248, Rawamangun</p>
              <p>Jakarta Timur 13220</p>
              <p>Telp: (021) 4894-4009</p>
              <p>Email: tusmplabsjkt@labschool.xyz</p>
            </div>
            <div className="footer-section">
              <h3>Informasi</h3>
              <p>NPSN: 20104766</p>
              <p>Akreditasi: A</p>
              <p>ISO 9001:2015 Certified</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 SMP Labschool Jakarta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
