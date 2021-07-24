export const NavbarStyles = theme => {

    return ({

        navbar: {
            backgroundColor: 'rgba(19, 20, 18, 0.507)',
            height: '5em',
            marginTop: '1px',
            width: '100%'
        },

        menu: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5,auto)',
            gridGap: '5px',
            listStyleType: 'none',
            paddingLeft: '85%',
            marginTop: '-3em'
        },

        navItem: {
            fontFamily: 'Silkscreen',
            color: 'red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
            margin: '3px 0px'
        },

        brandingStyle: {
            display: 'flex',
            flexDirection: 'row'
        },

        logo: {
            width: '7em',
            marginTop: '-1em',
            marginLeft: '0.1%'
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

        dropdown: {
            marginTop: '2%',
            marginLeft: '-0.5%',
            width: '10em',
            justifyContent: 'center',
        },

        navItem2: {
            fontFamily: 'Silkscreen',
            color: 'red',
            textDecoration: 'none',
            justifyContent: 'center'
        },

        "@media (max-width: 1800px)": {

            logo: {
                marginLeft: '3%'
            },

            menu: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: '-5em',
                marginLeft: '-4em'
            },

            dropdown: {
                marginTop: '2em',
                marginLeft: '4.5%',
                width: '10em',
                justifyContent: 'center',
            },

            navItem2: {
                fontFamily: 'Silkscreen',
                fontSize: '15px',
                color: 'red',
                marginTop: '-3%',
                marginLeft: 'auto',
                justifyContent: 'center'
            },
        },

        "@media (max-width: 768px)": {

            tituloysubtitulo: {
                display: 'none'
            },

            logo: {
                marginLeft: '3%'
            },

            menu: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: '-5em',
                marginLeft: '-4em'
            },

            dropdown: {
                marginTop: '2.5rem',
                width: '9em',
                height: '20em',
                marginLeft: '0.3em',
            },

            navItem2: {
                fontFamily: 'Silkscreen',
                fontSize: '15px',
                color: 'red',
                marginTop: '-3%',
                marginLeft: 'auto',
                justifyContent: 'center'
            },
        }

    })
}
