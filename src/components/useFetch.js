import { useState, useEffect } from "react";


const useFetch = (url)=>{
    const [data,setData] = useState([]); //En este hook se guarda toda la info que vamos a llamar desde fetch
    const [error,setError] = useState(null) //Estado para guardar los errores
    const [isPending,setIsPending] = useState(true);// estado para conducionar un mensaje de CARGANDO... cuando se llama a la info


    useEffect(()=>{
        fetch(url)
        .then(res =>{//respuesta a la promesa fetch
            if(!res.ok ){//se comprueba si la respuesta no tiene la propiedad OK
                throw Error("Imposible realizar una conexión(fetch) con la base de datos")//error personalizado en caso de que no exista ok dentro de los datos
            }
            return res.json() //primera promesa recibe las respuesta y la convierte a un ubjeto JS gracias a json()
        })
        .then(data =>{ //segunda promesa recibe el json()
            setData(data) //ingreso de datos dentro del hook
            setIsPending(false)//se actualiza el estado de CARGANDO en caso de que el error sea false
            setError(false)// Se cambia a false para no renderizar el contenido del error
        })
        .catch( err =>{
            setIsPending(false)//se desactiva el CARGANDO... en caso de que exista un error
            setError(err.message)//se acutializa el error con el mensaje y se renderiza
            setProducts([])//se actualiza el estado de los datos de products para que no se mapee nada 
        })
    },[url]);

    return {data,error,isPending};
}

export default useFetch;