import { useState } from "react";
import { Link } from "react-router-dom";
interface IPaginationControlProps {
    totalPages: number;
    totalResults: number;
    currentPage: number;
    url: string;
}
const PaginationControl = (props: IPaginationControlProps) => {
    const [currentPage, setCurrentPage] = useState(props.currentPage);
    const {totalPages, totalResults, url} = props;
    let pages = []
    let startPage = 1;

    const visiblePages = 15;
    const lowestMidPoint = Math.floor(visiblePages / 2);
    const highestMidPoint = totalPages - lowestMidPoint;

    let endPage = visiblePages;

    if (currentPage <= lowestMidPoint) {
        startPage = 1;
        endPage = visiblePages;
        for (let i = 1; i <= endPage; i++) {
            pages.push(i);
        }
    }
    return (
        <div className="basis-full flex flex-row justify-evenly">
            {pages.map((page) => {
                return (
                    <Link key={page} to={`${url}?p=${page}`}>
                        {page}
                    </Link>
                );
            })}
        </div>
    )
}

export default PaginationControl