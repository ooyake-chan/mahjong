// 放銃者の支払額を計算して表示
function paymentNonDealer(){
    let payment = basicPoint()*4;
    payment = Math.ceil(payment/100)*100;
    payment_non_dealer.innerHTML=`${payment}`;
    return payment;
}
// もらえる合計点を計算して表示
function winPoint(){
    let win_point = 0;
    win_point = paymentNonDealer();
    result.innerHTML=`${win_point}`;
}
// 計算ボタン
function clickResult(){
    getHan();
    if(totalHan == 0){
        alert("役がないと上がれません！");
        return null;
    }
    getHu();
    paymentNonDealer();
    winPoint();
    reset();
}
// 計算ボタン
function clickResult(){
    getHan();
    if(totalHan == 0){
        alert("役がないと上がれません！");
        return null;
    }
    getHu();
    paymentNonDealer();
    winPoint();
    reset();
}
function Alert(){
    getHan();
    if(totalHan == 0){
        alert("役がないと上がれません！");
        return null;
    }
    getHu();
    paymentNonDealer();
    winPoint();
    clickAlert();
    reset();
}