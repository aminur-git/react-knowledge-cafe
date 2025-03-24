import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'
import SpentTime from './components/spent-time/SpentTime'

function App() {

const [bookmarks, setBookmarks] = useState([])
const [readTime, setReadTime] = useState(0)

const handleReadTime = (time) => {
  const newTime = readTime + time
  setReadTime(newTime) 
}


const handleBookMark = (blog) => {
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
}

  return (
    <>
      <Header></Header>
    <div className='md:flex max-w-7xl mx-auto '>
      <main className='md:flex gap-4'>
        <Blogs handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blogs>
        <div className='m-4 md:m-0 md:w-1/3 pt-8'>
        <SpentTime readTime={readTime}></SpentTime>             
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </main>
    </div>
    </>
  )
}

export default App
