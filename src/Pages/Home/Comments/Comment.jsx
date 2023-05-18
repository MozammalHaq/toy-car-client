

const Comment = ({ name, comment, imageSrc }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full mr-4" src={imageSrc} alt={name} />
                <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-gray-600">Client</p>
                </div>
            </div>
            <p className="text-gray-700">{comment}</p>
        </div>
    );
};

export default Comment;