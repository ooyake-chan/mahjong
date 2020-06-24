hu=document.getElementById('hu');
hand=document.getElementById('hand');
result=document.getElementById('result');
payment_non_dealer=document.getElementById('payment_non_dealer');
payment_dealer=document.getElementById('payment_dealer');

// 飜を取得して表示
let totalHan = 0;
function getHan(){
    const handCheck = document.hand_form.hand;
    for(i = 0 ; i<handCheck.length; i++){
        if(handCheck[i].checked){
            totalHan += parseInt(handCheck[i].value,10);
        }
    }
    hand.innerHTML=`${totalHan}`;
}
//符の計算
let totalHu = 20;

// 上がりの点数
let agariTotal = 0;
function getAgari(val){
    agariTotal+= parseInt(val,10);
}

// 刻子の点数
function getKotsu(){
    let kotsuTotal = 0;
    let minko_common = document.kotsu.minko_common;
    minko_common = parseInt(minko_common.value,10);
    minko_common *= 2;
    kotsuTotal += minko_common;

    let minko_rare = document.kotsu.minko_rare;
    minko_rare = parseInt(minko_rare.value,10);
    minko_rare *= 4;
    kotsuTotal += minko_rare;

    let anko_common = document.kotsu.anko_common;
    anko_common = parseInt(anko_common.value,10);
    anko_common *= 4;
    kotsuTotal += anko_common;

    let anko_rare = document.kotsu.anko_rare;
    anko_rare = parseInt(anko_rare.value,10);
    anko_rare *=8;
    kotsuTotal +=  anko_rare;
 
    return  kotsuTotal;
}

// 槓子の点数
function getKantsu(){
    let kantsuTotal = 0;
    let minkan_common = document.kantsu.minkan_common;
    minkan_common = parseInt(minkan_common.value,10);
    minkan_common *= 8;
    kantsuTotal += minkan_common;

    let minkan_rare = document.kantsu.minkan_rare;
    minkan_rare = parseInt(minkan_rare.value,10);
    minkan_rare *= 16;
    kantsuTotal += minkan_rare;

    let ankan_common = document.kantsu.ankan_common;
    ankan_common = parseInt(ankan_common.value,10);
    ankan_common *= 16;
    kantsuTotal += ankan_common;

    let ankan_rare = document.kantsu.ankan_rare;
    ankan_rare = parseInt(ankan_rare.value,10);
    ankan_rare *=32;
    kantsuTotal +=  ankan_rare;

    return kantsuTotal;
}

// 雀頭の点数
let atamaTotal = 0;
function getAtama(val){
    atamaTotal += parseInt(val,10);
}

// 待ちの形の点数
let matiTotal = 0;
function getMati(val){
    matiTotal += parseInt(val,10);
}

// 点数を合計
function getHu(){
    alert("副底が20");
    totalHu += agariTotal;
    alert(`上がりは${agariTotal}`);
    totalHu += getKotsu();
    alert(` 刻子は${getKotsu()}`);
    totalHu += getKantsu();
    alert(`槓子は${getKantsu()}`);
    totalHu += atamaTotal;
    alert(`頭は${atamaTotal}`);
    totalHu += matiTotal;
    alert(`待ちの形は${matiTotal}`);
    alert(`合計は${totalHu}`);

    // 表示させる
    totalHu = Math.ceil(totalHu/10)*10;
    alert(`${totalHu}符`);
    hu.innerHTML=`${totalHu}`;
}

function clickResult(){
    getHan();
    if(totalHan == 0){
        alert("役がないと上がれません！");
        return null;
    }
    getHu();

    // 基本点
    n = totalHan + 2;
    n = 2**n;
    let basicPoint = 0;
    basicPoint = totalHu*n;
    alert(`基本点は${basicPoint}`);

    //色々リセット
    totalHan = 0;
    agariTotal = 0;
    atamaTotal = 0;
    matiTotal = 0;
    basicPoint = 0;
    totalHu = 20;
}