import style from './SearchBar.module.scss'

export const SearchBar = (props : { isActive: boolean }) => {
    return (
        <div className={props.isActive ? style.active : "hidden"}>
            <input type="text" className="p-4 w-full border-b" placeholder="SEARCH FOR" />
        </div>
    )
}