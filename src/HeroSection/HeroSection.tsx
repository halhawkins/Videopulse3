import { SyntheticEvent } from "react";
import settings from "../settings";
import './HeroSection.css';

interface IHeroProps {
    type: string;
    title: string;
    // description: string;
    id: number;
    image: string; // url to the image
}

function HeroComponent ( props: IHeroProps): React.ReactElement<IHeroProps> {
    const handleClick = (e:SyntheticEvent) => {
        e.preventDefault();
        window.location.href = `?page=details&itemID=${props.id}&itemType=${props.type}`;
    }
    return (
        <div onClick={(e) => handleClick(e)} className="hero" style={{backgroundImage: `url(${settings.backdrop_base}${props.image})`, backgroundSize: "cover", height: "200px"}}>
            {/* <img className="hero-logo" src={vpLogo} /> */}
            <div className="hero-title">{/*greeting*/}<br/><h4>{props.title}</h4> ...plus many others</div>
        </div>
    )
}

export default HeroComponent;