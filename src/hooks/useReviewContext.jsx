import { useContext } from 'react';
import { ReviewContext } from '../services/context/review.context';

const useReviewContext = () => {
    return useContext(ReviewContext)
};

export default useReviewContext;