export default function NavButton(props) {
    function choose() {
        console.log("katt")
      props.choose(props.id);
    }
  
    return (
        <button id={props.id} onClick={()=>{choose()}}>{props.text}</button>
    )}