import { TableBody, TableCell, TableHead, TableRow ,Table , makeStyles} from "@material-ui/core";
import { useEffect  , useState } from "react";
import { getUser } from "../service/api";

const useStyle = makeStyles({
    table : {
        width:'90%'
    },
    thead :{
        ' & > *' : {
            background : '#000000 ',
            color : '#ffffff',
            fontSize: '20px'
    },
    row : {
        ' & > * ' : {
            fontSize : 20
        }
    } 
    }
})


const Alluser = () => {
 
     const [users , setUsers] = useState([]);
     const classes = useStyle();

    useEffect ( () => {
        getAllUser();
    },[])
   
   const getAllUser = async () => {
       const response = await getUser();
       console.log(response.data);
       setUsers(response.data); 
   }
   
   
   
   
   
    return (
 
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={ classes.thead}>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {
               users.map(users => (
                <TableRow className={classes.row }  style={{ fontSize:20}} >
                <TableCell>{users.id}</TableCell>
                <TableCell>{users.name}</TableCell>
                <TableCell>{users.email}</TableCell>
                <TableCell>{users.phone}</TableCell>
            </TableRow>
               )) 
               }
            </TableBody>
        </Table>
    )
}
export default Alluser;