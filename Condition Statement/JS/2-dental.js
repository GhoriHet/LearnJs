let tc_s = 1, tc_c = 500;
let fl_s = 2, fl_c = 1500;
let rct_s = 4, rct_c = 2500;
let rct_c_s = 6, rct_c_c = 12000;
let br_s = 12, br_c = 35000;
let final_se, final_co, final_tr;

let allData = [];

const displayTreatment = (t, s, c) => {
    document.getElementById("tre").innerHTML = t;
    document.getElementById("seating").innerHTML = s;
    document.getElementById("costing").innerHTML = c;

    final_se = s;
    final_co = c;
    final_tr = t;
}

const handleTreatment = () => {
    let val = document.getElementById("treatment").value;
    // console.log(val);

    if (val === 'tc') {
        displayTreatment("Teeth Cleaning", tc_s, tc_c);
    } else if (val === 'fl') {
        displayTreatment("Filling", fl_s, fl_c);
    } else if (val === 'rct') {
        displayTreatment("Root Canal Treatment", rct_s, rct_c);
    } else if (val === 'rct_cover') {
        displayTreatment("RCT + Cover", rct_c_s, rct_c_c);
    } else if (val === 'br') {
        displayTreatment("Braces", br_s, br_c);
    }

    document.getElementById("disp").style.display = 'block';
}
const handleRemove = (id) => {
    console.log(id);

    let index = allData.findIndex((v) => v.id === id);
    console.log(index);

    allData.map((v) => v.id === id);

    allData.splice(id, 1)
    // console.log("aaaaaaaa", allData);

    displayData();

}
const appDate = () => {
    let d = document.getElementById("apt-date").value;
    // console.log(d);

    let obj = {
        "id": Math.floor(Math.random() * 1000),
        "treatment": final_tr,
        "seating": final_se,
        "costing": final_co,
        "apt_date": d
    };
    allData.push(obj)
    // console.log(allData);

    displayData();
}

const displayData = () => {
    let print = '';

    print += '<table border="1"> <tr> <th>SrNo.</th> <th>Treatment</th> <th>Seating</th> <th>Costing</th> <th>Action</th> </tr>';
    allData.map((v) => {
        let dateAp = new Date(v.apt_date);
        for (let i = 1; i <= v.seating; i++) {
            if (i === 1) {
                print += '<tr>';
                print += '<td>' + i + '</td>';
                print += '<td>' + v.treatment + '</td>';
                print += '<td>' + dateAp.toLocaleDateString() + '</td>';
                print += '<td>' + Math.round(v.costing / v.seating) + '/- </td>';
                print += '<td> <button onclick="handleRemove(' + v.id + ')"> Remove </button> </td>'
                print += '</tr>';
                // console.log(dateAp.toLocaleDateString());
            } else {
                dateAp.setDate(dateAp.getDate() + 7);
                print += '<tr>';
                print += '<td>' + i + '</td>';
                print += '<td>' + v.treatment + '</td>';
                print += '<td>' + dateAp.toLocaleDateString() + '</td>';
                print += '<td>' + Math.round(v.costing / v.seating) + '/- </td>';
                print += '</tr>';
            }
        }
    });

    print += '</table>';

    document.getElementById("tr-plan").innerHTML = print;

    // console.log(print);

    document.getElementById("tr-plan").style.display = 'block';
}

let bookRef = document.getElementById("book");
bookRef.addEventListener("click", appDate)