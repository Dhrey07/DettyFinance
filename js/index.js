

const url = 'https://dettyfinance.onrender.com/waitlist/create'

const waitListForm = document.querySelector('#form_waitlist')
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#first_name");


waitListForm.addEventListener('submit',submitForm)

async  function submitForm (e) {
e.preventDefault();

const body = {
    "first_name":nameInput.value,
    "email":emailInput.value
}

try {
    
    const response = await axios.post(url,body)
    nameInput.value = '';
    emailInput.value = ''
    const modal_popup = document.querySelector("#modal")
    modal_popup.classList.add("modal-open");
    setTimeout(() =>{
        modal_popup.classList.remove("modal-open");
    },2000)
    // alert("Thank You for Joining Our Waitlist")
} catch (error) {
    console.log(error)
    alert(error.response?.data?.message || error.response.data.error)
}


}

