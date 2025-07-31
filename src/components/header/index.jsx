import { Bookmark } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

 const Header=()=>{
    const {list} = useSelector((store)=>store.listReducer)
    return (
        <header className="mb-10 flex justify-between items-center">

            <Link to="/">

            <img className="max-w-[150px]" src="/logo1.png" alt="" />

            </Link>

            <Link to="/watch-list" className="flex gap-4 items-center hover:text-gray-300 transition">

            <div className="relative ">
                <Bookmark/>
                <span className="absolute right-[-13px] top-[-13px] bg-red-500 size-6 grid place-items-center text-sm font-semibold rounded-full">{list.length}</span>
            </div>
             İzleme Listesi
            </Link>
        
        </header>
    )
 }

 export default Header;