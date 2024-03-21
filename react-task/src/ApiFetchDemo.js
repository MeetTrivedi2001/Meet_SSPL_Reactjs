import React from 'react';
class  FetchDemo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={mydata:[]};
    }
    componentDidMount()
    {
        fetch("https://fakestoreapi.com/products")
        .then (res => res.json())
        .then(res => {
            console.table(res);
            this.setState({mydata:res})
        })
    }
    render()
    {
        return (
            <>
                  <h2> FetchDemo </h2>
                       { this.state.mydata.map((v,i)=>{
                            return(<>
                            <h3>{v.title} </h3>
                            <img src={v.image} width={125}/>
                            <p> price: ${v.price}</p>
                             </>)  
                      })}  
            </>
        );
    }
}
export default FetchDemo;