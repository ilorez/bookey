import React from "react"
import { Rating, Button } from "@material-tailwind/react";
import BookCard from "./components/bookCard";
import ReviewCard from "./components/reviewCard";
import './book.css'
export default function Book() {
    const addReviewIcon = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5756 0.293246C25.2722 0.126704 26.8925 0.884545 28.4229 2.41497C29.9533 3.9454 30.7111 5.56563 30.5446 7.26227C30.386 8.87848 29.4173 10.1756 28.4229 11.17L27.023 12.5699C27.0063 12.5866 26.9894 12.6027 26.9722 12.6185C26.5933 13.0386 25.9954 13.2322 25.4143 13.0675C22.5134 12.2456 20.11 10.2978 18.7033 7.71703L11.3306 15.0897C11.2813 15.1391 11.1689 15.2852 11.0564 15.509C10.9438 15.7332 10.8947 15.9086 10.8851 15.9772L10.8844 15.9821L10.8844 15.9821L10.3111 19.9952L10.3102 20.001C10.2642 20.3148 10.3619 20.4235 10.3834 20.445C10.4077 20.4692 10.526 20.5695 10.8472 20.5261L10.8504 20.5256L14.8557 19.9534C14.9168 19.9447 15.0897 19.8965 15.3188 19.7814C15.5378 19.6713 15.6933 19.5577 15.7601 19.4953L19.9878 15.2675L20.9611 14.2942C21.56 13.6953 22.531 13.6953 23.1299 14.2942C23.7288 14.8931 23.7288 15.8641 23.1299 16.463L22.1566 17.4363L17.9169 21.676L17.8989 21.6936C17.5488 22.0325 17.1071 22.3153 16.6962 22.5218C16.2888 22.7266 15.7884 22.9184 15.2895 22.9897L11.2764 23.563L11.2686 23.5641L11.2686 23.5641C10.1389 23.7195 9.01798 23.4138 8.21908 22.6181C7.41808 21.8204 7.10901 20.6972 7.27519 19.5589L7.27567 19.5556L7.84742 15.5533L7.84782 15.5505C7.91856 15.0467 8.10912 14.5433 8.31603 14.1316C8.52354 13.7187 8.81117 13.2716 9.16182 12.921L10.2462 14.0054L9.16182 12.921L18.1505 3.93236C18.1584 3.92423 18.1665 3.91617 18.1746 3.9082L19.6679 2.41497C20.6622 1.42058 21.9594 0.451892 23.5756 0.293246ZM21.0035 5.41681C21.8112 7.42113 23.4058 9.01694 25.4225 9.83283L26.2541 9.00123C27.0729 8.1824 27.4375 7.51964 27.4922 6.96265C27.539 6.4861 27.3902 5.71981 26.2541 4.58374C25.118 3.44766 24.3518 3.29889 23.8752 3.34567C23.3182 3.40035 22.6555 3.7649 21.8366 4.58374L21.0035 5.41681ZM11.3663 0.605875C7.88192 0.605875 5.04391 1.29336 3.1157 3.22157C1.18748 5.14979 0.5 7.98779 0.5 11.4722C0.5 12.3191 1.18659 13.0057 2.03355 13.0057C2.8805 13.0057 3.5671 12.3191 3.5671 11.4722C3.5671 8.2903 4.21286 6.46194 5.28446 5.39034C6.35606 4.31874 8.18443 3.67297 11.3663 3.67297H14.0328C14.8798 3.67297 15.5663 2.98638 15.5663 2.13942C15.5663 1.29247 14.8798 0.605875 14.0328 0.605875H11.3663ZM30.2321 16.8052C30.2321 15.9582 29.5455 15.2716 28.6986 15.2716C27.8516 15.2716 27.165 15.9582 27.165 16.8052V19.4717C27.165 22.6536 26.5192 24.4819 25.4476 25.5535C24.376 26.6251 22.5477 27.2709 19.3658 27.2709H11.3663C8.18443 27.2709 6.35606 26.6251 5.28446 25.5535C4.21286 24.4819 3.5671 22.6536 3.5671 19.4717V17.4452C3.5671 16.5982 2.8805 15.9116 2.03355 15.9116C1.18659 15.9116 0.5 16.5982 0.5 17.4452V19.4717C0.5 22.9561 1.18748 25.7941 3.1157 27.7223C5.04391 29.6505 7.88192 30.338 11.3663 30.338H19.3658C22.8502 30.338 25.6882 29.6505 27.6164 27.7223C29.5446 25.7941 30.2321 22.9561 30.2321 19.4717V16.8052Z" fill="#DADADA"/>
    </svg>`;
    const downloadIcon = `<svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7087 1.83606C10.7087 1.00763 10.0371 0.33606 9.20866 0.33606C8.38024 0.33606 7.70866 1.00763 7.70866 1.83606V7.94799C7.70866 8.77641 8.38024 9.44799 9.20866 9.44799C10.0371 9.44799 10.7087 8.77641 10.7087 7.94799V1.83606ZM9.20866 11.8044C10.0371 11.8044 10.7087 12.4759 10.7087 13.3044V20.6135L14.8454 15.6253C15.3742 14.9876 16.3198 14.8994 16.9575 15.4282C17.5952 15.9571 17.6834 16.9027 17.1546 17.5404L10.3629 25.7301C10.0779 26.0737 9.65472 26.2726 9.2083 26.2726C8.76187 26.2726 8.33865 26.0737 8.05367 25.7301L1.26198 17.5404C0.733158 16.9027 0.821402 15.9571 1.45908 15.4282C2.09676 14.8994 3.0424 14.9876 3.57123 15.6253L7.70866 20.6144V13.3044C7.70866 12.4759 8.38024 11.8044 9.20866 11.8044Z" fill="#DADADA"/>
    </svg>`;
    return (
        <main className="p-4 flex flex-col gap-8">
            <div className="flex flex-col w-fit items-center">
                <div key="book-img-infos" className="flex flex-col items-center md:flex-row md:justify-center w-full gap-5">
                    <div key="book-img"><img src="/src/assets/bookimg.png" alt="bookFace" className="w-auto  md:w-auto lg:w-auto rounded-md" /></div>
                    <div key="book-infos" className="flex flex-col items-center">
                        <p className="text-bookey-gray-800">Rich Dad Poor Dad</p>
                        <p className="text-bookey-red-800">Robert T.Kyosaki</p>
                        <p className="text-bookey-gray-500">besnuess</p>
                        <ul className="flex book-info">
                            <li><p>Pages <span>300</span></p></li>
                            <li><p>Language <span>ENG</span></p></li>
                            <li><p>Size <span>3MB</span></p></li>
                            <li><p>Downloads <span>3M</span></p></li>
                            <li><p>Type <span>PDF</span></p></li>
                        </ul>
                        <div className="flex items-center flex-wrap justify-center">
                            <div>
                                <span className="text-bookey-other-blue font-light text-sm">(3.0)</span>
                                <Rating value={3} readonly ratedColor="red" />
                            </div>
                            <div>
                                <div className="flex reviews-rate"><p className="flex flex-col items-center"> Reviews <span className="text-bookey-red-800">(300K)</span></p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div key="book-overveiw" className="flex flex-col w-full mt-bookey-4 sm:4/5 px-2 md:4/5 lg:w-3/5 ">
                    <h3 className="font-bold">Overview</h3>
                    <p className="flex px-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum consequuntur autem iusto debitis earum officia sequi tempore quasi, nam asperiores, perferendis necessitatibus veritatis ea animi minima illo quos error.
                    </p>
                </div>
            </div>
            <div key="book-actions " className="flex h-fit justify-around">
                <Button size="sm" color="blue" className="flex items-center gap-2 text-bookey-gray-100">
                    <div dangerouslySetInnerHTML={{ __html: addReviewIcon }} />
                    Add Review
                </Button>
                <Button size="sm" color="red" className="flex items-center gap-2 text-bookey-gray-100">
                    <div dangerouslySetInnerHTML={{ __html: downloadIcon }} />
                    Download
                </Button>
                {/* <button className="buttons-style bg-bookey-other-aqua"> <div dangerouslySetInnerHTML={{ __html: addReviewIcon }} /> Add Review </button>
                <button className="buttons-style bg-bookey-red-800"> <div dangerouslySetInnerHTML={{ __html: downloadIcon }} /> Download </button> */}
            </div>
            <div key="related-books">
                <h3 className="font-bold my-2">Related books</h3>
                <div className="flex flex-wrap gap-4 ml-bookey-1-2">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
            <div key="author-books">
                <h3 className="font-bold my-2">Other books by Robert T.Kyosaki</h3>
                <div className="flex flex-wrap gap-4 ml-bookey-1-2">
                    <BookCard />
                    <BookCard />
                </div>
            </div>
            <div key="reviews-section" >
                <div className="flex justify-between items-center">
                    <h4> 12 Reviews </h4>
                    <Button size="sm" color="blue" className="flex items-center gap-2 text-bookey-gray-100">
                        <div dangerouslySetInnerHTML={{ __html: addReviewIcon }} />
                        Add Review
                    </Button>
                </div>
                <hr className="m-4 bg-bookey-gray-900" />
                <div key="reviews" className="flex flex-col gap-3 w-fit">

                    <ReviewCard key="1" />
                    <ReviewCard key="2" />
                    <ReviewCard key="3" />
                    <ReviewCard key="4" />
                    <ReviewCard key="5" />

                </div>
            </div>
        </main >
    )
}