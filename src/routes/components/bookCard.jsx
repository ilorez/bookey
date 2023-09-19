import Stars from "./stars";
import { Rating } from "@material-tailwind/react";
function BookCard() {
    return (
        <div className="flex flex-col items-center w-fit bg-bookey-red-100 rounded-t-lg  basis-100 p-bookey-2">
            <div key="book-card-img"><img src="/src/assets/bookimg.png" alt="bookFace" /></div>
            <div key='book-card-info' className="flex flex-col items-center w-fit">
                <p key="book-title" className="text-bookey-gray-700">Rich Dad Poor Dad</p>
                <p key="book-author-name" className="text-bookey-red-700">Robert T.Kyosaki</p>
                <div key="book-rate" className="flex  items-center w-fit">
                    <span className="text-bookey-other-blue text-xs">(300K)</span>
                    <div key="stars"> <Rating value={3} ratedColor="red" readonly /> </div>
                </div>
            </div>
        </div>
    )
}
export default BookCard;