(function () {

    // Definition of caller element
    var trigger = function (element) {
        var button = element.getAttribute('data-collapse');
        if (button !== null) {
            return element;
        } else {
            var isParentCollapse = element.parentNode.getAttribute('data-collapse');
            return (isParentCollapse !== null) ? element.parentNode : undefined;
        }
    };

    // A handler for click on toggle button
    var clickHandler = function (event) {
        var triggerEl = trigger(event.target);
        // If trigger element does not exist
        if (triggerEl === undefined) {}

        // If the target element exists
        var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
        if (targetEl) {
            triggerEl.classList.toggle('active');
            targetEl.classList.toggle('on');
        }
    };

    // Delegated event
    document.addEventListener('click', clickHandler);

})(document, window);