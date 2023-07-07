const PCType = (proVal, ramVal, memoryVal, graphicVal) => {
    // console.log(proVal, ramVal, memoryVal, graphicVal);

    if (proVal === 7000) {
        return 'Student PC';
    } else if (proVal === 12000 && ramVal >= 6000 && memoryVal >= 5000) {
        return 'Professional PC';
    } else if (proVal === 18000 && ramVal >= 6000 && memoryVal >= 5000 && graphicVal === 4500) {
        return 'Gaming PC';
    } else {
        return 'Daily Uses PC';
    }

}

const handleSubmit = () => {
    let pro = document.getElementsByName("pro");
    let ram = document.getElementsByName("ram");
    let memory = document.getElementsByName("memory");
    let graphics = document.getElementsByName("graphics");

    console.log(pro);
    let proVal = 0;
    let ramVal = 0;
    let memoryVal = 0;
    let graphicVal = 0;

    for (let i=0; i<pro.length; i++) {
        if (pro[i].checked) {
            proVal = parseInt(pro[i].value);
        }
    }

    for (let i=0; i<ram.length; i++) {
        if (ram[i].checked) {
            ramVal = parseInt(ram[i].value);
        }
    }

    for (let i=0; i<memory.length; i++) {
        if (memory[i].checked) {
            memoryVal = parseInt(memory[i].value);
        }
    }

    for (let i=0; i<graphics.length; i++) {
        if (graphics[i].checked) {
            graphicVal = parseInt(graphics[i].value);
        }
    }

    let type = PCType(proVal, ramVal, memoryVal, graphicVal);

    let costing = proVal + ramVal + memoryVal + graphicVal;

    document.getElementById("cost").innerHTML = costing;
    document.getElementById("pc_types").innerHTML = type;

    return false;
}