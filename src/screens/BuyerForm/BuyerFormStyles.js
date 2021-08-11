export const BuyerFormStyles = theme => {

    return ({

        titulo: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
        },

        input: {
            height: '3.5em',
            borderRadius: '25px 25px 25px 25px '
        },

        advertencia: {
            fontFamily: 'Silkscreen',
            fontSize: '0.8em',
            color: 'red'
        },

        margin: {
            marginTop: '10px'
        },

        column: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '5%',
        },

        total: {
            fontFamily: 'Silkscreen',
            color: 'rgb(223, 13, 188)',
        },

        confirmar: {
            backgroundColor: 'rgb(79, 16, 141)',
            cursor: 'pointer',
            marginTop: '3%'
        },

        letrasBoton: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        }

    })

}