// Login page only
const leadForm = document.getElementById("leadForm");

if (leadForm) {

    leadForm.addEventListener("submit", function(e) {

        e.preventDefault();
    

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const age = document.getElementById("age").value;
        const relation = document.getElementById("relation").value;
if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
}
        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("age", age);
        localStorage.setItem("relation", relation);

        alert("Thank you! Your details have been saved.");

        window.location.href = "home.html";

    });

}


// Home page search
function searchPolicies(){

let input=document.getElementById("searchInput").value.toLowerCase();

let cards=document.querySelectorAll(".policy-card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.includes(input)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}
const policyContainer = document.getElementById("policyContainer");

if(policyContainer){

    policies.forEach(function(policy){

        policyContainer.innerHTML += `

        <div class="policy-card">

            <img src="${policy.image}">

            <div class="policy-content">

                <h3>${policy.name}</h3>

                <p>${policy.description}</p>

                <p><b>Age:</b> ${policy.age}</p>

                <p><b>Premium:</b> ${policy.premium}</p>

                <div class="policy-buttons">

                    <button onclick="enquirePolicy('${policy.name}')">
                    💬 WhatsApp
                    </button>

                    <a href="tel:919618745467" class="call-btn">
                    📞 Call
                    </a>

                </div>

            </div>

        </div>

        `;

    });

}
function filterPolicies(category){

    const policyContainer = document.getElementById("policyContainer");

    if(!policyContainer) return;

    policyContainer.innerHTML = "";

    const filtered = category === "All"
        ? policies
        : policies.filter(policy => policy.category === category);

    filtered.forEach(policy => {

        policyContainer.innerHTML += `

        <div class="policy-card">

            <img src="${policy.image}" alt="${policy.name}">

            <div class="policy-content">

                <h3>${policy.name}</h3>

                <p>${policy.description}</p>

                <p><b>Age:</b> ${policy.age}</p>

                <p><b>Premium:</b> ${policy.premium}</p>

                <div class="policy-buttons">

                    <button onclick="enquirePolicy('${policy.name}')">
                        💬 WhatsApp
                    </button>

                    <a href="tel:919618745467" class="call-btn">
                        📞 Call
                    </a>

                </div>

            </div>

        </div>

        `;

    });

}
window.onload = function(){

    if(document.getElementById("policyContainer")){

        filterPolicies("All");

    }

}
function enquirePolicy(policyName){

    const phone = "919618745467";

    const message =
        "Hello, I would like to know more about " + policyName + ".";

    window.open(
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
        "_blank"
    );

}

const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {
e.preventDefault();
const submitButton = contactForm.querySelector("button");

submitButton.innerText = "Submitting...";
submitButton.disabled = true;
        const phone = document.getElementById("customerPhone").value;
 if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    submitButton.innerText = "Submit Enquiry";
    submitButton.disabled = false;
    return;
}

if(phone.length !== 10){
    alert("Please enter a valid 10-digit phone number.");
    return;
}
const policy = document.getElementById("policySelect").value;

if(policy === ""){
    alert("Please select a policy.");
    return;
}
        db.collection("enquiries").add({

            name: document.getElementById("customerName").value,
            phone: document.getElementById("customerPhone").value,
            age: document.getElementById("customerAge").value,
            policy: document.getElementById("policySelect").value,
            message: document.getElementById("customerMessage").value,
            status: "Pending",
           submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
            date: new Date()

        })

        .then(function() {

            const successMessage = document.getElementById("successMessage");

successMessage.innerHTML =
"✅ Thank you! Your enquiry for <b>" +
document.getElementById("policySelect").value +
"</b> has been submitted successfully.";

successMessage.style.display = "block";
contactForm.reset();

            contactForm.reset();
            submitButton.innerText = "Submit Enquiry";
submitButton.disabled = false;

        })

        .catch(function(error) {

    submitButton.innerText = "Submit Enquiry";
    submitButton.disabled = false;

    alert("Error: " + error.message);

});

    });

}
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show-menu");
}