$(document).ready(function () {
    var item = "item Name";
    var description = "item description";
    var str = "<tr>" +
        "<td align=\"center\">"+item+"</td>" +
        "<td align=\"center\">"+description+"</td>" +
        "<td align=\"center\"><button class=\"btn btn-warning\" onclick=\"editRow(this)\">Edit</button></td>" +
        "<td align=\"center\"><button class=\"btn btn-danger\" onclick=\"removeRow(this)\">Remove</button></td>" +
        "</tr>";
    $("#tbody").append(str);

    $('#addBtn').click(function () {
        $("#addBtnDiv").hide();
        $("#addItemDiv").show();
        $("#editItemDiv").hide();
    })

    $("#cancel").click(function () {
        $("#addBtnDiv").show();
        $("#addItemDiv").hide();
        $("#editItemDiv").hide();
    })

    $("#cancel2").click(function () {
        $("#addBtnDiv").show();
        $("#addItemDiv").hide();
        $("#editItemDiv").hide();
    })

    $("#saveItem").click(function () {
        event.preventDefault();
        if(!validate()) return;
        $("#addBtnDiv").show();
        $("#addItemDiv").hide();
        $("#editItemDiv").hide();
        addRow();
    })
    $("#saveItem2").click(function () {
        event.preventDefault();
        $("#addBtnDiv").show();
        $("#addItemDiv").hide();
        $("#editItemDiv").hide();
        updateRow();
    })
})

function validate() {
    if ($("#item").val().length<=0){
        $("#item").focus();
        return false;
    }
    return true;
}


function addRow() {
    var item = $("#item").val();
    var description = $("#description").val();
    var str = "<tr>" +
        "<td align=\"center\">"+item+"</td>" +
        "<td align=\"center\">"+description+"</td>" +
        "<td align=\"center\"><button class=\"btn btn-warning\" onclick=\"editRow(this)\">Edit</button></td>" +
        "<td align=\"center\"><button class=\"btn btn-danger\" onclick=\"removeRow(this)\">Remove</button></td>" +
        "</tr>";
    $("#tbody").append(str);
}

function editRow(rr) {
    var table = rr.parentNode.parentNode.parentNode;
    var row = rr.parentNode.parentNode.rowIndex - 1;
    var item = table.rows[row].cells.item(0).innerHTML;
    var description = table.rows[row].cells.item(1).innerHTML;
    $("#addBtnDiv").hide();
    $("#addItemDiv").hide();
    $("#editItemDiv").show();

    $("#rowIndex").val(row);
    $("#item2").val(item);
    $("#description2").val(description);
}

function updateRow() {
    var item = $("#item2").val();
    var description = $("#description2").val();
    var row = parseInt($("#rowIndex").val());
    var table = document.getElementById("tableId");
    table.rows[row+1].cells[0].innerHTML = item;
    table.rows[row+1].cells[1].innerHTML = description;
}

function removeRow(rr) {
    $(rr).closest("tr").remove();
}