export const ItemCounterStyles = theme => {

    return ({

        contador: {
            display: 'inline-block',
        },

        sumarYRestar: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },

        numero: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        },

        boton: {
            borderStyle: 'solid',
            display: 'inline-block',
            padding: '20px',
            backgroundColor: 'rgb(30, 208, 240)',
            borderRadius: '50%',
            height: '50px',
            margin: '20px',
            cursor: 'pointer'
        },

        signo: {
            fontSize: '15px'
        },

        agregar: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer'
        },

        letrasBoton: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        }

    })

}





