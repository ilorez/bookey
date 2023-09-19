import { useState, React } from "react";
import BgHeader from "./bgHeader";
import SearchBar from "./searchBar";
import HeaderNavBar from "./headerNavBar";
import HeaderInfo from "./headerInfo";
import BackBtn from "./backBtn";

function Header() {
    const [isSeaching, setIsSeaching] = useState(false)
    const isBack = () => {
        setIsSeaching(false);
    }
    // console.log(isSeaching)
    return (
        <header className="flex flex-col text-primary-one">
            <div className="flex flex-col bg-bookey-red-800 pb-4">
                {!isSeaching && <HeaderNavBar />}
                <div className="flex justify-center gap-3 items-center px-3">
                    {isSeaching && <BackBtn func={isBack} />} {/* on click on back button cancel searching */}
                    <SearchBar searching={isSeaching} func={setIsSeaching} />
                </div>
                {!isSeaching && <HeaderInfo />}
            </div >
            <div className="w-full overflow-hidden relative bottom-1 ">
                <BgHeader />
            </div>
        </header >
    )
}

export default Header;