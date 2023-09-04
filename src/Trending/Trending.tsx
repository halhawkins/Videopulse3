import { useEffect, useState } from 'react'
import './Trending.css';
import settings from '../settings';
import HeroComponent from '../HeroSection/HeroSection';
import useQueryParams from '../hooks/UseParams';
import ShowCard from '../ShowCard/ShowCard';

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
    const p = useQueryParams()
    const [results, setResults] = useState<Array<ITrendingItem | null>>([]); // Initialize
    // const page = p.p = 

    useEffect   (() => {
        fetch(`${settings.api_url}api/trending?p=${props.p}`)
            .then(res => res.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    setResults(data.results);  // Set results from array to state
                    setFirstItem(data.results[0]);  // Set first item from array to state
                    console.log("results",results);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [props.p]); // Add dependency array to re-run fetch when `props.p` changes

    return (
        <div className='flex flex-col bg-yellow-500'>
            {firstItem ? ( // Check if firstItem is not null
            <HeroComponent image={firstItem.poster_path} title={firstItem.media_name} type={firstItem.media_type} id={firstItem.tmdb_id}/>
            ) : (
                <p>Loading...</p>
            )}
            <div className='h-screen flex flex-wrap justify-evenly overflow-y-auto'>
            {results && results.length > 0? ( // Check if results is not null
            results.map(item => {
                return (
                <ShowCard poster={item?.poster_path && item?.poster_path !== null ? item?.poster_path : ''} 
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