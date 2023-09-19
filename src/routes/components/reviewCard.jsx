import { Typography, Avatar, Rating } from "@material-tailwind/react";

function ReviewCard() {
    return (
        <div className="flex flex-col bg-bookey-red-100 rounded-md p-2 w-full">
            <div className="flex flex-col items-center ssm:items-start ssm:flex-row items-top gap-3">
                <Avatar
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image"
                    size="lg"
                />
                <div className="flex flex-col mt-1 " >
                    <div className="flex items-center gap-2">
                        <Typography variant="h6">
                            Ilorez
                        </Typography>

                        <Rating value={4} readonly />
                    </div>

                    <Typography color="gray" className="mb-4 font-normal">
                        2023/08/25
                    </Typography>
                </div>
            </div>
            <Typography variant="paragraph" color="blue-gray" className="mb-6 font-medium">
                &quot;This is an excellent product, the documentation is excellent and
                helped me get things done more efficiently.&quot;
            </Typography>
        </div>
    );
}




// import React from "react";
// function ReviewCard() {
//     return (

//     )
// }
export default ReviewCard;