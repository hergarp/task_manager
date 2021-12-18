$(function () {
    const adatok = [];
    let apivegpont = ' http://localhost:3000/task';
    const ajax = new MyAjax();
    ajax.getAjax(apivegpont, adatok, kiir)

    function kiir(adatok) {
        // console.log(adatok);
        const szuloElem = $(".adatok");
        const sablonElem = $(".task");
        // szuloElem.empty();
        // sablonElem.show();
        adatok.forEach(function (elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new Task(node, elem);
        });

        sablonElem.remove();
    }


});
