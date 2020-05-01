import React,{Component} from 'react';
import Layout from '../../components/layout';
import {Form,Input,Button,Message} from 'semantic-ui-react';
import committee from '../../ethereum/committee';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';


class ManufactureNew extends Component{
    state ={
        loading:false,
        errorMessage:'',
        uniqueId:null//I changed it from 0 to null
    };

    onSubmit=async (event)=>{

     event.preventDefault();
     this.setState({loading:true,errorMessage:''});
try{
     const accounts = await web3.eth.getAccounts();
     await committee.methods.createManufacture(this.state.uniqueId)
                    .send({
                        from : accounts[0]
                    });
                Router.pushRoute('/');

                }catch(err){
                    this.setState({errorMessage:err.message});
                }
                this.setState({loading:false});
    };



    render(){
        return(
            <Layout>
            <h3>Create a new manufacture!</h3>

            <Form onSubmit={this.onSubmit} 
            error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Unique Id</label>
                    <Input placeholder='Id proivided by committee'
                    value={this.state.uniqueId}
                    onChange={event=>
                    this.setState({uniqueId:event.target.value})}/>
                </Form.Field>

                <Message error header="Oops!" 
                content = {this.state.errorMessage}/>
                <Button
                loading={this.state.loading} primary>Create!</Button>
            </Form>
            </Layout>
        );
    }
}

export default ManufactureNew;