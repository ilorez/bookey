import React from 'react';
import { Rating } from "@material-tailwind/react";


export default function Stars() {
    return (
        <Rating onChange={(value) => console.log(value)} />
    );
}