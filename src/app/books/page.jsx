import BookCard from '@/components/bookCard/BookCard';
import React from 'react'

async function BooksPage() {
  const res = await fetch("http://localhost:4000/books");
  const data = await res.json();
  return (
    <div>
      <h1>Books:{data.length} </h1>

      <div className='grid grid-cols-3 gap-10'>
        {
          data.map(item => <BookCard key={item.id} book={item} />)
        }
      </div>
    </div>
  )
}

export default BooksPage