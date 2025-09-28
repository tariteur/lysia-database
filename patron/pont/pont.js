import { setTailles } from '/editor/function/setTailles.js';

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function appliquerTailles(
    mc,
    hauteur_du_montant
) {
    const tailles = {
        mc,
        hauteur_du_montant
    };
    try {
        setTailles(tailles);
var basse, BX, Hx, gx, FX, DX, EY, CY, FY, Dy;
        
        
        basse = Number(mc) + 1;
        document.querySelector("#point-1756208197180").setAttribute("cx", (basse * 37.7952755906));
        document.querySelector("#point-1756208205220").setAttribute("cx", (basse * 37.7952755906));
        document.querySelector("#point-1756208197180").setAttribute("cy", (basse * 37.7952755906));
        document.querySelector("#point-1756208201405").setAttribute("cy", (basse * 37.7952755906));
        BX = Number(mc) + 5;
        document.querySelector("#point-1756208201405").setAttribute("cx", (BX * 37.7952755906));
        document.querySelector("#point-1756208215448").setAttribute("cx", (BX * 37.7952755906));
        Hx = Number(mc) + 10;
        document.querySelector("#point-1756208233220").setAttribute("cx", (Hx * 37.7952755906));
        gx = Number(mc) + 8.3;
        document.querySelector("#point-1756208226545").setAttribute("cx", (gx * 37.7952755906));
        FX = Number(mc) + 6.7;
        document.querySelector("#point-1756208217687").setAttribute("cx", (FX * 37.7952755906));
        DX = Number(mc) + 2;
        document.querySelector("#point-1756208207518").setAttribute("cx", (DX * 37.7952755906));
        EY = Number(hauteur_du_montant) + Number(mc) + 1;
        document.querySelector("#point-1756208215448").setAttribute("cy", (EY * 37.7952755906));
        document.querySelector("#point-1756208233220").setAttribute("cy", (EY * 37.7952755906));
        CY = Number(hauteur_du_montant) + Number(mc) + 5;
        document.querySelector("#point-1756208205220").setAttribute("cy", (CY * 37.7952755906));
        document.querySelector("#point-1756208226545").setAttribute("cy", (CY * 37.7952755906));
        FY = (Number(hauteur_du_montant) + Number(mc) + 1) - 1.7;
        document.querySelector("#point-1756208217687").setAttribute("cy", (FY * 37.7952755906));
        Dy = (Number(hauteur_du_montant) + Number(mc) + 4) - 1.7;
        document.querySelector("#point-1756208207518").setAttribute("cy", (Dy * 37.7952755906));
        document.querySelector("#point-1756208197180\\/point-1756208207518\\/point-1756208226545").setAttribute("tension", 0.4);
        document.querySelector("#point-1756208201405\\/point-1756208217687\\/point-1756208233220").setAttribute("tension", 0.3);
        
    } catch (error) {
        console.error('Erreur lors de l’application des tailles :', error);
    }
}