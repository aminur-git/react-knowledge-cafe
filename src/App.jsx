import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

const [bookmars, setBookmarks] = useState([]);

const handleBookMark = blog => {
   console.log('bookmark adding soon')
}

  return (
    <>
      <Header></Header>
    <div className='md:flex max-w-7xl mx-auto '>
      <main className='md:flex'>
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </div>
    </>
  )
}

export default App
