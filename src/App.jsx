import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'
import SpentTime from './components/spent-time/SpentTime'

function App() {

const [bookmarks, setBookmarks] = useState([])
const handleBookMark = (blog) => {
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
}

  return (
    <>
      <Header></Header>
    <div className='md:flex max-w-7xl mx-auto '>
      <main className='md:flex'>
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <div className='m-4 md:m-0 md:w-1/3 pt-8'>
        <SpentTime></SpentTime>             
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </main>
    </div>
    </>
  )
}

export default App
