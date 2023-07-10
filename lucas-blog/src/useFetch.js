import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [ data, setData ] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res=>{
                console.log(res); // to see what properties "res" obj has
                if (!res.ok) {
                    throw Error("Could not fetch correct data for requested resource.");
                }
                return res.json()
            })
            .then((data)=>{
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch((err)=>{
                setError(err.message);
                setPending(false);
            });
        }, 1000)
    }, [url]);

    return { data, pending, error };
}

export default useFetch;