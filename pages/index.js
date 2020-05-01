import react , {Component} from 'react';
import committee from '../ethereum/committee';
import { Card,Button } from 'semantic-ui-react';
import Layout from '../components/layout'
import {Link} from '../routes';

class ManufactureIndex extends Component{

    static async getInitialProps(){
        const manufacturers = await committee.methods.getDeployedManufacturers().call();
        return {manufacturers}
    }
    renderManufacturers(){
        const items=this.props.manufacturers.map(address =>{
            return{
                header :address,
                description:(
                    <Link route={`/manufacturers/${address}`}>
                    <a>
                       Manufacture  
                    </a>

                    </Link>
                ),
                fluid:true
            };
        });

        return <Card.Group items={items} />;
    }

    
    render(){
        return(
        <Layout>
        <div>
        <h2>All Manufacturers</h2>

        <Link route="/manufacturers/new">
            <a>
         <Button floated="right" content="New Manufacture"
        icon="plus square"
        primary />
            </a>
        </Link>

        {this.renderManufacturers()}
        
        </div>
        </Layout>
        );
    }
}
export default ManufactureIndex;
