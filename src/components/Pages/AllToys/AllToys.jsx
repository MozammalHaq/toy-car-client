import { useEffect, useState } from 'react';


const AllToys = () => {
    const [toys, setToys] = useState([])
    console.log(toys)

    const url = 'http://localhost:5000/toys'
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
    },[url])

    return (
        <div>
            <h2>All Toys: {toys.length}</h2>
        </div>
    );
};

export default AllToys;