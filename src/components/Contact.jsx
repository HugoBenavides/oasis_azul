import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'


const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 px-4 py-2">
      <div className="md:col-span-2 flex flex-col justify-evenly text-center ">
        <div>
          <h2 className="mb-4">Todas las soluciones para tu alberca</h2>
          <p className='py-4'>
            En{" "}
            <span className="font-bold underline decoration-4 decoration-sky-500">
              Albercas Oasis Azul
            </span>{" "}
            tenemos todo lo que necesitas para tener tu piscina siempre
            funcionando.{" "}
            <span className="font-bold underline decoration-4 decoration-sky-500">
              {" "}
              Tenemos cloro, floculantes, bombas de calor, filtros, arena para filtros, mantenimiento, venta de equipo, limpieza para el agua y un gran etcétera.
            </span>{" "}
            Si estás por construir la alberca de tus sueños; contamos con
            todos los materiales, equipo y personal capacitado para que
            solamente te concentres en nadar en aguas cristalinas.
          </p>
        </div>
        <div className='grid sm:grid-col-2 gap-8 py-4'>
          <div className="flex flex-col md:flex-row items-center text-center m-auto">
            <button>
              <RiCustomerService2Fill size={30} />
            </button>
            <div>
                <h3 className='py-2'>Contáctanos</h3>
                <p className='py-1'>Llámanos o escríbenos a WhatsApp <span className='font-bold underline decoration-4 decoration-green-500'>+52 xx xxxxxxxx</span> </p>
            </div>
            <button>
              <MdOutlineTravelExplore size={30} />
            </button>
            <div>
                <h3 className='py-2'>Estamos en CDMX</h3>
                <p className='py-1'> Entrega gratuita dentro de Ciudad de México y área metropolitana.</p>
            </div>
          </div>
        </div>
      </div>
      <div>right</div>
    </div>
  );
}

export default Contact;