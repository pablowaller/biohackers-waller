export const ItemDetailContainerStyles = theme => {

    return ({

        containerDetail: {
            display: 'inline-block',
            backgroundColor: 'rgba(19, 17, 17, 0.507)',
            borderRadius: '25px 25px 25px 25px',
            width: '40%',
        },

        loader: {
            padding: '18%',
            fontSize: '3em'
        },


        "@media (max-width: 768px)": {

            containerDetail: {
                display: 'inline-block',
                backgroundColor: 'rgba(19, 17, 17, 0.507)',
                borderRadius: '25px 25px 25px 25px',
                width: '100%',
                marginTop: '2em'
            },

        }
    })

}
