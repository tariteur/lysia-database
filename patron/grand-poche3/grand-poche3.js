import { setTailles } from '/editor/function/setTailles.js';

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function appliquerTailles(
    dasin,
    mc,
    hauteur_du_montant_
) {
    const tailles = {
        dasin,
        mc,
        hauteur_du_montant_
    };
    try {
        setTailles(tailles);
var KX, CE, CD, _1, _12, F, IN, io, KL, D_CM, D_1, UY, VY, XW, FN, FM, DR, T;
        
        
        KX = Number(mc) + 1;
        document.querySelector("#point-1755277983473").setAttribute("cx", (KX * 37.7952755906));
        document.querySelector("#point-1755277981538").setAttribute("cx", (KX * 37.7952755906));
        document.querySelector("#point-1755277968747").setAttribute("cx", (KX * 37.7952755906));
        CE = ((Number(dasin) / 4 + 9) / 2 - 2) + KX;
        CD = CE / 2 + KX / 2;
        document.querySelector("#point-1755277970177").setAttribute("cx", (CD * 37.7952755906));
        document.querySelector("#point-1755625926758").setAttribute("cx", (CD * 37.7952755906));
        document.querySelector("#point-1755626897858").setAttribute("cx", (CD * 37.7952755906));
        document.querySelector("#point-1755278198288").setAttribute("cx", (CD * 37.7952755906));
        document.querySelector("#point-1755510007214").setAttribute("cx", (CD * 37.7952755906));
        _1 = (CE / 2 + KX / 2) - 1;
        document.querySelector("#point-1755626902218").setAttribute("cx", (_1 * 37.7952755906));
        _12 = CE / 2 + KX / 2 + 1;
        document.querySelector("#point-1755626900306").setAttribute("cx", (_12 * 37.7952755906));
        F = CE + Number(mc);
        document.querySelector("#point-1755277975048").setAttribute("cx", (F * 37.7952755906));
        document.querySelector("#point-1755277976626").setAttribute("cx", (F * 37.7952755906));
        IN = (Number(dasin) / 4 + 9) / 2 + KX;
        document.querySelector("#point-1755277973890").setAttribute("cx", (CE * 37.7952755906));
        document.querySelector("#point-1755278188440").setAttribute("cx", (IN * 37.7952755906));
        document.querySelector("#point-1755278187160").setAttribute("cx", (IN * 37.7952755906));
        io = (Number(dasin) / 4 + 9) / 2 + Number(mc) * 2;
        document.querySelector("#point-1755278189010").setAttribute("cx", (io * 37.7952755906));
        document.querySelector("#point-1755278195745").setAttribute("cx", (io * 37.7952755906));
        KL = IN - 1;
        document.querySelector("#point-1755278184307").setAttribute("cx", (KL * 37.7952755906));
        D_CM = Number(mc) + CD;
        document.querySelector("#point-1755278197328").setAttribute("cx", (D_CM * 37.7952755906));
        D_1 = CD - Number(mc);
        document.querySelector("#point-1755278199048").setAttribute("cx", (D_1 * 37.7952755906));
        KX = Number(mc) + 1;
        document.querySelector("#point-1755277967070").setAttribute("cy", (KX * 37.7952755906));
        document.querySelector("#point-1755277968747").setAttribute("cy", (KX * 37.7952755906));
        document.querySelector("#point-1755277970177").setAttribute("cy", (KX * 37.7952755906));
        document.querySelector("#point-1755277973890").setAttribute("cy", (KX * 37.7952755906));
        document.querySelector("#point-1755277975048").setAttribute("cy", (KX * 37.7952755906));
        UY = Number(mc) + 3;
        document.querySelector("#point-1755625926758").setAttribute("cy", (UY * 37.7952755906));
        VY = Number(mc) + Number(dasin) * 0.088 * 2;
        document.querySelector("#point-1755626897858").setAttribute("cy", (VY * 37.7952755906));
        XW = (Number(mc) + Number(dasin) * 0.088 * 2) - 1;
        document.querySelector("#point-1755626900306").setAttribute("cy", (XW * 37.7952755906));
        document.querySelector("#point-1755626902218").setAttribute("cy", (XW * 37.7952755906));
        FN = Number(dasin) * 0.088 * 2 + KX;
        document.querySelector("#point-1755277980098").setAttribute("cy", (FN * 37.7952755906));
        document.querySelector("#point-1755277981538").setAttribute("cy", (FN * 37.7952755906));
        document.querySelector("#point-1755278188440").setAttribute("cy", (FN * 37.7952755906));
        document.querySelector("#point-1755278189010").setAttribute("cy", (FN * 37.7952755906));
        FM = Number(dasin) * 0.088 * 2 + 3 + KX;
        document.querySelector("#point-1755277982569").setAttribute("cy", (FM * 37.7952755906));
        document.querySelector("#point-1755277983473").setAttribute("cy", (FM * 37.7952755906));
        document.querySelector("#point-1755278184307").setAttribute("cy", (FM * 37.7952755906));
        document.querySelector("#point-1755278187160").setAttribute("cy", (FM * 37.7952755906));
        document.querySelector("#point-1755278195745").setAttribute("cy", (FM * 37.7952755906));
        DR = Number(dasin) * 0.088 * 2 + 3 + KX + Number(hauteur_du_montant_) / 3;
        document.querySelector("#point-1755278198288").setAttribute("cy", (DR * 37.7952755906));
        document.querySelector("#point-1755278199048").setAttribute("cy", (DR * 37.7952755906));
        document.querySelector("#point-1755278197328").setAttribute("cy", (DR * 37.7952755906));
        T = Number(dasin) * 0.088 * 2 + 3 + KX + Number(hauteur_du_montant_) / 3 + Number(mc);
        document.querySelector("#point-1755510007214").setAttribute("cy", (T * 37.7952755906));
        document.querySelector("#point-1755277973890\\/point-1755278188440\\/point-1755278187160\\/point-1755278184307\\/point-1755278198288\\/point-1755277983473\\/point-1755277981538\\/point-1755277968747").setAttribute("tension", 0.25);
        document.querySelector("#point-1755277963004\\/point-1755277967070\\/point-1755277980098\\/point-1755277982569\\/point-1755278199048\\/point-1755510007214\\/point-1755278197328\\/point-1755278195745\\/point-1755278189010\\/point-1755277975048\\/point-1755277976626").setAttribute("tension", 0.25);
        
    } catch (error) {
        console.error('Erreur lors de l’application des tailles :', error);
    }
}