export const OrderStyles = theme => {

    return ({

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
            width: '33em',
            borderRadius: '25px 25px 25px 25px'
        },

        
        row3: {
            display: 'flex',
            flexDirection: 'row'
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

        dialog: {
            borderRadius: '25px 25px 25px 25px'
        },

        dialogContent: {
            backgroundColor: 'rgba(22, 22, 20, 0.87)',
        },

        "@media (max-width: 768px)": {


            botonClose: {
                marginTop: '18%',
                marginLeft: '10%'
            },
    
            espera: {
                width: '15em',
                borderRadius: '25px 25px 25px 25px'
            },
        }
    })

}