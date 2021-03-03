(function() {
    let controlKeys = {};

    document.addEventListener("keydown", setKeyDown);
    document.addEventListener("keyup", setKeyUp);

    function setKeyDown(event) {
        controlKeys[event.key] = true;
    }
    
    function setKeyUp(event) {
        controlKeys[event.key] = false;
    }

    window.control = controlKeys;
})(); 