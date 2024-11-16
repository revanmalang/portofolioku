import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Kontak</h2>
        <p>Siap memulai projek Anda?</p>
<p>Hubungi saya sekarang untuk konsultasi gratis.</p>

      </header>
      <div className="contacts">
        <div>
        <a href="mailto:revanmalang584@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:revanmalang584@gmail.com">revanmalang584@gmail.com</a>
        </div>
        <div>
        <a href="tel:+6282257392945"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+6282257392945">(+62)82257392945</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}