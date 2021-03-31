const checkboxLabels = [{text: 'Styling?'},
    {text: 'Multiple pages?'},
    {text: 'Pictures?', checkFunction: () => {
        const imageComponent = document.getElementById("imageComponents");
        imageComponent.classList.contains("hidden")
            ? imageComponent.classList.remove("hidden")
            : imageComponent.classList.add("hidden");
}}]

export default checkboxLabels;