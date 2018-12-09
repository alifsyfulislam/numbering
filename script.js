function takeRandomInput() {
    document.getElementById('One').value = getRndInteger(1,10);
    document.getElementById('Two').value = getRndInteger(1,10);
    document.getElementById('Three').value = getRndInteger(1,10);
    document.getElementById('Four').value = getRndInteger(1,10);
    document.getElementById('Five').value = getRndInteger(1,10);
    document.getElementById('Six').value = getRndInteger(1,10);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}

function ascendingList() {
    var take1 = document.getElementById('One').value;
    var take2 = document.getElementById('Two').value;
    var take3 = document.getElementById('Three').value;
    var take4 = document.getElementById('Four').value;
    var take5 = document.getElementById('Five').value;
    var take6 = document.getElementById('Six').value;
    var takes = [ take1, take2, take3, take4, take5, take6 ];
    takes.sort(function(a, b){return a-b});
    document.getElementById("demo").value = takes;
}


function maximumNumber() {
    var take1 = document.getElementById('One').value;
    var take2 = document.getElementById('Two').value;
    var take3 = document.getElementById('Three').value;
    var take4 = document.getElementById('Four').value;
    var take5 = document.getElementById('Five').value;
    var take6 = document.getElementById('Six').value;

    var takes = [ take1, take2, take3, take4, take5, take6 ];
    document.getElementById('demo2').value = Math.max.apply(null, takes);
}


function minimumNumber() {
    var take1 = document.getElementById('One').value;
    var take2 = document.getElementById('Two').value;
    var take3 = document.getElementById('Three').value;
    var take4 = document.getElementById('Four').value;
    var take5 = document.getElementById('Five').value;
    var take6 = document.getElementById('Six').value;

    var takes = [ take1, take2, take3, take4, take5, take6 ];
    document.getElementById('demo3').value = Math.min.apply(null, takes);
}
