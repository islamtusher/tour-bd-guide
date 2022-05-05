import { useEffect, useState } from "react"

const useSserviceDetails = (id) => {
    const [details, setDetails] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])

    return [details, setDetails]
}
export default useSserviceDetails