

const url = 'https://dettyfinance.onrender.com/waitlist/create'

const waitListForm = document.querySelector('#form_waitlist')
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#first_name");


waitListForm.addEventListener('submit',submitForm)

const setButtonLoading = () =>{
    document.querySelector(".save-btn").innerHTML = '<div class="loader"></div>'
}
const resetBtn = () => {
    document.querySelector(".save-btn").innerHTML = 'Join the List!'
}


async  function submitForm (e) {
e.preventDefault();
setButtonLoading()

const body = {
    "first_name":nameInput.value,
    "email":emailInput.value
}

try {
    
    const response = await axios.post(url,body)
    nameInput.value = '';
    emailInput.value = ''
    resetBtn()
    const modal_popup = document.querySelector("#modal")
    modal_popup.classList.add("modal-open");
    setTimeout(() =>{
        modal_popup.classList.remove("modal-open");
    },2000)
    // alert("Thank You for Joining Our Waitlist")
} catch (error) {
    console.log(error)
    resetBtn()
    alert(error.response?.data?.message || error.response.data.error)
}

}

//WAITLIST

// save_btn = document.querySelector(".save-btn");
// save_btn.onclick = function() {
//   this.innerHTML = "<div class="loader"></div>";
//   setTimeout(() => {
//       this.innerHTML = "Thank You";
//   }, 2000);
// }
// //PLEASE WAIT

// $('.btn').on('click', function() {
//     var $this = $(this);
//   $this.button('loading');
//     setTimeout(function() {
//        $this.button('reset');
//    }, 8000);
// });

