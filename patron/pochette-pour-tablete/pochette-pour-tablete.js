import { setTailles } from '/editor/function/setTailles.js';

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function appliquerTailles(
    hauteur,
    largeur_,
    mc
) {
    const tailles = {
        hauteur,
        largeur_,
        mc
    };
    try {
        setTailles(tailles);
var my_1, Ax, AY, HY, GY, Jy, Ky, DX, CX;
        
        
        my_1 = 1;
        document.querySelector("#point-1756198865259").setAttribute("cx", (my_1 * 37.7952755906));
        document.querySelector("#point-1756199890153").setAttribute("cx", (my_1 * 37.7952755906));
        Ax = Number(mc) + 1;
        AY = Number(mc) + 1;
        document.querySelector("#point-1756198867939").setAttribute("cx", (Ax * 37.7952755906));
        document.querySelector("#point-1756198878780").setAttribute("cx", (Ax * 37.7952755906));
        document.querySelector("#point-1756198877132").setAttribute("cx", (Ax * 37.7952755906));
        document.querySelector("#point-1756199862000").setAttribute("cx", (Ax * 37.7952755906));
        document.querySelector("#point-1756198867939").setAttribute("cy", (Ax * 37.7952755906));
        document.querySelector("#point-1756198869901").setAttribute("cy", (Ax * 37.7952755906));
        HY = Number(mc) + 1 + Number(hauteur) / 2;
        document.querySelector("#point-1756198878780").setAttribute("cy", (HY * 37.7952755906));
        document.querySelector("#point-1756198873799").setAttribute("cy", (HY * 37.7952755906));
        GY = Number(mc) + 1 + Number(hauteur) / 2 + Number(hauteur);
        document.querySelector("#point-1756198877132").setAttribute("cy", (GY * 37.7952755906));
        document.querySelector("#point-1756198875573").setAttribute("cy", (GY * 37.7952755906));
        Jy = Number(mc) + 1 + Number(hauteur) * 2 + Number(hauteur) / 2;
        document.querySelector("#point-1756199862000").setAttribute("cy", (Jy * 37.7952755906));
        document.querySelector("#point-1756199860414").setAttribute("cy", (Jy * 37.7952755906));
        Ky = Number(mc) * 2 + 1 + Number(hauteur) * 2 + Number(hauteur) / 2;
        document.querySelector("#point-1756199890153").setAttribute("cy", (Ky * 37.7952755906));
        document.querySelector("#point-1756199891938").setAttribute("cy", (Ky * 37.7952755906));
        DX = Number(mc) * 2 + 1 + Number(largeur_);
        document.querySelector("#point-1756198871801").setAttribute("cx", (DX * 37.7952755906));
        document.querySelector("#point-1756199891938").setAttribute("cx", (DX * 37.7952755906));
        CX = Number(mc) + 1 + Number(largeur_);
        document.querySelector("#point-1756198869901").setAttribute("cx", (CX * 37.7952755906));
        document.querySelector("#point-1756198873799").setAttribute("cx", (CX * 37.7952755906));
        document.querySelector("#point-1756198875573").setAttribute("cx", (CX * 37.7952755906));
        document.querySelector("#point-1756199860414").setAttribute("cx", (CX * 37.7952755906));
        
    } catch (error) {
        console.error('Erreur lors de l’application des tailles :', error);
    }
}