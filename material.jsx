import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";


const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                }}
            >
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        {name}
                    </Typography>
                    <Typography variant="body1">Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;

/*
import { IconButton, ListItem, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const BasketItem = ({removeFromOrder, id, name, price, quantity}) => {
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;
*/

/*
----------------------------------------
import { TextField } from "@material-ui/core";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
        label='search'
        variant="standard"
        fullWidth
        type='search'
        value={value}
        onChange={onChange}
        sx={{
            mb:"1.5rem"
        }}
    />;
};

export default Search;
*/
/*
------------------------------------------------------
import { Alert, Snackbar } from "@material-ui/core"

function Snack({isOpen, handleClose = Function.prototype}) {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                severity="success"
            >Товар добавлен в корзину!</Alert>
        </Snackbar>
    )
}

export default Snack
*/
/*
const theme = createTheme({
    palette: {
        primary: {
            main: '#61dafb'
        },
        secondary: {
            main: '#00ff00'
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
*/