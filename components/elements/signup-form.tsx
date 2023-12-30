"use client";

import { Toast } from 'primereact/toast';
import React, { FormEvent, useRef } from 'react';
import { useState } from 'react';

const SignupForm = () => {
  const [state, setState] = useState<string>();

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      setState('loading');

      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario.')
      } else {
        showMessage(toastBottomCenter, 'success');
      }
      
      setState('ready');
      
    } catch (error) {
      console.error(error);
      // TODO: Add error message
    }
  }


  const toastBottomCenter = useRef(null);

  const showMessage = (ref, severity) => {

    ref.current.show({ summary: '¡Bien hecho!', detail: "Bienvenido a DHUB", life: 4000, severity });
  };

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
              <input id="firstName" name="firstName" type="firstName" className="form-control" placeholder="Tu nombre" required />
            </li>
            <li className="form-email">
              <input id="email" name="email" type="email" className="form-control" placeholder="Tu email" required />
            </li>
          </ul>
        </div>
        <Toast ref={toastBottomCenter} position="bottom-center" />
        <button type='submit' className="action-btn form-btn"><span style={{ width: '100%' }}>Únete a los Dreamers</span></button>
      </form>
    </div>
  )
}

export default SignupForm;