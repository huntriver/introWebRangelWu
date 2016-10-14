/*****************************************
 * Lottery Picker (By Kurt at kurt.grigg@virgin.net)
 * Featured on/available at http://www.dynamicdrive.com/
 * Modified by DynamicDrive.com for below config options
 * This notice must stay intact for use.
 *****************************************/

var totalnumbers=4 //input total numbers to generate
var lowerbound=1   //input lower bound for each random number
var upperbound=49  //input upper bound for each random number

function lotto(){
    B=' ';
    LottoNumbers=new Array();
    for (i = 1; i <= totalnumbers; i++)
    {
        RandomNumber = Math.round(lowerbound+Math.random()*(upperbound-lowerbound));
        for (j = 1; j <= totalnumbers; j)
        {
            if (RandomNumber == LottoNumbers[j])
            {
                RandomNumber=Math.round(lowerbound+Math.random()*(upperbound-lowerbound));
                j=0;
            }
            j++;
        }
        LottoNumbers[i]=RandomNumber;
    }
    LottoNumbers=LottoNumbers.toString();
    X=LottoNumbers.split(',');
    for (i=0; i < X.length; i++)
    {
        X[i]=X[i]+' ';
        if (X[i].length==2)
            X[i]='0'+X[i];
    }
    X=X.sort();
    for (i=0; i < X.length; i++)
    {
        OutPut=B+=X[i];
    }
    if (document.all)document.all.layer1.innerHTML=OutPut;
    if (document.getElementById)document.getElementById("layer1").innerHTML=OutPut;
    if (document.layers){
        document.layers.layer1.document.open();
        document.layers.layer1.document.write("<span style='position:absolute;top:0px;left:0px;font-family:Verdana;font-size:20px;color:#888888;text-align:center'> "+OutPut+"</span>");
        document.layers.layer1.document.close();
    }
    T=setTimeout('lotto()',20);
//window.status=OutPut;
}
function StOp(){
    setTimeout('clearTimeout(T)',1000);
}
