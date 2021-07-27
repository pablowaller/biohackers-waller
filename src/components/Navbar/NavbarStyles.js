export const NavbarStyles = theme => {

    return ({

        navbar: {
            backgroundColor: 'rgba(19, 20, 18, 0.507)',
            height: '5em'
        },

        brandingStyle: {
            display: 'flex',
            flexDirection: 'row'
        },

        logo: {
            marginTop: '-1em',
            width: '7em'
        },

        tituloysubtitulo: {
            display: 'flex',
            flexDirection: 'column'

        },

        titulo: {
            fontFamily: 'Silkscreen',
            fontSize: '3em',
            color: 'red',
            textAlign: 'center',
            marginTop: '1%',
        },

        subtitulo: {
            fontFamily: 'Silkscreen',
            fontSize: '1em',
            color: 'rgb(41, 209, 19)',
            marginTop: '-12%'
        },

        menu: {
            display: 'flex',
            flexDirection: 'row',
            listStyleType: 'none',
            marginTop: '-3rem',
            paddingLeft: '85%'
        },

        navItem: {
            fontFamily: 'Silkscreen',
            color: 'red',
            margin: '5px'
        },

        dropdown: {
            marginTop: '2.5%',
            marginLeft: '-0.5%',
            width: '10em'
        },

        menuItem: {
            justifyContent: 'center'
        },

        subItem: {
            fontFamily: 'Silkscreen',
            color: 'red',
            textDecoration: 'none'
        },

        "@media (max-width: 768px)": {

            tituloysubtitulo: {
                display: 'none'
            },

            menu: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: '-5em',
                marginLeft: '-4em'
            },

            dropdown: {
                marginTop: '3rem',
                marginLeft: '0.3em',
                width: '9em'
            },

            subItem: {
                fontSize: '15px',
                marginTop: '-3%',
                marginLeft: '1.4%',
                justifyContent: 'center'
            }
        }

    })
}
