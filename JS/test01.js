function test01() {
    const testEl = document.getElementById("mytext");
    console.log(testEl)
    testEl.value = "入力欄の値を変更";
}

function test02() {
    const target = document.querySelector("#qtarget");
    // console.log(target);
    target.classList.add("preparedClass");
}


function test03() {
    const target = document.querySelector("#qtarget");
    target.classList.remove("preparedClass");
}

function test04() {
    const target = document.querySelector("#qtarget");
    target.classList.toggle("preparedClass");
}