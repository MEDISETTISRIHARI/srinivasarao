// ==========================================
// ADMIN DASHBOARD
// ==========================================


// ------------------------------------------
// CHECK FIREBASE LOGIN
// ------------------------------------------

firebase.auth().onAuthStateChanged(function(user) {

    if (!user) {

        localStorage.removeItem("adminLoggedIn");

        window.location.href = "admin-login.html";

        return;

    }

    // Firebase user is authenticated
    localStorage.setItem("adminLoggedIn", "true");

    loadEnquiries();

});


// ------------------------------------------
// LOAD ENQUIRIES
// ------------------------------------------

function loadEnquiries() {

    const enquiryContainer =
        document.getElementById("enquiryContainer");

    if (!enquiryContainer) return;


    db.collection("enquiries")
        .get()

        .then(function(snapshot) {

            enquiryContainer.innerHTML = "";


            // Counters

            let total = snapshot.size;

            let pending = 0;

            let contacted = 0;

            let today = 0;


            // Today's date

            const todayDate =
                new Date().toDateString();


            // No enquiries

            if (snapshot.empty) {

                enquiryContainer.innerHTML =
                    "<h2 style='text-align:center;'>No enquiries found.</h2>";

                updateCounters(
                    0,
                    0,
                    0,
                    0
                );

                return;

            }


            // Process every enquiry

            snapshot.forEach(function(doc) {

                const data = doc.data();


                // -------------------------
                // STATUS COUNT
                // -------------------------

                if (data.status === "Contacted") {

                    contacted++;

                } else {

                    pending++;

                }


                // -------------------------
                // TODAY COUNT
                // -------------------------

                let enquiryDate = null;


                if (data.date) {

                    if (data.date.toDate) {

                        enquiryDate =
                            data.date.toDate();

                    } else if (data.date.seconds) {

                        enquiryDate =
                            new Date(
                                data.date.seconds * 1000
                            );

                    } else {

                        enquiryDate =
                            new Date(data.date);

                    }

                }


                if (
                    enquiryDate &&
                    enquiryDate.toDateString() === todayDate
                ) {

                    today++;

                }


                // -------------------------
                // DISPLAY DATE
                // -------------------------

                const displayDate =
                    enquiryDate
                        ? enquiryDate.toLocaleString()
                        : "Not Available";


                // -------------------------
                // CREATE CARD
                // -------------------------

                enquiryContainer.innerHTML += `

                <div
                    class="policy-card enquiry-card"
                    data-policy="${data.policy || ""}">

                    <div class="policy-content">


                        <h3>
                            ${data.name || "Customer"}
                        </h3>


                        ${
                            data.status === "Contacted"

                            ? `
                            <p
                                style="
                                color:green;
                                font-weight:bold;
                                ">
                                🟢 Contacted
                            </p>
                            `

                            : `
                            <p
                                style="
                                color:orange;
                                font-weight:bold;
                                ">
                                🟡 Pending
                            </p>
                            `
                        }


                        <p>
                            <b>ID:</b>
                            ${doc.id}
                        </p>


                        <p>
                            <b>Phone:</b>
                            ${data.phone || ""}
                        </p>


                        <a
                            href="https://wa.me/91${data.phone || ""}"
                            target="_blank"
                            class="primary-btn">

                            💬 WhatsApp Customer

                        </a>


                        <p>
                            <b>Age:</b>
                            ${data.age || ""}
                        </p>


                        <p>
                            <b>Policy:</b>
                            ${data.policy || ""}
                        </p>


                        <p>
                            <b>Date:</b>
                            ${displayDate}
                        </p>


                        <p>
                            <b>Message:</b>
                            ${data.message || ""}
                        </p>


                        <div class="policy-buttons">


                            <!-- DELETE -->

                            <button
                                onclick="deleteEnquiry('${doc.id}')"
                                class="call-btn">

                                🗑 DELETE

                            </button>


                            ${
                                data.status !== "Contacted"

                                ? `

                                <button
                                    onclick="markContacted('${doc.id}')"
                                    class="primary-btn">

                                    ✅ MARK AS CONTACTED

                                </button>

                                `

                                : ""
                            }


                        </div>

                    </div>

                </div>

                `;

            });


            // --------------------------------
            // UPDATE DASHBOARD COUNTERS
            // --------------------------------

            updateCounters(
                total,
                pending,
                contacted,
                today
            );

        })

        .catch(function(error) {

            console.error(
                "Error loading enquiries:",
                error
            );

            alert(
                "Unable to load enquiries: " +
                error.message
            );

        });

}


// ------------------------------------------
// UPDATE COUNTERS
// ------------------------------------------

function updateCounters(
    total,
    pending,
    contacted,
    today
) {

    const totalElement =
        document.getElementById("totalEnquiries");

    const pendingElement =
        document.getElementById("pendingCount");

    const contactedElement =
        document.getElementById("contactedCount");

    const todayElement =
        document.getElementById("todayCount");


    if (totalElement) {

        totalElement.innerText = total;

    }


    if (pendingElement) {

        pendingElement.innerText = pending;

    }


    if (contactedElement) {

        contactedElement.innerText = contacted;

    }


    if (todayElement) {

        todayElement.innerText = today;

    }

}


// ------------------------------------------
// DELETE ENQUIRY
// ------------------------------------------

function deleteEnquiry(id) {

    if (
        !confirm(
            "Are you sure you want to delete this enquiry?"
        )
    ) {

        return;

    }


    db.collection("enquiries")
        .doc(id)
        .delete()

        .then(function() {

            alert(
                "Enquiry deleted successfully."
            );

            loadEnquiries();

        })

        .catch(function(error) {

            console.error(
                "Delete error:",
                error
            );

            alert(
                "Delete failed: " +
                error.message
            );

        });

}


// ------------------------------------------
// MARK AS CONTACTED
// ------------------------------------------

function markContacted(id) {

    db.collection("enquiries")
        .doc(id)
        .update({

            status: "Contacted"

        })

        .then(function() {

            alert(
                "Customer marked as contacted."
            );

            loadEnquiries();

        })

        .catch(function(error) {

            console.error(
                "Mark contacted error:",
                error
            );

            alert(
                "Unable to mark as contacted: " +
                error.message
            );

        });

}


// ------------------------------------------
// SEARCH
// ------------------------------------------

function searchEnquiries() {

    const input =
        document
        .getElementById("searchEnquiry")
        .value
        .toLowerCase();


    const cards =
        document.querySelectorAll(
            ".enquiry-card"
        );


    cards.forEach(function(card) {

        if (
            card.innerText
                .toLowerCase()
                .includes(input)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ------------------------------------------
// FILTER BY POLICY
// ------------------------------------------

function filterByPolicy() {

    const selected =
        document
        .getElementById("policyFilter")
        .value;


    const cards =
        document.querySelectorAll(
            ".enquiry-card"
        );


    cards.forEach(function(card) {

        if (selected === "All") {

            card.style.display = "block";

        }

        else if (
            card.dataset.policy === selected
        ) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}


// ------------------------------------------
// EXPORT EXCEL
// ------------------------------------------

function exportExcel() {

    db.collection("enquiries")
        .get()

        .then(function(snapshot) {

            let data = [];


            snapshot.forEach(function(doc) {

                data.push({
                    ID: doc.id,
                    ...doc.data()
                });

            });


            const worksheet =
                XLSX.utils.json_to_sheet(data);


            const workbook =
                XLSX.utils.book_new();


            XLSX.utils.book_append_sheet(
                workbook,
                worksheet,
                "Enquiries"
            );


            XLSX.writeFile(
                workbook,
                "LIC_Enquiries.xlsx"
            );

        })

        .catch(function(error) {

            alert(
                "Export failed: " +
                error.message
            );

        });

}


// ------------------------------------------
// LOGOUT
// ------------------------------------------

function logoutAdmin() {

    firebase.auth()
        .signOut()

        .then(function() {

            localStorage.removeItem(
                "adminLoggedIn"
            );

            window.location.href =
                "admin-login.html";

        })

        .catch(function(error) {

            alert(
                "Logout failed: " +
                error.message
            );

        });

}


// ------------------------------------------
// GO TO TOP
// ------------------------------------------

window.scrollTo(0, 0);