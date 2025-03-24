import Bookmarks from "../BookMarks/Bookmarks"

 function Bookmark ({bookmark}) {
const {title} = bookmark
console.log(title)

return(
    <div className="bg-white p-4 rounded-lg mb-4">
        <h2>
            {title}
        </h2>
    </div>
)

}

export default Bookmark ;