export const ItemDetailContainerStyles = theme => {

    return ({

        containerDetail: {
            display: 'inline-block',
            backgroundColor: 'rgba(19, 17, 17, 0.507)',
            borderRadius: '25px 25px 25px 25px',
            marginTop: '3em',
            width: '60%'
        },
        
        loading: {
            fontFamily: 'Silkscreen',
            fontSize: '2.5em',
            color: 'red',
            padding: 'auto'
        },

        "@media (max-width: 768px)": {

            containerDetail: {
                width: '100%'
            }

        }
    })

}
