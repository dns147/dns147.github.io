(function() {
    let controlKeys = {};

    document.addEventListener("keydown", setKeyDown);
    document.addEventListener("keyup", setKeyUp);

    function setKeyDown(event) {
        controlKeys[event.code] = true;
    }
    
    function setKeyUp(event) {
        controlKeys[event.code] = false;
    }

    window.control = controlKeys;
})(); 