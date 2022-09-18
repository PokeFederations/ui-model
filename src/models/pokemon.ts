import { useQuery } from 'react-query';
import axiosService from '../services/axiosService';

type TPokemonByIdProps = {
    id: number;
    options?: any;
}

export const getPokemonById = ({ id, options }: TPokemonByIdProps) => {
    async function fetch() {
        const { data } = await axiosService.get(`v2/pokemon/${id}`);
        return data;
    };

    return useQuery(
        ["v2/pokemon", id],
        () => fetch(),
        options,
    );
}

export default getPokemonById;
