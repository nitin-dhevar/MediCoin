import React,{Component} from 'react';
import Layout from '../../components/layout';
import {Form,Input,Button,Message} from 'semantic-ui-react';
import manufacture from '../../ethereum/manufacture';
import web3 from '../../ethereum/web3';
//import {Router} from '../../routes';


class MedicineVerify extends Component{
    state ={
        loading:false,
        errorMessage:'',
        verify:0,//I changed it from 0 to null
        status:false
    };

    onSubmit=async (event)=>{

     event.preventDefault();
     this.setState({loading:true,errorMessage:''});
try{
     const accounts = await web3.eth.getAccounts();
     const val = await manufacture.methods.verifyMedicine(this.state.verify)
                    .call();
                // Router.pushRoute('/');
    this.setState({status:val});
    {if(!this.state.status) {this.setState({errorMessage:"Counterfeit Medicine"});} 
     else{ this.setState({errorMessage:"Genuine Medicine"});}}
    
                }catch(err){
                    console.log(err.message);
                    this.setState({errorMessage:err.message});
                    console.log("error");
                }
                this.setState({loading:false});
                
    };



    render(){
        return(
            <Layout>
            <h2>Get your medicine verified!</h2>

            <Form onSubmit={this.onSubmit} 
            error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Medicine Id</label>
                    <Input placeholder='Number'
                    value={this.state.verify}
                    onChange={event=>
                    this.setState({verify:event.target.value})}/>
                </Form.Field>

                <Message error header="Result!" 
                content = {this.state.errorMessage}/>
                <Button
                loading={this.state.loading} primary>Verify!</Button>
            </Form>
            </Layout>
        );
    }
}

export default MedicineVerify;