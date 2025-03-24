export default function ({bookmark}) {
const {id, title} = bookmark

return(
    <div className="bg-white p-4 rounded-lg mb-4">
        <h2>
            {title}
        </h2>
    </div>
)

}
