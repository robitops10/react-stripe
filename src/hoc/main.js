
import makeStyles from '@material-ui/core/styles/makeStyles'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles(() => ({
  boxWrapper: {
    marginBottom: "55px",
    minHeight: "calc(26vh + 260px)"
  },
  container: {
    position: "relative",
    zIndex: "1100",
    // marginTop: "-95px",
    marginBottom: "45px",
  }
}));

const Main = ({ children }) => {
    const classes = useStyles()
        
  return (
    <Box component="main" className={classes.boxWrapper}>
      <Container maxWidth="md" className={classes.container}>
        <Paper elevation={5}>
          { children }
        </Paper>
      </Container>
    </Box>
  )
}

export default Main
