/* 

Nested loops allow to manipulate data when iterating through SubArrays.

Challenge.
1. the array has 195 countries, population, land mass km2, meters above sea level.

2. create a varible for flattening the Array in 1 dimensional Array. 

3. use a nested loop in my solution

*/



// Iterate through this array and its

// sub-arrays to create your flattened array
let countryData = [["Afghanistan", 37209007, 652860, 57], ["Albania", 2938428, 27400, 107], ["Algeria", 42679018, 2381740, 18], ["Andorra", 77072, 470, 164], ["Angola", 31787566, 1246700, 25], ["Antigua and Barbuda", 104084, 440, 237], ["Argentina", 45101781, 2736690, 16], ["Armenia", 2936706, 28470, 103], ["Australia", 25088636, 7682300, 3], ["Austria", 8766201, 82409, 106], ["Azerbaijan", 10014575, 82658, 121], ["Bahamas", 403095, 10010, 40], ["Bahrain", 1637896, 760, 2155], ["Bangladesh", 168065920, 130170, 1291], ["Barbados", 287010, 430, 667], ["Belarus", 9433874, 202910, 46], ["Belgium", 11562784, 30280, 382], ["Belize", 390231, 22810, 17], ["Benin", 11801595, 112760, 105], ["Bhutan", 826229, 38117, 22], ["Bolivia", 11379861, 1083300, 11], ["Bosnia and Herzegovina", 3501774, 51000, 69], ["Botswana", 2374636, 566730, 4], ["Brazil", 212392717, 8358140, 25], ["Brunei", 439336, 5270, 83], ["Bulgaria", 6988739, 108560, 64], ["Burkina Faso", 20321560, 273600, 74], ["Burundi", 11575964, 25680, 451], ["Côte d'Ivoire", 25531083, 318000, 80], ["Cabo Verde", 560349, 4030, 139], ["Cambodia", 16482646, 176520, 93], ["Cameroon", 25312993, 472710, 54], ["Canada", 37279811, 9093510, 4], ["Central African Republic", 4825711, 622980, 8], ["Chad", 15814345, 1259200, 13], ["Chile", 18336653, 743532, 25], ["China", 1420062022, 9388211, 151], ["Colombia", 49849818, 1109500, 45], ["Comoros", 850910, 1861, 457], ["Congo (Congo-Brazzaville)", 5542197, 341500, 16], ["Costa Rica", 4999384, 51060, 98], ["Croatia", 4140148, 55960, 74], ["Cuba", 11492046, 106440, 108], ["Cyprus", 1198427, 9240, 130], ["Czech Republic", 10630589, 77240, 138], ["Democratic Republic of the Congo", 86727573, 2267050, 38], ["Denmark", 5775224, 42430, 136], ["Djibouti", 985690, 23180, 43], ["Dominica", 74679, 750, 100], ["Dominican Republic", 10996774, 48320, 228], ["Ecuador", 17100444, 248360, 69], ["Egypt", 101168745, 995450, 102], ["El Salvador", 6445405, 20720, 311], ["Equatorial Guinea", 1360104, 28050, 48], ["Eritrea", 5309659, 101000, 53], ["Estonia", 1303798, 42390, 31], ["Ethiopia", 110135635, 1000000, 110], ["Fiji", 918757, 18270, 50], ["Finland", 5561389, 303890, 18], ["France", 65480710, 547557, 120], ["Gabon", 2109099, 257670, 8], ["Gambia", 2228075, 10120, 220], ["Georgia", 3904204, 69490, 56], ["Germany", 82438639, 348560, 237], ["Ghana", 30096970, 227540, 132], ["Greece", 11124603, 128900, 86], ["Grenada", 108825, 340, 320], ["Guatemala", 17577842, 107160, 164], ["Guinea", 13398180, 245720, 55], ["Guinea-Bissau", 1953723, 28120, 69], ["Guyana", 786508, 196850, 4], ["Haiti", 11242856, 27560, 408], ["Holy See", 799, 0, 1998], ["Honduras", 9568688, 111890, 86], ["Hungary", 9655361, 90530, 107], ["Iceland", 340566, 100250, 3], ["India", 1368737513, 2973190, 460], ["Indonesia", 269536482, 1811570, 149], ["Iran", 82820766, 1628550, 51], ["Iraq", 40412299, 434320, 93], ["Ireland", 4847139, 68890, 70], ["Israel", 8583916, 21640, 397], ["Italy", 59216525, 294140, 201], ["Jamaica", 2906339, 10830, 268], ["Japan", 126854745, 364555, 348], ["Jordan", 10069794, 88780, 113], ["Kazakhstan", 18592970, 2699700, 7], ["Kenya", 52214791, 569140, 92], ["Kiribati", 120428, 810, 149], ["Kuwait", 4248974, 17820, 238], ["Kyrgyzstan", 6218616, 191800, 32], ["Laos", 7064242, 230800, 31], ["Latvia", 1911108, 62200, 31], ["Lebanon", 6065922, 10230, 593], ["Lesotho", 2292682, 30360, 76], ["Liberia", 4977720, 96320, 52], ["Libya", 6569864, 1759540, 4], ["Liechtenstein", 38404, 160, 240], ["Lithuania", 2864459, 62674, 46], ["Luxembourg", 596992, 2590, 230], ["Macedonia (FYROM)", 2086720, 25220, 83], ["Madagascar", 26969642, 581795, 46], ["Malawi", 19718743, 94280, 209], ["Malaysia", 32454455, 328550, 99], ["Maldives", 451738, 300, 1506], ["Mali", 19689140, 1220190, 16], ["Malta", 433245, 320, 1354], ["Marshall Islands", 53211, 180, 296], ["Mauritania", 4661149, 1030700, 5], ["Mauritius", 1271368, 2030, 626], ["Mexico", 132328035, 1943950, 68], ["Micronesia", 106983, 700, 153], ["Moldova", 4029750, 32850, 123], ["Monaco", 39102, 1, 26243], ["Mongolia", 3166244, 1553560, 2], ["Montenegro", 629355, 13450, 47], ["Morocco", 36635156, 446300, 82], ["Mozambique", 31408823, 786380, 40], ["Myanmar (formerly Burma)", 54336138, 653290, 83], ["Namibia", 2641996, 823290, 3], ["Nauru", 11260, 20, 563], ["Nepal", 29942018, 143350, 209], ["Netherlands", 17132908, 33720, 508], ["New Zealand", 4792409, 263310, 18], ["Nicaragua", 6351157, 120340, 53], ["Niger", 23176691, 1266700, 18], ["Nigeria", 200962417, 910770, 221], ["North Korea", 25727408, 120410, 214], ["Norway", 5400916, 365268, 15], ["Oman", 5001875, 309500, 16], ["Pakistan", 204596442, 770880, 265], ["Palau", 22206, 460, 48], ["Palestine State", 5186790, 6020, 862], ["Panama", 4226197, 74340, 57], ["Papua New Guinea", 8586525, 452860, 19], ["Paraguay", 6981981, 397300, 18], ["Peru", 32933835, 1280000, 26], ["Philippines", 108106310, 298170, 363], ["Poland", 38028278, 306230, 124], ["Portugal", 10254666, 91590, 112], ["Qatar", 2743901, 11610, 236], ["Romania", 19483360, 230170, 85], ["Russia", 143895551, 16376870, 9], ["Rwanda", 12794412, 24670, 519], ["Saint Kitts and Nevis", 56345, 260, 217], ["Saint Lucia", 180454, 610, 296], ["Saint Vincent and the Grenadines", 110488, 390, 283], ["Samoa", 198909, 2830, 70], ["San Marino", 33683, 60, 561], ["Sao Tome and Principe", 213379, 960, 222], ["Saudi Arabia", 34140662, 2149690, 16], ["Senegal", 16743859, 192530, 87], ["Serbia", 8733407, 87460, 100], ["Seychelles", 95702, 460, 208], ["Sierra Leone", 7883123, 72180, 109], ["Singapore", 5868104, 700, 8383], ["Slovakia", 5450987, 48088, 113], ["Slovenia", 2081900, 20140, 103], ["Solomon Islands", 635254, 27990, 23], ["Somalia", 15636171, 627340, 25], ["South Africa", 58065097, 1213090, 48], ["South Korea", 51339238, 97230, 528], ["South Sudan", 13263184, 610952, 22], ["Spain", 46441049, 498800, 93], ["Sri Lanka", 21018859, 62710, 335], ["Sudan", 42514094, 1765048, 24], ["Suriname", 573085, 156000, 4], ["Swaziland", 1415414, 17200, 82], ["Sweden", 10053135, 410340, 24], ["Switzerland", 8608259, 39516, 218], ["Syria", 18499181, 183630, 101], ["Tajikistan", 9292000, 139960, 66], ["Tanzania", 60913557, 885800, 69], ["Thailand", 69306160, 510890, 136], ["Timor-Leste", 1352360, 14870, 91], ["Togo", 8186384, 54390, 151], ["Tonga", 110041, 720, 153], ["Trinidad and Tobago", 1375443, 5130, 268], ["Tunisia", 11783168, 155360, 76], ["Turkey", 82961805, 769630, 108], ["Turkmenistan", 5942561, 469930, 13], ["Tuvalu", 11393, 30, 380], ["Uganda", 45711874, 199810, 229], ["Ukraine", 43795220, 579320, 76], ["United Arab Emirates", 9682088, 83600, 116], ["United Kingdom", 66959016, 241930, 277], ["United States of America", 329093110, 9147420, 36], ["Uruguay", 3482156, 175020, 20], ["Uzbekistan", 32807368, 425400, 77], ["Vanuatu", 288017, 12190, 24], ["Venezuela", 32779868, 882050, 37], ["Viet Nam", 97429061, 310070, 314], ["Yemen", 29579986, 527970, 56], ["Zambia", 18137369, 743390, 24], ["Zimbabwe", 17297495, 386850, 45]];



// Define your flattened variable here:
let flattened = [];


// Write your nested while or for loop here:

for (let i = 0; i < countryData.length; ++i) {
  
  for (let j = 0; j < countryData[i].length; ++j) {

    flattened.push(countryData[i][j]);

  }  
}
console.log(flattened);
// This line will log your result to the console:

/* 

or let flatArray = countryData.flat();
console.log(flatArray);


*/
