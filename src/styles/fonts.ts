import localFont from 'next/font/local'

const firaGo = localFont({
    src: './FiraGO-Regular.ttf',
    display: 'swap',
    variable: '--font-fira-go',
})

const Adaptirebuli = localFont({
    src: './Adaptirebuli_1.otf',
    display: 'swap',
    variable: '--font-adaptirebuli',
})

const GeoGza = localFont({
    src: './geo-gza.ttf',
    display: 'swap',
    variable: '--font-geo-gza',
})

export { firaGo, Adaptirebuli, GeoGza }
