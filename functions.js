function createRow (obj) {

    let text = `
    <tr>
        <th>${obj.maker}</th>
        <th class="asta">${obj.model}</th>
        <th>${obj.storage}</th>
        <th>${obj.color}</th>
    </tr>
    `
    return text;
}

function populateTabel (arr) {
    let text = "";

    for (i=0; i< arr.length; i++) {
        text += createRow(arr[i]);
    }

    let insert = document.querySelector(".tablebody")
    insert.innerHTML = text;
}

function newInput () {

    let 


}