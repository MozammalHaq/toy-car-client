



const AddToys = () => {
    return (
        <div className="bg-blue-100 py-10">
            <div className="max-w-md mx-auto shadow-xl p-5 rounded-2xl">
                <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Add a Toy</h2>
                <form>
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
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="name"
                                    type="text"
                                    placeholder="Enter toy car name"
                                    required
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
                                    required
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
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subCategory">
                                    Sub-category
                                </label>
                                <input
                                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="subCategory"
                                    type="text"
                                    placeholder="Enter sub-category"
                                    required
                                />
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
                                    required
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
                                    required
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
                                    required
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
                            required
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