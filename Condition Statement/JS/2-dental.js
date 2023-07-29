let tc_s = 1, tc_c = 500;
let fl_s = 2, fl_c = 1500;
let rct_s = 4, rct_c = 2500;
let rct_c_s = 6, rct_c_c = 12000;
let br_s = 12, br_c = 35000;
let final_se, final_co, final_tr;
let allData = [];
let updeteindex=null;

const displayTreatment = (t, s, c) => {
    document.getElementById("tre").innerHTML = t;
    document.getElementById("seating").innerHTML = s;
    document.getElementById("costing").innerHTML = c;
    
    final_se = s;
    final_co = c;
    final_tr = t;
}

const handleTreatment = () => {
   let val= document.getElementById("treatment").value;
    // console.log(val);

    if (val === 'Teeth Cleaning') {
        displayTreatment("Teeth Cleaning", tc_s, tc_c);
    } else if (val === 'Filling') {
        displayTreatment("Filling", fl_s, fl_c);
    } else if (val === 'Root Canal Treatment') {
        displayTreatment("Root Canal Treatment", rct_s, rct_c);
    } else if (val === 'RCT + Cover') {
        displayTreatment("RCT + Cover", rct_c_s, rct_c_c);
    } else if (val === 'Braces') {
        displayTreatment("Braces", br_s, br_c);
    }
    document.getElementById("disp").style.display = 'block';
}

const hendeledit = (i) =>{
    // console.log(i);
 
    allData.map((v)=>{
        if (v.id === i){
            document.getElementById("treatment").value=v.treatment;
            document.getElementById("tre").innerHTML=v.treatment;
            document.getElementById("seating").innerHTML=v.seating;
            document.getElementById("costing").innerHTML=v.costing;
            document.getElementById("apt-date").value=v.apt_date;
        }
        
    })  
     let index = allData.findIndex((v) => v.id === i);
     updeteindex=index;
}
const handledelete = (id) => {
    // console.log(id);

    let index = allData.findIndex((v) => v.id === id);
    console.log(index);

    allData.map((v) => v.id);
    // console.log("allllll", allData);

    allData.splice(index, 1)   
    // console.log("allllllvvvvvvvvv", allData);
    displayData();
    
}
const appDate = () => {
    let d = document.getElementById("apt-date").value;

    if (updeteindex === null) {
        let obj = {
            "id": Math.floor(Math.random() * 1000),
            "treatment": final_tr,
            "seating": final_se,
            "costing": final_co,
            "apt_date": d
            };
        allData.push(obj);
    } else {
        // allData[updeteindex].treatment=final_tr;
        // allData[updeteindex].seating=final_se;
        // allData[updeteindex].costing=final_co;
        allData[updeteindex].apt_date=d;
    }
    // console.log();
    updeteindex=null

    displayData();
}

const displayData = () => {
    let print = '';

    print += '<table border="1"> <tr> <th>SrNo.</th> <th>Treatment</th> <th>Seating</th> <th>Costing</th> <th>Action</th></tr>';
    allData.map((v) => {
        let dateAp = new Date(v.apt_date);
        // console.log(dateAp);
        for (let i = 1; i <= v.seating; i++) {
            if (i === 1) {
                print += '<tr>';
                print += '<td>' + i + '</td>';
                print += '<td>' + v.treatment + '</td>';
                print += '<td>' + dateAp.toLocaleDateString() + '</td>';
                print += '<td>' + Math.round(v.costing / v.seating) + '/- </td>';
                print += '<td> <button onclick="handledelete(' + v.id + ')"> Delete </button> '+' <button onclick="hendeledit('+ v.id +')">Update</button></td>';
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
            // console.log(dateAp);
        }
    });
    // document.getElementById('tr-plan').style.display ='block';

    print += '</table>';

    document.getElementById("tr-plan").innerHTML = print;

    // console.log(print);

    document.getElementById("tr-plan").style.display = 'block';
}

let bookRef = document.getElementById("book");
bookRef.addEventListener("click", appDate);