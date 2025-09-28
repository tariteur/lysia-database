import { setTailles } from '/editor/function/setTailles.js';

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function appliquerTailles(
    mc,
    hauteur_du_montant_
) {
    const tailles = {
        mc,
        hauteur_du_montant_
    };
    try {
        setTailles(tailles);
var CX, EX, Fx, HX, DY, By, EY, JY, MY, LY, L_1, L_12;
        
        
        CX = Number(mc) + 1;
        EX = Number(mc) + 5;
        Fx = Number(mc) + 9;
        HX = Number(mc) * 2 + 9;
        document.querySelector("#point-1755168021010").setAttribute("cx", (CX * 37.7952755906));
        document.querySelector("#point-1755168023835").setAttribute("cx", (CX * 37.7952755906));
        document.querySelector("#point-1755168025385").setAttribute("cx", (EX * 37.7952755906));
        document.querySelector("#point-1755168043098").setAttribute("cx", (EX * 37.7952755906));
        document.querySelector("#point-1755168027246").setAttribute("cx", (Fx * 37.7952755906));
        document.querySelector("#point-1755168029742").setAttribute("cx", (Fx * 37.7952755906));
        document.querySelector("#point-1755168034586").setAttribute("cx", (HX * 37.7952755906));
        document.querySelector("#point-1755168039252").setAttribute("cx", (HX * 37.7952755906));
        DY = Number(hauteur_du_montant_) + Number(mc) + 2.25;
        By = Number(hauteur_du_montant_) + Number(mc) * 2 + 2.25;
        EY = Number(hauteur_du_montant_) + Number(mc) + 3;
        JY = Number(hauteur_du_montant_) + Number(mc) * 2 + 3;
        document.querySelector("#point-1755168021010").setAttribute("cy", (CX * 37.7952755906));
        document.querySelector("#point-1755168029742").setAttribute("cy", (CX * 37.7952755906));
        document.querySelector("#point-1755168023835").setAttribute("cy", (DY * 37.7952755906));
        document.querySelector("#point-1755168027246").setAttribute("cy", (DY * 37.7952755906));
        document.querySelector("#point-1755168017845").setAttribute("cy", (By * 37.7952755906));
        document.querySelector("#point-1755168039252").setAttribute("cy", (By * 37.7952755906));
        document.querySelector("#point-1755168025385").setAttribute("cy", (EY * 37.7952755906));
        document.querySelector("#point-1755168043098").setAttribute("cy", (JY * 37.7952755906));
        MY = 7;
        LY = 8;
        L_1 = EX - 1;
        L_12 = EX + 1;
        document.querySelector("#point-1755170486946").setAttribute("cy", (MY * 37.7952755906));
        document.querySelector("#point-1755170490551").setAttribute("cy", (MY * 37.7952755906));
        document.querySelector("#point-1755170485305").setAttribute("cy", (LY * 37.7952755906));
        document.querySelector("#point-1755170485305").setAttribute("cx", (EX * 37.7952755906));
        document.querySelector("#point-1755170478880").setAttribute("cx", (EX * 37.7952755906));
        document.querySelector("#point-1755170486946").setAttribute("cx", (L_1 * 37.7952755906));
        document.querySelector("#point-1755170490551").setAttribute("cx", (L_12 * 37.7952755906));
        
    } catch (error) {
        console.error('Erreur lors de l’application des tailles :', error);
    }
}