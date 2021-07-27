export const CarritoStyles = theme => {

    return ({

        containerCarrito: {
            display: 'inline-block',
            backgroundColor: 'rgba(19, 17, 17, 0.507)',
            borderRadius: '25px 25px 25px 25px',
            marginTop: '3em',
            width: '60%',
        },

        tableShop: {
            margin: 'auto',
        },

        letras: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
        },

        letrasBoton: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },

        botonClose: {
            borderStyle: 'solid',
            display: 'inline-block',
            backgroundColor: 'rgb(240, 30, 30)',
            height: '3em',
            width: '3em',
            marginLeft: '1em',
            borderRadius: '25px 25px 25px 25px',
            cursor: 'pointer'
        },

        carritoTotal: {
            margin: 'auto'
        },

        volver: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer'
        },

        finalizar: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer'
        },

        cruz: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },

        total: {
            fontFamily: 'Silkscreen',
            color: 'rgb(223, 13, 188)',
            marginLeft: '3%'
        },

        "@media (max-width: 768px)": {

            containerCarrito: {
                width: '100%',
            },

            table: {
                overflowX: 'scroll',
            },

            letras: {
                fontSize: '14px'
            }

        }

    })
}