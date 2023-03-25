

function createList(myList) {
    let htmlList = "<ul>";
    myList.forEach( e => {
      htmlList =htmlList+  `<li>${correspondance[e.action]}</li>`;
    });
    htmlList += "</ul>";
    return htmlList;
  }

  
function createTitle(myList,size,title) {
    let htmlList = `<${size}>${title} :`;
    myList.forEach( e => htmlList += ` ${e},` );
    htmlList = htmlList.slice(0, -1);
    htmlList +=  `</${size}>`;
    return htmlList;
  }


  function createVideoElement(video,i) {
    const templateListe = createList(video.actions);
    const templateObjetsDuDomaine = createTitle(video.objets_du_domaine,"h4","Objets du domaine");
    const templateInstruments = createTitle(video.instruments,"h5","Instruments");
    const templateDiv = `
      <h1> Etape ${i} : ${video.titre}</h1>
      <div class="wrapper">
        <div class="one">
          <img style="width: 100%; height: auto;" src="${video.lien_image}" id="i_${video.id}" onclick="showVideo('${video.id}')" />
          <video style="width: 100%; height: auto; display: none;" id="v_${video.id}" controls>
            <source src="${video.lien_video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="two">
          <div class="card bg-info text-white">
            ${templateObjetsDuDomaine}
            ${templateInstruments}
            <div class="card-body">${templateListe}</div>
            <p> <i>Cliquer sur l'image pour le tuto video</i>.</p>
            <a href="${video.blendLink}" download>Télécharger le fichier .blend</a>
          </div>
        </div>
      </div> <br><br><br>
    `;
  
    return templateDiv;
  }
  
  function showVideo(videoId) {
    var imgElement = document.getElementById(`i_${videoId}`);
    var videoElement = document.getElementById(`v_${videoId}`);
  
    imgElement.style.display = "none";
    videoElement.style.display = "block";
    videoElement.play();
  }
  
  function ecrireHtml() {
    var node = document.getElementById("ecrire");
    node.innerHTML = ""; // Initialize the innerHTML property to an empty string
    let i = 1;
    videos.forEach(video => {
      node.innerHTML += createVideoElement(video,i);
      i++;
    });
  }






var videos=[
    {
    "id": "step1",
    "objets_du_domaine": ["plan","Objets 3D"],
    "titre": "Creation de la base",
    "lien_image": "./img/step1.png",
    "lien_video": "./video/step1.mkv",
    "blendLink" : "./blender/step1.blend",
    "instruments": ["sélection", "extrusion"],
    "actions": [
      {"action": "ShiftA"},
      {"action": "plan"},
      {"action": "TabE"},
      {"action": "E"},
      {"action": "Clickg"},
      {"action": "E"},
      {"action": "Clickg"}
    ]
  },
  {
    "id": "step2",
    "objets_du_domaine": ["Objets 3D","plan"],
    "titre": "Création du toit (partie 1)",
    "lien_image": "./img/step2.png",
    "lien_video": "./video/step2.mkv",
    "blendLink" : "./blender/step2.blend",
    "instruments": ["sélection", "échelle"],
    "actions": [
    {"action": "Scube" },
    {"action": "TabE"},
    {"action": "SX"},
    {"action": "n3"},
    {"action": "ShiftClickSup"},
    {"action": "ShiftD"},
    {"action": "Clickd"},
    {"action": "P"}
    ]
    },
    {
      "id": "step3",
      "objets_du_domaine": ["plan","Objets 3D"],
      "titre": "Création du toit (partie 2)",
      "lien_image": "./img/step3.png",
      "lien_video": "./video/step3.mkv",
      "blendLink" : "./blender/step3.blend",
      "instruments": ["sélection", "extrusion","échelle"],
      "actions": [
      {"action": "TabO" },
      {"action": "Clicktoit"},
      {"action": "TabE"},
      {"action": "A"},
       {"action": "E"},
         {"action": "A"},
      {"action": "S"},
      {"action": "Smilieu"},
      {"action": "ShiftD"},
      {"action": "Clickd"},
      {"action": "P"}
      ]
      },
      {
        "id": "step4",
        "objets_du_domaine": ["Objets 3D"],
        "titre": "Création de la poutre ",
        "lien_image": "./img/step4.png",
        "lien_video": "./video/step4.mkv",
        "blendLink" : "./blender/step4.blend",
        "instruments": ["sélection", "échelle","extrusion","déplacement"],
        "actions": [
        {"action": "TabO" },
        {"action": "Smilieu"},
        {"action": "TabE"},
        {"action": "E"},
        {"action": "A"},
        {"action": "SX"},
        {"action": "Sfront"},
        {"action": "GY"},
        {"action": "Sback"},
        {"action": "S"},
        {"action": "G"},
        ]
        },
        {
          "id": "step5",
          "objets_du_domaine": ["Objets 3D"],
          "titre": "Styliser la forme de la maison",
          "lien_image": "./img/step5.png",
          "lien_video": "./video/step5.mkv",
          "blendLink" : "./blender/step5.blend",
          "instruments": ["sélection", "déplacement", "échelle"],
          "actions": [
          {"action": "TabO" },
          {"action": "nom"},
          {"action": "StP"},
          {"action": "TabE"},
          {"action": "A"},
          {"action": "G"},
          {"action": "TabO"},
          {"action": "StM"},
          {"action": "TabE"},
          {"action": "Clickinf"},
          {"action": "S"}
          ]
          },
          {
            "id": "step6",
            "objets_du_domaine": ["Objets 3D","plan"],
            "titre": "Creation de la porte",
            "lien_image": "./img/step6.png",
            "lien_video": "./video/step6.mkv",
            "blendLink" : "./blender/step6.blend",
            "instruments": ["sélection", "échelle", "extrusion","déplacement"],
            "actions": [
            {"action": "TabO" },
            {"action": "StM"},
            {"action": "TabE"},
            {"action": "n3"},
            {"action": "Sfront"},
            {"action": "ShiftD"},
            {"action": "Clickd"},
            {"action": "S"},
            {"action": "n2"},
            {"action": "Sbinf"},
            {"action": "GGC"},
            {"action": "n3"},
            {"action": "Sfront"},
            {"action": "E"},
            {"action": "Clickinf"},
            {"action": "X"},
            {"action": "Sfront"},
            {"action": "IB"},
            {"action": "Sfront"},
            {"action": "E"},
            {"action": "Clickinf"},
            {"action": "X"},
            {"action": "Sporte"},
            {"action": "P"}
            ]
            },
            {
              "id": "step7",
              "objets_du_domaine": ["Objets 3D","plan"],
              "titre": "Creation des fenetres",
              "lien_image": "./img/step7.png",
              "lien_video": "./video/step7.mkv",
              "blendLink" : "./blender/step7.blend",
              "instruments": ["sélection", "extrusion", "séparation","rotation"],
              "actions": [
              {"action": "TabO" },
              {"action": "StM"},
              {"action": "TabE"},
              {"action": "n3"},
              {"action": "Clickcote"},
              {"action": "ShiftD"},
              {"action": "Clickd"},
              {"action": "S"},
              {"action": "E"},
              {"action": "Sporte"},
              {"action": "P"},
              {"action": "TabO"},
              {"action": "Sfen"},
              {"action": "TabE"},
              {"action": "subd4"},
              {"action": "II"},
              {"action": "E"},
              {"action": "TabO"},
              {"action": "ShiftD"},
              {"action": "R180"}
              ]
              },
              {
                "id": "step8",
                "objets_du_domaine": ["cercle","Objets 3D"],
                "titre": "Creation de la fenetre ronde",
                "lien_image": "./img/step8.png",
                "lien_video": "./video/step8.mkv",
                "blendLink" : "./blender/step8.blend",
                "instruments": ["sélection", "extrusion", "échelle"],
                "actions": [
                {"action": "TabO" },
                {"action": "StM"},
                {"action": "TabE"},
                {"action": "ShiftCd"},
                {"action": "ShiftA"},
                {"action": "cercle"},
                {"action": "addC"},
                {"action": "TabE"},
                {"action": "n1"},
                {"action": "E"},
                {"action": "Clickd"},
                {"action": "S"},
                {"action": "A"},
                {"action": "E"},
                {"action": "ShiftA"},
                {"action": "cude"},
                {"action": "S"},
                {"action": "Ec"}
                ]
                },
                {
                  "id": "step9",
                  "objets_du_domaine": ["Objets 3D"],
                  "titre": "Redimentionner la maison",
                  "lien_image": "./img/step9.png",
                  "lien_video": "./video/step9.mkv",
                  "blendLink" : "./blender/step9.blend",
                  "instruments": ["sélection", "échelle"],
                  "actions": [
                  {"action": "TabO" },
                  {"action": "A"},
                  {"action": "SX"},
                  {"action": "Clickg"},
                  {"action": "SY"},
                  {"action": "Clickg"},
                  ]
                  },
                  {
                    "id": "step10",
                    "objets_du_domaine": ["plan","Objets 3D"],
                    "titre": "Création de la cheminé (partie 1)",
                    "lien_image": "./img/step10.png",
                    "lien_video": "./video/step10.mkv",
                    "blendLink" : "./blender/step10.blend",
                    "instruments": ["sélection", "déplacement", "extrusion"],
                    "actions": [
                    {"action": "TabO" },
                    {"action": "Clicktoit"},
                    {"action": "TabE"},
                    {"action": "n3"},
                    {"action": "Clickface"},
                    {"action": "ShiftD"},
                    {"action": "Clickd"},
                    {"action": "virgN"},
                    {"action": "S"},
                    {"action": "GX"},
                    {"action": "GY"},
                    {"action": "virgG"},
                    {"action": "E"},
                    {"action": "Clickd"},
                    {"action": "GD"},
                    {"action": "SZ0"}

              
                    ]
                    },
                    {
                      "id": "step11",
                      "objets_du_domaine": ["plan","Objets 3D"],
                      "titre": "Création de la cheminé (partie 2)",
                      "lien_image": "./img/step11.png",
                      "lien_video": "./video/step11.mkv",
                      "blendLink" : "./blender/step11.blend",
                      "instruments": ["sélection", "échelle", "extrusion"],
                      "actions": [
                      {"action": "E" },
                      {"action": "Clickd"},
                      {"action": "S"},
                      {"action": "E"},
                      {"action": "I"},
                      {"action": "E"},
                      {"action": "P"}
                      ]
                      },
                      {
                        "id": "step12",
                        "objets_du_domaine": ["plan","Objets 3D"],
                        "titre": "Styliser le toit (partie 1)",
                        "lien_image": "./img/step12.png",
                        "lien_video": "./video/step12.mkv",
                        "blendLink" : "./blender/step12.blend",
                        "instruments": ["sélection", "extrusion", "échelle"],
                        "actions": [
                          {"action": "TabO" },
                          {"action": "Clicktoit"},
                          {"action": "TabE"},
                        {"action": "decoup"},
                        {"action": "Clickface"},
                        {"action": "ShiftD"},
                        {"action": "Clickd"},
                        {"action": "repet"},
                        {"action": "TabO"},
                        {"action": "Clickface"},
                        {"action": "TabE"},
                        {"action": "SX"},
                        {"action": "E"},
                        {"action": "repet"}
                        ]
                        },
                        {
                          "id": "step13",
                          "objets_du_domaine": ["Objets 3D"],
                          "titre": "Styliser le toit (partie 2)",
                          "lien_image": "./img/step13.png",
                          "lien_video": "./video/step13.mkv",
                          "blendLink" : "./blender/step13.blend",
                          "instruments": ["sélection", "rotation"],
                          "actions": [
                          {"action": "TabO" },
                          {"action": "Clickface"},
                          {"action": "TabE"},
                          {"action": "ShiftD"},
                          {"action": "Clickd"},
                          {"action": "R180"},
                          {"action": "repet"}
                          ]
                          },
                          {
                            "id": "step14",
                            "objets_du_domaine": ["Objets 3D"],
                            "titre": "Ajout de 'Modifier'",
                            "lien_image": "./img/step14.png",
                            "lien_video": "./video/step14.mkv",
                            "blendLink" : "./blender/step14.blend",
                            "instruments": ["sélection", "modificateurs"],
                            "actions": [
                            {"action": "TabO" },
                            {"action": "StM"},
                            {"action": "modif"},
                            {"action": "repet"}
                            ]
                            },
                            {
                              "id": "step15",
                              "objets_du_domaine": ["Objets 3D"],
                              "titre": "Dupliquer la maison",
                              "lien_image": "./img/step15.png",
                              "lien_video": "./video/step15.mkv",
                              "blendLink" : "./blender/step15.blend",
                              "instruments": ["sélection", "duplication", "séparation"],
                              "actions": [
                              {"action": "TabO" },
                              {"action": "A"},
                              {"action": "ShiftD"},
                              {"action": "Clickd"},
                              {"action": "S"},
                              {"action": "GY"},
                              {"action": "SupPorte"}
                              ]
                              },
                              {
                                "id": "step16",
                                "objets_du_domaine": ["Objets 3D","Caméras","Lumières","Matériaux"],
                                "titre": "Ajout camera et couleurs",
                                "lien_image": "./img/step16.png",
                                "lien_video": "./video/step16.mkv",
                                "blendLink" : "./blender/step16.blend",
                                "instruments": ["sélection", "propriété des matériaux"],
                                "actions": [
                                {"action": "coll" },
                                {"action": "ShiftA"},
                                {"action": "cam"},
                                {"action": "ctrlAlt0"},
                                {"action": "sepV"},
                                {"action": "Ombr"},
                                {"action": "OMR2"},
                                {"action": "Word"},
                                {"action": "ShiftA"},
                                {"action": "lum"},
                                {"action": "TabO"},
                                {"action": "StM"},
                                {"action": "propM"},
                                {"action": "col"},
                                {"action": "repet"}
                                ]
                                },
                                {
                                  "id": "step17",
                                  "objets_du_domaine": ["Objets 3D","Matériaux"],
                                  "titre": "Ajout d'effets lumineux",
                                  "lien_image": "./img/step17.png",
                                  "lien_video": "./video/step17.mkv",
                                  "blendLink" : "./blender/step17.blend",
                                  "instruments": ["sélection", "déplacement", "propriété des matériaux"],
                                  "actions": [
                                  {"action": "TabE" },
                                  {"action": "SporteInt"},
                                  {"action": "ShiftD"},
                                  {"action": "Clickd"},
                                  {"action": "GY"},
                                  {"action": "P"},
                                  {"action": "propM"},
                                  {"action": "emiss"},
                                  {"action": "col"},
                                  {"action": "flou"},
                                  {"action": "repetF"}
                                  ]
                                  }
]




var correspondance = {
  repetF: "Repeter pour chacune des fenetres",
  SporteInt : "Sélectionner la phase interieure de la porte",
  coll : "Nouvelle Collection",
  cam :  "Choisir une camera",
  ctrlAlt0 : "Ctrl + Alt + 0 : Modifier l'angle",
  lum :  "Choisir une lumière",
  sepV: "Séparer la vue",
  Ombr : "Mode Ombrage de Vue",
  OMR2 : "Ombrage : Eclairage de scene, environnement de la scene",
  Word : "Dans 'Propriété du Monde' modifier la couleur",
  propM: "Dans 'Propriété matériaux' :  Nouveau",
  col : "Modifier la couleur",
  emiss : " Dans 'Surface' choisir 'Emission'",
  flou : "Dans 'Propriété du rendu' choisir 'flou lumineux'",
  SupPorte : "Supprimer la porte",
  modif : "Dans 'Ajouter Modifier' choisir 'Biseau' et modifier les paramètres au choix ",
  repet: "Repeter pour chacun des éléments",
  decoup : "Subdiviser le toit plusieurs fois",
  I : "I : Creation des bords",
  SZ0 : "S + Z + 0 : Redimentionner pour obtenir un angle droit",
  virgN :", : Choisir le mode Normal",
  virgG :", : Choisir le mode Global",
  Ec : "E : Extruder les quatres faces",
  addC : " Alignement=Vue, Sommet=8, rayon=0.3",
  ShiftCd : "Shift + Clic droit : Deplacer le curseur 3d",
  cercle :  "Choisir un cercle",
  cube :  "Choisir un cube ",
  ShiftA : "Shift + A : ouvrir le menu d'ajout d'objet",
  plan :  "Choisir un plan",
  TabE : "Tab : Entrer en mode édition",
  TabO : "Tab : Entrer en mode objet",
  E : "E : Extruder",
  Clickg :  "Click gauche : Confirmer la position",
  Clickd :  "Click droit : Annuler le mouvement",
  Scube :"Sélectionner le cube",
  SX :"S + X : Redimentionner la sur l'axe des x",
  SY :"S + Y : Redimentionner la sur l'axe des y",
  P : "P : Séparer les faces dupliquées avec  'Sélection'",
  ShiftD : "Shift + D : Dupliquer",
  n3 :"3 : Passer en mode sélection de face",
  n2 :"2 : Passer en mode sélection de d'arrete",
  n1 :"1 : Passer en mode sélection de de sommet",
  ShiftClickSup : "Sélectionner les faces supérieures",
  Clickinf : "Sélectionner la face inférieure",
  Clickcote : "Sélectionner la face d'un coté",
  Clicktoit : "Sélectionner le toit",
  Clickface : "Sélectionner une face",
  A : "A : Sélectionner tout",
  S : "S : Redimentionner",
  Smilieu : "Sélectionner la face du milieu",
  Sfront : "Sélectionner la face du avant",
  Sback : "Sélectionner la face du arriere",
  GY : "G + Y : Déplacer sur l'axe Y",
  GX : "G + X : Déplacer sur l'axe X",
  GD : "G + D : Déplacer sur l'axe D",
   G : "G : Déplacer",
  nom : "Renomer les plans",
  clickC : "Click molette",
  StP : "Sélectionner le toit et la poutre",
  StM : "Sélectionner la maison",
  X : "X : Supprimer la Face",
  IB : "I + B : Creation des bords",
  Sporte : "Sélectionner toute les faces",
  Sfen : "Sélectionner la fenetre",
  Sbinf : "Sélectionner le bord inférieur",
  GGC : "G (x2) + C  : Redimentionner la porte",
  subd4 : "Clic droit : subdiviser en 4",
  II : "I (x2) : Creer des bords",
  R180 : "R : Rotation et saisir Z=180" ,
  
}
