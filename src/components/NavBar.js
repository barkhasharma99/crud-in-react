import  { makeStyles,AppBar, Toolbar   } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const usestyle = makeStyles({
    header :{
        backgroundColor : '#111111'
    },
    tabs :{
        color:'#ffffff',
        textDecoration : 'none',
        marginRight : '20px'

    }
})
 

const Navbar  = () => {
const classes = usestyle();
    return (
  <>
  <AppBar className={classes.header}  position="static">
      <Toolbar  >
          <NavLink  exact className={classes.tabs} to="./" >  Code For Interview </NavLink>
          <NavLink   exact className={classes.tabs} to="all" >  All User </NavLink>
          <NavLink  exact className={classes.tabs} to="add" >  Add User  </NavLink>
      </Toolbar>
  </AppBar>
  </>
)
}
export default Navbar;