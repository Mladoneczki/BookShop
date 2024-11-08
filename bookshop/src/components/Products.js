import Product from "./Product"

export default function Products(props){
   
    return(
        <>{
        props.list.map((book,i)=>{
            return <Product book={book} index={i} key={i} />
        })
}</>
    )
}