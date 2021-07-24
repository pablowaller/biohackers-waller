export const ItemStyles = theme => {

    return ({

        title: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
          },

        img: {
            width: '10em',
            margin: 'auto'
        },

        price: {
            fontFamily: 'Silkscreen',
            color: 'rgb(223, 13, 188)',
        },

        description: {
            fontFamily: 'Silkscreen',
            color: 'rgb(241, 241, 241)',
          },          

        "@media (max-width: 768px)": {

            title: {
                fontSize: '20px'
            },

            img: {
                margin: 'auto',
                width: '14em',
            },

            description: {
                fontSize: '15px'
            }
        },

    })


}