function submitForm() {
    var aa = document.getElementById("form-section"),
        form = document.getElementById("webinar-form")

    aa.classList.toggle("toogle-success")

    setTimeout(() => {
        aa.classList.toggle("toogle-success");
        form.reset();
    }, 3000);
}
