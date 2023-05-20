import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Category = ({ toy }) => {
    const { _id, toyName, price, rating, imageUrl } = toy;
    const { user } = useContext(AuthContext);

    const handleDetail = () => {
        { !user && alert("Please, First Login"); }
    }
    return (
        <div className="card bg-base-100 shadow-xl overflow-hidden">
            <figure className="p-4"><img src={imageUrl} alt="Shoes" /></figure>
            <div className="card-body bg-blue-100">
                <h2 className="card-title">{toyName}</h2>
                <div className="text-2xl flex justify-between my-4">
                    <span>{rating}</span>
                    <span className="font-bold text-primary">Tk. {price}</span>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleDetail} className="btn btn-primary">
                        <Link to={`/toyDetails/${_id}`} className="btn btn-primary"> View Details </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Category;