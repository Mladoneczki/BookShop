import Product from "./Product"

export default function Products(props){
    function click(adat){
        props.click(adat)
    }
    return(
        <>{
        props.list.map((book,i)=>{
            return <Product book={book} index={i} key={i} click={click}/>
        })
}</>
    )
}