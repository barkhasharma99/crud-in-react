  
import home3 from '../assets/image/home3.jpg'
import { Box, makeStyles, Typography } from '@material-ui/core'
  
const usestyle = makeStyles ({
  comp : {
      margin:50
  }
})



const Codeforinterview = () => {

    const classes = usestyle
      return (
         <Box className={ classes.comp}>
             {/* <Typography  style={{margin:25 ,marginBottom:'20'}} variant='h4'>
                 Code For Interview
             </Typography> */}
             <Box>
               <img style={{ width:'100%'}} className={classes.image} src={home3} /> 
             </Box>   
         </Box> 
        )
  }
  
  export default Codeforinterview