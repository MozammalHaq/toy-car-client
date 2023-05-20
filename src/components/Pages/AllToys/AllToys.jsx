import { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';


const AllToys = () => {
    const [toys, setToys] = useState([])
    console.log(toys)
    

    const url = 'http://localhost:5000/toys'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])

    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:my-20 md: py-15'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}
                            ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;