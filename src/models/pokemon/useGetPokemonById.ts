import { useQuery } from 'react-query';
import axiosService from '../../services/axiosService';

type TPokemonByIdProps = {
  id: number;
  options?: object;
};

export const useGetPokemonById = ({ id, options }: TPokemonByIdProps) => {
  async function fetch(idParam: number) {
    const { data } = await axiosService.get(`v2/pokemon/${idParam}`);
    return data;
  }

  return useQuery(['v2/pokemon', id], () => fetch(id), options);
};

export default useGetPokemonById;
