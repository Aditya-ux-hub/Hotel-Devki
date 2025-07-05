const forms = document.getElementById('whatsappform');

forms.addEventListener('submit', function(e){
    e.preventDefault()
    const msg = `Date:${res_date.value}\n Phone:${phone.value}\n, Name:${names.value}\n, Guests: ${guest.value}\n`
    window.open(`https://wa.me/6386015260?text=${encodeURIComponent(msg)}`)
})


const form_data = document.getElementById('contactforms');

form_data.addEventListener('submit', function(e){
    e.preventDefault()
    const msg = `Name:${names.value}\n Phone:${phone.value}\n, Email:${email.value}\n, Guests: ${messages.value}\n`
    window.open(`https://wa.me/6386015260?text=${encodeURIComponent(msg)}`)
})