'use client'

import { useState } from "react"

export default function List(){
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    let [count, setCount] = useState([0, 0, 0])
    return (
        <div>
            <h2 className="title">Products</h2>
            {
                products.map((a, i)=>{
                    return(
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} alt={a} className="food-img"/>
                            <h4>{a} $40</h4>
                            <span> {count[i]} </span>
                            <button onClick={()=>{
                                let tmp = [...count]
                                tmp[i]++
                                setCount(tmp)
                                }}>+</button>
                            <button onClick={()=>{
                                let tmp = [...count]
                                tmp[i]--
                                setCount(tmp)}}>-</button>
                        </div>
                    )
                })
            }
        </div>
    )
} 