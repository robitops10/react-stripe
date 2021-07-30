
import SecurityIcon from '@material-ui/icons/Security'
import InfoIcon from '@material-ui/icons/Info'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'


const Footer = () => (
  <>
    <AppBar position="static" elevation={0} component="footer" color="default">
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="caption">©2020</Typography>
      </Toolbar>
    </AppBar>
  </>
)

export default Footer
