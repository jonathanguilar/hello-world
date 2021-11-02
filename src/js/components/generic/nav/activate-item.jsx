export const activatable = (classes, base, active, isActive) => {
    if (! isActive) {
        return classes;
    }

    if (base === '') {
        return `${classes} ${active}`;
    }
    else {
        return classes.replace(base, active);
    }
}

export default activatable;