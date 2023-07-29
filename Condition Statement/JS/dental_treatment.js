let s1 = 1, c1 = 500;
let s2 = 2, c2 = 1500;
let s3 = 4, c3 = 2500;
let s4 = 6, c4 = 12000;
let s5 = 12, c5 = 35000;
let final_treatment, final_seating, final_costing;
let allData = [];
let updateIndex = null

const handleTreatments = (treatments, seating, costing) => {
    document.getElementById('treatmentSelect').innerHTML = treatments;
    document.getElementById('seatingSelect').innerHTML = seating;
    document.getElementById('costingSelect').innerHTML = costing + '/-';
    document.getElementById('treatmentDetailsBlock').style.display = 'block';

    final_treatment = treatments;
    final_seating = seating;
    final_costing = costing;
}

function Treatments() {
    let treatmentData = document.getElementById('treatment').value;

    if (treatmentData === 'Teeth Cleanings') {
        handleTreatments('Teeth Cleanings', s1, c1);
    } else if (treatmentData === 'Fillings') {
        handleTreatments('Fillings', s2, c2);
    } else if (treatmentData === 'Root Canal Treatment') {
        handleTreatments('Root Canal Treatment', s3, c3);
    } else if (treatmentData === 'RCT + Cover') {
        handleTreatments('RCT + Cover', s4, c4);
    } else if (treatmentData === 'Braces/Invisalign') {
        handleTreatments('Braces/Invisalign', s5, c5);
    }
}
const handleRemove = (id) => {
    // console.log(id);
    let index = allData.findIndex((v) => v.id === id); // console.log(index);

    allData.map((v) => v.id);  // console.log("allllll", allData);

    allData.splice(index, 1)   // console.log("allllllvvvvvvvvv", allData);
    DisplayData();
}
const handelEdit = (i) => {
    allData.map((v) => {
        if (v.id === i) {
            document.getElementById('treatment').value = v.treatment;
            document.getElementById("treatmentSelect").innerHTML = v.treatment;
            document.getElementById("seatingSelect").innerHTML = v.seating;
            document.getElementById("costingSelect").innerHTML = v.costing;
            document.getElementById("aptDate").value = v.apt_date;
        }
    });
    let index = allData.findIndex((v) => v.id === i);
    updateIndex = index
}

const handleAptDate = () => {
    let getAptDate = document.getElementById('aptDate').value;
    document.getElementById('treatmentsPlan').style.display = 'block';
    if (updateIndex === null) {
        let obj = {
            "id": Math.floor(Math.random() * 1000),
            "treatment": final_treatment,
            "seating": final_seating,
            "costing": final_costing,
            "apt_date": getAptDate
        };
        allData.push(obj);
    } else {
        allData[updateIndex].apt_date = getAptDate;
    }
    updateIndex = null;
    DisplayData();
}

const DisplayData = () => {
    let data = '';

    data += '<table border="1"> <tr> <th>SrNo.</th> <th>Treatment</th> <th>Seating</th> <th>Costing</th> <th>Remove</th> <th>Edit</th> </tr>';
    allData.map((v) => {
        let newAptDate = new Date(v.apt_date);
        for (SrNo = 1; SrNo <= v.seating; SrNo++) {
            if (SrNo === 1) {
                data += '<tr>';
                data += '<td>' + SrNo + '</td>';
                data += '<td>' + v.treatment + '</td>';
                data += '<td>' + newAptDate.toLocaleDateString() + '</td>';
                data += '<td>' + Math.round(v.costing / v.seating) + '/- </td>';
                data += '<td> <button onclick="handleRemove(' + v.id + ')"> <i class="fa-solid fa-trash"></i> </button> </td>'
                data += '<td> <button onclick="handelEdit(' + v.id + ')"> <i class="fa-regular fa-pen-to-square"></i> </button> </td>'
                data += '</tr>';
            } else {
                newAptDate.setDate(newAptDate.getDate() + 7);
                data += '<tr>';
                data += '<td>' + SrNo + '</td>';
                data += '<td>' + v.treatment + '</td>';
                data += '<td>' + newAptDate.toLocaleDateString() + '</td>';
                data += '<td>' + Math.round(v.costing / v.seating) + '/- </td>';
                data += '<td></td>';
                data += '<td></td>';
                data += '</tr>';
            }
        }
    });
    data += '</table>';

    document.getElementById("plan1").innerHTML = data;
    document.getElementById("plan1").style.display = 'block';
}