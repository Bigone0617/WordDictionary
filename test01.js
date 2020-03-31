function selectText(){
    var selectT = "";
    var returnText = "";

    if(document.getSelection){
        selectT = document.getSelection();
    }else if (document.selection){
        selectT = document.selection.createRange().text;
    }

    if(selectT.toString().indexOf(" ") != -1 || selectT.toString().length == 0){
        returnText = "THAT IS NOT WORD!!"
    }else{
        returnText = selectT.toString();
    }
    return returnText;
}



document.onmouseup = function(){
    alert(selectText());
}