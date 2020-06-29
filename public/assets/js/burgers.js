$(function () {
    $("#devour").on("click", function (event) {
        let id = $(this).data("id");
        let devour = $(this).data("devour");

        let newDevourState = {
            devoured: devour
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("Devoured", devour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $("#grill-it-up").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            name: $("burgers").val().trim(),
            devoured: $("devoured=false").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});