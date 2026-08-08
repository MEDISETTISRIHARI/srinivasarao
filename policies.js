const policies = [

{
    category:"Savings",
    name: "LIC Jeevan Anand",
    age: "18-50 Years",
    premium: "Monthly / Quarterly / Half-Yearly / Yearly",
    description: "Life insurance with savings and lifelong protection.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600"
},

{
    category:"Savings",
    name: "LIC Jeevan Labh",
    age: "8-59 Years",
    premium: "Monthly / Quarterly / Half-Yearly / Yearly",
    description: "Limited premium payment with guaranteed benefits.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600"
},

{
    category:"Savings",
    name: "LIC New Endowment",
    age: "18-55 Years",
    premium: "Monthly / Quarterly / Half-Yearly / Yearly",
    description: "Savings plan with life cover and maturity benefits.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
},

{
    category:"Money Back",
    name: "LIC New Money Back",
    age: "13-50 Years",
    premium: "Monthly / Quarterly / Half-Yearly / Yearly",
    description: "Regular money back benefits with life insurance.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600"
},

{
    category:"Pension",
    name: "LIC Jeevan Umang",
    age: "90 Days - 55 Years",
    premium: "Monthly / Quarterly / Half-Yearly / Yearly",
    description: "Lifetime income and life protection plan.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600"
},

{
    category:"Term",
    name:"LIC Tech Term",
    age:"18-65 Years",
    premium:"Yearly",
    description:"Pure term insurance with high life cover.",
    image:"https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600"
},

{
    category:"Child",
    name:"LIC Jeevan Tarun",
    age:"0-12 Years",
    premium:"Monthly / Yearly",
    description:"Child education and future planning policy.",
    image:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600"
},

{
    category:"Pension",
    name:"LIC Jeevan Akshay",
    age:"30-85 Years",
    premium:"Single Premium",
    description:"Immediate annuity plan for retirement income.",
    image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600"
},

{
    category:"Savings",
    name:"LIC Bima Jyoti",
    age:"90 Days - 60 Years",
    premium:"Yearly",
    description:"Guaranteed additions with life cover.",
    image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600"
},

{
    category:"Savings",
    name:"LIC Jeevan Lakshya",
    age:"18-50 Years",
    premium:"Monthly / Quarterly / Yearly",
    description:"Financial protection for your family's future.",
    image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
},
{
    category:"Savings",
    name:"LIC Jeevan Utsav",
    age:"90 Days - 65 Years",
    premium:"Monthly / Quarterly / Half-Yearly / Yearly",
    description:"Guaranteed income plan with lifelong protection.",
    image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600"
},

{
    category:"Child",
    name:"LIC Amritbaal",
    age:"30 Days - 13 Years",
    premium:"Monthly / Quarterly / Half-Yearly / Yearly",
    description:"Child savings plan for education and future goals.",
    image:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600"
},

{
    category:"Women",
    name:"LIC Bima Lakshmi",
    age:"18-55 Years",
    premium:"Monthly / Quarterly / Half-Yearly / Yearly",
    description:"Savings and protection plan specially designed for women.",
    image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600"
},

{
    category:"Pension",
    name:"LIC New Jeevan Shanti",
    age:"30-79 Years",
    premium:"Single Premium",
    description:"Deferred pension plan with guaranteed retirement income.",
    image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600"
},

{
    category:"Term",
    name:"LIC Digi Term",
    age:"18-45 Years",
    premium:"Yearly",
    description:"Digital term insurance with high life cover.",
    image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"
},

{
    category:"Term",
    name:"LIC Yuva Term",
    age:"18-45 Years",
    premium:"Yearly",
    description:"Affordable term insurance for young professionals.",
    image:"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
},

{
    category:"Savings",
    name:"LIC Jeevan Azad",
    age:"90 Days - 50 Years",
    premium:"Monthly / Quarterly / Half-Yearly / Yearly",
    description:"Limited premium savings plan with guaranteed maturity.",
    image:"https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600"
},

{
    category:"Marriage",
    name:"LIC New Jeevan Sathi",
    age:"18-50 Years",
    premium:"Monthly / Quarterly / Half-Yearly / Yearly",
    description:"Joint life insurance plan for married couples.",
    image:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600"
},

{
    category:"Pension",
    name:"LIC Smart Pension",
    age:"18-65 Years",
    premium:"Single / Regular",
    description:"Retirement plan providing regular pension income.",
    image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
},

{
    category:"Term",
    name:"LIC Protection Plus",
    age:"18-60 Years",
    premium:"Yearly",
    description:"Comprehensive financial protection with high life cover.",
    image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
}

];
const container = document.getElementById("policyContainer");

if (container) {

    policies.forEach(policy => {

        container.innerHTML += `

        <div class="policy-card" data-category="${policy.category}">

            <img src="${policy.image}" alt="${policy.name}">

            <h3>${policy.name}</h3>

            <p>${policy.description}</p>

            <p><b>Age:</b> ${policy.age}</p>

            <p><b>Premium:</b> ${policy.premium}</p>

            <div class="policy-buttons">

                <button onclick="enquirePolicy('${policy.name}')">
                💬 WhatsApp
                </button>

                <a href="tel:9618745467" class="call-btn">
                📞 Call
                </a>

                <a href="policy.html?plan=${policy.name.toLowerCase().replace(/ /g,'-')}" class="call-btn">
                📖 Know More
                </a>
                <a href="contact.html" class="primary-btn">
Apply Now
</a>

            </div>

        </div>

        `;

    });
    document.getElementById("policyCount").textContent =
policies.length + " Policies Available";

}
function filterPolicies(category){

const cards = document.querySelectorAll(".policy-card");

cards.forEach(card => {

    if(category === "All"){

        card.style.display = "block";

        return;

    }

    if(card.dataset.category === category){

        card.style.display = "block";

    }else{

        card.style.display = "none";

    }

});

}
