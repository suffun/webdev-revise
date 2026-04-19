import { useState } from 'react';
export function LikeButton() {
    let [liked, isLiked] = useState(false);
    let toggleLike = () => {
        isLiked(!liked);
    }
    return(
        <div>
             <p onClick={toggleLike}>
                {liked ? (<i class="fa-solid fa-heart"></i>) : (<i class="fa-regular fa-heart"></i>)}

                
            </p>
        </div>
       
    );
}