function Calculate() {
    //variable declaration
    var data1 = document.getElementById('data1').value;
    var data2 = document.getElementById('data2').value;
    var data3 = document.getElementById('data3').value;
    var type1 = document.getElementById("type1").value;
    var type2 = document.getElementById("type2").value;
    var type3 = document.getElementById("type3").value;

    var types = [type1];
    if (!types.includes(type2)) { types.push(type2) };
    if (!types.includes(type3)) { types.push(type3) };
    if (types.length != 2) {
        alert('you dun screwed up a a ron');
        return;
    }

    var algo = getAlgo(types);

    var completedata1 = { number: data1, type: type1, ismissing: false };
    var completedata2 = { number: data2, type: type2, ismissing: false };
    var completedata3 = { number: data3, type: type3, ismissing: false };

    var completedData = [completedata1, completedata2, completedata3];
    //alert(JSON.stringify(completedData));
    completedData.sort(orderByTypeThenSize);
    //alert(JSON.stringify(completedData));
    var actualValue = 0;
var lawused = "";
    switch (algo) {
        case 'A':
            // boyles
           actualValue = boyles(completedData);
            lawused = " boyles";
            break;
        case 'B':
            //charles   
        
            actualValue = charles(completedData);
            lawused = " charles";
            break;
        case 'C':
            
            actualValue = guylussac(completedData );
            lawused = " Gaylussac";
            break;
    }

    alert(lawused);
    alert(actualValue);

}

function getAlgo(types) {
    if (types.includes('1') && types.includes('3')) {
        return "A";
    }
    if (types.includes('1') && types.includes('2')) {
        return "B";
    }
    if (types.includes('2') && types.includes('3')) {
        return "C";
    }
    return "none";

}

function boyles(completedData) {
    var leftValue =0;
    var rightValue = 0;
    if ( completedData[0].type == completedData[1].type) {
        leftValue = completedData[0].number / completedData[1].number;
        rightValue = completedData[2].number;
    }
    if ( completedData[2].type == completedData[1].type) {
        leftValue = completedData[1].number / completedData[2].number;
        rightValue = completedData[0].number;
        

    }
    return rightValue / leftValue;



}
function charles(completedData) {
    var leftValue =0;
    var rightValue = 0;
    if ( completedData[0].type == completedData[1].type) {
        leftValue = completedData[0].number / completedData[1].number;
        rightValue = completedData[2].number;
    }
    if ( completedData[2].type == completedData[1].type) {
        leftValue = completedData[1].number / completedData[2].number;
        rightValue = completedData[0].number;
        

    }
    return rightValue / leftValue;
    


}
function guylussac(completedData) {
    
    var leftValue =0;
    var rightValue = 0;
    if ( completedData[0].type == completedData[1].type) {
        
        leftValue = completedData[0].number / completedData[1].number;
        rightValue = completedData[2].number;
    }
    if ( completedData[2].type == completedData[1].type) {

        leftValue = completedData[1].number / completedData[2].number;
        rightValue = completedData[0].number;
        

    }

    return rightValue / leftValue;


}

function orderByTypeThenSize(first, second) {
    return first.type.localeCompare(second.type) || second.number - first.number;

}