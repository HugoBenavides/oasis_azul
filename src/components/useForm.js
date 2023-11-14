import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

const useForm = () => {
  //Hooks para usar en el form y firebase
  const [service, setService] = useState("");
  const [formDate, setFormDate] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

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
      setError(err.message);
    }
    setService("Agua verde/Rescate de agua");
    setFormDate("");
    setName("");
    setTel("");
    setEmail("");
  };

  return {
    service,
    formDate,
    name,
    tel,
    email,
    error,
    setService,
    setFormDate,
    setName,
    setTel,
    setEmail,
    handleSubmit
  };
};

export default useForm;
