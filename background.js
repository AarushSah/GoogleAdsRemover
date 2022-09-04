var element = document.getElementById("taw");
if(element != null) {
    if(element.textContent.includes("Including results for") == false && element.textContent.includes("Showing results for") == false && element.textContent.includes("Did you mean:") == false) {
        element.parentNode.removeChild(element);
    }
}