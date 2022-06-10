import React from 'react';
import { buttonPrimary } from '../Shared/Classes/NavbarClasses';

const Contactme = () => {
    return (
        <div class="w-full flex justify-center mb-10 md:w-96 md:max-w-full mx-auto">


            <a
                href="javascript:void(
        window.open(
          'https://form.jotform.com/221594871934466',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    ">
                <button className={buttonPrimary} > contact Me  </button>
            </a>
        </div>

    );
};

export default Contactme;