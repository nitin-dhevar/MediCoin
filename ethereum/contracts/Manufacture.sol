pragma solidity ^0.4.17;

contract Committee{
    
    mapping(uint => bool) private manufactureId;
    address[] private deployedManufactures;
    
    function Committee() public{
        manufactureId[123]=true;
        manufactureId[234]=true;
        manufactureId[345]=true;        
    }
    
    function createManufacture(uint id) public{
        require(manufactureId[id]);
        address newManufacture = new Manufacture(msg.sender);
        deployedManufactures.push(newManufacture);
    } 
    
    function getDeployedManufacturers() public view returns(address[]){
        return deployedManufactures;
    }
    
}


contract Manufacture{

    address private manager;
    
    struct MedicineData {
        string desc;
        string dosage;
        string mrp;
        string expiry;
        uint quantity;
        string name;
                    }
                    
    mapping(uint => bool) private verified;
    mapping(uint => MedicineData) private details;
    MedicineData[] private medicines;
    
    function Manufacture(address tempmanager) public{
        manager = tempmanager;
    }
    
    function addMedicines(uint id,string desc,string dosage,string mrp,string expiry,uint quantity,string name) public{
        require(msg.sender==manager);
        MedicineData memory newMedicine = MedicineData({
          desc:desc,
          dosage:dosage,
          mrp:mrp,
          expiry:expiry,
          quantity:quantity,
          name:name
        });
        medicines.push(newMedicine);
        verified[id]= true;
        details[id] = newMedicine;
    }
    
    function verifyMedicine(uint id) public view returns(bool){
        bool status=verified[id];
        return status;
    }
    
    function detailsOfMedicines(uint id) public view returns(string,string,string,string,uint,string){
        require(verified[id]);
        MedicineData storage temp = details[id];
        return (temp.desc,temp.dosage,temp.mrp,temp.expiry,temp.quantity,temp.name);
    }
    
    function buyMedicines(uint id,uint tempQuantity) public returns(bool){
        require(verified[id]);
        uint temp = details[id].quantity;
        if(temp>=tempQuantity){
        details[id].quantity=temp-tempQuantity;
        return true;}
        else return false;
        
    }
    
}
