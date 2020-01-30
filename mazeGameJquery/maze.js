let win = true;
$(document).ready(function () {
    $("#start").click(function () {
        $("#status").text("Good Luck.");
        $("#status").addClass("goodluck");
        startGame();
    });
});

function  startGame() {
    win = true;

    $(".boundary").hover(
        function () {
            loose();
        });

    $("#end").click(
        function () {
            if(win){
                $("#status").text("You WIN! : Click S to play Again");
                endGame();
            }

        });

    $("#maze").mouseleave(
        function () {
            loose();
        });
}

function loose() {
    win = false;
    $("div .boundary").addClass("youlose");
    $("#status").text("You LOSE\" : Click 'S' to Retry");
}

function endGame() {
    $("div .boundary").removeClass("youlose");
    $('.boundary').unbind('hover');
    $("#maze").unbind('mouseleave');

}