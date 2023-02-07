

const url = 'http://localhost:8000/waitlist/create'

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
    alert("Thank You for Joining Our Waitlist")
} catch (error) {
    console.log(error.response.data.message)
    alert(error.response?.data?.message)
}






 

}

