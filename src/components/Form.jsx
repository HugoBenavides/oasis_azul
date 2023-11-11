import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AiOutlineSend } from "react-icons/ai";

const Form = () => {
  const currentDate = new Date();

  const minDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  const maxDate = "2024-12-31"

  //Hooks para usar en el form y firebase
  const [service, setService] = useState("");
  const [formDate, setFormDate] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {

    //allow read, write: if request.time > timestamp.date(2023, 11, 1); agregar esa regla a FIREBASE en caso de tirar error de permisos
    
    e.preventDefault();
    try {
      const create = await addDoc(collection(db, "appointment"), {
        service: service,
        formDate: formDate,
        name: name,
        tel: tel,
        email: email,
      }).then(
        alert(
          "Su cita fue creada con éxito. El equipo de Albercas Oasis Azul se pondrá en contacto con usted a la brevedad posible"
        )
      );
      console.log("Su cita ha sido creada con el ID: ", create.id);
    } catch (err) {
      alert(err.message);
    }
    setService("Agua verde/Rescate de agua");
    setFormDate("");
    setName("");
    setTel("");
    setEmail("");
  };

  /*
  const handleDate = ()=>{
        const getDate = document.querySelector('input[type="date"]')
        console.log(getDate.value)
    }
  */
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <label className="py-1 font-bold my-2">
            Tipo de Servicio <span>*</span>
          </label>
          <select
            className="w-auto font-[Poppins] text-blue-900 text-center rounded-sm"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="aguaVerde">Agua verde/Rescate de agua</option>
            <option value="limpiezaProfunda">
              Limpieza profunda de alberca
            </option>
            <option value="revisonEquipo">
              Revisión de bomba/filtro/caldera
            </option>
            <option value="cambioArena">Cambio de arena para filtro</option>
            <option value="instalacionEquipo">
              Instalación de bomba/filtro/caldera
            </option>
            <option value="construccionAlberca">Construcción de alberca</option>
            <option value="revisionElectrica">
              Revisión de instalación eléctrica
            </option>
          </select>
        </div>
        <div className="flex flex-col items-center">
          <label className="font-bold my-2">
            Fecha de visita <span>*</span>
          </label>
          <input
            className="w-auto text-blue-900 text-center rounded-sm focus:outline-none"
            type="date"
            min={minDate}
            max={maxDate}
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="font-bold my-2">
            Nombre <span>*</span>
          </label>
          <input
            className="w-auto md:max-w-[300px] h-[40px] text-blue-900 rounded-sm focus:outline-none pl-2"
            type="text"
            placeholder="Introduce tu nombre"
            pattern="[a-z, A-Z]{3,40}"
            minLength={3}
            maxLength={40}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="font-bold my-2">
            Teléfono <span>*</span>
          </label>
          <input
            className="w-auto md:max-w-[300px] h-[40px] text-blue-900 rounded-sm focus:outline-none pl-2"
            type="tel"
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            placeholder="Télefono 10 digitos"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="font-bold my-2">
            E-mail <span>*</span>
          </label>
          <input
            className="w-auto md:max-w-[300px] h-[40px] text-blue-900 rounded-sm focus:outline-none pl-2"
            type="email"
            minLength={3}
            maxLength={50}
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            type="submit"
            className=" flex flex-row items-center mt-4 hover:bg-green-400 transition duration-500"
          >
            AGENDAR
            <AiOutlineSend className="ml-2" size={30} />
          </button>
          <p className="text-[12px] mt-2">*campos obligatorios</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
