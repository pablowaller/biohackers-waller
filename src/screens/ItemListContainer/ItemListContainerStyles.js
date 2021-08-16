export const ItemListContainerStyles = theme => {

    return ({

        row: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '1em'
        },

        bienvenida: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
          },

        cambot: {
            width: '6em',
            marginTop: '-1%', 
        },

        container: {
            display: 'inline-block',
            backgroundColor: 'rgba(19, 17, 17, 0.438)',
            borderRadius: '25px 25px 25px 25px',
            width: '65%',
        },

        items: {
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1em',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '3fr 3fr 3fr',
            rowGap: '15px'
        },

        loading: {
            fontFamily: 'Silkscreen',
            fontSize: '2.5em',
            color: 'red',
            padding: 'auto'
        },

        "@media (max-width: 768px)": {

            row: {
                margin: 'auto',
            },

            bienvenida: {
                fontSize: '18px'
            },

            cambot: {
                height: '4.3em',
                top: '2em'
            },

            container: {         
                width: '100%',
            },

            items: {
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
            },

        }


    })

}