import React from "react";
import BgHeader from "./bgHeader";
function Header() {
    const homeIcon = `<svg width="30" height="auto" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0.5H0V20.6176V38.5H5.7V20.6176H0L19 0.5ZM38 20.6176V0.5H19L38 20.6176ZM32.3 38.5H38V20.6176H32.3V38.5ZM22.8 38.5V25.0882H15.2V38.5H22.8Z" fill="#DC533B"/>
    </svg>    
    `;
    const archIcon = `<svg width="30" height="auto" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.3 7.59998H0.5V34.2C0.5 36.29 2.21 38 4.3 38H30.9V34.2H4.3V7.59998Z" fill="#DC533B"/>
    <path d="M34.7 0H11.9C9.80998 0 8.09998 1.71 8.09998 3.8V26.6C8.09998 28.69 9.80998 30.4 11.9 30.4H34.7C36.79 30.4 38.5 28.69 38.5 26.6V3.8C38.5 1.71 36.79 0 34.7 0ZM34.7 19L29.95 16.15L25.2 19V3.8H34.7V19Z" fill="#DC533B"/>
    </svg>`;
    const searchIcon = `<svg width="25" height="auto" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.0143 22.0126H23.4334L22.8731 21.4723C24.8342 19.191 26.0149 16.2293 26.0149 13.0074C26.0149 5.82333 20.1915 0 13.0074 0C5.82333 0 0 5.82333 0 13.0074C0 20.1915 5.82333 26.0149 13.0074 26.0149C16.2293 26.0149 19.191 24.8342 21.4723 22.8731L22.0126 23.4334V25.0143L32.0183 35L35 32.0183L25.0143 22.0126ZM13.0074 22.0126C8.02459 22.0126 4.00229 17.9903 4.00229 13.0074C4.00229 8.02459 8.02459 4.00229 13.0074 4.00229C17.9903 4.00229 22.0126 8.02459 22.0126 13.0074C22.0126 17.9903 17.9903 22.0126 13.0074 22.0126Z" fill="#D14228"/>
    </svg>
    `;
    return (
        <header class="flex flex-col text-primary-one">
            <div class="flex flex-col bg-bookey-red-800">
                < div key="header-nav" class="flex justify-between items-center text-bookey-red-800 bg-bookey-red-300 mx-bookey-4 my-bookey-2 rounded-lg px-bookey-4 py-bookey-1" >
                    <div key="brand-container " >
                        <p class="font-bookey font-semibold tracking-wide">Boo<span class="text-primary-one ">K</span>ey</p>
                    </div>
                    <div key="nav-list" class="flex gap-8">
                        <div key="home-item">
                            <div dangerouslySetInnerHTML={{ __html: homeIcon }} />
                            {/* <p>Home</p> */}
                        </div>
                        <div key="archives-item">
                            <div dangerouslySetInnerHTML={{ __html: archIcon }} />
                            {/* <p>Archives</p> */}
                        </div>
                    </div>
                </div >
                <div key='serach-bar' class="flex justify-center mx-bookey-4 my-bookey-2">
                    <div class="flex w-fit md:w-3/5 justify-between bg-bookey-red-200 px-bookey-2 py-bookey-1 rounded-lg">
                        <p class="absolute"><div dangerouslySetInnerHTML={{ __html: searchIcon }} /></p>
                        <input type="text" placeholder="seach" class="pl-9 bg-bookey-red-200 text-bookey-red-900 w-2/5 sm:w-auto" />
                        <button class="bg-bookey-red-800 rounded-md px-bookey-1-2 ">serach</button>
                    </div>
                </div>
                <div key='header-infos' class="flex justify-around ">
                    <p>3.4K books </p>
                    <p>3M Downloads </p>
                </div>
            </div >
            <div class="w-full overflow-hidden ">
                <BgHeader />
            </div>
        </header >
    )
}

export default Header;