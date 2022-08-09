
var inputs=document.getElementsByClassName("inputs");
var row=1;

function displayDetails()
{
    var name=document.getElementById("name").value;
    var vehicle=document.getElementById("vehicle").value;
    var number=document.getElementById("number").value;
    var entry=document.getElementById("entry").value;
    var exit=document.getElementById("exit").value;

    if(!name||!vehicle||!number||!entry||!exit)
    {
        alert("Fill all the fields");
        return;
    }
    var display=document.getElementById("display");

    var newRow=display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);

    cell1.innerHTML=name;
    cell2.innerHTML=vehicle;
    cell3.innerHTML=number;
    cell4.innerHTML=entry;
    cell5.innerHTML=exit;

    document.getElementById("name").value="";
    document.getElementById("vehicle").value='';
    document.getElementById("number").value='';
    document.getElementById("entry").value='';
    document.getElementById("exit").value='';

    row++;
}