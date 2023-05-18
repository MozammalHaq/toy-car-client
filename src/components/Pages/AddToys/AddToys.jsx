



const AddToys = () => {

    const handleAdd = (event) => {
        event.preventDefault();

        const form = event.target;
        // console.log(event.target.value)
        const imageUrl = form.imageUrl.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        console.log({ imageUrl, toyName, sellerName, sellerEmail, subCategory, price, rating, quantity, description });

    }

    return (
        <div className="bg-blue-100 py-10">
            <div className="max-w-md mx-auto shadow-xl p-5 rounded-2xl">
                <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Add a Toy</h2>
                <form onSubmit={handleAdd}>
                    <div className="flex gap-4">
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                                    Image URL
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="imageUrl"
                                    type="text"
                                    placeholder="Enter image URL"
                                    name="imageUrl"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toyName">
                                    Name toy
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="toyName"
                                    type="text"
                                    placeholder="Enter toy car name"
                                    name="toyName"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerName">
                                    Seller Name
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="sellerName"
                                    type="text"
                                    placeholder="Enter seller name"
                                    name="sellerName"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerEmail">
                                    Seller Email
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="sellerEmail"
                                    type="email"
                                    placeholder="Enter seller email"
                                    name="sellerEmail"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subCategory">
                                    Sub-category
                                </label>
                                <select
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="subCategory"
                                    type="text"
                                    placeholder="Enter sub-category"
                                    name="subCategory"
                                >
                                    <option value="">Racing</option>
                                    <option value="">Tour</option>
                                    <option value="">Transformer</option>
                                    <option value="">Family</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    Price
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="price"
                                    type="number"
                                    placeholder="Enter price"
                                    name="price"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                    Rating
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="rating"
                                    type="number"
                                    placeholder="Enter rating"
                                    name="rating"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                                    Available Quantity
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="quantity"
                                    type="number"
                                    placeholder="Enter available quantity"
                                    name="quantity"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Detail Description
                        </label>
                        <textarea
                            className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full h-32 resize-none"
                            id="description"
                            placeholder="Enter detail description"
                            name="description"
                        ></textarea>
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddToys;