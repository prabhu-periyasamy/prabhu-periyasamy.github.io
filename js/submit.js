function submitForm() {
    var aa = document.getElementById("form-section"),
        form = document.getElementById("webinar-form")
    
    aa.classList.toggle("toogle-success")
    setTimeout(() => {
        aa.classList.toggle("toogle-success");
        form.reset();
    }, 3000);

}

$("#sub-btn-edm").on("click", function () {
    var aa = document.getElementById("form-section"),
        form = document.getElementById("webinar-form")
    
    //$("#sub-btn-edm").prop("disabled", true);
    
//     aa.classList.toggle("toogle-success")
//     setTimeout(() => {
//         aa.classList.toggle("toogle-success");
//         form.reset();
//     }, 3000);
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8081/products',
        data: {
        "data": "test"
    },
        dataType: 'json',
        encode: true,
        success: function(o) {
            //$("#sub-btn-edm").prop("disabled", false);
        }
    });
});

$("#sub-btn-edm").on("click", function () {
    alert('clicked event on button');
});
