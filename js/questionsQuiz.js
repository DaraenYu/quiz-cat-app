/* LES QUESTIONS DU QUIZ */
/* =================================================== */
let lesQuestions = [
    {
        titre: "Pourquoi les chats se frottent-ils contre vous ?",
        choix: ["Pour vous marquer de son odeur", "Pour dire bonjour", "Pour montrer de l'affection", "Toutes ces réponses"],
        bonneReponse: 3,
        description: "Le frottement de la tête, un comportement que les chats apprennent lorsqu'ils sont chatons avec leur mère, a plusieurs motivations. Il s'agit d'un geste affectueux qui peut également être utilisé comme une forme de salutation. Le chat vous marque également de son odeur en signe d'affiliation. C'est la façon dont le chat marque ses congénères et son environnement."
    },
    {
        titre: "Lequel de ces aliments est toxique pour les chats ?",
        choix: ['Oignons', 'Chocolats', 'Raisins', "Toutes ces réponses"],
        bonneReponse: 3,
        description: "Tous ces aliments sont toxiques pour les chats en quantités suffisamment élevées."
    },
    {
        titre: "Quel est le plus ancien ancêtre connu du chat moderne ?",
        choix: ['Proailurus', 'Rukwalorax', 'Aeluropuss', 'Gheerfelis'],
        bonneReponse: 0,
        description: "Proailurus (qui signifie 'premier chat') est un félidé carnivore éteint qui vivait en Europe et en Asie il y a environ 25 millions d'années. Petit animal, à peine plus grand qu'un chat domestique, il pesait environ 20 livres, avait une longue queue, de grands yeux ainsi que des griffes et dents aiguisées."
    },
    {
        titre: "Combien de muscles un chat possède-t-il dans chaque oreille ?",
        choix: [48, 20, 32, 6],
        bonneReponse: 2,
        description: "32 muscles individuels dans chaque oreille permettent à un chat de faire pivoter ses oreilles de 180 degrés."
    },
    {
        titre: "En Thaïlande, quel race de chat est donné aux jeunes mariés pour leur porter chance ?",
        choix: ["Le Korat", "Le Cymric", "Le Manx", "Le Chartreux"],
        bonneReponse: 0,
        description: "En Thaïlande, le Korat est connu sous le nom familier de 'chat porte-bonheur'. Traditionnellement, on les offre par paires aux jeunes mariés ou aux personnes très estimées, pour leur porter chance."
    },
    {
        titre: "De quelle couleur sont les yeux de tous les chats à la naissance ?",
        choix: ['Noirs', 'Bleus', 'Roses', "Verts"],
        bonneReponse: 1,
        description: "Tous les chats naissent avec des yeux bleus. La couleur de leurs yeux adultes commencera à apparaître entre 3 et 12 semaines. Les chats blancs dont les yeux restent bleus ont de fortes chances de devenir sourds à cause d'un gène dit 'W'. Ceux qui n'ont qu'un seul œil bleu ne seront probablement sourds que de l'oreille la plus proche de leur œil bleu."
    },
    {
        titre: "Quel pourcentage des os d'un chat se trouve dans sa queue ?",
        choix: ["Il n'y a pas d'os dans la queue d'un chat", '10%', '20%', '2%'],
        bonneReponse: 1,
        description: "Environ 10 % des os d'un chat se trouvent dans sa queue. Ces os sont appelés vertèbres 'caudales'. La queue du chat, composée de ces vertèbres, de ligaments, de tendons et de muscles volontaires, sert principalement à communiquer et à maintenir l'équilibre."
    },
    {
        titre: "Combien de sons différents un chat peut-il émettre ?",
        choix: [27, 100, 150, 10],
        bonneReponse: 1,
        description: "Les chats peuvent émettre une centaine de sons différents. Un chien n'en fait que 10."
    },
    {
        titre: "Quelle est la température corporelle normale d'un chat ?",
        choix: ['102°F' , '106°F', '98°F', '94°F'],
        bonneReponse: 0,
        description: "La température corporelle normale d'un chat est d'environ 102° Fahrenheit. Si votre chat a une température corporelle supérieure à 104° Fahrenheit ou inférieure à 99° Fahrenheit, il est conseiller de contacter votre vétérinaire."
    },
    {
        titre: "Quelle race de chat a la réputation de loucher ?",
        choix: ["Le Mau Égyptien" , "Le Siamois", "Le Himalayen", "Le Persan"],
        bonneReponse: 1,
        description: "Les chats siamois ont parfois des yeux croisés en raison d'un câblage anormal de leur chiasma optique. Afin de compenser ce câblage anormal dans leur cerveau, les chats présentant ce défaut vont croiser leurs yeux. Les tigres albinos souffrent parfois d'une condition similaire."
    },
    {
        titre: "Quelle race de chat n'a pas de queue ?",
        choix: ["Le Singapura" , "Le Manx", "Le Snowshoe", "Le LaPerm"],
        bonneReponse: 1,
        description: "Le Manx est une race de chat présentant une mutation génétique de la colonne vertébrale. Bien que les chats de cette race naissent parfois avec une queue normale, ils naissent le plus souvent avec un petit bout de queue ou sans queue du tout. Ce défaut de la colonne vertébrale produit également une arche notable des épaules à la croupe, ce qui fait que le Manx sautille quelque peu lorsqu'il court, lui donnant une démarche presque semblable à celle d'un lapin."
    },
    {
        titre: "Quel pays compte plus de chats par personne que tout autre pays du monde ?",
        choix: ['États-Unis' , 'Nouvelle-Zélande', 'Danemark', 'Djibouti'],
        bonneReponse: 1,
        description: "Selon le National Geographic, la Nouvelle-Zélande est en tête du classement mondial avec une moyenne de 1,8 chat par foyer."
    },
    {
        titre: "Quelle compétence les chats développent-ils en jouant avec des fils/jouets ?",
        choix: ['Accoupler' , "Trouver de la nourriture", 'Chasser', 'Socialiser'],
        bonneReponse: 2,
        description: "Lorsque les chats (surtout les chatons) jouent avec des jouets, ils développent des compétences importantes dont ils ont besoin pour la chasse."
    },
    {
        titre: "Comment appelle-t-on la peur extrême des chats ?",
        choix: ['Ailurophobie', 'Katsaridaphobie', 'Consécotaleophobie', 'Anatidaephobie'],
        bonneReponse: 0,
        description: "L'ailurophobie est la peur des chats. La katsaridaphobie est la peur des cafards. La consécotaleophobie est la peur des baguettes. L'anatidaephobie est la peur qu'un canard vous observe en permanence."
    },
    {
        titre: "Quel pourcentage de personnes s'identifient comme des personnes à chats ?",
        choix: ['27.9%', '34.6%', '48.2%', '11.5%'],
        bonneReponse: 3,
        description: "Seuls 11,5 % des gens s'identifient comme des gens à chats. Et ces 11,5 % de personnes, ont 11 % plus de chances d'être introverties."
    },
    {
        titre: "Combien de dents a un chat adulte ?",
        choix: [24, 32, 36, 30],
        bonneReponse: 3,
        description: "Un chat adulte a 30 dents, 16 sur le dessus et 14 en dessous."
    },
    {
        titre: "Quel pape catholique a condamné les chats comme étant mauvais ?",
        choix: ["Innocent VIII", "Julius III", "Gregory XIII", "Pius VII"],
        bonneReponse: 0,
        description: "Pendant l'Inquisition espagnole, le pape Innocent VIII a condamné les chats comme étant mauvais et des milliers de chats ont été tués. L'abattage généralisé des chats a entraîné une explosion de la population de rats, ce qui a empiré les effets de la peste noire."
    },
    {
        titre: "Combien d'heures les chats dorment-ils par jour ?",
        choix: ["8-12", "20-24", "16-20", "12-16"],
        bonneReponse: 2,
        description: "Les chats dorment généralement de 16 à 20 heures par jour. Pour les très jeunes et les très vieux chats, ce chiffre est plus élevé, et les nouveau-nés dorment presque 24 heures sur 24, 7 jours sur 7."
    },
    {
        titre: "Combien de moustaches a un chat ?",
        choix: [36, 24, 12, 18],
        bonneReponse: 1,
        description: "Les chats ont généralement environ 24 moustaches sur leur museau, 12 de chaque côté."
    },
    {
        titre: "Où les chats ont-ils la plupart de leurs glandes sudoripares ?",
        choix: ["Pattes", "Oreilles", "Nez", "Bedon"],
        bonneReponse: 0,
        description: "Les chats transpirent principalement par leurs pattes. Un chat effrayé peut même laisser une traînée d'empreintes humides sur le sol."
    } 
];