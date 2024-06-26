import { AxiosResponse } from 'axios';
import clienteAxios from './Axios';
import Pelicula from '../model/pelicula.model';


export const getAllPeliculas = async () => {
  try {
    const respuesta: AxiosResponse<any, any> = await clienteAxios.get('/api/peliculas',{headers: {Authorization:`Bearer ${sessionStorage.getItem('token')}`}})
    return respuesta.data;
  } catch (err) {
    throw new Error('Error consultando peliculas');
  }
}

export const deletePelicula = async (id:number) => {
  try {
    const respuesta: AxiosResponse<any, any> = await clienteAxios.delete('/api/peliculas/'+id);
    return respuesta.status;
  } catch (err) {
    throw new Error('Error consultando peliculas');
  }
}

export const patchPelicula = async (peliculaActualizada: Pelicula) => {
  try {
    const respuesta: AxiosResponse<any, any> = await clienteAxios.patch(`/api/peliculas/${peliculaActualizada.id}`,peliculaActualizada);
    return respuesta.data;
  } catch (err) {
    throw new Error('Error consultando peliculas');
  }
}