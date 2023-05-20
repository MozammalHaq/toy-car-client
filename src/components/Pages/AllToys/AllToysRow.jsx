import { Link } from "react-router-dom";

const AllToysRow = ({toy}) => {
    const {_id, subCategory, price} = toy;
    return (
        <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>12/16/2020</td>
            <td><Link to={`/toyDetails/${_id}`} className="btn btn-primary"> View Details </Link></td>
        </tr>
    );
};

export default AllToysRow;