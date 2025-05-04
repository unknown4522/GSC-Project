document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('detailsModal');

    modal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;

        document.getElementById('modalDatePurchased').textContent = button.getAttribute('data-datepurchased') || '';
        document.getElementById('modalRequestBy').textContent = button.getAttribute('data-requestby') || '';
        document.getElementById('modalApproveBy').textContent = button.getAttribute('data-approveby') || '';
        document.getElementById('modalStatus').textContent = button.getAttribute('data-status') || '';
        document.getElementById('modalSupplier').textContent = button.getAttribute('data-supplier') || '';
        document.getElementById('modalReceivedBy').textContent = button.getAttribute('data-receivedby') || '';
        document.getElementById('modalCampusName').textContent = button.getAttribute('data-campusname') || '';
    });
});