import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import {AiOutlineWhatsApp,AiOutlineSend} from 'react-icons/ai'



const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 px-4 py-2">
      <div className="md:col-span-2 flex flex-col justify-evenly text-center ">
        <div>
          <h2 className="mb-4">Todas las soluciones para tu alberca</h2>
          <p className="py-4">
            En{" "}
            <span className="font-bold underline decoration-4 decoration-sky-500">
              Albercas Oasis Azul
            </span>{" "}
            tenemos todo lo que necesitas para tener tu piscina siempre
            funcionando.{" "}
            <span className="font-bold underline decoration-4 decoration-sky-500">
              {" "}
              Tenemos cloro, floculantes, bombas de calor, filtros, arena para
              filtros, mantenimiento, venta de equipo, limpieza para el agua y
              un gran etcétera.
            </span>{" "}
            Si estás por construir la alberca de tus sueños; contamos con todos
            los materiales, equipo y personal capacitado para que solamente te
            concentres en nadar en aguas cristalinas.
          </p>
        </div>
        <div className="grid sm:grid-col-2 gap-8 py-4">
          <div className="flex flex-col md:flex-row items-center text-center m-auto">
            <button>
              <AiOutlineWhatsApp size={50} />
            </button>
            <div>
              <h3 className="py-2">Contáctanos</h3>
              <p className="py-1">
                Llámanos o escríbenos a WhatsApp{" "}
                <span className="font-bold underline decoration-4 decoration-green-500">
                  +52 xx xxxxxxxx
                </span>{" "}
              </p>
            </div>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">Estamos en CDMX</h3>
              <p className="py-1">
                {" "}
                Entrega gratuita dentro de Ciudad de México y área
                metropolitana.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-r from-[--primary-dark] to-[--primary-light] border-4 border-sky-500 text-white text-center">
        <p className="p-2">
          DURANTE{" "}
          <span className="font-bold underline decoration-4 decoration-orange-500">
            NOVIEMBRE 10% DE DESCUENTO
          </span>{" "}
          EN LA COMPRA DE CLORO
        </p>
        <p className="py-4 font-bold">¿ALBERCA CON AGUA VERDE?</p>
        <p className="bg-gray-900 text-gray-200 py-2 px-1">
          AGENDA UNA VISITA PARA QUE RESOLVAMOS TU PROBLEMA
        </p>
        <form>
          <div className="flex flex-col items-center">
            <label className="py-1 font-bold my-2">Tipo de Servicio</label>
            <select name="tipo" className="w-auto font-[Poppins] text-blue-900 text-center rounded-sm" required>
              <option value="aguaVerde">Agua verde/Rescate de agua</option>
              <option value="limpieza">Limpieza profunda de alberca</option>
              <option value="revison">Revisión de bomba/filtro/caldera</option>
              <option value="arena">Cambio de arena para filtro</option>
              <option value="instalacion">
                Instalación de bomba/filtro/caldera
              </option>
              <option value="construccion">Construcción de alberca</option>
              <option value="electrico">
                Revisión de instalación eléctrica
              </option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <label className="font-bold my-2">Fecha de visita</label>
            <input className="w-auto text-blue-900 text-center rounded-sm focus:outline-none" type="date" required />
          </div>
          <div className="flex flex-col items-center">
            <label className="font-bold my-2">Nombre</label>
            <input
              className="w-auto md:max-w-[300px] h-[40px] text-blue-900 rounded-sm focus:outline-none pl-2"
              type="text"
              placeholder="Introduce tu nombre"
              required
              pattern="[a-z, A-Z]{3,40}"
              minLength={3}
              maxLength={40}
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="font-bold my-2">Teléfono</label>
            <input
              className="w-auto md:max-w-[300px] h-[40px] text-blue-900 rounded-sm focus:outline-none pl-2"
              type="tel"
              pattern="[0-9]{10}"
              required
              maxLength={10}
              minLength={10}
              placeholder="10 digitos"
            />
          </div>
          <div className="flex flex-col items-center">
            <button className=" flex flex-row items-center my-4 hover:bg-green-400" onClick={(e)=>e.preventDefault()}>AGENDAR<AiOutlineSend className="ml-2" size={30} /></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
