import { createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { AppBar, Container } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer"
    }
}))

const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    const { currency, setCurrency } = CryptoState();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark"
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            className={classes.title}
                            onClick={() => history.push("/")}>
                            Crypto Hunter
                        </Typography>
                        <Select
                            variant="outlined"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            style={{
                                window: 100,
                                height: 40,
                                marginRight: 15
                            }}>
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider >
    )
}

export default Header
