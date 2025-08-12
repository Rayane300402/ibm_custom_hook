import { useEffect, useState } from "react";

const useJsonFetch = (url) => {
    const [data, setData] = useState();
    useEffect(() => {
        if(!url) return alert("Please provide a valid URL");
        fetch(url)
        .then((data) => setData(data))
        .catch((error) => { 
            console.log(error);
            setData(null);
        });
    }, [url]);
    return [data];
}

export default useJsonFetch;
