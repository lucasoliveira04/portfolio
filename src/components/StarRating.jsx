import { Star } from "lucide-react";
import { useState } from "react";

function StarRating({ totalStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div 
            className="flex space-x-2"
            onMouseLeave={() => setHover(0)} 
        >
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <Star
                        key={starValue}
                        size={32}
                        className="cursor-pointer transition-all duration-700 ease-linear"
                        fill={starValue <= (hover || rating) ? "#FFD700" : "none"}
                        stroke={starValue <= (hover || rating) ? "#FFD700" : "#666"}
                        strokeWidth={2}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                    />
                );
            })}
        </div>
    );
}

export default StarRating;
