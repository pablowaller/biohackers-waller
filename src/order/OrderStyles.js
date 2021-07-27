export const OrderStyles = theme => {

    return ({

        header: {
            display: 'flex',
            flexDirection: 'row'
        },

        dialog: {
            borderRadius: '25px 25px 25px 25px'
        },

        dialogContent: {
            backgroundColor: 'rgba(22, 22, 20, 0.87)',
        },

        botonClose: {
            backgroundColor: '#C01F1F',
            borderStyle: 'solid',
            height: '3em',
            marginTop: '4.5%',
            cursor: 'pointer'
        },

        cruz: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },

        letras: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
        },

        total: {
            fontFamily: 'Silkscreen',
            color: 'rgb(223, 13, 188)',
            marginLeft: '3%'
        },

        carritoTotal: {
            margin: 'auto'
        },

        finalizar: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer'
        },

        letrasBoton: {
            fontFamily: 'Silkscreen',
            color: 'white',
            textShadow: 'none'
        },

        espera: {
            borderRadius: '25px 25px 25px 25px',
            width: '33em',
        },

        "@media (max-width: 768px)": {

            botonClose: {
                margin: 'auto'
            },

            espera: {
                width: '15em'
            }

        }

    })

}