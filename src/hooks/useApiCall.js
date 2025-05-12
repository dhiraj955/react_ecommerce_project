import { useEffect, useState } from "react";

export function useApiCall(fetchFUnction){
    const[data, setData] = useState();
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState();

    async function fetchWithStates(){
        try {
            setLoading(true)
            const res = await fetchFUnction();
            setData(res.data);
            setLoading(false)
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchWithStates();
    },[]);
    return {data, loading, error}
}