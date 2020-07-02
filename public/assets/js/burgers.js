$(document).ready(function () {
    $(".devour").on("click", function (e) {
        let id = $(this).data("id");
        let devour = $(this).data("devour");
        console.log(id + "burger" + devour);
        let newDevoured = {
            devoured: true,
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured,
        })
            .then(function () {
                console.log("Burger has been devoured");
                location.reload();
            })

    });
});