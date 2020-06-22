// 飜を取得
function handTest(){
    let flag = false;
    for(let i = 0 ; i < document.hand_form.elements.length -1; i++){
        if(document.hand_form.elements[i].checked){
            flag=true;
            alert(`${document.hand_form.elements[i].value}が選択されました`);
        }
    }
}
