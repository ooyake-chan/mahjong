let dealer_payment = 0;
let payment =0;
let win_point = 0;

//満貫以上
function CheckOverPoint(Han,Hu){
    if(Han >= 13){
        win_point = "役満";
        result.innerHTML=`${win_point}`;
        payment = 8000;
        payment_non_dealer.innerHTML=`${payment}`;
        dealer_payment = 16000;
        payment_dealer.innerHTML=`${dealer_payment}`;
    }else if(Han >= 11 && Han < 13){
        win_point = "三倍満";
        result.innerHTML=`${win_point}`;
        payment = 6000;
        payment_non_dealer.innerHTML=`${payment}`;
        dealer_payment = 12000;
        payment_dealer.innerHTML=`${dealer_payment}`;
    }else if(Han >= 8 && Han < 11){
        win_point = "倍満";
        result.innerHTML=`${win_point}`;
        payment = 4000;
        payment_non_dealer.innerHTML=`${payment}`;
        dealer_payment = 8000;
        payment_dealer.innerHTML=`${dealer_payment}`;
    }else if(Han >= 6 && Han < 8){
        win_point = "跳満";
        result.innerHTML=`${win_point}`;
        payment = 3000;
        payment_non_dealer.innerHTML=`${payment}`;
        dealer_payment = 6000;
        payment_dealer.innerHTML=`${dealer_payment}`;
    }else if(Han == 5){
        win_point = "満貫";
        result.innerHTML=`${win_point}`;
        payment = 2000;
        payment_non_dealer.innerHTML=`${payment}`;
        dealer_payment = 4000;
        payment_dealer.innerHTML=`${dealer_payment}`;
    }else if(Hu >= 40 && Han >= 4){
        // muratyugomennne
        win_point = "満貫";
        result.innerHTML=`${win_point}`;
        payment = 2000;
        payment_non_dealer.innerHTML=`${payment}`;
        dealer_payment = 4000;
        payment_dealer.innerHTML=`${dealer_payment}`;
    }
}
// 親の支払額を計算して表示
function paymentDealer(){
    dealer_payment = basicPoint()*2;
    dealer_payment = Math.ceil(dealer_payment/100)*100;
    payment_dealer.innerHTML=`${dealer_payment}`;
    return dealer_payment;
}
// 子の支払額を計算して表示
function paymentNonDealer(){
    payment = basicPoint();
    payment = Math.ceil(payment/100)*100;
    payment_non_dealer.innerHTML=`${payment}`;
    return payment;
}
/// もらえる合計点を計算して表示
function winPoint(){
    let win_point = 0;
    win_point = basicPoint()*4;
    win_point = Math.ceil(win_point/100)*100;
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
    paymentDealer();
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
//     paymentDealer();
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
//     paymentDealer();
//     paymentNonDealer();
//     winPoint();
//     clickAlert();
//     reset();
// }