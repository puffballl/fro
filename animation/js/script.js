const btn = document.getElementById('btn');
const block = document.getElementById('block');

function move() {
    var pos = 150;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos === 750){
            clearInterval(id);
        }
        else {
            pos++;
            block.style.top = pos + 'px';
            block.style.left = pos + 'px';
        }
    }
}
