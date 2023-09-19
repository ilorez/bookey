import Footer from "./components/footer"
import Header from "./components/header"
import React from "react"
import BookCard from "./components/bookCard"
import { Outlet } from "react-router-dom"

export default function Root() {
    return (
        <div className="flex flex-col justify-between h-full bg-bookey-red-300">
            <Header />
            {/* <main className="mt-bookey-1-2 flex flex-wrap gap-3 justify-evenly">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </main> */}
            <Outlet />
            <Footer />
        </div>
    )
}
