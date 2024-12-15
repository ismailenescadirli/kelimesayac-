let metin=prompt("Lütfen bir metin giriniz.");
let kelimeler=metin.split(" ");
let kelimeSayilari={};
for (let i = 0; i < kelimeler.length ; i++) {
    let kelime =kelimeler[i].toLowerCase();
if (kelimeSayilari[kelime]) {
    kelimeSayilari[kelime]++;
}
else{
    kelimeSayilari[kelime]=1;
}
}
console.log(kelimeSayilari);

