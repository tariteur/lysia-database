import { setTailles } from '/editor/function/setTailles.js';

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function appliquerTailles(
    
) {
    const tailles = {
        
    };
    try {
        setTailles(tailles);

    } catch (error) {
        console.error('Erreur lors de l’application des tailles :', error);
    }
}