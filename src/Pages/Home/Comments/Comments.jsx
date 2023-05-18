import Comment from "./Comment";

const comments = [
    {
        id: 1,
        name: "John Doe",
        comment: "I'm really impressed with the service. The team went above and beyond to meet my expectations.",
        imageSrc: "/path/to/avatar1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        comment: "Excellent work! The quality of the product is outstanding. Highly recommended.",
        imageSrc: "/path/to/avatar2.jpg",
    },
    {
        id: 3,
        name: "Mike Johnson",
        comment: "Great experience with this company. Prompt communication and professional service.",
        imageSrc: "/path/to/avatar3.jpg",
    }
];


const Comments = () => {
    return (
        <div>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    name={comment.name}
                    comment={comment.comment}
                    imageSrc={comment.imageSrc}
                />
            ))}
        </div>
    );
};

export default Comments;