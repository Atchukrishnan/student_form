document.getElementById("save_btn").addEventListener("click", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var gender = document.querySelector("input[name='gender']:checked");
    var course_list = document.getElementById("course_list").value;
    var email = document.getElementById("email").value.trim();
    var table_data = document.getElementById("table_data");

    if (!name || !age || !gender || !course_list || !email) {
        alert("Please fill all the fields");
        return;
    }

    // Show the table when data is added
    table_data.style.display = "table";

    var newRow = table_data.getElementsByTagName("tbody")[0].insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = gender.value;
    newRow.insertCell(3).innerText = course_list;
    newRow.insertCell(4).innerText = email;

    var deleteCell = newRow.insertCell(5);
    var delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.style.cursor = "pointer";
    delete_btn.style.backgroundColor = "red";
    delete_btn.style.color = "white";
    delete_btn.style.border = "none";
    delete_btn.style.padding = "5px 10px";
    delete_btn.style.borderRadius = "5px";

    delete_btn.addEventListener("click", function () {
        newRow.remove();
        if (table_data.getElementsByTagName("tbody")[0].rows.length === 0) {
            table_data.style.display = "none"; // Hide table when no rows remain
        }
    });

    deleteCell.appendChild(delete_btn);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    if (gender) gender.checked = false;
    document.getElementById("course_list").value = "Javascript";
    document.getElementById("email").value = "";
});
