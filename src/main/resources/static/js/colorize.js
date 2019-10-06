var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00,#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
function colorize()
{
    rand = Math.floor(Math.random()*colors.length);
    var elem = document.body;
    elem.style.transition = "background 1.0s linear 0s";
    elem.style.background = colors[rand];
}

