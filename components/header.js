import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes'

export default()=>{
    return(
        <Menu style={{ marginTop:'15px'}}>
           <Link route="/">
               <a className="item">
                MediCoin
               </a>           
           </Link>
            <Menu.Menu position="right">
            {/* <Link route="/">
               <a className="item">
                Manufacturers
               </a>           
           </Link> */}
           <Link route="/manufacturers/verify">
               <a className="item">
                Verify 
               </a>           
           </Link>
           <Link route="/manufacturers/details">
               <a className="item">
                Details
               </a>           
           </Link>
           <Link route="/manufacturers/buy">
               <a className="item">
                Buy
               </a>           
           </Link>

            </Menu.Menu>
        </Menu>
    )
}