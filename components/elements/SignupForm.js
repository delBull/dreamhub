import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';
import { useState } from 'react';

const SignupForm = () => {
  const toastBottomCenter = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  async function handleOnSubmit(event) {
    event.preventDefault();

    if (!firstName || !email) {
      return;
    }

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario.')
      } else {
        showSuccess();
      }
    } catch (error) {
      console.error(error);
      showError();
    }
  }

  const showSuccess = () => {
    toastBottomCenter.current.show({ severity: 'success', summary: '¡Bien hecho!', detail: 'Bienvenido a DHUB', life: 4000 });
  }

  const showError = () => {
    toastBottomCenter.current.show({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un problema al enviar el formulario, inténtalo más tarde', life: 30000 });
  }

  return (
    <div className="footer__main">
      <div className="block-text center">
        <h3 className="heading">No seas un extraño</h3>
        <p>Aprende y vuélvete experto ¡No te quedes fuera!</p>
        <p>Con tu entrada a la comunidad Dreamhub, ¡recibes un NFT sorpresa!</p>
      </div>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <ul>
            <li className="form-nombre">
              <input value={firstName} onChange={e => setFirstName(e.target.value)} id="firstName" name="firstName" type="firstName" className="form-control" placeholder="Tu nombre" required />
            </li>
            <li className="form-email">
              <input value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" type="email" className="form-control" placeholder="Tu email" required />
            </li>
          </ul>
        </div>
        <button type='submit' className="action-btn form-btn"><span style={{ width: '100%' }}>Únete a los Dreamers</span></button>
      </form>
      <Toast ref={toastBottomCenter} position="bottom-center" />
    </div>
  )
}

export default SignupForm;