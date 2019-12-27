interface Modifiers {
    [modifierName: string]: boolean | string;
}

export default (elementName: string, modifiers: Modifiers = {}, additionalClassNames?: string): string => {
    const modifiersNames = Object.keys(modifiers);
    const classNames = modifiersNames.reduce((result, current) => {
        const modifier = modifiers[current];

        let add = '';
        if (typeof modifier === 'string') {
            add = ` ${elementName}_${current}-${modifier}`;
        } else {
            add = modifier ? ` ${elementName}_${current}` : '';
        }

        return result + add;
    }, '');

    const additional = additionalClassNames ? ` ${additionalClassNames}` : '';

    return elementName + classNames + additional;
};
