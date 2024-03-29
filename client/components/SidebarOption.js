
const style = {
    wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-xl mr-4`,
    textGeneral: `font-medium pl-2`,
    textActive: `font-bold pl-2`,
  }


function SidebarOption({ text, Icon, isActive, setSelected, redirect}) {
    return(
        <div className={style.wrapper}
        onClick={() => {
            setSelected(text)
        }}
        >
            <div classame={style.iconContainer}>
                <Icon />
            </div>
            <div className={`${isActive ? style.textActive : style.textGeneral}`}>
                {text}
            </div>
        </div>
    )
}

export default SidebarOption