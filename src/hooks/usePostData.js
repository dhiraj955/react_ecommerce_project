import axios from "axios";
import { useState } from "react";

export function usePostData(){
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const postData = async (url, payload, config = {}) => {
        setLoading(true);
        setError(false);
        try {
            const response = await axios.post(url, payload, config);
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false);
        }
    };
    return {data, loading, error, postData}
}