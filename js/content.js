console.log("extension is running!")


/*$("body").on("mouseenter", function () {
    window.confirm("Do you really want to leave?"),
        window.location = "https://thebusybaker.ca/wprm_print/7324/";
})
*/
$("body").on("mouseenter", function () {
    if (window.confirm('Go to the recipe?')) { 

        //REDIRECT
        window.location = $(".wprm-recipe-print").attr("href");
    } else {
        return false;
    }
})
