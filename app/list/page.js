export default function List(){
    let products = ['Tomatoes', 'Pasta', 'Coconut']

    return (
        <div>
            <h2 className="title">Products</h2>
            
            {
                products.map((a, i)=>{
                    return(
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} alt={a} className="food-img"/>
                            <h4>{a} $40</h4>
                        </div>
                    )
                })
            }
        </div>
    )
} 