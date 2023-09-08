import { useEffect, useState, useRef } from 'react'
import './Trending.css';
import settings from '../settings';
import HeroComponent from '../HeroSection/HeroSection';
import ShowCard from '../ShowCard/ShowCard';
import PaginationControl from '../PaginationControl/PaginationControl';
import useQueryParams from '../hooks/UseParams';

interface TrendingProps {
    p: number;
}

interface ITrendingItem {
    backdrop_path: string;
    media_name: string;
    media_type: string;
    overview: string;
    poster_path: string;
    tmdb_id: number;
    vote_average: number
}

export default function Trending (props: TrendingProps) {
    const [firstItem, setFirstItem] = useState<ITrendingItem | null>(null); // Initialize firstItem as state
    const {p} = props
    const [results, setResults] = useState<Array<ITrendingItem | null>>([]); // Initialize
    let totalPages = useRef(0);
    let totalResults = useRef(0);
    // const page = p.p = 
    const pg = Number(useQueryParams().p)
    const page = p !== pg ? pg : p;

    useEffect   (() => {
        console.log("trending page", page)
        fetch(`${settings.api_url}api/trending?p=${page}`)
            .then(res => res.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    setResults(data.results);  // Set results from array to state
                    setFirstItem(data.results[0]);  // Set first item from array to state
                    console.log("results",results);
                    totalPages.current = data.total_pages;
                    totalResults.current = data.total_results;
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [page]); // Add dependency array to re-run fetch when `props.p` changes

    return (
        <div className='flex flex-col bg-yellow-500'>
            {firstItem ? ( // Check if firstItem is not null
            <HeroComponent image={firstItem.backdrop_path} title={firstItem.media_name} type={firstItem.media_type} id={firstItem.tmdb_id}/>
            ) : (
                <p>Loading...</p>
            )}
            <div className='h-screen flex flex-wrap justify-evenly overflow-y-auto'>
                <PaginationControl currentPage={p} totalPages={totalPages.current} url={'/trending'} totalResults={totalResults.current}/>
            {results && results.length > 0? ( // Check if results is not null
            results.map((item,index) => {
                return (
                <ShowCard key={index} poster={item?.poster_path && item?.poster_path !== null ? item?.poster_path : ''} 
                    title={item?.media_name && item?.media_name !== null ? item?.media_name : ''} 
                    type={item?.media_type && item?.media_type !== null ? item?.media_type : ''} 
                    id={item?.tmdb_id && item?.tmdb_id !== null ? item?.tmdb_id : 0}  
                    description={item?.overview && item?.overview !== null ? item?.overview : '' } />
                )
            })
            ): <></>}
            </div>
        </div>
    );
}