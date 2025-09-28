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
    tour_de_molet
) {
    const tailles = {
        bassin,
        hauteur_du_montant_,
        largeur_du_bas,
        mc,
        taille_genoux_,
        longeur_total_,
        essance,
        tour_de_molet
    };
    try {
        setTailles(tailles);
var Basse, longeur_triangle_1, AB, my_6_y, my_1a3, my_1a4, my_1a7_2_6, my_6_x, my_6a8, my_2a9, calcule_bas_de_pentalon, my_13, my_12, tour_de_benoux, my_16x, my_15x, braguette, my_17x, by, bx, cx, EX, GY, HX, IX, IY, jy, jx, j2y, j2x, KX, LY, LX, MX, OY, OX, PX, PY;
        
        // Describe this function...
        function longeur_triangle_12() {
          if (Number(bassin) <= 88) {
            longeur_triangle_1 = (typeof longeur_triangle_1 === 'number' ? longeur_triangle_1 : 0) + 2.15;
          }
          if (Number(bassin) >= 88.1 && Number(bassin) <= 92) {
            longeur_triangle_1 = (typeof longeur_triangle_1 === 'number' ? longeur_triangle_1 : 0) + 2.2;
          }
          if (Number(bassin) >= 92.1 && Number(bassin) <= 96) {
            longeur_triangle_1 = (typeof longeur_triangle_1 === 'number' ? longeur_triangle_1 : 0) + 2.25;
          }
          if (Number(bassin) >= 96.1 && Number(bassin) <= 100) {
            longeur_triangle_1 = (typeof longeur_triangle_1 === 'number' ? longeur_triangle_1 : 0) + 2.3;
          }
          if (Number(bassin) >= 100.1 && Number(bassin) <= 104) {
            longeur_triangle_1 = (typeof longeur_triangle_1 === 'number' ? longeur_triangle_1 : 0) + 2.4;
          }
          if (Number(bassin) >= 104.1 && Number(bassin) <= 108) {
            longeur_triangle_1 = (typeof longeur_triangle_1 === 'number' ? longeur_triangle_1 : 0) + 2.5;
          }
          if (Number(bassin) >= 108.1) {
            longeur_triangle_1 = (typeof longeur_triangle_1 === 'number' ? longeur_triangle_1 : 0) + 3;
          }
        }
        
        
        longeur_triangle_12();
        Basse = Number(mc) + 1;
        document.querySelector("#point-1755636571194").setAttribute("cy", (Basse * 37.7952755906));
        document.querySelector("#point-1755786415049").setAttribute("cy", (Basse * 37.7952755906));
        document.querySelector("#point-1755636571194").setAttribute("cx", (Basse * 37.7952755906));
        document.querySelector("#point-1755637370363").setAttribute("cx", (Basse * 37.7952755906));
        document.querySelector("#point-1755636573183").setAttribute("cx", (Basse * 37.7952755906));
        document.querySelector("#point-1755638401025").setAttribute("cx", (Basse * 37.7952755906));
        AB = Number(hauteur_du_montant_) + 1 + Number(mc);
        document.querySelector("#point-1755636573183").setAttribute("cy", (AB * 37.7952755906));
        document.querySelector("#point-1755638399561").setAttribute("cy", (AB * 37.7952755906));
        document.querySelector("#point-1755639951882").setAttribute("cy", (AB * 37.7952755906));
        document.querySelector("#point-1755640329555").setAttribute("cy", (AB * 37.7952755906));
        my_6_y = ((Number(hauteur_du_montant_) + 1) - longeur_triangle_1 / Math.sqrt(2)) + Number(mc);
        document.querySelector("#point-1755669366495").setAttribute("cy", (my_6_y * 37.7952755906));
        my_1a3 = Number(hauteur_du_montant_) / 3 + 1 + Number(mc);
        document.querySelector("#point-1755637370363").setAttribute("cy", (my_1a3 * 37.7952755906));
        document.querySelector("#point-1755638400380").setAttribute("cy", (my_1a3 * 37.7952755906));
        my_1a4 = Number(taille_genoux_) + 1 + Number(mc);
        document.querySelector("#point-1755637773850").setAttribute("cy", (my_1a4 * 37.7952755906));
        document.querySelector("#point-1755638401025").setAttribute("cy", (my_1a4 * 37.7952755906));
        document.querySelector("#point-1755641109595").setAttribute("cy", (my_1a4 * 37.7952755906));
        document.querySelector("#point-1755682388672").setAttribute("cy", (my_1a4 * 37.7952755906));
        my_1a4 = Number(longeur_total_) + 1 + Number(mc);
        document.querySelector("#point-1755638342473").setAttribute("cy", (my_1a4 * 37.7952755906));
        document.querySelector("#point-1755641110545").setAttribute("cy", (my_1a4 * 37.7952755906));
        document.querySelector("#point-1755638402363").setAttribute("cy", (my_1a4 * 37.7952755906));
        document.querySelector("#point-1755673935218").setAttribute("cy", (my_1a4 * 37.7952755906));
        my_1a7_2_6 = (Number(bassin) + Number(essance)) / 4 + 1 + Number(mc);
        document.querySelector("#point-1755638398412").setAttribute("cx", (my_1a7_2_6 * 37.7952755906));
        document.querySelector("#point-1755638400380").setAttribute("cx", (my_1a7_2_6 * 37.7952755906));
        document.querySelector("#point-1755638399561").setAttribute("cx", (my_1a7_2_6 * 37.7952755906));
        my_6_x = my_1a7_2_6 + longeur_triangle_1 / Math.sqrt(2);
        document.querySelector("#point-1755669366495").setAttribute("cx", (my_6_x * 37.7952755906));
        my_6a8 = (Number(bassin) + Number(essance)) / 4 + 1 + (Number(bassin) / 20 - 1) + Number(mc);
        document.querySelector("#point-1755639951882").setAttribute("cx", (my_6a8 * 37.7952755906));
        my_2a9 = ((Number(bassin) + Number(essance)) / 4 + (Number(bassin) / 20 - 1)) / 2 + 1 + Number(mc);
        document.querySelector("#point-1755640329555").setAttribute("cx", (my_2a9 * 37.7952755906));
        document.querySelector("#point-1755640946904").setAttribute("cx", (my_2a9 * 37.7952755906));
        document.querySelector("#point-1755641109595").setAttribute("cx", (my_2a9 * 37.7952755906));
        document.querySelector("#point-1755641110545").setAttribute("cx", (my_2a9 * 37.7952755906));
        calcule_bas_de_pentalon = (Number(largeur_du_bas) / 4 - 0.5) + Number(mc);
        my_13 = my_2a9 + calcule_bas_de_pentalon;
        document.querySelector("#point-1755638402363").setAttribute("cx", (my_13 * 37.7952755906));
        my_12 = my_2a9 - calcule_bas_de_pentalon;
        document.querySelector("#point-1755673935218").setAttribute("cx", (my_12 * 37.7952755906));
        tour_de_benoux = Number(tour_de_molet) / 4 + 0.5 + Number(mc);
        my_16x = my_2a9 + tour_de_benoux;
        document.querySelector("#point-1755682388672").setAttribute("cx", (my_16x * 37.7952755906));
        my_15x = my_2a9 - tour_de_benoux;
        document.querySelector("#point-1755638401025").setAttribute("cx", (my_15x * 37.7952755906));
        braguette = 8 + Number(mc) + 1;
        my_17x = my_1a7_2_6 + 4;
        document.querySelector("#point-1755786415049").setAttribute("cx", (my_17x * 37.7952755906));
        document.querySelector("#point-1755786416196").setAttribute("cx", (my_17x * 37.7952755906));
        document.querySelector("#point-1755786416196").setAttribute("cy", (braguette * 37.7952755906));
        document.querySelector("#point-1755787181204").setAttribute("cy", (braguette * 37.7952755906));
        document.querySelector("#point-1755787181204").setAttribute("cx", (my_1a7_2_6 * 37.7952755906));
        document.querySelector("#point-1755639951882\\/point-1755669366495\\/point-1755638400380\\/point-1755787181204").setAttribute("tension", 0.3);
        by = 1;
        bx = 1;
        document.querySelector("#point-1755949693677").setAttribute("cx", (bx * 37.7952755906));
        document.querySelector("#point-1755949693677").setAttribute("cy", (by * 37.7952755906));
        document.querySelector("#point-1755949695240").setAttribute("cx", (by * 37.7952755906));
        document.querySelector("#point-1755949695240").setAttribute("cy", (my_1a3 * 37.7952755906));
        document.querySelector("#point-1755949696244").setAttribute("cx", (bx * 37.7952755906));
        document.querySelector("#point-1755949696244").setAttribute("cy", (AB * 37.7952755906));
        cx = Basse - Number(mc);
        document.querySelector("#point-1755949700435").setAttribute("cy", (my_1a4 * 37.7952755906));
        document.querySelector("#point-1755949700435").setAttribute("cx", (cx * 37.7952755906));
        document.querySelector("#point-1755949699410").setAttribute("cy", (bx * 37.7952755906));
        EX = my_17x + Number(mc);
        document.querySelector("#point-1755949699410").setAttribute("cx", (EX * 37.7952755906));
        document.querySelector("#point-1755949701403").setAttribute("cx", (EX * 37.7952755906));
        GY = braguette + Number(mc);
        document.querySelector("#point-1755949701403").setAttribute("cy", (GY * 37.7952755906));
        document.querySelector("#point-1755949702346").setAttribute("cy", (GY * 37.7952755906));
        HX = my_1a7_2_6 + Number(mc);
        document.querySelector("#point-1755949702346").setAttribute("cx", (HX * 37.7952755906));
        IX = ((Number(hauteur_du_montant_) + 1) - (longeur_triangle_1 + Number(mc)) / Math.sqrt(2)) + Number(mc);
        document.querySelector("#point-1755949710467").setAttribute("cy", (IX * 37.7952755906));
        IY = my_1a7_2_6 + (longeur_triangle_1 + Number(mc)) / Math.sqrt(2);
        document.querySelector("#point-1755949710467").setAttribute("cx", (IY * 37.7952755906));
        jy = AB - Number(mc);
        document.querySelector("#point-1755949704425").setAttribute("cy", (jy * 37.7952755906));
        jx = my_6a8 + Number(mc);
        document.querySelector("#point-1755949704425").setAttribute("cx", (jx * 37.7952755906));
        j2y = Number(taille_genoux_) + 1 + Number(mc);
        document.querySelector("#point-1755949703386").setAttribute("cy", (j2y * 37.7952755906));
        document.querySelector("#point-1755949705266").setAttribute("cy", (j2y * 37.7952755906));
        j2x = Basse;
        document.querySelector("#point-1755949703386").setAttribute("cx", (j2x * 37.7952755906));
        KX = my_16x + Number(mc);
        document.querySelector("#point-1755949705266").setAttribute("cx", (KX * 37.7952755906));
        LY = my_1a4 + Number(mc);
        document.querySelector("#point-1755949705994").setAttribute("cy", (LY * 37.7952755906));
        LX = my_12 - Number(mc);
        document.querySelector("#point-1755949705994").setAttribute("cx", (LX * 37.7952755906));
        document.querySelector("#point-1755949707794").setAttribute("cy", (LY * 37.7952755906));
        MX = my_13 + Number(mc);
        document.querySelector("#point-1755949707794").setAttribute("cx", (MX * 37.7952755906));
        document.querySelector("#point-1755949703386\\/point-1755949696244\\/point-1755949695240\\/point-1755949693677").setAttribute("tension", 0.3);
        document.querySelector("#point-1755949702346\\/point-1755949710467\\/point-1755949704425").setAttribute("tension", 0.3);
        OY = Number(taille_genoux_) + Number(mc);
        document.querySelector("#point-1755949711450").setAttribute("cy", (OY * 37.7952755906));
        OX = ((Number(bassin) + Number(essance)) / 4 + (Number(bassin) / 20 - 1)) / 2 + Number(mc);
        document.querySelector("#point-1755949711450").setAttribute("cx", (OX * 37.7952755906));
        PX = ((Number(bassin) + Number(essance)) / 4 + (Number(bassin) / 20 - 1)) / 2 + Number(mc) + 2;
        document.querySelector("#point-1755949713036").setAttribute("cx", (PX * 37.7952755906));
        PY = Number(taille_genoux_) + Number(mc);
        document.querySelector("#point-1755949713036").setAttribute("cy", (PY * 37.7952755906));
        
    } catch (error) {
        console.error('Erreur lors de l’application des tailles :', error);
    }
}