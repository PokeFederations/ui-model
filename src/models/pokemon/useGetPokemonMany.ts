import { useQuery } from 'react-query';
import axiosService from '../../services/axiosService';

type TParams = {
    limit: number;
    page?: number;
};

export const useGetPokemonMany = (params?: TParams, options?: object) => {
  const { limit = 1, page = 1 } = params;
  async function fetch() {
    const { data } = await axiosService.get(`v2/pokemon`, {
      params: {
        limit,
        offset: limit * page - 1,
      },
    });
    return data;
  }

  return useQuery(['v2/pokemon'], () => fetch(), options);
};

export default useGetPokemonMany;
