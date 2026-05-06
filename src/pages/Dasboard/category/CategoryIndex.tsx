import { Link } from "react-router-dom";

export default function CategoryIndex(){
    return(
        <div>
            <h1>Category</h1>

            <Link to="/dashboard/category/create" className="bg-pink-200 rounded-2xl p-2">Tambah Kategori</Link>
        </div>
    )
}