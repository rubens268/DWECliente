onkeydown = function (e) {
    if (e.shiftKey)
        if (document.body.style.textTransform == "uppercase")
            document.body.style.textTransform = "lowercase";
        else
            document.body.style.textTransform = "uppercase";
}