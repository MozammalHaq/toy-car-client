import { useLoaderData } from 'react-router-dom'

const ToyDetails = () => {
    const details = useLoaderData();
    console.log(details)
    const { description, imageUrl, price, quantity, rating, sellerEmail, sellerName, subCategory, toyName, id, } = details;
    return (
        <div className='bg-blue-50 py-20'>
            <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                    <img className="w-16 h-16 rounded-full mr-4" src={imageUrl} alt={toyName} />
                    <h2 className="text-3xl font-bold">{toyName}</h2>
                </div>
                <div className="mb-6">
                    <p className="text-gray-600 mb-2">ID: {id}</p>
                    <p className="text-gray-600 mb-2">Category: {subCategory}</p>
                    <p className="text-gray-600 mb-2">Seller Name: {sellerName}</p>
                    <p className="text-gray-600 mb-2">Seller Email: {sellerEmail}</p>
                </div>
                <div>
                    <p className="text-gray-600 mb-2">Description: {description}</p>
                    <p className="text-gray-600 mb-2">Price: ${price}</p>
                    <p className="text-gray-600 mb-2">Quantity: {quantity}</p>
                    <p className="text-gray-600 mb-2">Ratings: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;