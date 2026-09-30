import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Coffee,
  Mail,
  MapPin,
  Menu,
  Minus,
  Plus,
  Phone,
  X,
} from 'lucide-react'

const phoneNumber = '6282112444589'
const phoneDisplay = '+62 821 1244 4589'
const email = 'kopimalas@gmail.com'
const address = 'Dusun Sungai Tengah RT/RW 1/24, Desa Manggisan, Kecamatan Tanggul, Kabupaten Jember'
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)

const navigation = [
  { label: 'Beranda', href: '#home' },
  { label: 'Cerita Kami', href: '#about' },
  { label: 'Pilihan Kopi', href: '#menu' },
  { label: 'Lokasi', href: '#visit' },
]

const coffeeSelections = [
  {
    id: 'lanang',
    number: '01',
    name: 'Kopi Lanang',
    line: 'Untuk momen yang ingin kamu nikmati lebih lama.',
    note: 'Kenali pilihannya',
  },
  {
    id: 'robusta',
    number: '02',
    name: 'Kopi Robusta',
    line: 'Karakter yang berani untuk menemani harimu.',
    note: 'Kenali pilihannya',
  },
  {
    id: 'liberika',
    number: '03',
    name: 'Kopi Liberika',
    line: 'Saatnya mencoba sesuatu yang sedikit berbeda.',
    note: 'Kenali pilihannya',
  },
] as const

type CoffeeName = (typeof coffeeSelections)[number]['name']

function whatsappLink(message: string) {
  return 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message)
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={'brand' + (light ? ' brand--light' : '')} href="#home" aria-label="Kopi Malas, kembali ke beranda">
      <span className="brand__symbol" aria-hidden="true">
        <Coffee size={23} strokeWidth={1.8} />
      </span>
      <span className="brand__wordmark">
        <strong>KOPI MALAS</strong>
        <small>TANGGUL · JEMBER</small>
      </span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 30)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className={'site-header' + (scrolled || menuOpen ? ' site-header--solid' : '')}>
      <div className="site-header__inner shell">
        <Brand light={!scrolled && !menuOpen} />
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="header-contact"
          href={whatsappLink('Halo Kopi Malas, saya ingin bertanya tentang kopi dan kunjungan.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hubungi Kami <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      <nav className="mobile-nav" id="mobile-navigation" aria-label="Navigasi seluler" hidden={!menuOpen}>
        {navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label} <ArrowUpRight size={18} />
          </a>
        ))}
        <a
          href={whatsappLink('Halo Kopi Malas, saya ingin bertanya tentang kopi dan kunjungan.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Hubungi Kami <ArrowUpRight size={18} />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src="/images/hero-coffee.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
      />
      <div className="hero__shade" />
      <div className="shell hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__line" /> KOPI MALAS · TANGGUL
          </span>
          <h1 id="hero-title">
            Pelan-pelan,
            <br />
            nikmati <em>setiap</em>
            <br />
            tegukan.
          </h1>
          <p>
            Ada hari yang lebih enak dijalani tanpa terburu-buru. Duduk, bercerita, dan biarkan secangkir kopi
            menemanimu.
          </p>
          <div className="hero__actions">
            <a className="button button--cream" href="#menu">
              Jelajahi Kopi <ArrowUpRight size={19} />
            </a>
            <a className="text-link text-link--light" href="#about">
              Kenali Kami <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <a className="hero__scroll" href="#about">
          <span>SCROLL UNTUK JELAJAH</span>
          <ArrowDown size={17} />
        </a>
        <div className="hero__side-note" aria-hidden="true">
          SLOW DAYS, GOOD COFFEE
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="story section-pad" id="about" aria-labelledby="story-title">
      <div className="shell story__grid">
        <div className="story__intro">
          <span className="eyebrow"><span className="eyebrow__line" /> CERITA KAMI</span>
          <h2 id="story-title">
            Jeda yang
            <br />
            <em>selalu</em> terasa
            <br />
            pas.
          </h2>
          <p className="story__lead">
            Kopi Malas hadir sebagai tempat sederhana untuk menikmati kopi dan waktu yang berjalan sedikit lebih
            lambat.
          </p>
          <a className="text-link" href="#visit">
            Temukan tempat kami <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="story__detail">
          <div className="story__seal" aria-hidden="true">
            <Coffee size={35} strokeWidth={1.4} />
            <span>MADE FOR SLOW MOMENTS</span>
          </div>
          <p>
            Di Tanggul, Kopi Malas menjadi ruang untuk singgah: saat perlu fokus, ingin rehat, atau sekadar bertukar
            cerita. Kami percaya kopi yang nikmat terasa lebih lengkap ketika dinikmati bersama.
          </p>
          <div className="story__rule" />
          <div className="story__values">
            <div>
              <span className="story__value-no">01</span>
              <strong>Kopi untuk semua</strong>
              <span>Ruang santai untuk siapa saja yang ingin berhenti sejenak.</span>
            </div>
            <div>
              <span className="story__value-no">02</span>
              <strong>Waktu untuk cerita</strong>
              <span>Percakapan kecil yang membuat hari terasa lebih hangat.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CoffeeMenu() {
  return (
    <section className="coffee-section section-pad" id="menu" aria-labelledby="menu-title">
      <div className="shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow__line" /> PILIHAN KOPI</span>
            <h2 id="menu-title">Temukan cangkir <em>pilihanmu.</em></h2>
          </div>
          <p>
            Tiga nama, banyak alasan untuk kembali. Tanyakan pilihan dan ketersediaan hari ini langsung kepada kami.
          </p>
        </div>
        <div className="coffee-grid">
          {coffeeSelections.map((coffee) => (
            <article className={'coffee-card coffee-card--' + coffee.id} key={coffee.id}>
              <div className="coffee-card__top">
                <span>{coffee.number} / 03</span>
                <Coffee size={25} strokeWidth={1.4} />
              </div>
              <div className="coffee-card__art" aria-hidden="true">
                <span className="coffee-card__saucer">
                  <span className="coffee-card__cup">
                    <span className="coffee-card__surface" />
                  </span>
                </span>
              </div>
              <div className="coffee-card__bottom">
                <span className="coffee-card__kicker">KOPI MALAS SELECTION</span>
                <h3>{coffee.name}</h3>
                <p>{coffee.line}</p>
                <a
                  href={whatsappLink('Halo Kopi Malas, saya ingin tahu tentang ' + coffee.name + '.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={coffee.note + ': ' + coffee.name + ' melalui WhatsApp'}
                >
                  {coffee.note} <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-note">
          * Harga dan ketersediaan dapat ditanyakan lewat WhatsApp.
        </p>
      </div>
    </section>
  )
}

function Pause() {
  return (
    <section className="pause" aria-labelledby="pause-title">
      <div className="shell pause__inner">
        <span className="pause__asterisk" aria-hidden="true">✳</span>
        <span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> RITUAL KECIL, RASA BESAR</span>
        <h2 id="pause-title">“Kopi enak selalu punya cara untuk membuat kita <em>berhenti sejenak.</em>”</h2>
        <span className="pause__caption">— KOPI MALAS, TANGGUL</span>
      </div>
    </section>
  )
}

function Order() {
  const [coffee, setCoffee] = useState<CoffeeName>('Kopi Robusta')
  const [quantity, setQuantity] = useState(1)
  const [note, setNote] = useState('')

  const message = [
    'Halo Kopi Malas, saya ingin bertanya/pesan:',
    'Pilihan: ' + coffee,
    'Jumlah: ' + quantity,
    note.trim() ? 'Catatan: ' + note.trim() : '',
    'Mohon info harga dan ketersediaannya. Terima kasih!',
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <section className="order section-pad" id="order" aria-labelledby="order-title">
      <div className="shell order__grid">
        <div className="order__copy">
          <span className="eyebrow"><span className="eyebrow__line" /> SUDAH TAHU MAU APA?</span>
          <h2 id="order-title">Kopinya kami siapkan, <em>obrolannya</em> menyusul.</h2>
          <p>
            Pilih kopi yang menarik perhatianmu. Kami akan bantu menjawab harga, ketersediaan, dan detail pesanan
            melalui WhatsApp.
          </p>
          <div className="order__aside">
            <span className="order__aside-icon"><Phone size={21} /></span>
            <span><strong>Lebih nyaman bicara langsung?</strong><a href={'tel:+' + phoneNumber}>{phoneDisplay}</a></span>
          </div>
        </div>
        <div className="order-card">
          <div className="order-card__heading">
            <span>BUAT PESANAN</span>
            <Coffee size={24} strokeWidth={1.5} />
          </div>
          <label htmlFor="coffee-choice">Pilih kopi</label>
          <select
            id="coffee-choice"
            value={coffee}
            onChange={(event) => setCoffee(event.target.value as CoffeeName)}
          >
            {coffeeSelections.map((item) => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
          <label htmlFor="coffee-quantity">Jumlah</label>
          <div className="quantity-control">
            <button
              type="button"
              aria-label="Kurangi jumlah"
              disabled={quantity <= 1}
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            >
              <Minus size={17} />
            </button>
            <output id="coffee-quantity" aria-live="polite">{quantity}</output>
            <button
              type="button"
              aria-label="Tambah jumlah"
              disabled={quantity >= 20}
              onClick={() => setQuantity((current) => Math.min(20, current + 1))}
            >
              <Plus size={17} />
            </button>
          </div>
          <label htmlFor="coffee-note">Catatan <span>(opsional)</span></label>
          <textarea
            id="coffee-note"
            maxLength={240}
            placeholder="Contoh: ingin tanya ukuran atau cara penyajian"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
          <a className="button button--dark order-card__submit" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
            Lanjut ke WhatsApp <ArrowUpRight size={19} />
          </a>
          <p>Pesanan dikirim setelah kamu mengonfirmasinya di WhatsApp.</p>
        </div>
      </div>
    </section>
  )
}

function Visit() {
  return (
    <section className="visit section-pad" id="visit" aria-labelledby="visit-title">
      <div className="shell visit__grid">
        <div className="visit__intro">
          <span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> MAMPIR, YUK</span>
          <h2 id="visit-title">Tempat terbaik untuk <em>tidak terburu-buru.</em></h2>
          <p>Datang sendiri, ajak teman, atau sekadar lewat untuk secangkir kopi. Kami menunggumu di Tanggul.</p>
          <a className="button button--cream" href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Buka di Google Maps <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="visit__details">
          <div className="visit__detail">
            <MapPin size={23} />
            <div><span>ALAMAT</span><p>{address}</p></div>
          </div>
          <div className="visit__detail">
            <Clock3 size={23} />
            <div>
              <span>JAM OPERASIONAL</span>
              <p>
                <a
                  href={whatsappLink('Halo Kopi Malas, hari ini buka sampai jam berapa?')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konfirmasi jam buka hari ini <ArrowUpRight size={15} />
                </a>
              </p>
            </div>
          </div>
          <div className="visit__detail">
            <Phone size={23} />
            <div><span>TELEPON</span><p><a href={'tel:+' + phoneNumber}>{phoneDisplay}</a></p></div>
          </div>
          <div className="visit__detail">
            <Mail size={23} />
            <div><span>EMAIL</span><p><a href={'mailto:' + email}>{email}</a></p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__top">
        <div>
          <Brand light />
          <p>Secangkir jeda di tengah hari yang sibuk. Sampai bertemu di Tanggul.</p>
        </div>
        <div className="footer__links">
          <div>
            <strong>JELAJAHI</strong>
            <a href="#about">Cerita Kami</a>
            <a href="#menu">Pilihan Kopi</a>
            <a href="#visit">Lokasi</a>
          </div>
          <div>
            <strong>HUBUNGI</strong>
            <a href={whatsappLink('Halo Kopi Malas, saya ingin bertanya.')} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={'mailto:' + email}>Email</a>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a>
          </div>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>© {new Date().getFullYear()} Kopi Malas. Dibuat untuk hari yang lebih santai.</span>
        <a href="#home">Kembali ke atas ↑</a>
      </div>
      <span className="footer__ghost" aria-hidden="true">KOPI MALAS</span>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <CoffeeMenu />
        <Pause />
        <Order />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
