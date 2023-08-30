import './Search.scss'
import { FaSearch } from "react-icons/fa";
function Search (){
    return (
        <div className="search">
                <span className='search__icon'><FaSearch/></span>
                <input type='text' placeholder="Search" className='search__input'/>
            </div>
    )
}
export default Search;