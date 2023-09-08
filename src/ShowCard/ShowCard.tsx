import settings from "../settings";

interface IShowCardProps {
    id: number;
    poster: string;
    title: string;
    description: string;
    type: string;
}

const ShowCard = (props: IShowCardProps) => {
    return (
        <div className="show-card w-1/6 bg-white p-2 m-2 2xl:w-1/5 hover:border-red-500 border-solid border-2">
            <img src={`${settings.profile_base}${props.poster}`} alt={props.description} />
            <h3 className="text-lg font-bold">{props.title}</h3>
            <p>{props.description.substring(0,64)+'...'}</p>
        </div>
    )
}
export default ShowCard;