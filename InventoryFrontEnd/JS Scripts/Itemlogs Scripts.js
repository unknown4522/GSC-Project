document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".clickable-row");

    rows.forEach(row => {
        row.addEventListener("click", function () {
            const lastLocation = this.querySelector("td[data-last-location]").getAttribute("data-last-location");
            const currentLocation = this.querySelector("td[data-current-location]").getAttribute("data-current-location");
            const requestedBy = this.querySelector("td[data-requested-by]").getAttribute("data-requested-by");
            const transferBy = this.querySelector("td[data-transfer-by]").getAttribute("data-transfer-by");
            const Process = this.querySelector("td[data-process]").getAttribute("data-process");
            const Model = this.querySelector("td[data-itemModel]").getAttribute("data-itemModel");
            const Brand = this.querySelector("td[data-itemBrand]").getAttribute("data-itemBrand");
            const Itemtype = this.querySelector("td[data-itemtype]").getAttribute("data-itemtype");
            const Itemstatus = this.querySelector("td[data-itemstatus]").getAttribute("data-itemstatus");
            const Department = this.querySelector("td[data-itemDepartment]").getAttribute("data-itemDepartment");

            document.getElementById("modalLastLocation").textContent = lastLocation;
            document.getElementById("modalCurrentLocation").textContent = currentLocation;
            document.getElementById("modalRequestedBy").textContent = requestedBy;
            document.getElementById("modalTransferBy").textContent = transferBy;
            document.getElementById("modalProcess").textContent = Process;
            document.getElementById("modalitemmodel").textContent = Model;
            document.getElementById("modalitembrand").textContent = Brand;
            document.getElementById("modalitemtype").textContent = Itemtype;
            document.getElementById("modalitemstatus").textContent = Itemstatus;
            document.getElementById("modalitemdepartment").textContent = Department;

            $('#itemDetailsModal').modal('show');
        });
    });



    $(document).ready(function () {
        function compareDates(a, b) {
            return new Date(b) - new Date(a);
        }
        var $tbody = $("table tbody");
        $tbody.find("tr").sort(function (a, b) {
            var dateA = $(a).find("td:nth-child(3)").text();
            var dateB = $(b).find("td:nth-child(3)").text();
            return compareDates(dateA, dateB);
        }).appendTo($tbody);
    });

    document.addEventListener("DOMContentLoaded", function () {
        const rows = document.querySelectorAll(".clickable-row");

        rows.forEach(row => {
            row.addEventListener("click", function () {
                const lastLocation = this.querySelector("td[data-last-location]").getAttribute("data-last-location");
                const currentLocation = this.querySelector("td[data-current-location]").getAttribute("data-current-location");
                const requestedBy = this.querySelector("td[data-requested-by]").getAttribute("data-requested-by");
                const transferBy = this.querySelector("td[data-transfer-by]").getAttribute("data-transfer-by");
                const Process = this.querySelector("td[data-process]").getAttribute("data-process");
                const Model = this.querySelector("td[data-itemModel]").getAttribute("data-itemModel");
                const Brand = this.querySelector("td[data-itemBrand]").getAttribute("data-itemBrand");
                const Itemtype = this.querySelector("td[data-itemtype]").getAttribute("data-itemtype");
                const Itemstatus = this.querySelector("td[data-itemstatus]").getAttribute("data-itemstatus");
                const Department = this.querySelector("td[data-itemDepartment]").getAttribute("data-itemDepartment");

                document.getElementById("modalLastLocation").textContent = lastLocation;
                document.getElementById("modalCurrentLocation").textContent = currentLocation;
                document.getElementById("modalRequestedBy").textContent = requestedBy;
                document.getElementById("modalTransferBy").textContent = transferBy;
                document.getElementById("modalProcess").textContent = Process;
                document.getElementById("modalitemmodel").textContent = Model;
                document.getElementById("modalitembrand").textContent = Brand;
                document.getElementById("modalitemtype").textContent = Itemtype;
                document.getElementById("modalitemstatus").textContent = Itemstatus;
                document.getElementById("modalitemdepartment").textContent = Department;

                $('#itemDetailsModal').modal('show');
            });
        });
    });

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