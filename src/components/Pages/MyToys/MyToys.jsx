import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ToyRow from './ToyRow';


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState();
    console.log(toys)

    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [url])

    return (
        <div>
            <h2 className="text-6xl">My Toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-red-500">Delete</th>
                            <th>Toy Image</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys?.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            // handleDelete={handleDelete}
                            // handleBookingConfirm={handleBookingConfirm}
                            ></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;