$(document).ready(function () {
    $("#addcampus").click(function () {
        $("#error_message").text("");
        var add_campus = $("#add_campus").val();
        if (add_campus === '') {
            showErrorMessage("Please supply a Campus Name.");
            return;
        }
        var addcampusdata = {
            add_campus: add_campus
        };

        $.ajax({
            type: "POST",
            url: "/Inventory/AddCampus",
            data: addcampusdata,
            success: function (response) {

                if (response.indexOf("Successfully added campus") !== -1) {
                    showSuccessMessage(response);
                } else {
                    showErrorMessage(response);
                }
            },
            error: function () {
                showErrorMessage("An error occurred while adding the Campus item");
            },
        });
    });

    function showErrorMessage(message) {
        $("#error_message").text(message);
        $("#model_error").modal("show");
    }

    function showSuccessMessage(response) {

        var successMessage = "Successfully added campus";
        if (response.indexOf(successMessage) !== -1) {
            $("#success_message").text(successMessage);
            $("#model_success").modal("show");


            setTimeout(function () {
                window.location.href = "/Inventory/Campus";
            }, 2000);
        } else {

            showErrorMessage("Unexpected response: " + response);
        }
    }
});

$(document).ready(function () {
    $("#itemslistbtn").click(function () {
        $("#error_message").text("");
        var add_item_name = $("#add_item_name").val();
        if (add_item_name === '') {
            showErrorMessage("Please supply an ITEM NAME.");
            return;
        }

        var add_model = $("#add_model").val();
        if (add_model === '') {
            showErrorMessage("Please supply an ITEM MODEL.");
            return;
        }

        var add_brand = $("#add_brand").val();
        if (add_brand === null || add_brand === '') {
            showErrorMessage("Please choose a valid ITEM BRAND.");
            return;
        }

        var add_serial_number = $("#add_serial_number").val();
        if (add_serial_number === '') {
            showErrorMessage("Please supply an ITEM SERIAL NUMBER.");
            return;
        }

        var add_item_type = $("#add_item_type").val();
        if (add_item_type === null || add_item_type === '') {
            showErrorMessage("Please choose a valid ITEM TYPE.");
            return;
        }

        var add_item_status = $("#add_item_status").val();
        if (add_item_status === null || add_item_status === '') {
            showErrorMessage("Please choose a valid ITEM STATUS.");
            return;
        }

        var add_item_department = $("#add_item_department").val();
        if (add_item_department === null || add_item_department === '') {
            showErrorMessage("Please choose a valid ITEM DEPARTMENT.");
            return;
        }

        var add_date = $("#add_date").val();
        if (add_date === '') {
            showErrorMessage("Please choose a valid DATE.");
            return;
        }

        var add_room = $("#add_room").val();
        if (add_room === null || add_room === '') {
            showErrorMessage("Please choose a valid ROOM NAME.");
            return;
        }

        var add_campus = $("#add_campus").val();
        if (add_campus === '') {
            showErrorMessage("Please supply a CAMPUS NAME.");
            return;
        }
        var itemslistdata = {
            add_item_name: add_item_name,
            add_model: add_model,
            add_brand: add_brand,
            add_serial_number: add_serial_number,
            add_item_type: add_item_type,
            add_item_status: add_item_status,
            add_item_department: add_item_department,
            add_date: add_date,
            add_room: add_room,
            add_campus: add_campus
        };

        $.ajax({
            type: "POST",
            url: "/Inventory/createitems",
            data: itemslistdata,
            success: function (response) {
                if (response.indexOf("Successfully added item") !== -1) {
                    showSuccessMessage(response);
                } else {
                    showErrorMessage(response);
                }
            },
            error: function () {
                showErrorMessage("An error occurred while adding the Room item");
            },
        });
    });

    function showErrorMessage(message) {
        $("#error_message").text(message);
        $("#model_error").modal("show");
    }


    function showSuccessMessage(response) {

        var successMessage = "Successfully added item";
        if (response.indexOf(successMessage) !== -1) {
            $("#success_message").text(successMessage);
            $("#model_success").modal("show");


            setTimeout(function () {
                location.reload();
            }, 1000);
        } else {

            showErrorMessage("Unexpected response: " + response);
        }
    }
});
$(document).ready(function () {
    $("#updateitem").click(function () {
        $("#error_message").text("");
        var update_item_name = $("#update_item_name").val();
        if (update_item_name === '') {
            showErrorMessage("Please supply an ITEM NAME.");
            return;
        }

        var update_model = $("#update_model").val();
        if (update_model === '') {
            showErrorMessage("Please supply an ITEM MODEL.");
            return;
        }

        var update_brand = $("#update_brand").val();
        if (update_brand === null || update_brand === '') {
            showErrorMessage("Please choose a valid ITEM BRAND.");
            return;
        }

        var update_serial_number = $("#update_serial_number").val();
        if (update_serial_number === '') {
            showErrorMessage("Please supply an ITEM SERIAL NUMBER.");
            return;
        }

        var update_item_type = $("#update_item_type").val();
        if (update_item_type === null || update_item_type === '') {
            showErrorMessage("Please choose a valid ITEM TYPE.");
            return;
        }

        var update_room_name = $("#update_room_name").val();
        if (update_room_name === null || update_room_name === '') {
            showErrorMessage("Please choose a valid ROOM NAME.");
            return;
        }

        var update_item_status = $("#update_item_status").val();
        if (update_item_status === null || update_item_status === '') {
            showErrorMessage("Please choose a valid ITEM STATUS.");
            return;
        }

        var update_department = $("#update_department").val();
        if (update_department === null || update_department === '') {
            showErrorMessage("Please choose a valid ITEM DEPARTMENT.");
            return;
        }
        var update_ID = $("#update_ID").val();
        if (update_ID === null || update_ID === '') {
            showErrorMessage("No ID.");
            return;
        }

        var update_add_campus = $("#update_add_campus").val();
        if (update_add_campus === null || update_add_campus === '') {
            showErrorMessage("Please choose a valid Campus_name.");
            return;
        }


        var updaitemdata = {
            update_item_name: update_item_name,
            update_model: update_model,
            update_brand: update_brand,
            update_serial_number: update_serial_number,
            update_item_type: update_item_type,
            update_room_name: update_room_name,
            update_item_status: update_item_status,
            update_department: update_department,
            update_ID: update_ID,
            update_add_campus: update_add_campus
        };
        $.ajax({
            type: "POST",
            url: "/Inventory/UpdateItems",
            data: updaitemdata,
            success: function (response) {
                if (response.indexOf("Successfully updated item") !== -1) {
                    showSuccessMessage(response);
                } else {
                    showErrorMessage(response);
                }
            },
            error: function (error) {
                console.error(error);
                showErrorMessage("An error occurred while updating the item.");
            },
        });
    });

    function showErrorMessage(message) {
        $("#error_message").text(message);
        $("#model_error").modal("show");
    }


    function showSuccessMessage(response) {

        var successMessage = "Successfully Update item";
        if (response.indexOf(successMessage) !== -1) {
            $("#success_message").text(successMessage);
            $("#model_success").modal("show");


            setTimeout(function () {
                location.reload();
            }, 1000);
        } else {

            showErrorMessage("Unexpected response: " + response);
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // ... (your existing script for clickable rows)
});

function setUpdateFields(Item_name, Model, Brand, Serial_number, Item_type, Item_status, Room_name, Department, ID) {
    document.getElementById('update_item_name').value = Item_name;
    document.getElementById('update_model').value = Model;
    document.getElementById('update_brand').value = Brand;
    document.getElementById('update_serial_number').value = Serial_number;
    document.getElementById('update_item_type').value = Item_type;
    document.getElementById('update_item_status').value = Item_status;
    document.getElementById('update_room_name').value = Room_name;
    document.getElementById('update_department').value = Department;
    document.getElementById('update_ID').value = ID;
}
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("tableSearch");
    filter = input.value.toUpperCase();
    table = document.querySelector(".table-striped");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {  // Start loop from index 1 to exclude header
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].innerText || td[j].textContent;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

document.getElementById("tableSearch").addEventListener("keyup", searchTable);

function setUpdatestock(uniform_id) {
    document.getElementById('add_uniform_id').value = uniform_id;
}