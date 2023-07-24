import localFont from 'next/font/local'

const bpgArial = localFont({
    src: './bpg-arial-webfont.woff2',
    display: 'swap',
    variable: '--font-arial',
})

const bpgArialCaps = localFont({
    src: './bpg-arial-caps-webfont.woff2',
    display: 'swap',
    variable: '--font-arial-caps',
})
const firaGo = localFont({
    src: './FiraGO-Regular.ttf',
    display: 'swap',
    variable: '--font-fira-go',
})

export { bpgArial, bpgArialCaps, firaGo }
