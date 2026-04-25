import React from 'react'

async function BooksDetailsPage({ params }) {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:4000/books/${bookId}`);
    const book = await res.json();
    console.log(book)
    const { title, description, author, price, rating } = book;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

                <div className="p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-3">{title}</h1>
                        <p className="text-gray-600 mb-2">✍️ {author}</p>
                        <p className="text-gray-500 mb-4">{description}</p>

                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-yellow-500 font-semibold">
                                ⭐ {rating}
                            </span>
                            <span className="text-xl font-bold text-green-600">
                                ৳ {price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksDetailsPage