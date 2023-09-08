import { ReactElement } from "react";
interface IMenuItemProps {
    active?: boolean;
    callback?: () => void;
    text?: string;
    icon?: ReactElement;
    indicator?: ReactElement;
    children?: ReactElement;
    subMenu?: IMenuItemProps[];
}

function MenuComponent(props: IMenuItemProps) {
    const { active, callback, text, icon, indicator, children, subMenu } = props;
    console.log(subMenu);
    return (
        <ol className={props.active? "menu-item active" : "menu-item"} onClick={props.callback}>
            {(subMenu && subMenu.length > 0) && subMenu.map((item, index) => {
                return <MenuItem key={index} {...item}>{item.children}</MenuItem>
            })}
        </ol>
    )
}

function MenuItem(props: IMenuItemProps) {
    console.log(props);
    let callback = props.callback !== undefined? props.callback : () => { };
    return (
        <div onClick={callback} className='flex flex-row w-full py-2 bg-gray-900 hover:bg-gray-800 justify-right' style={{borderBottom: "1px solid #333"}}>
            <div className='basis-1/3'></div> {/**gutters */}
            <div className='justify-right'>{props.children}</div>
            <div className='basis-1/3'></div>{/**gutters */}
        </div>
    )
}
export { MenuItem }
export type { IMenuItemProps }
export default MenuComponent