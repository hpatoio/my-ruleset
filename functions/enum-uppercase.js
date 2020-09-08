module.exports = (targetVal) => {

    const wrongEnumValues = targetVal.filter(element =>
        !/^-{0,1}[A-Z0-9]{1,}(-[A-Z0-9]+){0,}$/.test(element)
    );

    if (wrongEnumValues.length > 0 ) {
        return [
            {
                message: "Values for enum parameters must be UPPERCASE and separated by hyphen. Not valid values: " + wrongEnumValues.join(" | ")
            },
        ];
    }

};
