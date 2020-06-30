$(document).ready(function () {
    $("#grill-it").on("submit", function (e) {
        e.preventDefault();
        let newBurger = {
            name: $("burger").val().trim(),
            devoured: false,
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function () {
            console.log("Burger added");
            location.reload(true);
        });
    });

    $("#devour").on("click", function (e) {
        let id = $(this).data("id");
        let devour = $(this).data("devour");
        console.log(id + " " + devour);
        let newDevoured = {
            devoured: devour,
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured,
        })
            .then(function () {
                console.log("Burger has been devoured");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    });
});