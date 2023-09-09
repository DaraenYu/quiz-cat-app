/* LES VARIABLES DU QUIZ */
/* =================================================== */

// Numéro de la question courante
let noQuestion = 0;

// Nombre de réponses justes
let nombreReponsesJustes = 0;

// Barre d'avancement du quiz
let barreAvancement = document.querySelector(".barre-avancement");

// Largeur de la barre à tout moment (initialement 0)
let largeurBarre = 0;

// Cible de largeur pour chaque étape d'avancement du quiz (calculée selon la progression dans les questions et le nombre total de questions)
let largeurCibleBarre = 0;

// Zone d'affichage du quiz
let zoneQuiz = document.querySelector(".quiz");

// Section contenant une question du quiz et sa position sur l'axe des X
let sectionQuestion = document.querySelector("section");
let positionX = 100;

// Conteneurs des titres des questions et des choix de réponse
let titreQuestion = document.querySelector(".titre-question");
let lesChoixDeReponses = document.querySelector(".les-choix-de-reponse");

// Titre animé du quiz
let titreIntro = document.querySelector(".anim-titre-intro");

// Zone de fin du quiz
let zoneFin = document.querySelector(".fin");

// Bouton servant à recommencer le quiz
let btnRecommencer = document.querySelector('main.fin .btn-recommencer');

// Contient les questions aléatoires disponibles
let questionsDisponible = [];


/* ÉVÉNEMENTS */
/* =================================================== */

// Gérer la fin de l'animation d'intro
titreIntro.addEventListener("animationend", afficherConsignePourDebuterLeJeu);

// Gestion du bouton de redémarrage du quiz (à la fin du quiz)
btnRecommencer.addEventListener('click', recommencer);


/* LES FONCTIONS */
/* =================================================== */

// Afficher les consignes pour débuter le jeu
function afficherConsignePourDebuterLeJeu(event) {
    // On affiche la consigne si c'est la fin de la deuxième animation: etirer-mot
    if (event.animationName == "etirer-mot") {

        // On affiche un message dans le pied de page
        let piedDePage = document.querySelector("footer");
        piedDePage.innerHTML = "<h1>Cliquez dans l'écran pour commencer le quiz</h1>";

        // On met un écouteur sur la fenêtre pour enlever l'intro et commencer le quiz
        window.addEventListener("click", commencerLeQuiz);
    }
}

// Enlever les éléments de l'intro et commencer le quiz
function commencerLeQuiz() {
    // On enlève le conteneur de l'intro
    let intro = document.querySelector("main.intro");
    intro.parentNode.removeChild(intro);

    // On enlève l'écouteur qui gère le début du quiz
    window.removeEventListener("click", commencerLeQuiz);

    // On met le conteneur du quiz visible
    zoneQuiz.style.display = "flex";

    // On sélectionne la plage de question
    selectionQuestion();

    // On affiche la première question
    afficherQuestion();
}

// Générer une plage de 10 questions
function selectionQuestion() {
    // On fait une copie en profondeur de la banque de questions
    let banqueQuestions = JSON.parse(JSON.stringify(lesQuestions));

    // Nombre total de questions dans la banque
    let nombreTotalQuestions = lesQuestions.length - 1;

    // Determine à quel question on est rendu
    let nombreQuestionsChoisis = 0;
    
    // Tant que le nombre de question est inférieure à 10...
    while (nombreQuestionsChoisis < 10) {
        
        // Memorise la position de la question choisi dans la banque de questions
        let indexChoisi = Math.floor(Math.random() * nombreTotalQuestions)

        // On sélectionne une question au hasard
        let questionChoisi = banqueQuestions[indexChoisi];

        // On ajoute la question au quiz 
        questionsDisponible.push(questionChoisi);

        // On enlève la question de la banque pour qu'elle ne se répète pas
        banqueQuestions.splice(indexChoisi, 1);

        // On décrémente le nombre total de questions
        nombreTotalQuestions--;

        // On incrémente le nombre de questions choisis
        nombreQuestionsChoisis++;
    }
}

// Afficher la question courante
function afficherQuestion() {
    // Récupérer l'objet de la question en cours dans le tableau des questions
    let objetQuestion = questionsDisponible[noQuestion];
    
    // Affecter le texte dans le titre de la question
    titreQuestion.innerText = objetQuestion.titre;

    // Créer et afficher les balises des choix de réponse : On commence par vider le conteneur des choix de réponses.
    lesChoixDeReponses.innerHTML = "";

    // Puis on le remplit de nouveau avec les choix de réponses de la question
    let unChoix;
    for (let i = 0; i < objetQuestion.choix.length; i++) {
		// On crée la balise et on y affecte une classe CSS
        unChoix = document.createElement("div");
        unChoix.classList.add("choix");

        // On intègre la valeur du choix de réponse
        unChoix.innerText = objetQuestion.choix[i];

        // On affecte dynamiquement l'index de chaque choix
        unChoix.indexChoix = i;

        // On met un écouteur pour vérifier la réponse choisie
        unChoix.addEventListener("mousedown", verifierReponse);

        // Enfin on affiche ce choix
        lesChoixDeReponses.appendChild(unChoix);
    }

    // Modifier la valeur de la position de la section sur l'axe des X pour son animation
    positionX = 100;

    // Partir la première requête pour l'animation de la section
    requestAnimationFrame(animerSection);

    // Fixer la largeur cible de la barre d'avancement (en proportion du nombre de questions disponibles, et du numéro de la question à venir)
    largeurCibleBarre = (noQuestion + 1) / 10 * 100;

    // Démarrer l'animation de la barre d'avancement
    requestAnimationFrame(animerBarreAvancement);
}

// Animer la barre d'avancement
 function animerBarreAvancement() {
    // Modifier la largeur de la barre d'avancement en l'augmentant de 1vw à chaque appel de cette fonction
    largeurBarre++;
    barreAvancement.style.width = largeurBarre + 'vw';

    // Si la largeur cible n'est pas encore atteinte, faire une autre requête d'animation
    if(largeurBarre < largeurCibleBarre){
        requestAnimationFrame(animerBarreAvancement);
    }
}

// Animer l'arrivée de la section contenant la question
function animerSection() {
    // On décrémente la position de 2 (vw)
    positionX -= 2;
    sectionQuestion.style.transform = `translateX(${positionX}vw)`;

    // On part une autre requête  d'animation si la position n'est pas atteinte
    if (positionX > 0) {
        requestAnimationFrame(animerSection);
    }
}

// Vérifier la réponse cliquée et gérer le passage à la prochaine question.
function verifierReponse(event) {
    lesChoixDeReponses.classList.toggle('desactiver');

    // Empêche la propagation de l'évènement (Empêche de déclencher les prochains EvenListener de réagir au mousedown (Ligne 232))
    event.stopPropagation()

    // Capturer et valider la réponse.
    let reponseUtilisateur = event.target.indexChoix;
    let reponseJuste = questionsDisponible[noQuestion].bonneReponse;
    let lesChoix = document.querySelectorAll("div.choix");

    // Si la réponse de l'utilisateur est la bonne réponse...
    if (reponseUtilisateur == reponseJuste) {
        // Incrémenter le nombre de réponses
        nombreReponsesJustes++;

        // On ajoute la classe de bonne réponse
        lesChoix[reponseUtilisateur].classList.add("reponse-succes");

        // On crée dynamiquement un nouveau 'div' pour afficher la description de la bonne réponse
        let divDescription = document.createElement('div');

        // On lui donne la classe .description
        divDescription.classList.add('description');

        // On insère la description dans la section
        divDescription.innerText = questionsDisponible[noQuestion].description;

        // On insère la section description dans l'arbre
        sectionQuestion.appendChild(divDescription);
    }

    // Si la réponse de l'utilisateur n'est pas la bonne réponse...
    else {
        // On ajoute la classe de mauvaise réponse et de bonne réponse
        lesChoix[reponseUtilisateur].classList.add("reponse-echec");
        lesChoix[reponseJuste].classList.add("reponse-succes");
    }

    // On passe à la prochaine question lorsque la transition de la réponse cliquée est terminée
    window.addEventListener("mousedown", gererProchaineQuestion);
    
}

// Gérer l'affichage de la prochaine question
function gererProchaineQuestion(event) {
    // On retire le div contenant la description de la bonne réponse
    let divDescription = document.querySelector('.description');

    // On enlève le 'div' de l'arbre s'il existe
    if(divDescription != null) {
        sectionQuestion.removeChild(divDescription);
    }
    
    // On réactive les clics sur les choix de réponse
    lesChoixDeReponses.classList.toggle('desactiver');

    // On enlève l'écouteur d'évènement
    window.removeEventListener("mousedown", gererProchaineQuestion);

    // On incrémente noQuestion pour la  prochaine question à afficher
    noQuestion++;

    // S'il reste moins de 10 questions...
    if (noQuestion < 10) {
        // On affiche la prochaine question
        afficherQuestion();
    }

    // Sinon c'est la fin du quiz
    else {
        afficherFinQuiz();
    }
}

// Afficher l'interface de la fin du quiz
 function afficherFinQuiz() {
    // Retirer la zone du quiz de l'affichage
    zoneQuiz.style.display = "none";

    // Contient la donnée du meilleur score
    let meilleurScore = localStorage.getItem("meilleurScore") || 0;

    // Si le meilleur score est plus petit ou égal aux nombres de bonnes réponses...
    if (meilleurScore <= nombreReponsesJustes) {
        // Meilleur score prends la valeur la plus élevé.
        meilleurScore = nombreReponsesJustes;
    }

    // Créer dynamiquement la section qui contiendra le score (résultat)
    let sectionResultat = document.createElement('section');

    // Ajoutez dans la sectionResultat le texte correspondant au score obtenu
    sectionResultat.innerText = "Votre score : " + nombreReponsesJustes + "/10 \n";
    sectionResultat.innerText += "Votre meilleur score : " + meilleurScore + "/10";

    // On mémorise le meilleur score
    localStorage.setItem("meilleurScore" , meilleurScore.toString());

    // Associer la classe CSS adéquate pour le format et l'animation du résultat 
    sectionResultat.classList.add("resultat");

    // Insérer cette section dans l'élément "zoneFin"
    zoneFin.appendChild(sectionResultat);

    // Remettre dans l'affichage la zone de "fin du quiz"
    zoneFin.style.display = "flex";

    // Le bouton "recommencer" est affiché à la fin de l'animation du résultat du quiz
    sectionResultat.addEventListener('animationend', afficherBtnRecommencer);
}

// Modifier l'opacité du bouton 'recommencer' pour le rendre visible
function afficherBtnRecommencer() {
    btnRecommencer.style.opacity = '1';
}

// Redémarrer le quiz (sans l'animation de début) en réinitialisant l'état de l'application
function recommencer() {
    // Remettre les variables numériques du quiz à leurs valeurs initiales
    noQuestion = 0;
    nombreReponsesJustes = 0;
    largeurBarre = 0;
    largeurCibleBarre = 0;
    questionsDisponible = [];

    // Retirer la section ayant la classe 'resultat'
    zoneFin.removeChild(document.querySelector("section.resultat"));
    
    // Remettre l'opacité du bouton "recommencer" à 0
    btnRecommencer.style.opacity = '0';
    
    // On réaffiche le conteneur de la zone du quiz (son affichage initial était "flex")
    zoneQuiz.style.display = "flex";
    
    // Et on retire la zone de "fin du quiz" de l'affichage
    zoneFin.style.display = "none";
    
    // On change la plage de questions
    selectionQuestion();

    // Finalement, on peut afficher la première question...
    afficherQuestion();
}