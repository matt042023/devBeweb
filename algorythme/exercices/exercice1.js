const x = -9
const y = -5
const z = 4



if (x!=0 && y!=0 && z!=0){
    if ((x>0, y>0, z>0) || (x<0, y<0, z>0) || (x>0, y<0, z<0) || (x<0, y>0, z<0)  ){
        console.log("resultat positif")
    }else{
        console.log("resultat negatif")
    }
}else{console.log("vous ne devez entrer que des nombres different de zéro")}
