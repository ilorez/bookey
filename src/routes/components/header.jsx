import React from "react";
import BgHeader from "./bgHeader";
import SearchBar from "./searchBar";
import HeaderNavBar from "./headerNavBar";
import HeaderInfo from "./headerInfo";
function Header() {


    return (
        <header className="flex flex-col text-primary-one">
            <div className="flex flex-col bg-bookey-red-800 pb-4">
                <HeaderNavBar />
                <SearchBar />
                <HeaderInfo />
            </div >
            <div className="w-full overflow-hidden relative bottom-1 ">
                <BgHeader />
            </div>
        </header >
    )
}

export default Header;