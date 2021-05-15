//getting data from input
function insert(){
    let htmlform = document.getElementById("form1");
    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let gender = document.getElementById("gender").value;
    let food = document.getElementsByClassName("food");
    let address = document.getElementById("address").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let pincode = document.getElementById("pincode").value;
    let table = document.getElementById("myTable");
    let clean = document.getElementById("form1");
    if(htmlform.checkValidity()){
        let str = [];
        let countOfFood = 0;
        for(i=0;i<5;i++)//loop for push option of food
        {
            if(food[i].checked === true)
            {
                str.push(food[i].value);
                countOfFood++;
            }
        }
        if(countOfFood < 2){//condition checking atleast 2 food is selected
            alert("Must choose at least 2 out of 5 options")
        }
        else{    //insert  function is for inserting data in table   
        let row = table.insertRow(1);
        let col1 = row.insertCell(0);
        let col2 = row.insertCell(1);
        let col3 = row.insertCell(2);
        let col4 = row.insertCell(3);
        let col5 = row.insertCell(4);
        let col6 = row.insertCell(5);
        let col7 = row.insertCell(6);
        let col8 = row.insertCell(7);        
        col1.innerHTML = fname;
        col2.innerHTML = lname;
        col3.innerHTML = gender;
        col4.innerHTML = str.join(", ")
        col5.innerHTML = address;
        col6.innerHTML = state;
        col7.innerHTML = country;
        col8.innerHTML = pincode;
        clean.reset();
        }         
        return false;
    }
}

