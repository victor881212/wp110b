function button(obj) {
    if (confirmAction(confirm("going to " + obj.id)) == true) {
        window.location = ('./' + obj.id + '.html')
    };

}

function inputimg(obj) {
    document.getElementById("img1").src = "" + document.getElementById("pictureinput").value;
}

function confirmAction(confirmAction1) {
    if (confirmAction1) {
        return true;
    } else {
        return false;
    }
}

class swap {

    constructor(array) {
        this.a = array
    }

    change() {
        for (let j = 0; j < 10; j++) {
            for (let i = 0; i < 8; i++) {
                let rand = Math.floor(Math.random() * 8)
                let store = this.a[rand]
                this.a[rand] = this.a[i]
                this.a[i] = store
            }
        }
        return this.a;
    }
}
let p = new swap([1, 1, 2, 2, 3, 3, 4, 4]);
let n = new swap([]);

function cardgame(obj, card) {
    var num = card
    if (card == 0) { //button start
        for (var i = 0; i < 8; i++) {
            document.getElementsByName("card")[i].src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true"
        }
        n = (p.change())
        count = 0;
        save = 0;
        savename = -1;
        errorcount = 0;
        wincount = 0;
    }
    if (card == 1 && document.getElementsByName("card")[0].src == "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true") { document.getElementsByName("card")[0].src = changecard(n[0], 0) }
    if (card == 2 && document.getElementsByName("card")[1].src == "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true") { document.getElementsByName("card")[1].src = changecard(n[1], 1) }
    if (card == 3 && document.getElementsByName("card")[2].src == "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true") { document.getElementsByName("card")[2].src = changecard(n[2], 2) }
    if (card == 4 && document.getElementsByName("card")[3].src == "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true") { document.getElementsByName("card")[3].src = changecard(n[3], 3) }
    if (card == 5 && document.getElementsByName("card")[4].src == "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true") { document.getElementsByName("card")[4].src = changecard(n[4], 4) }
    if (card == 6 && document.getElementsByName("card")[5].src == "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true") { document.getElementsByName("card")[5].src = changecard(n[5], 5) }
    if (card == 7 && document.getElementsByName("card")[6].src == "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true") { document.getElementsByName("card")[6].src = changecard(n[6], 6) }
    if (card == 8 && document.getElementsByName("card")[7].src == "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true") { document.getElementsByName("card")[7].src = changecard(n[7], 7) }
}

let count = 0;
let save = 0;
let savename = -1;
let errorcount = 0;
let wincount = 0;

function changecard(card, name) {
    if (card == 1 && count == 0) {
        let src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/pika.jpg?raw=true";
        count += 1;
        save = 1;
        savename = name;
        return src;
    }
    if (card == 2 && count == 0) {
        let src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/yellow.jpg?raw=true";
        count += 1;
        save = 2;
        savename = name;
        return src;
    }
    if (card == 3 && count == 0) {
        let src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/skybridge.jpg?raw=true";
        count += 1;
        save = 3;
        savename = name;
        return src;
    }
    if (card == 4 && count == 0) {
        let src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/cartoon.jpg?raw=true";
        count += 1;
        save = 4;
        savename = name;
        return src;
    }



    if (card == 1 && count == 1 && save == card) {
        let src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/pika.jpg?raw=true";
        count = 0;
        save = 0;
        savename = -1;
        wincount += 1;
        if (wincount == 4) {
            confirm('You Win');;
        }
        return src;
    } else if (card == 1) {
        document.getElementsByName("card")[name].src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/pika.jpg?raw=true";
        setTimeout(reset, 1000, savename);
        setTimeout(reset, 1000, name);
        src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/pika.jpg?raw=true"
        errorcount += 1;
        document.getElementsByName("label")[1].innerHTML = errorcount.toString();
        return src;
    }

    if (card == 2 && count == 1 && save == card) {
        let src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/yellow.jpg?raw=true";
        count = 0;
        save = 0;
        savename = -1;
        wincount += 1;
        if (wincount == 4) {
            confirm('You Win');;
        }
        return src;
    } else if (card == 2) {
        document.getElementsByName("card")[name].src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/yellow.jpg?raw=true";
        setTimeout(reset, 1000, savename);
        setTimeout(reset, 1000, name);
        src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/yellow.jpg?raw=true"
        errorcount += 1;
        document.getElementsByName("label")[1].innerHTML = errorcount.toString();
        return src;
    }

    if (card == 3 && count == 1 && save == card) {
        let src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/skybridge.jpg?raw=true";
        count = 0;
        save = 0;
        savename = -1;
        wincount += 1;
        if (wincount == 4) {
            confirm('You Win');;
        }
        return src;
    } else if (card == 3) {
        document.getElementsByName("card")[name].src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/skybridge.jpg?raw=true";
        setTimeout(reset, 1000, savename);
        setTimeout(reset, 1000, name);
        src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/skybridge.jpg?raw=true"
        errorcount += 1;
        document.getElementsByName("label")[1].innerHTML = errorcount.toString();
        return src;
    }

    if (card == 4 && count == 1 && save == card) {
        let src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/cartoon.jpg?raw=true";
        count = 0;
        save = 0;
        savename = -1;
        wincount += 1;
        if (wincount == 4) {
            confirm('You Win');
        }
        return src;
    } else if (card == 4) {
        document.getElementsByName("card")[name].src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/cartoon.jpg?raw=true";
        setTimeout(reset, 1000, savename);
        setTimeout(reset, 1000, name);
        src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/cartoon.jpg?raw=true"
        errorcount += 1;
        document.getElementsByName("label")[1].innerHTML = errorcount.toString();
        return src;
    }
    document.getElementsByName("label")[0] = errorcount.toString();
}

function reset(savename) {
    document.getElementsByName("card")[savename].src = "https://github.com/victor881212/wp110b/blob/master/homework/html/material/%E7%88%90%E7%9F%B3%E5%8D%A1%E8%83%8C1.jfif?raw=true";
    count = 0;
    save = 0;
    savename = -1;
}