var a = []
var b = []
var ex1 = [3,5,7,9]
var ex2 = [5,9,54,2]

console.log('hi')
let result = [];
// CARTESIAN PRODUCT GENERATOR
function cart(a, b){

    if (a.length === 0){
        return result;
    } else {
        for (let i = 0; i < b.length; i++){
            result.push([a[0], b[i]])
    
        }
        return cart(a.slice(1), b);
    }
}


    function ldSet(listNodeId, data) {
        var selectElem = document.getElementById(listNodeId);
        selectElem.innerHTML = ''
        data.forEach(function (option) {
            var optionElement = document.createElement("option") 
            optionElement.text = option;
            selectElem.add(optionElement);
        })
    }

    function select1(){
        var selectElem = document.getElementById('set-a');
        selectElem.addEventListener("change", function () {
           
            var selectedOptions = Array.from(selectElem.selectedOptions).map(option => option.text);
            console.log("Selected option:", selectedOptions);
            //load selection to the entry field id="input1"
        })
    }
select1();

function loadRandExSets(){
    a = ex1;
    b = ex2;
    ldSet('set-a', a);
    ldSet('set-b', b)

}

function randInp(input_id){
    rand = Math.floor(Math.random() * 1000);
    inp_node = document.getElementById(input_id);
    inp_node.value = rand;
}

    function clearSet(x){
        if (x == 'a'){
            a = [];
            ldSet('set-a', a);
        } else {
            b = [];
            ldSet('set-b', b)
        }
    }

    function addA() {
        var inputA = document.getElementById("input1");
        var inpVal = inputA.value;
        a.push(inpVal);
        inputA.value = ''
        ldSet('set-a', a);

    }
    function addB() {
        var inputA = document.getElementById("input2");
        var inpVal = inputA.value;
        b.push(inpVal);
        inputA.value = ''
        ldSet('set-b', b);
;
    }

    function remove(set_id) {
        var selectElem = document.getElementById(set_id);
    
        // Check if any option is selected
        if (selectElem.selectedIndex !== -1) {
            // Remove the selected option
            selectElem.remove(selectElem.selectedIndex);
            if (set_id == 'set-a'){
                a.splice(selectElem.selectedIndex, 1);
            } else {
                b.splice(selectElem.selectedIndex, 1);
            }
            
        }
    }
    


function getValue() {
    var seta = a;
    var setb = b;

    var result_node = document.getElementById('result');
    result_node.innerHTML = '';
    var cartRes = cart(seta, setb);
    var output = document.createTextNode(JSON.stringify(cartRes));
    result_node.appendChild(output);
    result = [];
}
function greaterThan(){
    var seta = a;
    var setb = b;
    var greaterRes = []
    
    var cartRes = cart(seta, setb);
    for (let i=0; i < cartRes.length - 1; i++){
        if (cartRes[i][0] > cartRes[i][1]){
            greaterRes.push(cartRes[i])
        }
    }
    var result_node = document.getElementById('result');
    result_node.innerHTML = '';
    var output = document.createTextNode(JSON.stringify(greaterRes));
    result_node.appendChild(output);
    result = [];

        }
 
