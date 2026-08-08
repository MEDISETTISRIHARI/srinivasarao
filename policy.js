const params = new URLSearchParams(window.location.search);

const plan = params.get("plan");

const policy = policies[plan];

if(policy){

document.getElementById("policyName").textContent = policy.name;

document.getElementById("policyDescription").textContent = policy.description;

document.getElementById("policyAge").textContent = policy.age;

document.getElementById("policyPremium").textContent = policy.premium;

document.getElementById("policyImage").src = policy.image;
document.getElementById("loadingText").style.display = "none";
}