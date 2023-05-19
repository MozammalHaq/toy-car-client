import Comment from "./Comment";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const comments = [
    {
        id: 1,
        name: "John Doe",
        description: "I'm really impressed with the service. The team went above and beyond to meet my expectations.",
        imageSrc: "https://images-na.ssl-images-amazon.com/images/I/61Xuv0TiIRL._AC_UL600_SR600,600_.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        description: "Excellent work! The quality of the product is outstanding. Highly recommended.",
        imageSrc: "https://images-na.ssl-images-amazon.com/images/I/61Xuv0TiIRL._AC_UL600_SR600,600_.jpg",
    },
    {
        id: 3,
        name: "Mike Johnson",
        description: "Great experience with this company. Prompt communication and professional service.",
        imageSrc: "https://images-na.ssl-images-amazon.com/images/I/61Xuv0TiIRL._AC_UL600_SR600,600_.jpg",
    }
];


const Comments = () => {
    return (
        <div className="bg-blue-200 py-20">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">Client Comments</h2>
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="w-full carousel">
                {comments.map(comment => <Comment
                    key={comment.id}
                    comment={comment}
                />
                )}
            </div>
        </div>
    );
};

export default Comments;