export const endpointsOptions ={
    characters: {
        Label:'Characters',
        value:'characters'
    },
    comics:{
        Label:'Comics',
        value:'comics'
    },
    series:{
        Label:'Series',
        value:'series'
    },
    stories:{
        Label:'Stories',
        value:'stories'
    },
    events:{
        Label:'Events',
        value:'events'
    }
}
export const userInterfaceOptions ={
    openMenu: {
        open:true,
        close:false
    },
    isDarkTheme:{
        dark:'dark',
        light:'light'
    },
    title:'Home'
}
export const url =
import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_DEV_HOME_URL
    : import.meta.env.VITE_PROD_HOME_URL;