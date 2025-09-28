import { setTailles } from '/editor/function/setTailles.js';

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function appliquerTailles(
    bassin_,
    montant,
    circonférence_du_bah_de_jambe_,
    élargissement_taille,
    hentre_jambes_,
    genoux_a_terres_,
    tour_de_taille_,
    marge_de_coutre,
    hauteurs_ceinture_,
    croisure,
    essance
) {
    const tailles = {
        bassin_,
        montant,
        circonférence_du_bah_de_jambe_,
        élargissement_taille,
        hentre_jambes_,
        genoux_a_terres_,
        tour_de_taille_,
        marge_de_coutre,
        hauteurs_ceinture_,
        croisure,
        essance
    };
    try {
        setTailles(tailles);
var DL_1, DL_12, DL, basse_mc_hc_mc, basse_mc_hauteur_ceinture, basse_MC, HBASSE_MC, COUSSURE_CM, taille_5C4_1, taille_5C4_12, newtaille_5C4_1, newtaille_5C4_12, Sous_pont, mcfinal, hauteurs_DL, hauteurDLf, hauteurflaiche;
        
        
        DL_1 = Number(marge_de_coutre) + Number(hauteurs_ceinture_) / 2;
        DL_12 = Number(marge_de_coutre) + 2 + Number(hauteurs_ceinture_) / 2;
        DL = Number(marge_de_coutre) + 1 + Number(hauteurs_ceinture_) / 2;
        basse_mc_hc_mc = Number(marge_de_coutre) + 1 + Number(hauteurs_ceinture_) + Number(marge_de_coutre);
        basse_mc_hauteur_ceinture = Number(marge_de_coutre) + 1 + Number(hauteurs_ceinture_);
        basse_MC = Number(marge_de_coutre) + 1;
        document.querySelector("#point-1745657575783").setAttribute("cx", (basse_MC * 37.7952755906));
        document.querySelector("#point-1745657564431").setAttribute("cx", (basse_MC * 37.7952755906));
        document.querySelector("#point-1745657574616").setAttribute("cx", (basse_mc_hauteur_ceinture * 37.7952755906));
        document.querySelector("#point-1745657566536").setAttribute("cx", (basse_mc_hauteur_ceinture * 37.7952755906));
        document.querySelector("#point-1745657573415").setAttribute("cx", (basse_mc_hc_mc * 37.7952755906));
        document.querySelector("#point-1745657572696").setAttribute("cx", (basse_mc_hc_mc * 37.7952755906));
        document.querySelector("#point-1745657571408").setAttribute("cx", (basse_mc_hc_mc * 37.7952755906));
        document.querySelector("#point-1745657570591").setAttribute("cx", (basse_mc_hc_mc * 37.7952755906));
        document.querySelector("#point-1745657569832").setAttribute("cx", (basse_mc_hc_mc * 37.7952755906));
        document.querySelector("#point-1745657569182").setAttribute("cx", (basse_mc_hc_mc * 37.7952755906));
        document.querySelector("#point-1745657568647").setAttribute("cx", (basse_mc_hc_mc * 37.7952755906));
        document.querySelector("#point-1745657572111").setAttribute("cx", (basse_mc_hc_mc * 37.7952755906));
        document.querySelector("#point-1745657567975").setAttribute("cx", (basse_mc_hc_mc * 37.7952755906));
        document.querySelector("#point-1745657577047").setAttribute("cx", (DL * 37.7952755906));
        document.querySelector("#point-1745657604457").setAttribute("cx", (DL * 37.7952755906));
        document.querySelector("#point-1745657607153").setAttribute("cx", (DL_12 * 37.7952755906));
        document.querySelector("#point-1745657608408").setAttribute("cx", (DL_1 * 37.7952755906));
        HBASSE_MC = Number(marge_de_coutre) + 1;
        COUSSURE_CM = Number(croisure) + Number(marge_de_coutre) + 1;
        taille_5C4_1 = (Number(bassin_) + Number(croisure)) / 4 + 1 + Number(marge_de_coutre) + COUSSURE_CM;
        taille_5C4_12 = taille_5C4_1 + ((Number(tour_de_taille_) / 4 + (Number(bassin_) + Number(marge_de_coutre)) / 4 + 1.5) - (Number(bassin_) - Number(tour_de_taille_)) / 4) / 2;
        newtaille_5C4_1 = taille_5C4_12 + ((Number(tour_de_taille_) / 4 + (Number(bassin_) + Number(marge_de_coutre)) / 4 + 1.5) - (Number(bassin_) - Number(tour_de_taille_)) / 4) / 2;
        newtaille_5C4_12 = newtaille_5C4_1 + (Number(bassin_) + Number(croisure)) / 4 + 1 + Number(marge_de_coutre);
        Sous_pont = newtaille_5C4_12 + 4;
        mcfinal = Sous_pont + Number(marge_de_coutre);
        document.querySelector("#point-1745657575783").setAttribute("cy", (HBASSE_MC * 37.7952755906));
        document.querySelector("#point-1745657574616").setAttribute("cy", (HBASSE_MC * 37.7952755906));
        document.querySelector("#point-1745657544991").setAttribute("cy", (COUSSURE_CM * 37.7952755906));
        document.querySelector("#point-1745657572696").setAttribute("cy", (COUSSURE_CM * 37.7952755906));
        document.querySelector("#point-1745657545758").setAttribute("cy", (taille_5C4_1 * 37.7952755906));
        document.querySelector("#point-1745657572111").setAttribute("cy", (taille_5C4_1 * 37.7952755906));
        document.querySelector("#point-1745657555974").setAttribute("cy", (taille_5C4_12 * 37.7952755906));
        document.querySelector("#point-1745657571408").setAttribute("cy", (taille_5C4_12 * 37.7952755906));
        document.querySelector("#point-1745657556600").setAttribute("cy", (newtaille_5C4_1 * 37.7952755906));
        document.querySelector("#point-1745657570591").setAttribute("cy", (newtaille_5C4_1 * 37.7952755906));
        document.querySelector("#point-1745657557540").setAttribute("cy", (newtaille_5C4_12 * 37.7952755906));
        document.querySelector("#point-1745657569832").setAttribute("cy", (newtaille_5C4_12 * 37.7952755906));
        document.querySelector("#point-1745657558320").setAttribute("cy", (Sous_pont * 37.7952755906));
        document.querySelector("#point-1745657569182").setAttribute("cy", (Sous_pont * 37.7952755906));
        document.querySelector("#point-1745657564431").setAttribute("cy", (Sous_pont * 37.7952755906));
        document.querySelector("#point-1745657566536").setAttribute("cy", (Sous_pont * 37.7952755906));
        document.querySelector("#point-1745657568647").setAttribute("cy", (mcfinal * 37.7952755906));
        document.querySelector("#point-1745657559102").setAttribute("cy", (mcfinal * 37.7952755906));
        document.querySelector("#point-1745657560303").style.display = "none";
        document.querySelector("#point-1745657560303-text").style.display = "none";
        document.querySelector("#point-1745657567975").style.display = "none";
        document.querySelector("#point-1745657567975-text").style.display = "none";
        hauteurs_DL = Number(marge_de_coutre) + 3;
        hauteurDLf = Number(marge_de_coutre) + 23;
        hauteurflaiche = Number(marge_de_coutre) + 22;
        document.querySelector("#point-1745657577047").setAttribute("cy", (hauteurs_DL * 37.7952755906));
        document.querySelector("#point-1745657604457").setAttribute("cy", (hauteurDLf * 37.7952755906));
        document.querySelector("#point-1745657608408").setAttribute("cy", (hauteurflaiche * 37.7952755906));
        document.querySelector("#point-1745657607153").setAttribute("cy", (hauteurflaiche * 37.7952755906));
        
    } catch (error) {
        console.error('Erreur lors de l’application des tailles :', error);
    }
}