import React ,{Component} from 'react';
import Layout from '../../components/layout';
import Manufacture from '../../ethereum/manufacture';

class ManufactureShow extends Component{
    static async getInitialProps(props){
        //const manufacture = Manufacture(props.query.address);

// const summary = await manufacture.methods.
//                       .getsummary().call();
        return {};
    }

    render(){
        return (
        <Layout>
            <h3>Manufature Details</h3>
        </Layout>)
    }
}

export default ManufactureShow;