import { Container } from "./styles";
import VinayakSingh from "../../assets/repano.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Tentang Saya</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
  <p>
    Halo! Saya Revan, seorang spesialis IT Support dengan keahlian dalam perbaikan perangkat lunak dan perangkat keras. Saya memiliki semangat untuk menyelesaikan masalah teknis dan memberikan solusi optimal. Selain keterampilan IT Support, saya juga berpengalaman dalam pengembangan website, dengan keahlian dalam HTML, CSS, JavaScript, dan React untuk menciptakan pengalaman online yang disesuaikan.
  </p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
  <p>
    Selain itu, saya memiliki latar belakang yang kuat dalam Keamanan TI, yang memungkinkan saya untuk memastikan keamanan dan perlindungan situs web dan sistem. Baik itu mengatasi masalah teknis, membangun situs web baru, atau meningkatkan keamanan, saya siap membantu.
  </p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
  <p>
    Jika Anda mencari seseorang yang dapat mengelola dukungan IT, membangun situs web yang aman, atau membantu dengan masalah perangkat keras dan perangkat lunak, jangan ragu untuk menghubungi saya. Mari terhubung dan wujudkan solusi teknologi Anda!
  </p>
</ScrollAnimation>

        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Keahlian:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={VinayakSingh} alt="Moch Revano Budiansyah" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
