export const imageSize = (path) => {
    if (typeof window === 'undefined') {
        return {
            width: 0,
            height: 0
        }
    }

    let img = new Image();
    img.src = path;
    return {
        width: img.width,
        height: img.height
    }
}

export default imageSize;