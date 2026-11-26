const Props=(obj)=>{
    console.log(obj)
    return(
        <div>
            {/* {<h1>this is Props data</h1>} */}
            
            {/* {<h2>{obj.num}</h2>} */}
            {
                obj.arr.map((ele,ind)=>{
                    return(
                        <div key={ind}>
                            <h2>{ele*ele}</h2>
                        </div>
                    )
                })
}
            
        </div>
    )

}
export default Props