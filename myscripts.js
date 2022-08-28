function Add(x) {
    var table = document.getElementById(x);
    var rowCount = document.getElementById(x).rows.length
    var rowId=rowCount
    var rows = table.insertRow(rowId);
    var cell1 = rows.insertCell(0);
    var cell2 = rows.insertCell(1);
   
  var rown   = rowCount
  rown=rown+1
  var label
  var textarea
  if (x=="Steps"){
       label="Step ";
       textarea='<td><textarea type="text" rows="4" cols="50"></textarea></td>'
      
  }
  else
  {
      label="";
      textarea='<td><textarea type="text" rows="1" cols="55"></textarea></td>'
  }
    cell1.innerHTML = label+rown;
  
    cell2.innerHTML = textarea;
  
    
  }