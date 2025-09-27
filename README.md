# FAQ Penerimaan Siswa Baru - SMP Labschool Jakarta

Website FAQ untuk Penerimaan Siswa Baru SMP Labschool Jakarta yang dibangun dengan Next.js dan terintegrasi dengan Google AI Search Widget.

## Fitur

- 🎨 Design yang sesuai dengan website resmi SMP Labschool Jakarta
- 🔍 Integrasi Google AI Search Widget untuk pencarian cerdas
- 📱 Responsive design untuk semua perangkat
- ⚡ Fast loading dengan Next.js 14
- 🎯 FAQ lengkap seputar penerimaan siswa baru

## Teknologi yang Digunakan

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google AI Search Widget** - Pencarian cerdas

## Cara Menjalankan

1. Install dependencies:
```bash
yarn install
```

2. Jalankan development server:
```bash
yarn dev
```

3. Buka [http://localhost:3000](http://localhost:3000) di browser

## Konfigurasi Google AI Search Widget

✅ **Google AI Search Widget sudah dikonfigurasi!**

Widget akan otomatis aktif dengan config ID yang sudah diset. Untuk menggunakan:

1. Copy file `env.example` menjadi `.env.local`:
```bash
cp env.example .env.local
```

2. Widget akan otomatis aktif dengan config ID yang sudah dikonfigurasi

## Build untuk Production

```bash
yarn build
yarn start
```

## Struktur Project

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Kontak

SMP Labschool Jakarta
Jl. Pemuda No. 248, Rawamangun
Jakarta Timur 13220
Telp: (021) 4894-4009
Email: tusmplabsjkt@labschool.xyz
