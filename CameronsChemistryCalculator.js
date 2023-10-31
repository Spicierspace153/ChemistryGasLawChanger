function Calculate() {
    //variable declaration
    var data1 = document.getElementById('data1').value;
    var Data2 = document.getElementById('data2').value;
    var data3 = document.getElementById('data3').value;
    var type1 = document.getElementById("type1").value;
    var type2 = document.getElementById("type2").value;
    var type3 = document.getElementById("type3").value;
    var missingvariable = 0;
    var samevariable = 0;

    var completedata1 = { number: data1, type: type1, ismissing: };
    var completedata2 = { number: data2, type: type2 };
    var completedata3 = { number: data3, type: type3 };


    //coming up with datatype and assigning if it is the missing data or not
    if (completedata1.type == completedata3.type) {
        samevariable = type2;
        missingvariable = type1;
    }

    if (completedata1.type == completedata2.type) {
        samevariable = type1;
        missingvariable = type3;
    }
    if (completedata2 == completedata3) {
        samevariable = type2;
        missingvariable = type1;

    }


    //choosing the law
    if (missingvariable == 1 && samevariable == 3) {


    }
    if (missingvariable == 2 && samevariable == 1) {


    }
    if (missingvariable == 2 && samevariable == 3) {



    }

    if (missingvariable == 3 && samevariable == 2) {



    }
    if (missingvariable == 1 && samevariable == 2) {

    }
    if (missingvariable == 2 && samevariable == 1) {

    }

}