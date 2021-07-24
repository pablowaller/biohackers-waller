export const ItemListContainerStyles = theme => {

    return ({

        row1: {
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
            width: '60%',
        },

        items: {
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: '1fr 1fr 1fr',
        },

        linkitems: {
            color: 'transparent'
        },

        loading: {
            fontFamily: 'Silkscreen',
            fontSize: '2.5em',
            color: 'red',
            padding: 'auto'
        },


        "@media (max-width: 1300px)": {

            items: {
                gridTemplateColumns: '1fr 1fr',
            },

        },

        "@media (max-width: 768px)": {

            row1: {
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
                backgroundColor: 'rgba(19, 17, 17, 0.438)',
                borderRadius: '25px 25px 25px 25px',
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