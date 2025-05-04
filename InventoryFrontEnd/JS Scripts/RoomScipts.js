$(document).ready(function () {
    $("#addroombtn").click(function () {
        $("#error_message").text("");
        var add_room_name = $("#add_room_name").val();
        if (add_room_name === '') {
            showErrorMessage("Please supply a Room Name.");
            return;
        }
        var add_floor_level = $("#add_floor_level").val();
        if (add_floor_level === null || add_floor_level === '') {
            showErrorMessage("Please choose a valid Floor Level.");
            return;
        }
        var add_room_description = $("#add_room_description").val();
        var add_campus_name = $("#add_campus_name").val();

        var addroomdata = {
            add_room_name: add_room_name,
            add_floor_level: add_floor_level,
            add_room_description: add_room_description,
            add_campus_name: add_campus_name
        };

        $.ajax({
            type: "POST",
            url: "/Inventory/createrooms",
            data: addroomdata,
            success: function (response) {
                if (response.indexOf("Successfully added") !== -1) {
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
        // Assuming your response contains a specific success message
        var successMessage = "Successfully added"; // Modify as needed
        if (response.indexOf(successMessage) !== -1) {
            $("#success_message").text(successMessage);
            $("#model_success").modal("show");


            setTimeout(function () {
                location.reload();
            }, 1000);
        } else {
            // Handle unexpected response here
            showErrorMessage("Unexpected response: " + response);
        }
    }
});


$(document).ready(function () {
    $("#updateroombtn").click(function () {
        $("#error_message").text("");
        var update_room_name = $("#update_room_name").val();
        if (update_room_name === '') {
            showErrorMessage("Please supply a Room Name.");
            return;
        }
        var update_floorlevel = $("#update_floorlevel").val();
        if (update_floorlevel === null || update_floorlevel === '') {
            showErrorMessage("Please choose a valid Floor Level.");
            return;
        }
        var update_room_description = $("#update_room_description").val();
        var update_room_id = $("#update_room_id").val();
        var add_campus_name = $("#add_campus_name").val();

        var addroomdata = {
            update_room_name: update_room_name,
            update_floorlevel: update_floorlevel,
            update_room_description: update_room_description,
            update_room_id: update_room_id,
            add_campus_name: add_campus_name

        };

        $.ajax({
            type: "POST",
            url: "/Inventory/updaterooms",
            data: addroomdata,
            success: function (response) {
                if (response.indexOf("Successfully updated item") !== -1) {
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
        // Assuming your response contains a specific success message
        var successMessage = "Successfully updated item"; // Modify as needed
        if (response.indexOf(successMessage) !== -1) {
            $("#success_message").text(successMessage);
            $("#model_success").modal("show");

            setTimeout(function () {
                location.reload();
            }, 1000);
        } else {
            // Handle unexpected response here
            showErrorMessage("Unexpected response: " + response);
        }
    }
});

// JavaScript function to handle row click event and navigate to the specified URL
document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".clickable-row");

    rows.forEach(function (row) {
        row.addEventListener("click", function () {
            const href = this.getAttribute("data-href");
            if (href) {
                window.location.href = href;
            }
        });
    });
});

// JavaScript function to set values in the update room modal
function setoUPDATErooms(Room_name, Room_description, Floor_level, ID) {
    document.getElementById('update_room_name').value = Room_name;
    document.getElementById('update_floorlevel').value = Floor_level;
    document.getElementById('update_room_description').value = Room_description;

    // Get the room_id from the data-room-id attribute
    var roomIdInput = document.getElementById('update_room_id');
    roomIdInput.value = ID;
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



$(document).ready(function () {
    var rowsPerPage = 10;
    var rows = $('table tbody tr');
    var pagination = $('#pagination');
    var rowsCount = rows.length;
    var pageCount = Math.ceil(rowsCount / rowsPerPage);

    function displayRows(page) {
        rows.hide();
        var start = page * rowsPerPage;
        rows.slice(start, start + rowsPerPage).show();
    }

    function setupPagination() {
        pagination.empty();
        for (var i = 0; i < pageCount; i++) {
            pagination.append(
                `<li class="page-item"><a class="page-link" href="#">${i + 1}</a></li>`
            );
        }
        pagination.find('li:first').addClass('active');
    }

    setupPagination();
    displayRows(0);

    pagination.on('click', 'li', function (e) {
        e.preventDefault();
        var index = $(this).index();
        pagination.find('li').removeClass('active');
        $(this).addClass('active');
        displayRows(index);
    });

    // Click row redirect
    $('.clickable-row').click(function () {
        window.location = $(this).data('href');
    });
});