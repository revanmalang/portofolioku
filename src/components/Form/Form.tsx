import { Container, ContainerSucces } from './styles';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useState } from 'react';
import validator from 'validator';

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry');
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState('');

  // Validasi email
  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email));
  }

  // Notifikasi ketika email berhasil dikirim
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [state.succeeded]);

  // Debugging untuk melihat status semua state
  useEffect(() => {
    console.log({
      submitting: state.submitting,
      validEmail,
      message,
      isHuman,
    });
  }, [state.submitting, validEmail, message, isHuman]);

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Terima kasih telah menghubungi saya!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
         Kembali ke atas
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Hubungi saya menggunakan formulir</h2>
      <form onSubmit={handleSubmit}>
        {/* Input Email */}
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Input Pesan */}
        <textarea
          required
          placeholder="Kirim pesan untuk memulai."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        {/* reCAPTCHA */}
        <ReCAPTCHA
  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
  onChange={() => setIsHuman(true)}
/>



        {/* Tombol Submit */}
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Kirim
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
