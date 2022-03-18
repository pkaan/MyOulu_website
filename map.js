var map;
var openedInfowindow;


/* Initializes the map */
function initMap() {
  src = "https://polyfill.io/v3/polyfill.min.js?features=default";
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 65.028098, lng: 25.479223 },
    zoom: 12.1,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ff00e9"
          },
          {
            "saturation": -25
          },
          {
            "lightness": 60
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });
}

/* 
Function is called in MunKaupunni.html line 148.
The map is loaded with Finnish content by default.
*/
function open() {
  loadMap("fi")
}

/* Language button's functionality. Changes the language */
function loadLang(lang) {

  switch (lang) {
    case "fi":
      loadMap("fi")
      break;

    case "eng":
      loadMap("eng")
      break;
  }
}

/* Main function. Initializes the map. Sets the content for the map (Finnish or English). */
function loadMap(lang) {
  initMap();
  switch (lang) {

    /* Case Finnish */
    case "fi":
      var uniOuluHeader = '<h3 id="firstHeading" class="firstHeading">Oulun Yliopisto</h3>';
      var uniOulu = "Oulun yliopisto ";
      var uniOuluText = "Suurin osa Oulun yliopiston opiskelijoista opiskelee Linnanmaan kampuksella." +
        " Linnamaan lisäksi yliopistolla on tiloja Kontinkankaalla. Linnamaan kampukselle pääsee" +
        " kätevästi bussilla tai pyöräbaanaa pitkin. Parkkipaikoista sen sijaan on usein pulaa." +
        " Linnamaan kampukselta löytyvät mm. opiskelijoiden terveydenhuollosta vastaava YTHS," +
        " tiedekirjasto Pegasus ja Oulun laajin valikoima opiskelijaravintoloita.";
      var uniOulutitleText = "uniOulu";


      var kaijonHarjuHeader = '<h3 id="firstHeading" class="firstHeading">Kaijonharju</h3>';
      var kaijonHarju = "Kaijonharju ";
      var kaijonHarjuText = "Jos asut lähellä Linnanmaan kampusta, tämä alue tulee varmasti tutuksi." +
        " Täältä löytyy lähes kaikki, mitä opiskelija tarvitsee. Tokmanni myy käyttötavaraa, vaatteita" +
        " ja ruokaa. K-market taas on ruokahifistelijöiden mieleen ja Sale kiireisten." +
        " Caio tunnetaan alueen opiskelijabaarina, kun taas perinteisempää lähiöpubitunnelmaa" +
        " kaipaavat suuntaavat Pub Kuutioon. Alueelta löytyy myös R-kioski, kirjasto ja nuorisotalo" +
        " sekä kolme ravintolaa. Keskuksen liepeillä kohoaa legendaarinen Apinatalo, jonka tilavaan" +
        " kerhohuoneeseen moni opiskelija päätyy istumaan iltaa jossakin vaiheessa opintojaan. ";
      var kaijonHarjutitleText = "Kaijonharju";


      var paskaKaupunniHeader = '<h3 id="firstHeading" class="firstHeading">Paskakaupunni</h3>';
      var paskaKaupunni = "Paska Kaupunni ";
      var paskaKaupunniText = "Paska Kaupunni on ehkä yksi Oulun tunnetuimmista maamerkeistä, " +
        "tägi on koristanut Uusikatu 22 seinää jo 1980-luvulta asti. Vaikka tämä rakkauden tunnustus" +
        " Oulun kaupunkia kohtaan on pesty useita kertoja pois, on se aina ilmestynyt takaisin omalle" +
        " paikalleen. Toisinaan myös erilaisella sanomalla, kuten parasrakas kaupunni. Vaikkakin talo," +
        " jonka seinällä Paska Kaupunni on ilostuttanut ohikulkijoita, aiotaan purkaa on tälle Oulun " +
        "katukuvaan kuuluvalle tekstille luvattu näkyvä paikka jatkossakin.";
      var paskaKaupunnititleText = "PaskaKaupunni";


      var toriPoliisiHeader = '<h3 id="firstHeading" class="firstHeading">Toripoliisi</h3>';
      var toriPoliisi = "Toripoliisi ";
      var toriPoliisiText = "Toripolliisi on Oulun tunnetuin nähtävyys. " +
        "Se on vartioinut Oulun kauppatoria vuodesta 1987.";
      var toriPoliisititleText = "Toripolliisi";


      var prismaHeader = '<h3 id="firstHeading" class="firstHeading">Prisma</h3>';
      var prisma = "Prisma ";
      var prismaText = "Prisma on Linnanmaan kampusta lähinnä ( n. 1,3 kilometrin)" +
        " sijaitseva supermarketti," +
        " josta moni opiskelija hankkii ruokaa, vaatteita ja kodintavaraa." +
        " Talosta löytyy myös apteekki, pari ravintolaa ja Alko.";
      var prismatitleText = "Prisma";


      var valkeaHeader = '<h3 id="firstHeading" class="firstHeading">Valkea</h3>';
      var valkea = "Valkea ";
      var valkeaText = "Kauppakeskus Valkea, tai oululaisittain Valakia," +
        " on Oulun keskustan uusin ja isoin kauppakeskus," +
        " josta löytyy liikkeitä ja ravintoloita joka lähtöön.";
      var valkeatitleText = "Valkea";


      var kauppaToriHeader = '<h3 id="firstHeading" class="firstHeading">Kauppatori</h3>';
      var kauppaTori = "Kauppatori ";
      var kauppaToriText = "Oulun kauppatori sijaitsee keskustan liepeillä. " +
        "Kauppatorin maisemaa hallitsevat omalle saarelleen rakennetut Oulun kaupunginteatteri ja" +
        " Oulun pääkirjasto." +
        " Kauppatorilta ja sen ympäristöstä löytyy myös paljon ravintoloita ja viihtyisiä baareja." +
        " Kesäisin kauppatori on täynnä myyntikojuja ja jäätelökioskeja ja makasiinien baarit avaavat" +
        " tilavat pationsa," +
        " joilla monet oululaiset nauttivat ilta-auringosta." +
        " Oululaiset viettävät mielellään aikaa myös torinrannan laitureilla" +
        " ja torin edustalla sijaitsevassa Kiikelin puistossa. ";
      var kauppatorititleText = "Kauppatori";


      var teekkariTaloHeader = '<h3 id="firstHeading" class="firstHeading">Teekkaritalo</h3>';
      var teekkariTalo = "Teekkaritalo ";
      var teekkariTaloText = "Teekkaritalolla järjestetään jos jonkinlaisia opiskelijabileitä." +
        " Juhliin osallistuakseen ei kuitenkaan tarvitse olla teekkari," +
        " vaan myös monet muut killat ja opiskelijajärjestöt vuokraavat talon tiloja." +
        " Ja täällä kelpaakin juhlia. Viihtyisät tilat saunoineen järvimaisemissa ja lähellä yliopistoa.";
      var teekkarititleText = "Teekkaritalo";


      var rotuaariHeader = '<h3 id="firstHeading" class="firstHeading">Rotuaari</h3>';
      var rotuaari = "Rotuaari ";
      var rotuaariText = "Kävelykatu keskellä Oulun keskustaa. " +
        "Rotuaarin varrelta löytyy paljon erilaisia liikkeitä, kahviloita, pubeja ja ravintoloita." +
        " Rotuaarin aukiolla olevalla lavalla järjestetään usein ohjelmaa. " +
        "Siellä on kisattu toistuvasti niin parhaasta tiernapoikaesityksestä kuin ilmakitaransoiton" +
        " MM-mestaruudestakin." +
        " Rotuaarin aukiolta löytyy myös kivestä veistetty Rotuaarin pallo," +
        " jonka luo oululaiset sopivat usein tapaamisia. ";
      var rotuaarititleText = "Rotuaari";


      var OAMKHeader = '<h3 id="firstHeading" class="firstHeading">OAMK</h3>';
      var OAMK = "Oulun ammattikorkeakoulu ";
      var OAMKText = "Oulun ammattikorkeakoulun Linnanmaan kampus sijaitsee Oulun yliopiston naapurissa." +
        " Oamkin puolella opiskellaan ainakin tekniikkaa, liiketaloutta, kulttuuria ja luonnonvara-alaa" +
        "sekä koulutetaan tulevia amisopeja." +
        " Yliopiston pääkäytävää tallusteleva opiskelija voi lähes huomaamatta päätyä ammattikorkeakoulun" +
        " puolelle." +
        " Oamk on muuttanut Linnanmaalle vasta hiljattain" +
        " ja nykyinen Oamkin alue oli pitkään yliopiston humanistien ja kasvatustieteilijöiden hallussa. ";
      var OAMKtitleText = "OAMK";
      break;

    /*Case English */
    case "eng":
      var uniOuluHeader = '<h3 id="firstHeading" class="firstHeadingeng">Oulun Yliopisto</h3>';
      var uniOulu = "University of Oulu ";
      var uniOuluText = "Most students of Oulu university have their classes at Linnanmaa campus." +
        " In addition to Linnanmaa, the university has facilities in Kontinkangas. You can" +
        " easily get to Linnamaa by taking a bus or cycling along the bike lane “Pyöräbaana”." +
        " In Linnanmaa, it is often hard to find an empty parking space if you drive your own car." +
        " At the campus you can find FSHS, the finnish student health service, science library Pegasus" +
        " and the most expansive selection of student restaurants in Oulu.";
      var uniOulutitleText = "uniOulu";

      var kaijonHarjuHeader = '<h3 id="firstHeading" class="firstHeadingeng">Kaijonharju</h3>';
      var kaijonHarju = "Kaijonharju ";
      var kaijonHarjuText = "If you live near Linnanmaa campus, the centre of Kaijonharju will" +
        " become familiar to you. You can find nearly everything a student needs in here." +
        " From Tokmanni you can purchase household goods, clothes and food. Foodies appreciate" +
        " the selection in K-Market and Sale is great for quick grocery runs. Caio has a reputation" +
        " of being the local bar for students while Pub Kuutio offers a more traditional suburban" +
        " pub experience. You can also find R-kioski, a library, a youth center and three restaurants." +
        " In addition, the area is home to the legendary Apinatalo (“Monkey house”)," +
        " a student housing unit with an exceptionally spacious clubroom.";
      var kaijonHarjutitleText = "Kaijonharju";

      var paskaKaupunniHeader = '<h3 id="firstHeading" class="firstHeadingeng">Paskakaupunni</h3>';
      var paskaKaupunni = "Paska Kaupunni ";
      var paskaKaupunniText = "Perhaps one of the most well known landmarks in Oulu." +
        " The Paska Kaupunni (shit city) tag has decorated the wall of Uusikatu 22 since the 80's." +
        " Although this confession of love to the City of Oulu has been removed many times," +
        " it always seems to reappear. Sometimes with a different message such as “parasrakas kaupunni” " +
        " ( bestdear city). The House where this tag has delighted passers by, is to be demolished. " +
        "However, this piece of Oulu's streetscape has been promised a visible spot in the future.";
      var paskaKaupunnititleText = "PaskaKaupunni";

      var toriPoliisiHeader = '<h3 id="firstHeading" class="firstHeadingeng">Toripoliisi</h3>';
      var toriPoliisi = "Toripoliisi ";
      var toriPoliisiText = "Toripolliisi (the bobby in the marketplace) is the most " +
        "famous sight to see in Oulu." +
        " It has stood guard in Oulu's marketplace since 1987.";
      var toriPoliisititleText = "The Bobby at the Market Place";


      var prismaHeader = '<h3 id="firstHeading" class="firstHeadingeng">Prisma</h3>';
      var prisma = "Prisma ";
      var prismaText = "Prisma is the nearest (approx. 1,3km) supermarket from the " +
        "campus of Linnanmaa." +
        " Many students shop here for food, clothes and household goods." +
        " You can also find a pharmacy, some restaurants and Alko.";
      var prismatitleText = "Prisma";


      var valkeaHeader = '<h3 id="firstHeading" class="firstHeadingeng">Valkea</h3>';
      var valkea = "Valkea ";
      var valkeaText = "The Valkea Mall, often called Valakia by the people of Oulu, " +
        "is the biggest and newest mall in the city centre. You can find all sorts " +
        "of stores, cafés and restaurants here. ";
      var valkeatitleText = "Valkea";


      var kauppaToriHeader = '<h3 id="firstHeading" class="firstHeadingeng">Kauppatori</h3>';
      var kauppaTori = "Kauppatori ";
      var kauppaToriText = "Oulu marketplace is located right next to the city centre." +
        " The landscape of the marketplace is dominated by the city theatre of Oulu and " +
        " the Main library of Oulu, which have been built on their own island." +
        " Around the marketplace, you can find lots of restaurants and cozy bars. " +
        "In the summertime, the marketplace is filled with sales stands and ice cream kiosks" +
        " and the bars open their patios where many people enjoy the evening sun. " +
        "The people of Oulu also like to spend time on the docks at the marketplace " +
        "and in the nearby park of Kiikeli.";
      var kauppatorititleText = "Market Square";


      var teekkariTaloHeader = '<h3 id="firstHeading" class="firstHeadingeng">Teekkaritalo</h3>';
      var teekkariTalo = "Teekkaritalo ";
      var teekkariTaloText = "At Teekkaritalo, the guild house of technical students," +
        " there are often all kinds of student parties. To attend these parties, you don’t" +
        " need to be a technical student yourself as many other student guilds and " +
        "student organisations rent the house for their events. And what a place to party!" +
        " Cozy premises with a sauna and a lake view and situated close to the university. ";
      var teekkarititleText = "Teekkaritalo";


      var rotuaariHeader = '<h3 id="firstHeading" class="firstHeadingeng">Rotuaari</h3>';
      var rotuaari = "Rotuaari ";
      var rotuaariText = "Pedestrian street at the heart of the city centre, " +
        "along the street you can find a multitude of different stores, pubs, " +
        "cafés and restaurants. At the stage in rotuaari square, you might see " +
        "people participating in the traditional Tiernapoika competition or even" +
        " in the annual Air Guitar World Championships. At the square, you can" +
        " also find the ball of rotuaari, which is a popular meeting point.";
      var rotuaarititleText = "Rotuaari";


      var OAMKHeader = '<h3 id="firstHeading" class="firstHeadingeng">OAMK</h3>';
      var OAMK = "Oulun ammattikorkeakoulu ";
      var OAMKText = "The Linnanmaa campus of Oulu University of Applied Sciences" +
        " lies next to the university of Oulu. It offers studies in engineering," +
        " economics, culture, use of natural resources and vocational teacher education." +
        " If you are wandering in the main hall of the university, you can easily find yourself" +
        " crossing over to its premises. The university of applied sciences has moved to Linnanmaa" +
        " just recently. Before that the space used to be occupied by the faculties of humanities and education.";
      var OAMKtitleText = "Oulu University of Applied Sciences";
      break;
  }

  /* Load images */
  var uniOuluImg = '<img src="img/unioulu.jpg" id="markerImages">';
  var kaijonHarjuImg = '<img src="img/kaijonharju.jpg" id="markerImages">';
  var paskaKaupunniImg = "<img src='img/paskakaupunni.jpg' id='markerImages'>";
  var toriPoliisiImg = '<img src="img/toripoliisi.jpg" id="markerImages">';
  var prismaImg = '<img src="img/prisma.jpg" id="markerImages">';
  var valkeaImg = '<img src="img/valkea.jpg" id="markerImages">';
  var kauppaToriImg = '<img src="img/kauppatori.jpg" id="markerImages">';
  var teekkariTaloImg = '<img src="img/teekkaritalo.jpg" id="markerImages">';
  var rotuaariImg = '<img src="img/rotuaari.jpg" id="markerImages">';
  var OAMKImg = '<img src="img/oamk.jpg" id="markerImages">';


  /* Create markers*/
  const markerUniOulu = new google.maps.Marker({
    position: new google.maps.LatLng(65.05931768401616, 25.464104816310314),
    map,
    title: uniOulutitleText,
  });
  const markerKaijonharju = new google.maps.Marker({
    position: new google.maps.LatLng(65.05992344426221, 25.47190795045213),
    map,
    title: kaijonHarjutitleText,
  });
  const markerPrisma = new google.maps.Marker({
    position: new google.maps.LatLng(65.0543268840138, 25.45398611623355),
    map,
    title: prismatitleText,
  });
  const markerValkea = new google.maps.Marker({
    position: new google.maps.LatLng(65.0113525839936, 25.47022871630826),
    map,
    title: valkeatitleText,
  });
  const markerKauppatori = new google.maps.Marker({
    position: new google.maps.LatLng(65.01318941788931, 25.463034940818716),
    map,
    title: kauppatorititleText,
  });
  const markerTeekkariTalo = new google.maps.Marker({
    position: new google.maps.LatLng(65.06380878401825, 25.481713716233944),
    map,
    title: teekkarititleText,
  });
  const markerRotuaari = new google.maps.Marker({
    position: new google.maps.LatLng(65.01250968399417, 25.469339716308323),
    map,
    title: rotuaarititleText,
  });
  const markerPaskaKaupunni = new google.maps.Marker({
    position: new google.maps.LatLng(65.0128157839943, 25.47455051623168),
    map,
    title: paskaKaupunnititleText,
  });
  const markerToripoliisi = new google.maps.Marker({
    position: new google.maps.LatLng(65.0132895, 25.4647973),
    map,
    title: toriPoliisititleText,
  });
  const markerOAMK = new google.maps.Marker({
    position: new google.maps.LatLng(65.06031500000002, 25.469418),
    map,
    title: OAMKtitleText,
  });

  /* Handling of the info windows + zoom */
  function openWindowOnBtn(marker) {
    switch (marker) {
      case "uniOulu": closeInfoWindow();
        infowindow = content(uniOuluHeader, uniOulu, uniOuluText, uniOuluImg, uniOulutitleText);
        map.setZoom(15);
        map.setCenter(markerUniOulu.getPosition());
        infowindow.open(map, markerUniOulu);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.05913040375731, lng: 25.465031815610185 });
          map.setZoom(14);
        });
        break;
      case "kaijonHarju": closeInfoWindow();
        infowindow = content(kaijonHarjuHeader, kaijonHarju, kaijonHarjuText, kaijonHarjuImg, kaijonHarjutitleText);
        map.setZoom(15);
        map.setCenter(markerKaijonharju.getPosition());
        infowindow.open(map, markerKaijonharju);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.05913040375731, lng: 25.465031815610185 });
          map.setZoom(14);
        });
        break;
      case "paskaKaupunni": closeInfoWindow();
        infowindow = content(paskaKaupunniHeader, paskaKaupunni, paskaKaupunniText, paskaKaupunniImg, paskaKaupunnititleText);
        map.setZoom(15);
        map.setCenter(markerPaskaKaupunni.getPosition());
        infowindow.open(map, markerPaskaKaupunni);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.01258374249106, lng: 25.467139587898174 });
          map.setZoom(14);
        });
        break;
      case "prisma": closeInfoWindow();
        infowindow = content(prismaHeader, prisma, prismaText, prismaImg, prismatitleText);
        map.setZoom(15);
        map.setCenter(markerPrisma.getPosition());
        infowindow.open(map, markerPrisma);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.05913040375731, lng: 25.465031815610185 });
          map.setZoom(14);
        });
        break;
      case "valkea": closeInfoWindow();
        infowindow = content(valkeaHeader, valkea, valkeaText, valkeaImg, valkeatitleText);
        map.setZoom(15);
        map.setCenter(markerValkea.getPosition());
        infowindow.open(map, markerValkea);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.01258374249106, lng: 25.467139587898174 });
          map.setZoom(14);
        });
        break;
      case "kauppaTori": closeInfoWindow();
        infowindow = content(kauppaToriHeader, kauppaTori, kauppaToriText, kauppaToriImg, kauppatorititleText);
        map.setZoom(15);
        map.setCenter(markerKauppatori.getPosition());
        infowindow.open(map, markerKauppatori);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.01258374249106, lng: 25.467139587898174 });
          map.setZoom(14);
        });
        break;
      case "teekkariTalo": closeInfoWindow();
        infowindow = content(teekkariTaloHeader, teekkariTalo, teekkariTaloText, teekkariTaloImg, teekkarititleText);
        map.setZoom(15);
        map.setCenter(markerTeekkariTalo.getPosition());
        infowindow.open(map, markerTeekkariTalo);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.05913040375731, lng: 25.465031815610185 });
          map.setZoom(14);
        });
        break;
      case "rotuaari": closeInfoWindow();
        infowindow = content(rotuaariHeader, rotuaari, rotuaariText, rotuaariImg, rotuaarititleText);
        map.setZoom(15);
        map.setCenter(markerRotuaari.getPosition());
        infowindow.open(map, markerRotuaari);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.01258374249106, lng: 25.467139587898174 });
          map.setZoom(14);
        });
        break;
      case "toriPoliisi": closeInfoWindow();
        infowindow = content(toriPoliisiHeader, toriPoliisi, toriPoliisiText, toriPoliisiImg, toriPoliisititleText);
        map.setZoom(15);
        map.setCenter(markerToripoliisi.getPosition());
        infowindow.open(map, markerToripoliisi);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.01258374249106, lng: 25.467139587898174 });
          map.setZoom(14);
        });
        break;
      case "oamk": closeInfoWindow();
        infowindow = content(OAMKHeader, OAMK, OAMKText, OAMKImg, OAMKtitleText);
        map.setZoom(15);
        map.setCenter(markerOAMK.getPosition());
        infowindow.open(map, markerOAMK);
        openedInfowindow = infowindow;
        google.maps.event.addListener(infowindow, 'closeclick', function () {
          map.panTo({ lat: 65.05913040375731, lng: 25.465031815610185 });
          map.setZoom(14);
        });
        break;

    }
  }
  loadMap.openWindowOnBtn = openWindowOnBtn;

  /* Add listeners to markers (action on click --> open window + zoom) */
  markerUniOulu.addListener("click", () => {
    openWindowOnBtn("uniOulu");
  });
  markerKaijonharju.addListener("click", () => {
    openWindowOnBtn("kaijonHarju");
  });
  markerPaskaKaupunni.addListener("click", () => {
    openWindowOnBtn("paskaKaupunni");
  });
  markerPrisma.addListener("click", () => {
    openWindowOnBtn("prisma");
  });
  markerValkea.addListener("click", () => {
    openWindowOnBtn("valkea");
  });
  markerKauppatori.addListener("click", () => {
    openWindowOnBtn("kauppaTori")
  });
  markerTeekkariTalo.addListener("click", () => {
    openWindowOnBtn("teekkariTalo");
  });
  markerRotuaari.addListener("click", () => {
    openWindowOnBtn("rotuaari");
  });
  markerToripoliisi.addListener("click", () => {
    openWindowOnBtn("toriPoliisi");
  });
  markerOAMK.addListener("click", () => {
    openWindowOnBtn("oamk");
  });
}

/* Align Quiz button with the content, add action on click*/
function content(x, y, z, f, g) {

  var header = x;
  var text = z;
  var image = f;




  if (x.includes('class="firstHeadingeng"')) {
    var contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      header + image + '<button id="visabtn"; onclick="quiz()">See the quiz question</button>' +
      '<div id="bodyContent">' +
      "<p>" + text + "</p>" +
      "</div>" +
      "</div>";
  }
  else {
    var contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      header + image + '<button id="visabtn"; onclick="quiz()">Katso visakysymys</button>' +
      '<div id="bodyContent">' +
      "<p>" + text + "</p>" +
      "</div>" +
      "</div>";

  }

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });


  return infowindow;

}

/* Change the language of the button */
function buttonLang() {
  x = document.getElementById("visabtneng");
  x.style.display = "inline";

  x = document.getElementById("visabtn");
  x.style.display = "none";
}

/* Zoom to target */
function redirect(x) {
  switch (x) {
    case 1: //yliopisto
      map.panTo({ lat: 65.05931768401616, lng: 25.464104816310314 });
      map.setZoom(16);
      break;
    case 2: //kaijonharju
      map.panTo({ lat: 65.05992344426221, lng: 25.47190795045213 });
      map.setZoom(16);
      break;
    case 3: //paskakaupunni
      map.panTo({ lat: 65.0128157839943, lng: 25.47455051623168 });
      map.setZoom(16);
      break;
    case 4: //toripoliisi
      map.panTo({ lat: 65.0132895, lng: 25.4647973 });
      map.setZoom(16);
      break;
    case 5: //prisma
      map.panTo({ lat: 65.0543268840138, lng: 25.45398611623355 });
      map.setZoom(16);
      break;
    case 6: //valkea
      map.panTo({ lat: 65.0113525839936, lng: 25.47022871630826 });
      map.setZoom(16);
      break;
    case 7: //kauppatori
      map.panTo({ lat: 65.01318941788931, lng: 25.463034940818716 });
      map.setZoom(16);
      break;
    case 8: //teekkaritalo
      map.panTo({ lat: 65.06380878401825, lng: 25.481713716233944 });
      map.setZoom(16);
      break;
    case 9: //rotuaari
      map.panTo({ lat: 65.01250968399417, lng: 25.469339716308323 });
      map.setZoom(16);
      break;
    case 10: //oamk
      map.panTo({ lat: 65.06031500000002, lng: 25.469418 });
      map.setZoom(16);
      break;
  }
}

/* Close info window*/
function closeInfoWindow() {
  if (openedInfowindow) {
    openedInfowindow.close();
  }
}

/* Re-center map*/
function recenter(x) {
  if (x == 0) {
    map.panTo({ lat: 65.01258374249106, lng: 25.467139587898174 });
    map.setZoom(14);
  }
  if (x == 1) {
    map.panTo({ lat: 65.05913040375731, lng: 25.465031815610185 });
    map.setZoom(14);
  }
  if (x == 2) {
    map.panTo({ lat: 65.028098, lng: 25.479223 });
    map.setZoom(12.1);
  }
  if (x == 4) {
    map.panTo({ lat: 65.028098, lng: 25.479223 });
    map.setZoom(12.1);
  }
  if (x == 5) {
    map.panTo({ lat: 65.01258374249106, lng: 25.467139587898174 });
    map.setZoom(14);
  }
  if (x == 6) {
    map.panTo({ lat: 65.05913040375731, lng: 25.465031815610185 });
    map.setZoom(14);
  }
}