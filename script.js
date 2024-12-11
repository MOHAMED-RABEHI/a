const button = document.getElementById('calculateButton');
button.addEventListener('click', Calculate);

function Calculate() {
  // Retrieve exam values
  const arabE = parseFloat(document.getElementById('arabE').value) || 0;
  const frE = parseFloat(document.getElementById('frE').value) || 0;
  const enE = parseFloat(document.getElementById('enE').value) || 0;
  const mathE = parseFloat(document.getElementById('mathE').value) || 0;
  const thgeE = parseFloat(document.getElementById('thgeE').value) || 0;
  const sportE = parseFloat(document.getElementById('sportE').value) || 0;
  const drawingE = parseFloat(document.getElementById('drawingE').value) || 0;
  const islamqE = parseFloat(document.getElementById('islamqE').value) || 0;
  const madaniaE = parseFloat(document.getElementById('madaniaE').value) || 0;
  const scienceE = parseFloat(document.getElementById('scienceE').value) || 0;
  const phisqueE = parseFloat(document.getElementById('phisqueE').value) || 0;

  // Retrieve formative values (first term)
  const arabF1 = parseFloat(document.getElementById('arabF1').value) || 0;
  const frF1 = parseFloat(document.getElementById('frF1').value) || 0;
  const enF1 = parseFloat(document.getElementById('enF1').value) || 0;
  const mathF1 = parseFloat(document.getElementById('mathF1').value) || 0;
  const thgeF1 = parseFloat(document.getElementById('thgeF1').value) || 0;
  const sportF = parseFloat(document.getElementById('sportF').value) || 0;
  const drawingF = parseFloat(document.getElementById('drawingF').value) || 0;
  const islamqF = parseFloat(document.getElementById('islamqF').value) || 0;
  const madaniaF = parseFloat(document.getElementById('madaniaF').value) || 0;
  const scienceF1 = parseFloat(document.getElementById('scienceF1').value) || 0;
  const phisqueF1 = parseFloat(document.getElementById('phisqueF1').value) || 0;

  // Retrieve formative values (second term)
  const arabF2 = parseFloat(document.getElementById('arabF2').value) || 0;
  const frF2 = parseFloat(document.getElementById('frF2').value) || 0;
  const enF2 = parseFloat(document.getElementById('enF2').value) || 0;
  const mathF2 = parseFloat(document.getElementById('mathF2').value) || 0;
  const thgeF2 = parseFloat(document.getElementById('thgeF2').value) || 0;
  const scienceF2 = parseFloat(document.getElementById('scienceF2').value) || 0;
  const phisqueF2 = parseFloat(document.getElementById('phisqueF2').value) || 0;

  // Retrieve term values
  const arabT = parseFloat(document.getElementById('arabT').value) || 0;
  const frT = parseFloat(document.getElementById('frT').value) || 0;
  const enT = parseFloat(document.getElementById('enT').value) || 0;
  const mathT = parseFloat(document.getElementById('mathT').value) || 0;
  const thgeT = parseFloat(document.getElementById('thgeT').value) || 0;
  const sportT = parseFloat(document.getElementById('sportT').value) || 0;
  const drawingT = parseFloat(document.getElementById('drawingT').value) || 0;
  const islamqT = parseFloat(document.getElementById('islamqT').value) || 0;
const madaniaT = parseFloat(document.getElementById('madaniaT').value) || 0;
const scienceT = parseFloat(document.getElementById('scienceT').value) || 0;
const phisqueT = parseFloat(document.getElementById('phisqueT').value) || 0;

const scienceF = (scienceF1 + scienceF2) / 2;
const phisqueF = (phisqueF1 + phisqueF2) / 2;
const mathF = (mathF1 + mathF2) / 2;
const thgeF = (thgeF1 + thgeF2) / 2;
const enF = (enF1 + enF2) / 2;
const arabF = (arabF1 + arabF2) / 2;
const frF = (frF1 + frF2) / 2;

const resExamArab = ((arabE * 3) + arabF + arabT) / 5;
const resExamaFr = ((frE * 3) + frF + frT) / 5;
const resExamEn = ((enE * 3) + enF + enT) / 5;
const resExamMath = ((mathE * 3) + mathF + mathT) / 5;
const resExamThge = ((thgeE * 3) + thgeF + thgeT) / 5;
const resExamSport = ((sportE * 3) + sportF + sportT) / 5;
const resExamDrawing = ((drawingE * 3) + drawingF + drawingT) / 5;
const resExamIslamq = ((islamqE * 3) + islamqF + islamqT) / 5;
const resExamMadania = ((madaniaE * 3) + madaniaF + madaniaT) / 5;
const resExamScience = ((scienceE * 3) + scienceF + scienceT) / 5;
const resExamPhisque = ((phisqueE * 3) + phisqueF + phisqueT) / 5;

const total = (resExamArab * 2) + resExamaFr + resExamEn + (resExamMath * 2) + (resExamThge * 2) + resExamSport + resExamDrawing + resExamIslamq + resExamMadania + resExamScience + resExamPhisque;
const sum = total / 14;
const name=document.getElementById('name').value;
const res = document.getElementById('res');
if(sum < 10){
    res.innerHTML = `الاسم: ${name} <br> النتيجة: ${sum} <br> متوسط ضعيف`;

     
} 
else if(sum < 15) {
    res.innerHTML = `الاسم: ${name} <br> النتيجة: ${sum} <br> متوسط`;
} 
else {res.innerHTML = `الاسم: ${name} <br> النتيجة: ${sum} <br> متوسط جيد`
}
}
