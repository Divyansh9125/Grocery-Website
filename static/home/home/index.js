function add(id){
    _id = Number(id);
    quant = Number(document.getElementById(id+"-quant").innerHTML);

    if(quant>=1 && quant<10){
        quant+=1;
        document.getElementById(String(_id*10+_id)).disbaled = false;
        document.getElementById(id+"-quant").innerHTML = String(quant);
        document.getElementById(String(_id*10+_id)).style.color = "white";
    }else{
        document.getElementById(id).disbaled = true;
        document.getElementById(id).style.color = "grey";
    }
}

function sub(id){
    _id = Number(id);
    quant = Number(document.getElementById(String((_id)/11)+"-quant").innerHTML);

    if(quant>1 && quant<=10){
        quant-=1;
        document.getElementById(String((_id)/11)+"-quant").innerHTML = String(quant);
        document.getElementById(String((_id)/11)).disbaled = false;
        document.getElementById(String((_id)/11)).style.color = "white";
    }else{
        document.getElementById(id).disbaled = true;
        document.getElementById(id).style.color = "grey";
    }
}