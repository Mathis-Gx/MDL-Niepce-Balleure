document.addEventListener("DOMContentLoaded", () => {
    // Initialisation des compteurs de votes
    let votesProposition1 = 0;
    let votesProposition2 = 0;
    let hasVoted = false; // Variable pour empêcher plusieurs votes

    // Récupération des boutons et des compteurs
    const button1 = document.querySelector("#proposition_1 button");
    const button2 = document.querySelector("#proposition_2 button");
    const count1 = document.querySelector("#proposition_1 .vote-count");
    const count2 = document.querySelector("#proposition_2 .vote-count");

    // Ajout des gestionnaires d'événements pour les boutons
    button1.addEventListener("click", () => {
        if (!hasVoted) {
            votesProposition1++;
            count1.textContent = `Votes : ${votesProposition1}`;
            hasVoted = true;
            alert("Merci pour votre vote !");
        } else {
            alert("Vous avez déjà voté !");
        }
    });

    button2.addEventListener("click", () => {
        if (!hasVoted) {
            votesProposition2++;
            count2.textContent = `Votes : ${votesProposition2}`;
            hasVoted = true;
            alert("Merci pour votre vote !");
        } else {
            alert("Vous avez déjà voté !");
        }
    });
});