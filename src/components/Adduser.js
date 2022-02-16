import { Button, FormControl, FormGroup, Input, InputLabel  , makeStyles, Typography } from "@material-ui/core";
import { setUsers , useState } from "react";


const useStyle = makeStyles({
    container : {
        width :'50%',
        margin: ' 5% 0 0 25%',
        ' & > *' : {
            margin: 20 
        }



    }
})
const initialvalues ={
    name : '',
    email  : '',
    phone : '',
     
}


  
const Adduser = () => {

    const [users , setUsers] = useState(initialvalues );
    const { name , email, phone}= users;
    const classes = useStyle();
    return (
       <FormGroup className={ classes.container}>
           <Typography variant="h4"> ADD User</Typography>
           <FormControl>
               <InputLabel>S no.</InputLabel>
               <Input />
           </FormControl>
           <FormControl>
               <InputLabel>Name</InputLabel>
               <Input />
           </FormControl>
           <FormControl>
               <InputLabel>Email</InputLabel>
               <Input />
           </FormControl>
           <FormControl>
               <InputLabel>Phone</InputLabel>
               <Input />
           </FormControl>
           <Button variant="contained" color="primary">ADD USER</Button>
       </FormGroup>
       
    )
}
export default Adduser;