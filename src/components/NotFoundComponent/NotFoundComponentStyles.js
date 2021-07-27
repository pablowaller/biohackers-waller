export const NotFoundComponentStyles = theme => {

    return ({

        container: {
            display: 'inline-block',
            justifyContent: 'center',
            backgroundColor: 'rgba(19, 17, 17, 0.438)',
            borderRadius: '25px 25px 25px 25px',
            width: '60%',
            marginTop: '3%'
        },

        error: {
            fontFamily: 'Silkscreen',
            color: 'red',
        },

        robotOnMars: {
            width: '24em',
            borderRadius: '25px 25px 25px 25px'
        },

        volver: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer',
            marginTop: '3%'
        },

        letras: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },

        "@media (max-width: 768px)": {

            container: {
                width: '100%'
            },

            robotOnMars: {
                width: '15em'
            }
        }

    })
}
