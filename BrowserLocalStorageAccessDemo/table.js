$(document).ready(function(){

	var arr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

	

	for(var i=0; i<arr.length; i++){
		var temp = JSON.parse(arr[i]);
		console.log(temp.name);
		var str = "<tr>"+
		"<td align=\"center\">"+temp.name+"</td>"+
		"<td align=\"center\">"+temp.id+"</td>"+
		"<td align=\"center\">"+temp.salary+"</td>"+
		"<td align=\"center\"><button onclick=\"removerow(this)\">remove</button></td>"
		"</tr>";
		$("#tbody").append(str);
	}

	$("#addmore").click(function(){
		$("#inputdiv").show();	
		$("#addmore").hide();
		clear();
	})

	$("#addbtn").click(function(){
		event.preventDefault();

		if (!validation()) {
			return;
		}
		$("#inputdiv").hide();
		$("#addmore").show();
		addintable();
	})
})


function addintable(){
	var name = $("#name").val();
	var id = $("#id").val();
	var salary = $("#salary").val();
	console.log(name,id,salary);
	
	var temp = {};
	temp.name = name;
	temp.id = id;
	temp.salary = salary;
	saveinlocal(temp);

	var str = "<tr>"+
	"<td align=\"center\">"+name+"</td>"+
	"<td align=\"center\">"+id+"</td>"+
	"<td align=\"center\">"+salary+"</td>"+
	"<td align=\"center\"><button onclick=\"removerow(this)\">remove</button></td>"
	"</tr>";
	$("#tbody").append(str);

}


function clear(){
	$("#name").val("");
	$("#id").val("");
	$("#salary").val("");
}

function removerow(rr){
	var row=rr.parentNode.parentNode;
	var ind = row.rowIndex;
	var aa = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
	console.log(aa);
	aa.splice( ind-1, 1 );
	localStorage.setItem('items',JSON.stringify(aa));
	$(rr).closest("tr").remove();
}

function validation(){
	if(isNaN($("#salary").val())){
		alert("invalid salary. must be a number..");
		$("#salary").focus();
		return false;
	}
	return true;
}

function saveinlocal(temp){
	console.log("saving in local");
	var temp = JSON.stringify(temp);
	console.log(temp);
	var aa = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
	aa.push(temp);
	localStorage.setItem('items',JSON.stringify(aa));
	console.log("saved\n\n");
}

