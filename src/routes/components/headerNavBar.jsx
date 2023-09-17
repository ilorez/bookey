function HeaderNavBar() {
    const homeIcon = `<svg width="30" height="100%" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0.5H0V20.6176V38.5H5.7V20.6176H0L19 0.5ZM38 20.6176V0.5H19L38 20.6176ZM32.3 38.5H38V20.6176H32.3V38.5ZM22.8 38.5V25.0882H15.2V38.5H22.8Z" fill="#DC533B"/>
    </svg>    
    `;
    const archIcon = `<svg width="30" height="100%" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.3 7.59998H0.5V34.2C0.5 36.29 2.21 38 4.3 38H30.9V34.2H4.3V7.59998Z" fill="#DC533B"/>
    <path d="M34.7 0H11.9C9.80998 0 8.09998 1.71 8.09998 3.8V26.6C8.09998 28.69 9.80998 30.4 11.9 30.4H34.7C36.79 30.4 38.5 28.69 38.5 26.6V3.8C38.5 1.71 36.79 0 34.7 0ZM34.7 19L29.95 16.15L25.2 19V3.8H34.7V19Z" fill="#DC533B"/>
    </svg>`;
    return (
        < div key="header-nav" className="flex justify-between items-center text-bookey-red-800 bg-bookey-red-300 mx-bookey-4 my-bookey-2 rounded-lg px-bookey-4 py-bookey-1" >
            <div key="brand-container " >
                <p className="font-bookey font-semibold tracking-wide">Boo<span className="text-primary-one ">K</span>ey</p>
            </div>
            <div key="nav-list" className="flex gap-8">
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
    )
}
export default HeaderNavBar;