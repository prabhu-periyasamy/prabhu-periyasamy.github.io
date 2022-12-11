function submitForm() {
    var aa = document.getElementById("form-section"),
        form = document.getElementById("webinar-form")
    
    $("#sub-btn-edm").prop("disabled", true);
    $("#sub-btn-edm").html("");
    
//     aa.classList.toggle("toogle-success")
//     setTimeout(() => {
//         aa.classList.toggle("toogle-success");
//         form.reset();
//     }, 3000);
    
    $("#sub-btn-edm").prop("disabled", false);
    $("#sub-btn-edm").html("");

}
