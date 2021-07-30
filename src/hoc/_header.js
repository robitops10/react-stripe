import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import makeStyles from '@material-ui/core/styles/makeStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Typography'

import Box from '@material-ui/core/Box'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'

let navItems = ['home', 'about', 'payment', 'payment2', 'login' ]


const useStyles = makeStyles((theme) => ({
  topAppBar: {
    // Height: "20vh",
    minHeight: "5vh"
  },
  toolbar: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    verticalAlign: 'middle',
    display: 'inline-flex'
  },
}))

const AppBars = () => {
  const classes = useStyles()
  const { authenticated } = useSelector(state => state.user)
  const [ navs, setNavs ] = useState( navItems )

  useEffect( () => {
    if( authenticated ) return setNavs([...navItems, 'profile'])
    setNavs([...navItems])
  }, [authenticated])

  return (
    <AppBar position="static" elevation={0} color="default" className={classes.topAppBar}>
      <Toolbar className={classes.toolbar}>

          <Box>
            <Breadcrumbs>
              {navs.map( (item, key) => <Link
                key={key}
                  component={RouterLink} 
                  to={item === 'home' ? '/' : `/${item}`}
                > 
                { item.charAt(0).toUpperCase() + item.slice(1) }
              </Link>)}
            </Breadcrumbs>
          </Box>

            {/*<Typography className={classes.title} variant='h4'component='h1'noWrap color='primary'> TITLE GOES HERE </Typography>*/}

      </Toolbar>
    </AppBar>
  )
}

export default AppBars
