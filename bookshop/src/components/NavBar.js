import NavButton from "./NavButton"


export default function NavBar(props){
    
    return(
        <>{
        props.list.map((button,i)=>{
            return <NavButton text={button.text} id={button.id} key={i} />
        })
}</>
    )
}