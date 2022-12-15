export const getRandomWord = (palabras) => {
    const palabraObtenida = Math.floor(Math.random() * 100) ;
    return palabras[palabraObtenida]
}