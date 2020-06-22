hu=document.getElementById('hu');
hand=document.getElementById('hand');
result=document.getElementById('result');
payment_non_dealer=document.getElementById('payment_non_dealer');
payment_dealer=document.getElementById('payment_dealer');

// 飜を取得して表示
function getHan(){
    const handCheck = document.hand_form.hand;
    let totalHan = 0;
    for(i = 0 ; i<handCheck.length; i++){
        if(handCheck[i].checked){
            totalHan += parseInt(handCheck[i].value,10);
        }
    }
    console.log(totalHan);
    hand.innerHTML=`${totalHan}`;
}
//符の計算
function getHu(){
    let totalHu = 20;
    
    const agariCheck = document.agari_form.agari;
    for(i=0; i< agariCheck.length;i++){
        if(agariCheck[i].checked){
            totalHu += parseInt(agariCheck[i].value,10)
        }
    }
    console.log(totalHu);
}