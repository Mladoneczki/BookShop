import { useContext } from "react"
import { KattContext } from "../context/KattContext"

export default function NavButton(props) {
  const {choose}=useContext(KattContext)
  
    return (
        <button id={props.id} onClick={()=>{choose(props.id)}}>{props.text}</button>
    )}