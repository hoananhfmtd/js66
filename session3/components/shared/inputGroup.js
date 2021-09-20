class InputGroup {
    $container = document.createElement("div");
    $label = document.createElement("label");
    $input = document.createElement("input");
    $errMessage = document.createElement("div");

    constructor(label, inputType) {
        this.$label.innerHTML = label;
        this.$input.type = inputType;

        this.$container.appendChild(this.$label);
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$errMessage);
    }

    getValue() {
        return this.$input.value;
    }

    setErrorMessage = (errMgs) => {
        this.$errMessage.innerHTML = errMsg;
    };
}

export {InputGroup};
