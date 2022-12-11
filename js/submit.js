function submitForm() {
    var aa = document.getElementById("form-section"),
        form = document.getElementById("webinar-form")
    
    document.getElementById('sub-btn-edm').disabled = true;

    aa.classList.toggle("toogle-success")

    setTimeout(() => {
        aa.classList.toggle("toogle-success");
        form.reset();
    }, 3000);
    
    document.getElementById('sub-btn-edm').disabled = false;

}
