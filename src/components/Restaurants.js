import React,{Component} from 'react';
import {Table,Button,ButtonToolbar} from 'react-bootstrap';
import {AddRestModal} from './AddRestModal';
import { Input } from 'antd';


const { Search } = Input;



export class Restaurants extends Component{

    constructor(props){
        super(props);
        this.state={rest:[],addModalShow:false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44395/api/Restaurants')
        .then(response => response.json())
        .then(data => {
            this.setState({rest:data})
        })
    }
    componentDidUpdate(){
        this.refreshList();
    }

    render(){

        const {rest} = this.state;
        let addModalClose =() => this.setState({addModalShow:false})
        return(
            <div>
                <h2 style={{paddingTop:30}}>Restaurant Adı Giriniz</h2>
                <br />
                <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                <Table style={{height:100,width:500}}>
                <thead>
                    <tr>
                        <th><h3>RestaurantID</h3></th>
                        <th><h3>RestaurantName</h3></th>
                        <th><h3>RestaurantAdress</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {rest.map(res=>
                        <tr key = {res.RestaurantID}>
                        <td>{res.RestaurantID}</td>
                        <td>{res.RestaurantName}</td>
                        <td>{res.RestaurantAdress}</td>
                        </tr>
                    )}
                </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant="primary" onClick={()=> this.setState({addModalShow:true})}>
                        Add Restaurant
                    </Button>
                    <AddRestModal show={this.state.addModalShow} onHide={addModalClose}/>
                </ButtonToolbar>
                
            </div>
        )
    }
}