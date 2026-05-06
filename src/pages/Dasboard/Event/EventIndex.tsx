import { Link } from "react-router-dom";

export default function EventIndex() {
    return(
        <div>
            <h1 className="mb-6">Event</h1>
            <Link to="/dashboard/event/create" className="bg-pink-200 rounded-2xl p-2">Tambah event</Link>
        </div>
    );

};