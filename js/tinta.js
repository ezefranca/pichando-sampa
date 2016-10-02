//tinta
var pixacolor = 'rgb(255, 0, 0)'; 
var signaturePad;

window.onload=function(){
	setup();
}
function trocarCor(color) {
	signaturePad.penColor = color;
}

function setup() {
 signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
  backgroundColor: 'rgba(255, 255, 255, 0)',
  penColor: pixacolor
});
var saveButton = document.getElementById('save');
var cancelButton = document.getElementById('clear');

saveButton.addEventListener('click', function (event) {
  var data = signaturePad.toDataURL('image/png');
  window.open(data);
});

cancelButton.addEventListener('click', function (event) {
  signaturePad.clear();
});
}