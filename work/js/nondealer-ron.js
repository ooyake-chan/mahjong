let payment =0;
let win_point = 0;

//満貫以上
function CheckOverPoint(Han,Hu){
    if(Han >= 13){
        win_point = "役満";
        result.innerHTML=`${win_point}`;
        payment = 32000;
        payment_non_dealer.innerHTML=`${payment}`;
    }else if(Han >= 11 && Han < 13){
        win_point = "三倍満";
        result.innerHTML=`${win_point}`;
        payment = 24000;
        payment_non_dealer.innerHTML=`${payment}`;
    }else if(Han >= 8 && Han < 11){
        win_point = "倍満";
        result.innerHTML=`${win_point}`;
        payment = 16000;
        payment_non_dealer.innerHTML=`${payment}`;
    }else if(Han >= 6 && Han < 8){
        win_point = "跳満";
        result.innerHTML=`${win_point}`;
        payment = 12000;
        payment_non_dealer.innerHTML=`${payment}`;
    }else if(Han == 5){
        win_point = "満貫";
        result.innerHTML=`${win_point}`;
        payment = 8000;
        payment_non_dealer.innerHTML=`${payment}`;
    }else if(Hu >= 40 && Han >= 4){
        // muratyugomennne
        win_point = "満貫";
        result.innerHTML=`${win_point}`;
        payment = 8000;
        payment_non_dealer.innerHTML=`${payment}`;
    }
}

// 放銃者の支払額を計算して表示
function paymentNonDealer(){
    payment = basicPoint()*4;
    payment = Math.ceil(payment/100)*100;
    payment_non_dealer.innerHTML=`${payment}`;
    return payment;
}
// もらえる合計点を計算して表示
function winPoint(){
    win_point = 0;
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

    CheckOverPoint(totalHan,totalHu);

    reset();
}
// 計算ボタン
// function clickResult(){
//     getHan();
//     if(totalHan == 0){
//         alert("役がないと上がれません！");
//         return null;
//     }
//     getHu();
//     paymentNonDealer();
//     winPoint();
//     reset();
// }
// function Alert(){
//     getHan();
//     if(totalHan == 0){
//         alert("役がないと上がれません！");
//         return null;
//     }
//     getHu();
//     paymentNonDealer();
//     winPoint();
//     clickAlert();
//     reset();
// }