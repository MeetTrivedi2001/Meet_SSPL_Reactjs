//first step is : npm install axios
import React from 'react';
import axios from'axios';
class ApiAxiosDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata:[] };
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            console.log(res.data);
            this.setState({ mydata: res.data});
        })
    }
    render() {
        return (
        <>
        <h2> AxiosDemo </h2>
            { this.state.mydata.map((v,i)=>{
                return(<>
                    <h3>{v.title} </h3>
                    <img src ={v.image}width={125}/> 
                    <p> price: ${v.price}</p>
                    </>)
            })}
        </>           
        );
    }
}
export default ApiAxiosDemo;