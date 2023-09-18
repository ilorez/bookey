import React from "react";
function BackBtn() {
    const backIcon = `<svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 3.79L14.5749 0.5L0 14.5L14.5749 28.5L18 25.21L6.87449 14.5L18 3.79Z" fill="#EBC289"/>
    </svg>`;
    return (
        <div>
            {/* onclick on this button will set IsSeaching false and make remove value of input */}
            <button className="flex items-center"><div dangerouslySetInnerHTML={{ __html: backIcon }} /></button>
        </div>
    )
}
export default BackBtn;