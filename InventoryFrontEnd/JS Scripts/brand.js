$(document).ready(function () {
    $("#addbrandbtn").click(function () {
        $("#error_message").text("");

        var add_brand = $("#Brand_name").val();
        var add_campus = $("#Campus_name").val();

        var branddata = {
            add_brand: add_brand,
            add_campus: add_campus,

        };
        $.ajax({
            type: "POST",
            url: "/Inventory/addbrand",
            data: branddata,
            success: function (response) {
                if (response.indexOf("Successfully ADDED BRAND") !== -1) {
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
    $("#updatebtn").click(function () {
        $("#error_message").text("");
        var update_brand_id = $("#update_brand_id").val();
        if (update_brand_id === '') {
            showErrorMessage("Please supply a Brand");
            return;
        }
        var update_brand = $("#update_brand").val();
        if (update_brand === '') {
            showErrorMessage("Please supply a Brand");
            return;
        }
        var update_Campus_name = $("#update_Campus_name").val();


        var updatebranddata = {
            update_brand_id: update_brand_id,
            update_brand: update_brand,
            update_Campus_name: update_Campus_name
        };

        $.ajax({
            type: "POST",
            url: "/Inventory/updatebrand",
            data: updatebranddata,
            success: function (response) {
                if (response.indexOf("Successfully added brand") !== -1) {
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
        var successMessage = "Successfully added brand"; // Modify as needed
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

document.addEventListener("DOMContentLoaded", function () {
    // ... (your existing script for clickable rows)
});

function setUpdateFields(id, Brandname, Campus_name) {
    document.getElementById('update_brand_id').value = id;
    document.getElementById('update_brand').value = Brandname;
    document.getElementById('update_Campus_name').value = Campus_name;
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