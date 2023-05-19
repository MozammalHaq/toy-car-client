import { useLoaderData } from 'react-router-dom'

const ToyDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <h2>Toy Details: {details.sellerEmail} </h2>
        </div>
    );
};

export default ToyDetails;