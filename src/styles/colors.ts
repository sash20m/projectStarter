const colors = {
    colorNameHere: '#c4c4c4',

}

const getColor = (color?: string) => {
    switch (color) {
        case 'colorNameHere': return colors.colorNameHere;
        default: return colors.colorNameHere;
    }
}

export { getColor };