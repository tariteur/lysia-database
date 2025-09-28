import { setTailles } from '/editor/function/setTailles.js';

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function appliquerTailles(
    bassin,
    hauteur_du_montant_,
    largeur_du_bas,
    mc,
    taille_genoux_,
    longeur_total_,
    essance,
    tour_de_taille,
    tour_de_molet_
) {
    const tailles = {
        bassin,
        hauteur_du_montant_,
        largeur_du_bas,
        mc,
        taille_genoux_,
        longeur_total_,
        essance,
        tour_de_taille,
        tour_de_molet_
    };
    try {
        setTailles(tailles);
var A1Y, FX, f2x, FY, AY, a_60x, F3x, A1X, FBY, UX, A2X, H1X, TX, AX, HX, ty, ICY, SY, G2Y, SX, IX, G2X, RX, M1, my_12, Ry, M2, PY, my_13, px, K1, ox, K2, vw, VX, WX, f1x, G1X, calcule_bas_de_pentalon, SETpinc, I1, I2, L3Y, tour_de_genoux;
        
        
        A1Y = Number(mc) + 1 + 2.5;
        document.querySelector("#point-1755757447619").setAttribute("cy", (A1Y * 37.7952755906));
        document.querySelector("#point-1755757454747").setAttribute("cy", (A1Y * 37.7952755906));
        document.querySelector("#point-1755757455556").setAttribute("cy", (A1Y * 37.7952755906));
        document.querySelector("#point-1755757461484").setAttribute("cy", (A1Y * 37.7952755906));
        document.querySelector("#point-1755757463844").setAttribute("cy", (A1Y * 37.7952755906));
        document.querySelector("#point-1755778229857").setAttribute("cy", (A1Y * 37.7952755906));
        document.querySelector("#point-1755778231047").setAttribute("cy", (A1Y * 37.7952755906));
        F3x = Number(mc) + 1;
        document.querySelector("#point-1755757465299").setAttribute("cy", (F3x * 37.7952755906));
        A1X = Number(mc) + 1;
        document.querySelector("#point-1755757447619").setAttribute("cx", (A1X * 37.7952755906));
        document.querySelector("#point-1755762677681").setAttribute("cx", (A1X * 37.7952755906));
        A2X = Number(mc) + 1 + 2;
        document.querySelector("#point-1755757454747").setAttribute("cx", (A2X * 37.7952755906));
        AX = Number(mc) + 1 + 2 + 1.5;
        document.querySelector("#point-1755757455556").setAttribute("cx", (AX * 37.7952755906));
        document.querySelector("#point-1755761403977").setAttribute("cx", (AX * 37.7952755906));
        document.querySelector("#point-1755761404747").setAttribute("cx", (AX * 37.7952755906));
        document.querySelector("#point-1755761405456").setAttribute("cx", (AX * 37.7952755906));
        document.querySelector("#point-1755761406353").setAttribute("cx", (AX * 37.7952755906));
        IX = ((Number(bassin) + Number(essance)) / 4 + (Number(bassin) / 20 - 1)) / 2 + Number(mc) + 1;
        document.querySelector("#point-1755757461484").setAttribute("cx", (IX * 37.7952755906));
        document.querySelector("#point-1755761396330").setAttribute("cx", (IX * 37.7952755906));
        document.querySelector("#point-1755761397864").setAttribute("cx", (IX * 37.7952755906));
        document.querySelector("#point-1755761398759").setAttribute("cx", (IX * 37.7952755906));
        document.querySelector("#point-1755761399553").setAttribute("cx", (IX * 37.7952755906));
        FBY = Number(mc) + 1 + 2.5 + Number(hauteur_du_montant_) / 3;
        document.querySelector("#point-1755761396330").setAttribute("cy", (FBY * 37.7952755906));
        document.querySelector("#point-1755766526330").setAttribute("cy", (FBY * 37.7952755906));
        document.querySelector("#point-1755769102209").setAttribute("cy", (FBY * 37.7952755906));
        document.querySelector("#point-1755761403977").setAttribute("cy", (FBY * 37.7952755906));
        document.querySelector("#point-1755762677681").setAttribute("cy", (FBY * 37.7952755906));
        ICY = Number(mc) + 1 + 2.5 + Number(hauteur_du_montant_);
        document.querySelector("#point-1755761397864").setAttribute("cy", (ICY * 37.7952755906));
        document.querySelector("#point-1755761404747").setAttribute("cy", (ICY * 37.7952755906));
        document.querySelector("#point-1755771557019").setAttribute("cy", (ICY * 37.7952755906));
        document.querySelector("#point-1755771644903").setAttribute("cy", (ICY * 37.7952755906));
        G2Y = Number(mc) + 1 + 2.5 + Number(hauteur_du_montant_) + 1;
        document.querySelector("#point-1755772387080").setAttribute("cy", (G2Y * 37.7952755906));
        document.querySelector("#point-1755771646173").setAttribute("cy", (G2Y * 37.7952755906));
        my_12 = Number(mc) + 1 + 2.5 + Number(taille_genoux_);
        document.querySelector("#point-1755761405456").setAttribute("cy", (my_12 * 37.7952755906));
        document.querySelector("#point-1755761398759").setAttribute("cy", (my_12 * 37.7952755906));
        document.querySelector("#point-1755773023826").setAttribute("cy", (my_12 * 37.7952755906));
        document.querySelector("#point-1755773025496").setAttribute("cy", (my_12 * 37.7952755906));
        my_13 = Number(mc) + 1 + 2.5 + Number(longeur_total_);
        document.querySelector("#point-1755761406353").setAttribute("cy", (my_13 * 37.7952755906));
        document.querySelector("#point-1755761399553").setAttribute("cy", (my_13 * 37.7952755906));
        document.querySelector("#point-1755773027882").setAttribute("cy", (my_13 * 37.7952755906));
        document.querySelector("#point-1755773026312").setAttribute("cy", (my_13 * 37.7952755906));
        f1x = Number(mc) + 1 + 2 + Number(tour_de_taille) / 4 + (Number(bassin) - Number(tour_de_taille)) / 4 + 0.5;
        document.querySelector("#point-1755757463844").setAttribute("cx", (f1x * 37.7952755906));
        f2x = Number(mc) + 1 + 2 + Number(tour_de_taille) / 4 + (Number(bassin) - Number(tour_de_taille)) / 4 + 1.5;
        document.querySelector("#point-1755757465299").setAttribute("cx", (f2x * 37.7952755906));
        H1X = Number(mc) + 1 + 3 + (Number(bassin) + Number(essance)) / 4;
        document.querySelector("#point-1755766526330").setAttribute("cx", (H1X * 37.7952755906));
        HX = IX + (((Number(bassin) + Number(essance)) / 4 + Number(bassin) / 20) - 1) / 2;
        document.querySelector("#point-1755769102209").setAttribute("cx", (HX * 37.7952755906));
        document.querySelector("#point-1755771557019").setAttribute("cx", (HX * 37.7952755906));
        G1X = HX + (Number(bassin) / 20 - 1);
        document.querySelector("#point-1755771644903").setAttribute("cx", (G1X * 37.7952755906));
        document.querySelector("#point-1755772387080").setAttribute("cx", (G1X * 37.7952755906));
        G2X = HX + (Number(bassin) / 20 - 1) * 2;
        document.querySelector("#point-1755771646173").setAttribute("cx", (G2X * 37.7952755906));
        calcule_bas_de_pentalon = Number(largeur_du_bas) / 2 - 0.5;
        K1 = IX - calcule_bas_de_pentalon;
        document.querySelector("#point-1755773027882").setAttribute("cx", (K1 * 37.7952755906));
        K2 = IX + calcule_bas_de_pentalon;
        document.querySelector("#point-1755773026312").setAttribute("cx", (K2 * 37.7952755906));
        SETpinc = ((Number(bassin) - Number(tour_de_taille)) / 4) / 2;
        I1 = IX + SETpinc;
        document.querySelector("#point-1755778229857").setAttribute("cx", (I1 * 37.7952755906));
        I2 = IX - SETpinc;
        document.querySelector("#point-1755778231047").setAttribute("cx", (I2 * 37.7952755906));
        L3Y = ((Number(bassin) - Number(tour_de_taille)) / 4) * 3;
        document.querySelector("#point-1755779213406").setAttribute("cy", (I2 * 37.7952755906));
        document.querySelector("#point-1755779213406").setAttribute("cx", (IX * 37.7952755906));
        document.querySelector("#point-1755757465299\\/point-1755757463844\\/point-1755766526330\\/point-1755771557019\\/point-1755772387080\\/point-1755771646173").setAttribute("tension", 0.3);
        document.querySelector("#point-1755771646173\\/point-1755773023826\\/point-1755773026312").setAttribute("tension", 0.3);
        document.querySelector("#point-1755757454747\\/point-1755762677681\\/point-1755773025496\\/point-1755773027882").setAttribute("tension", 0.3);
        tour_de_genoux = Number(tour_de_molet_) / 4 + 0.5;
        M1 = IX + tour_de_genoux;
        document.querySelector("#point-1755773023826").setAttribute("cx", (M1 * 37.7952755906));
        M2 = IX - tour_de_genoux;
        document.querySelector("#point-1755773025496").setAttribute("cx", (M2 * 37.7952755906));
        
        FX = f2x + Number(mc);
        document.querySelector("#point-1756110637823").setAttribute("cx", (FX * 37.7952755906));
        FY = 1;
        document.querySelector("#point-1756110637823").setAttribute("cy", (FY * 37.7952755906));
        AY = A1Y - Number(mc);
        document.querySelector("#point-1756110641950").setAttribute("cy", (AY * 37.7952755906));
        a_60x = 3;
        document.querySelector("#point-1756110641950").setAttribute("cx", (a_60x * 37.7952755906));
        document.querySelector("#point-1755757447619").setAttribute("cx", (FY * 37.7952755906));
        document.querySelector("#point-1755757447619").setAttribute("cy", (FBY * 37.7952755906));
        document.querySelector("#point-1756187456587").setAttribute("cy", (FBY * 37.7952755906));
        UX = H1X + Number(mc);
        document.querySelector("#point-1756187456587").setAttribute("cx", (UX * 37.7952755906));
        TX = Number(mc) + HX;
        document.querySelector("#point-1756187452379").setAttribute("cx", (TX * 37.7952755906));
        ty = ICY - Number(mc);
        document.querySelector("#point-1756187452379").setAttribute("cy", (ty * 37.7952755906));
        SY = G2Y - Number(mc);
        document.querySelector("#point-1756187450794").setAttribute("cy", (SY * 37.7952755906));
        SX = G2X + Number(mc) + 2.5;
        document.querySelector("#point-1756187450794").setAttribute("cx", (SX * 37.7952755906));
        RX = M1 + Number(mc);
        document.querySelector("#point-1756187449580").setAttribute("cx", (RX * 37.7952755906));
        document.querySelector("#point-1756187449580").setAttribute("cy", (my_12 * 37.7952755906));
        document.querySelector("#point-1756110646383").setAttribute("cy", (my_12 * 37.7952755906));
        Ry = M2 - Number(mc);
        document.querySelector("#point-1756110646383").setAttribute("cx", (Ry * 37.7952755906));
        PY = my_13 + Number(mc);
        document.querySelector("#point-1756110645116").setAttribute("cy", (PY * 37.7952755906));
        document.querySelector("#point-1756110644087").setAttribute("cy", (PY * 37.7952755906));
        px = K1 - Number(mc);
        document.querySelector("#point-1756110645116").setAttribute("cx", (px * 37.7952755906));
        ox = K2 + Number(mc);
        document.querySelector("#point-1756110644087").setAttribute("cx", (ox * 37.7952755906));
        document.querySelector("#point-1756110637823\\/point-1756187456587\\/point-1756187452379\\/point-1756187450794").setAttribute("tension", 0.3);
        document.querySelector("#point-1756187450794\\/point-1756187449580\\/point-1756110644087").setAttribute("tension", 0.3);
        document.querySelector("#point-1756110645116\\/point-1756110646383\\/point-1755757447619\\/point-1756110641950").setAttribute("tension", 0.3);
        vw = my_12 - 1;
        document.querySelector("#point-1756187458795").setAttribute("cy", (vw * 37.7952755906));
        document.querySelector("#point-1756187460512").setAttribute("cy", (vw * 37.7952755906));
        VX = IX + 1;
        document.querySelector("#point-1756187458795").setAttribute("cx", (VX * 37.7952755906));
        WX = IX - 1;
        document.querySelector("#point-1756187460512").setAttribute("cx", (WX * 37.7952755906));
        
    } catch (error) {
        console.error('Erreur lors de l’application des tailles :', error);
    }
}