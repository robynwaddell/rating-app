import { useState } from 'react';
import Star from './Star';

function Starrating() {
    const [rating, setRating] = useState(0);
    const handleClick = (ratingValue) => setRating(ratingValue);

    const getRatingText = () => {
        switch (rating) {
          case 1:
            return 'Bad';
          case 2:
            return 'Okay';
          case 3:
            return 'Good';
          case 4:
            return 'Great';
          case 5:
            return 'Excellent';
          default:
            return 'Rate this';
        }
    }

  return (
    <div className='star-rating'>
        <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} selected={i < rating} onClick={() => handleClick(i + 1)} /> // this section I had to get help from Chat GPT
        ))}
        </div>
        <h2>{getRatingText()}</h2>
    </div>
  )
}

export default Starrating