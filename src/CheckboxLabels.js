const checkboxLabels = [
    {id: "stylingCheckbox",     text: 'Styling?',       checked: true},
    {id: "multiPageCheckbox",   text: 'Multiple pages?'},
    {id: "pictureCheckbox",     text: 'Pictures?',
        checkFunction: () => {
        const imageComponent = document.getElementById("imageComponents");
        const checkbox = document.getElementById("pictureCheckbox");
        checkbox.checked
            ? imageComponent.classList.remove("hidden")
            : imageComponent.classList.add("hidden");
}}];

export default checkboxLabels;