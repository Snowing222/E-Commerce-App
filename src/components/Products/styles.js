
import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    paddingTop: "15px"
  },
  root: {
    flexGrow: 1,
  },

  banner:{
     overflow: theme.hidden,
    //  backgroundImage: `url(${"https://www.dior.com/couture/var/dior/storage/images/17836643/36-eng-US/cover_lesparfums5_1440_1200.jpg"})`,
    //  backgroundSize: theme.cover,
    //  backgroundPosition: theme.center,
    //  top: "100px",
     height: "100%",
     width: "100%",
     display: "block"
     
    
  },

  bannerinner: {
    height: "80%",
    width:"100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex"
  },

  left: {
    flex: "3%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: "grid",
    placeItems: "center",
    color: "white"
  },

  center: {
    flex: "94%",
    height: "100%",
    display: 'grid',
    placeItems: "center",
  },

  right: {
    flex: "3%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: "grid",
    placeItems: "center",
    color: "white"
  },

  caption:{
    bottom: 0,
    width: "100%",
    paddingRight: '20px',
    textAlign: "center",
    fontSize: '20px',
    fontFamily: 'Playfair Display'
}
}))