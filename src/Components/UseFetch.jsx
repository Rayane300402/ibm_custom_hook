import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState();
    useEffect(() => {
         fetch(url).then((res)=> res.json()).then((data)=> setData(data)).catch((error) => console.log(error)); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return [data];
}

export default UseFetch
