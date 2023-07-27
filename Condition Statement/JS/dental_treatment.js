let s1 = 1, c1 = 500;
let s2 = 2, c2 = 1500;
let s3 = 4, c3 = 2500;
let s4 = 6, c4 = 12000;
let s5 = 12, c5 = 35000;
let final_treatment, final_seating, final_costing;

let allData = [];

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
        handleTreatments('Braces/Invisalign', s5, c5);
    }
}

const handleAptDate = () => {
    // let getAptDate = document.getElementById('aptDate').value;
    // document.getElementById('treatmentsPlan').style.display = 'block';

    // let newAptDate = new Date(getAptDate);
    // let perSeatCosting = Math.round(final_costing / final_seating);

    // let data = '<tr> <th> Sr No : </th> <th> Appoinment Date </th> <th> Charge </th> </tr>'
    // for (SrNo = 1; SrNo <= final_seating; SrNo++) {

    //     if (SrNo === 1) {
    //         newAptDate.setDate(newAptDate.getDate());
    //     } else {
    //         newAptDate.setDate(newAptDate.getDate() + 7);
    //     }

    //     let finalAptDate = newAptDate.toLocaleDateString();
    //     //    console.log(finalAptDate);
    //     data += '<tr>'
    //     data += '<td>' + SrNo + '</td>'
    //     data += '<td>' + finalAptDate + '</td>'
    //     data += '<td>' + perSeatCosting + '/- </td>'
    //     data += '</tr>'
    // }

    let getAptDate = document.getElementById('aptDate').value;
    document.getElementById('treatmentsPlan').style.display = 'block';
    // console.log(d);

    let obj = {
        "id": Math.floor(Math.random() * 1000),
        "treatment": final_treatment,
        "seating": final_seating,
        "costing": final_costing,
        "apt_date": getAptDate
    };
    allData.push(obj)

    let data = '';

    data += '<table border="1"> <tr> <th>SrNo.</th> <th>Treatment</th> <th>Seating</th> <th>Costing</th> <th>Action</th> </tr>';
    allData.map((v) => {
        let newAptDate = new Date(v.apt_date);
        for (SrNo = 1; SrNo <= v.seating; SrNo++) {
            if (SrNo === 1) {
                data += '<tr>';
                data += '<td>' + SrNo + '</td>';
                data += '<td>' + v.treatment + '</td>';
                data += '<td>' + newAptDate.toLocaleDateString() + '</td>';
                data += '<td>' + Math.round(v.costing / v.seating) + '/- </td>';
                data += '<td> <button onclick="handleRemove(' + v.id + ')"> Remove </button> </td>'
                data += '</tr>';
                // console.log(dateAp.toLocaleDateString());
            } else {
                newAptDate.setDate(newAptDate.getDate() + 7);
                data += '<tr>';
                data += '<td>' + SrNo + '</td>';
                data += '<td>' + v.treatment + '</td>';
                data += '<td>' + newAptDate.toLocaleDateString() + '</td>';
                data += '<td>' + Math.round(v.costing / v.seating) + '/- </td>';
                data += '</tr>';
            }
        }
    });

    data += '</table>';

    document.getElementById("plan1").innerHTML = data;
    document.getElementById("plan1").style.display = 'block';
}