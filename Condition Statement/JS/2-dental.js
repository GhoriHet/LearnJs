let s1 = 1, c1 = 500;
let s2 = 2, c2 = 1500;
let s3 = 4, c3 = 2500;
let s4 = 6, c4 = 12000;
let s5 = 12, c5 = 35000;
let final_treatment, final_seating, final_costing;

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

    if (treatmentData === 'TC') {
        handleTreatments('Teeth Cleanings', s1, c1);
    } else if (treatmentData === 'FL') {
        handleTreatments('Fillings', s2, c2);
    } else if (treatmentData === 'RCT') {
        handleTreatments('Root Canal Treatment', s3, c3);
    } else if (treatmentData === 'RC') {
        handleTreatments('RCT + Cover', s4, c4);
    } else if (treatmentData === 'BI') {
        handleTreatments('RCT + Cover', s5, c5);
    }
}

const handleAptDate = () => {
    let getAptDate = document.getElementById('aptDate').value;
    document.getElementById('treatmentsPlan').style.display = 'block';

    let newAptDate = new Date(getAptDate);
    let perSeatCosting = Math.round(final_costing / final_seating);

    let data = '<tr> <th> Sr No : </th> <th> Appoinment Date </th> <th> Charge </th> </tr>'
    for (SrNo = 1; SrNo <= final_seating; SrNo++) {

        if (SrNo === 1) {
            newAptDate.setDate(newAptDate.getDate());
        } else {
            newAptDate.setDate(newAptDate.getDate() + 7);
        }

        let finalAptDate = newAptDate.toLocaleDateString();
        //    console.log(finalAptDate);
        data += '<tr>'
        data += '<td>' + SrNo + '</td>'
        data += '<td>' + finalAptDate + '</td>'
        data += '<td>' + perSeatCosting + '/- </td>'
        data += '</tr>'
    }
    document.getElementById("plan1").innerHTML = data;
    document.getElementById("plan1").style.display = 'block';
}