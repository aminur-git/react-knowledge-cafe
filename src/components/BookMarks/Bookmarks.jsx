import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {

    return (
        <div className="bg-[#1111110D] mt-6 rounded-lg p-8">
            <h2 className="text-2xl font-bold pb-4">Bookmarked Blogs : {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
            }         
        </div>
    );
};

export default Bookmarks;