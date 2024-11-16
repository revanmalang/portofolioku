import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>Project Saya</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/revanmalang/rckfinder_8ots" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>fckfinder bots Public</h3>
              <p> FCKinder Bot adalah sebuah bot otomatis yang dikembangkan menggunakan Python, dengan konteks penggunaannya yang dapat bervariasi. Bot ini mungkin digunakan pada platform seperti Discord atau Telegram untuk menyediakan fitur tertentu, seperti permainan, moderasi, atau layanan lainnya. Selain itu, FCKinder Bot kemungkinan memanfaatkan pustaka populer seperti **discord.py** untuk bot Discord atau **aiogram** dan **python-telegram-bot** untuk Telegram. Dalam beberapa kasus, bot ini juga bisa berbasis web dengan framework seperti Flask atau Django. Tidak menutup kemungkinan bahwa FCKinder Bot adalah nama proyek khusus yang dirancang untuk tujuan tertentu, seperti pendidikan, hiburan, atau keperluan pribadi. Jika terdapat informasi tambahan terkait bot ini, seperti repositori GitHub atau dokumentasi, detail lebih rinci dapat diberikan. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Python</li> <li>Bot</li> <li>FCKinderBot</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/revanmalang/client-tool-tracker" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://github.com/revanmalang/client-tool-tracker" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Client Tool Tracker         </h3>
              <p>
              Client Tool Tracker adalah perangkat lunak yang digunakan untuk melacak dan mengelola data serta aktivitas klien dalam suatu sistem, bertujuan meningkatkan efisiensi dan layanan. Alat ini mencakup fungsi seperti penyimpanan data klien, pemantauan aktivitas, pelaporan, serta integrasi dengan sistem lain seperti CRM. Selain itu, Client Tool Tracker sering dilengkapi fitur notifikasi untuk mengingatkan tim terkait tenggat waktu atau tindak lanjut yang diperlukan.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Client tool tracker</li>
                <li>Tool</li>
                <li>Track</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/revanmalang/BypassServ-Mini-Shell" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/revanmalang/BypassServ-Mini-Shell" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>BypassServ Mini Shell</h3>
              <p>
              ypassServ Mini Shell adalah sebuah alat yang digunakan untuk mengakses atau mengontrol server dengan cara yang biasanya bertujuan untuk menghindari pembatasan atau pengamanan yang ada pada server tersebut. Alat ini sering digunakan dalam konteks pengujian keamanan (penetration testing) atau peretasan, di mana seorang peretas mencoba mengeksploitasi kerentanannya untuk mendapatkan akses yang tidak sah.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>BypassServer</li>
                <li>Malware</li>
                <li>PHP</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/revanmalang/ERP-Berbasis-Laravel" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/revanmalang/ERP-Berbasis-Laravel" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Project ERP Es Krim</h3>
              <p>
Project ERP Es Krim merujuk pada penerapan sistem Enterprise Resource Planning (ERP) untuk mengelola dan mengoptimalkan operasi bisnis pada perusahaan yang bergerak di industri es krim. ERP adalah perangkat lunak yang mengintegrasikan berbagai fungsi dalam suatu organisasi, seperti manajemen persediaan, produksi, keuangan, pemasaran, penjualan, dan sumber daya manusia, dalam satu sistem yang terhubung.
</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel</li>
                <li>ERP</li>
                <li>Project</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <title>Code</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <div className="project-links">
        <a href="https://github.com/revanmalang/Toko_onlineku" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Visit GitHub" />
        </a>
        <a href=" " target="_blank" rel="noreferrer">
          <img src={externalLink} alt="Visit site" />
        </a>
      </div>
    </header>
    <div className="body">
      <h3>Toko Onlineku</h3>
      <p>Toko online berbasis PHP Laravel adalah sebuah aplikasi e-commerce yang dibangun menggunakan Laravel, sebuah framework PHP yang populer, untuk memudahkan pengembangan website toko online. Laravel menyediakan berbagai fitur dan alat bantu yang memungkinkan pengembangan aplikasi web menjadi lebih efisien dan terstruktur, seperti routing, autentikasi, dan ORM (Object-Relational Mapping) yang membantu dalam pengelolaan database.</p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>PHP</li>
        <li>Laravel</li>
        <li>Shop</li>
      </ul>
    </footer>
  </div>
</ScrollAnimation>

<ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <div className="project-links">
        <a href="https://github.com/revanmalang/Hack-Tool" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Visit GitHub" />
        </a>
        <a href=" " target="_blank" rel="noreferrer">
          <img src={externalLink} alt="Visit site" />
        </a>
      </div>
    </header>
    <div className="body">
      <h3>Hack Tool</h3>
      <p> perangkat lunak atau alat yang digunakan untuk melakukan berbagai tindakan terkait peretasan atau eksploitasi sistem komputer. Alat ini sering digunakan untuk mengidentifikasi kerentanannya, menguji keamanan, atau mendapatkan akses tidak sah ke sistem. Hack tool dapat digunakan untuk tujuan yang sah seperti pengujian penetrasi dalam keamanan siber (ethical hacking), namun juga bisa disalahgunakan untuk tujuan ilegal, seperti meretas akun atau sistem tanpa izin.</p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>Hack</li>
        <li>Linux Tools</li>
        <li>All In One Hacking Tool</li>
        <li>Web Attack</li>
        <li>Wireless Attack</li>
        <li>Best Hacking Tool</li>
   
      </ul>
    </footer>
  </div>
</ScrollAnimation>


        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
        
        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

      </div>
    </Container>
  );
}