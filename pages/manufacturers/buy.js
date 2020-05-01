import React,{Component} from 'react';
import Layout from '../../components/layout';
import {Form,Input,Button,Message} from 'semantic-ui-react';
import manufacture from '../../ethereum/manufacture';
import web3 from '../../ethereum/web3';
//import {Router} from '../../routes';


class MedicineBuy extends Component{
    state ={
        loading:false,
        errorMessage:'',
        id:0,//I changed it from 0 to null
        status:false,
        quantity:0
    };

    onSubmit=async (event)=>{

     event.preventDefault();
     this.setState({loading:true,errorMessage:''});
try{
     const accounts = await web3.eth.getAccounts();
     const val = await manufacture.methods.buyMedicines(this.state.id,this.state.quantity).call();
     const value = await manufacture.methods.buyMedicines(this.state.id,this.state.quantity).send({
        from : accounts[0]
    });
    
    
                // Router.pushRoute('/');
    this.setState({status:val});
    {if(!this.state.status) {this.setState({errorMessage:"Not enough Stock"});} 
     else{ this.setState({errorMessage:"Medicines Purchased!"});}}

                }catch(err){
                    this.setState({errorMessage:err.message});
                }
                this.setState({loading:false});
               
    };



    render(){
        return(
            <Layout>
            <h2>Buy Medicines!</h2>

            <Form onSubmit={this.onSubmit} 
            error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Medicine Id</label>
                    <Input placeholder='Unique Id'
                    value={this.state.id}
                    onChange={event=>
                    this.setState({id:event.target.value})}/>
                    <label>Quantity</label>
                    <Input placeholder='Count'
                    value={this.state.quantity}
                    onChange={event=>
                    this.setState({quantity:event.target.value})}/>
                </Form.Field>

                <Message error header="" 
                content = {this.state.errorMessage}/>
                <Button
                loading={this.state.loading} primary>Buy!</Button>
            </Form>
            </Layout>
        );
    }
}

export default MedicineBuy;