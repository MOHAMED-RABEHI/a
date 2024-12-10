



const button = document.getElementById('calculateButton');

 button.addEventListener('click', Calculate); 
 function Calculate() { 
    const arab = parseFloat(document.getElementById('arab').value) || 0; 
    const fr = parseFloat(document.getElementById('fr').value) || 0; 
    const en = parseFloat(document.getElementById('en').value) || 0; 
    const math = parseFloat(document.getElementById('math').value) || 0;
     const thge = parseFloat(document.getElementById('thge').value) || 0;
      const sport = parseFloat(document.getElementById('sport').value) || 0; 
      const racem = parseFloat(document.getElementById('racem').value) || 0; 
      const islamq = parseFloat(document.getElementById('islamq').value) || 0; 
      const madania = parseFloat(document.getElementById('madania').value) || 0;
       const science = parseFloat(document.getElementById('science').value) || 0; 
       const phisque = parseFloat(document.getElementById('phisque').value) || 0;
        const res = document.getElementById('res'); 
    const total = (arab * 2) + fr + en + (math * 2) + (thge * 2) + sport + racem + islamq + madania + science + phisque; const sum = total / 14; res.innerText = `The result is: ${sum}`;}


