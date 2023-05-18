import GalleryCard from "./GalleryCard";


const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        rating: 4.5,
        imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/61Xuv0TiIRL._AC_UL600_SR600,600_.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        rating: 4.2,
        imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/61Xuv0TiIRL._AC_UL600_SR600,600_.jpg',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 49.99,
        rating: 4.7,
        imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/61Xuv0TiIRL._AC_UL600_SR600,600_.jpg',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 29.99,
        rating: 4.5,
        imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/61Xuv0TiIRL._AC_UL600_SR600,600_.jpg',
    },
    {
        id: 5,
        name: 'Product 5',
        price: 39.99,
        rating: 4.2,
        imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/61Xuv0TiIRL._AC_UL600_SR600,600_.jpg',
    },
    {
        id: 6,
        name: 'Product 6',
        price: 49.99,
        rating: 4.7,
        imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/61Xuv0TiIRL._AC_UL600_SR600,600_.jpg',
    }
]


const Gallerys = () => {
    return (
        <section className="py-20 bg-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-semibold text-center mb-8 text-primary">Toy Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        products.map(product => <GalleryCard
                            key={product.id}
                            product={product}
                        ></GalleryCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Gallerys;