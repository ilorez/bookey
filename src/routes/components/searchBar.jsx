function SearchBar(props) {
    const searchIcon = `<svg width="25" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.0143 22.0126H23.4334L22.8731 21.4723C24.8342 19.191 26.0149 16.2293 26.0149 13.0074C26.0149 5.82333 20.1915 0 13.0074 0C5.82333 0 0 5.82333 0 13.0074C0 20.1915 5.82333 26.0149 13.0074 26.0149C16.2293 26.0149 19.191 24.8342 21.4723 22.8731L22.0126 23.4334V25.0143L32.0183 35L35 32.0183L25.0143 22.0126ZM13.0074 22.0126C8.02459 22.0126 4.00229 17.9903 4.00229 13.0074C4.00229 8.02459 8.02459 4.00229 13.0074 4.00229C17.9903 4.00229 22.0126 8.02459 22.0126 13.0074C22.0126 17.9903 17.9903 22.0126 13.0074 22.0126Z" fill="#D14228"/>
    </svg>
    `;
    return (
        <div key='serach-bar' className="flex justify-center mx-bookey-4 my-bookey-2   w-4/5 lg:w-3/5">
            <div className="flex w-full  justify-between bg-bookey-red-200 px-bookey-2 py-bookey-1 rounded-lg">
                <div className="absolute"><div dangerouslySetInnerHTML={{ __html: searchIcon }} /></div>
                <input type="text" placeholder="seach" name="seach" className="pl-9 bg-bookey-red-200 text-bookey-red-900 w-2/5 sm:w-auto" />
                {!props.searching && <button onClick={() => props.func(true)} className="bg-bookey-red-800 rounded-md px-bookey-1-2 ">serach</button>}
            </div>
        </div>
    )
}
export default SearchBar;