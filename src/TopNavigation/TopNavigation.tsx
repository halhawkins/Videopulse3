import { Link } from "react-router-dom"

const TopNavigation = () => {
    return (
        <div className="flex absolute w-10/12 bg-transparent">
            <div className="bg-black text-white p-2 justify-self-start mx-4">Trending</div>
            <div className="bg-black text-white p-2 justify-self-start mx-4">Popular Movies</div>
            <div className="bg-black text-white p-2 justify-self-start mx-4">Popular TV</div>
            <div className="bg-black text-white p-2 justify-self-start mx-4">Explore</div>
        </div>
    )
}

export default TopNavigation