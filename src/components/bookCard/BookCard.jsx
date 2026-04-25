import Link from 'next/link'
import React from 'react'

function BookCard({ book }) {
    return (
        <div>

            <div className="card card-border bg-base-100 w-96 border">
                <div className="card-body border rounded-2xl">
                    <h2 className="card-title">{book.title} </h2>
                    <p>{book.author}</p>
                    <p>{book.description} </p>
                    <div className="card-actions justify-end">
                        <Link href={`/books/${book.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard