"use client";

import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';
import { useState } from 'react';

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

const SignupForm = () => {
  const [state, setState] = useState<string>();

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
    });

    setState('loading');

    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email
      })
    })

    setState('ready');
  }

 
  const toastBottomCenter = useRef(null);

  const showMessage = (event, ref, severity) => {
      const label = event.target.innerText;

      ref.current.show({ summary: '¡Bien hecho!', detail: "Bienvenido a DHUB", life: 4000, contentStyleClass: 'background: white' });
  };

  return (
                              <div className="footer__main">
                                <div className="block-text center">
                                    <h3 className="heading">No seas un extraño</h3>
                                    <p>Aprende y vuélvete experto ¡No te quedes fuera!</p>
                                    <p>Con tu entrada a la comunidad Dreamhub, ¡recibes un NFT sorpresa!</p>
                                </div>
                                <form action="#" className="form" onSubmit={handleOnSubmit}>
                                    <div className="form-group">
                                        <ul>
                                            <li className="form-nombre">
                                        <input id="firstName" name="firstName" type="firstName" className="form-control" placeholder="Tu nombre" />
                                         </li>
                                        <li className="form-email">
                                        <input id="email" name="email" type="email" className="form-control" placeholder="Tu email" />
                                        </li>
                                        </ul>
                                    </div>
                                    <Toast ref={toastBottomCenter} position="bottom-center" className='mytoast' />
                                    <button onClick={(e) => showMessage(e, toastBottomCenter, 'info')} className="action-btn form-btn"><span style={{ width: '100%'}}>Únete a los Dreamers</span></button>
                                </form>
                            </div>
  )
}

export default SignupForm;