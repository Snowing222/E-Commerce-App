import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({


  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    textDecoration: 'none',
    
},


  media: {
    height: "320px",
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  detailRoot:{
    paddingTop: "88px",

  },

  imageDetail:{
    width: '100%',
    height: '576px',
    marginLeft: '80px',
    marginTop: '20px'
  },
  imageContent:{
    paddingTop:"35px",
    paddingLeft:"80px",
    paddingRight: '80px',
    fontSize: 'larger',
    justifyContent: 'space-between',
    fontFamily: 'Playfair Display'
  },

  cardContent: {
    textDecoration: 'none',
    display: 'block',
    // justifyContent: 'space-between',
    marginTop: '0.875rem',
    marginLeft:'0.3125rem',
    verticalAlign: "baseline",
    fontFamily: 'Playfair Display',
  },
  wrapper: {
    justifyContent: 'center'
  },

  button:{
    margin: "0 auto",
    alignItems: 'center',
    backgroundColor: "pink"

  },

  beforeGrid:{
    paddingTop: "80px",
    paddingLeft: "30px",
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontFamily: 'Playfair Display',
    textDecoration: 'none'
  }
}));