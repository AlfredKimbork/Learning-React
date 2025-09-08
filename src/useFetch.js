import {useState, useEffect} from "react"

const useFetch = url => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    const handleDelete = id => {
        const newData = data.filter(data => data.id !== id);
        setData(newData);
    }

    useEffect(() => {
        setTimeout(() => {
         fetch(url)
             .then(res => {
                 if(!res.ok) {
                    throw Error("couldn't fetch the data for targeted resource..");
                 }
                 return res.json();
             })
             .then(data => {
                 setData(data);
                 setIsPending(false);
                 setError(null);
             })
             .catch(err => {
                 setError(err.message);
                 setIsPending(false);
             })
        }, 500);
     }, [url]);

     return {data, isPending, error, handleDelete}
}

export default useFetch