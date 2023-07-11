import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [ data, setData ] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();
                 
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
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
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setError(err.message);
                    setPending(false);
                }
            });
        }, 200)
        return () =>  abortController.abort(); // abort fetch if change requested before load completes
    }, [url]);

        return { data, pending, error };
    }


export default useFetch;