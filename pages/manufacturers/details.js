import React,{Component} from 'react';
import Layout from '../../components/layout';
import {Form,Input,Button,Message, Card} from 'semantic-ui-react';
import manufacture from '../../ethereum/manufacture';
import web3 from '../../ethereum/web3';
//import {Router} from '../../routes';


class MedicineDetails extends Component{
    state ={
        loading:false,
        errorMessage:'',
        id:'',//I changed it from 0 to null
        desc:'',
        dosage:'',
        mrp:'',
        expiry:'',
        quantity:0,
        name:'',
        complete:false
    };
    reset(){
        this.setState({desc:'',dosage:'',mrp:'',expiry:'',quantity:'',name:''});
    }
    renderCards(){
        
        const items = [
            {
                header:'Name  :  '+this.state.name
                // +'\n'+'Expiry  :  '+this.state.expiry,
                // meta:this.state.mrp,
                // description:this.state.expiry
            },{
                header:'Expiry  :  '+this.state.expiry
            },{
                header:'Description  :  '+this.state.desc
            },{
                header:'Dosage  :  '+this.state.dosage
            },{
                header:'Mrp  :  '+this.state.mrp
            },{
                header:'Quantity  :  '+this.state.quantity
            }
        ];

        return <Card.Group items ={items}/>;

    }


    onSubmit=async (event)=>{

     event.preventDefault();
     this.setState({loading:true,errorMessage:''});
try{
     const accounts = await web3.eth.getAccounts();
     const val = await manufacture.methods.detailsOfMedicines(this.state.id).call();
                // Router.pushRoute('/');
    this.setState({desc:val[0],dosage:val[1],mrp:val[2],expiry:val[3],quantity:val[4],name:val[5]});
                }catch(err){
                    this.setState({errorMessage:err.message});
                }
                this.setState({loading:false,complete:true});
               
    };


   

    render(){
        return(
            <Layout>
            <h2>Details Of Medicine</h2>

            <Form onSubmit={this.onSubmit} 
            error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Medicine Id</label>
                    <Input placeholder='Number'
                    value={this.state.id}
                    onChange={event=>
                    this.setState({id:event.target.value})}/>
                </Form.Field>

                <Message error header="Oops!" 
                content = {this.state.errorMessage}/>
                <Button
                loading={this.state.loading} primary>Fetch!</Button>
            </Form>
           
            {this.renderCards()} 

            </Layout>
        );
    }
}

export default MedicineDetails;