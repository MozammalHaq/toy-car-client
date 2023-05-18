

const Category = ({product}) => {
    const {id, name, price, rating, imageSrc} = product;
    return (
        <div className="card bg-base-100 shadow-xl overflow-hidden">
            <figure className="p-4"><img src={imageSrc} alt="Shoes" /></figure>
            <div className="card-body bg-blue-100">
                <h2 className="card-title">{name}</h2>
                <div className="text-2xl flex justify-between my-4">
                    <span>{rating}</span>
                    <span className="font-bold text-primary">Tk. {price}</span>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Category;