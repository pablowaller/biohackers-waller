export const CarritoWidgetStyles = theme => {

    return ({

        carritoWidget: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-100px',
            width: '8.5em'
        },

        letras: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
        },

        "@media (max-width: 1024px)": {

            carritoWidget: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: 'auto',
                marginLeft: '33%',
            },

            drone: {
                width: '80%',
            },

        }

    })
}