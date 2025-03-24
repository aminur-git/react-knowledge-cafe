import Bookmark from "../bookmark/Bookmark";
import PropTypes from "prop-types";

function Bookmarks ({bookmarks}){
    // console.log(bookmarks)
    return(
        <div>
            <div className="bg-[#1111110D] mt-6 rounded-lg p-8">
            <h2 className="text-2xl font-bold pb-4">Bookmarked Blogs : {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark> )
            }         
        </div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}


export default Bookmarks;