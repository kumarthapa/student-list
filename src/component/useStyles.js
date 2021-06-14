import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
      Cardcontainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "red",
      justifyContent: "center",
    },
    startBtn: {
      margin: 20,
      padding: "10 20px",
    },

    root: {
      maxWidth: 545,
      margin: 10,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    mediaheadline: {
      padding: "20px",
    },
    avatar: {
      backgroundColor: "white",
      borderRadius: 5,
      padding: "4px 25px",
      color: "red",
    },
  }));
  export default useStyles;