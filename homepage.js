function buttonUnlock() {
    var insertAnswer = document.getElementById("answerToUnlock").value;
        if(insertAnswer == "The Moon is the only natural satellite of Earth" || insertAnswer == "Galaxy consist billions of stars") {
            var body = document.body;
            var changeText = document.getElementById("text");

            var deleteBox = document.getElementById("box");
            var deleteNav = document.getElementById("navigation");
            var deleteFooter = document.getElementById("footer");
            body.removeChild(deleteBox);
            body.removeChild(deleteNav);
            body.removeChild(deleteFooter);

            changeText.innerHTML = "Thank you so much for helping me. Oh God, you're such a kind and lovely person!" + "<br />" + "<br />" + "I want you to know how much I appreciate you and your act of kindness. " + "<br />" + "<br />"
            + "Because i believe that kindness has the power to change the world." + 
            "<br />" + "<br />" + "May your life be blessed even more" + "<br />" + "<br />" + "Remember to always be kind &#128522" + "<br />" + "<br />" + "<br />" +
            "<br />" + "Xoxo," + "<br />" + "Cloudy";
        }
}