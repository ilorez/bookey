import Footer from "./components/footer"
import React from "react"
import BookCard from "./components/bookCard"


export default function Home() {
    return (
        <main className="mt-bookey-1-2 flex flex-wrap gap-3 justify-evenly">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
        </main>
    )
}