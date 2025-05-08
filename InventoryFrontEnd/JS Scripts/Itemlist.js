



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
function setUpdatestock(uniform_id) {
    document.getElementById('add_uniform_id').value = uniform_id;
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