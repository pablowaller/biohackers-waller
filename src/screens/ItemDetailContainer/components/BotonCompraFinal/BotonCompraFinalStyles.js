export const BotonCompraFinalStyles = theme => {

    return ({

        cancelar: {
            backgroundColor: 'rgb(240, 30, 30)',
            cursor: 'pointer',
            marginTop: '3%'
        },

        finalizar: {
            backgroundColor: 'rgb(31, 207, 7)',
            cursor: 'pointer',
            marginTop: '3%'
        },

        letrasBoton: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },

        "@media (max-width: 768px)": {

            cancelar: {
                width: '10em',
            },

            finalizar: {
                width: '10em',
            },

        }

    })
}