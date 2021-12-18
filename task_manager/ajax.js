class MyAjax {
    constructor() {}
    getAjax(apivegpont,adatok, myCallback) {
    adatok.splice(0,adatok.length);
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                result.forEach((element) => {
                adatok.push(element);
                });

                myCallback(adatok);
            }
        });
    }

}