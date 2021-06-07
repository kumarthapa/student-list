import Home from './component/Home';
import { makeStyles } from '@material-ui/core/styles';
import StudentList from "./component/StudentList"
import {AuthProvider} from "./component/context/StudentContext"

const useStyles = makeStyles((theme) => ({
  root: {
      width: '30%',
      backgroundColor: 'cornflowerblue',
      padding: '2rem',
      margin: '50px auto',
      borderRadius: '5px',
      boxShadow: '2px 12px 75px -14px black',
      [theme.breakpoints.down('sm')]: {
          width: '90%',
          padding: '0.5rem',
      },
    }
}));
function App() {
  const classes = useStyles();
  return (
    <AuthProvider>
      <div style={{ backgroundColor: 'darkslategrey', width: '100%', height: '100vh', padding: '100px 0' }}>
      <div className={classes.root}>
        <Home/>
        <StudentList/>
      </div>
      </div>
      
    </AuthProvider>
    
  );
}

export default App;
