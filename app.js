let outPercent = document.querySelector('.chart-inner__percent--number');
let progressBar = document.querySelector('.progress-bar__inner');
let inputCaptured = document.querySelector('#input-captured');
let inputUploaded = document.querySelector('#input-uploaded');

inputCaptured.addEventListener('change', function () {
   foo();
});

inputUploaded.addEventListener('change', function () {
   foo();
});

const foo = () => {
   let inputCapturedValue = inputCaptured.value;
   let inputUploadedValue = inputUploaded.value;

   let newPercent = parseInt(inputCapturedValue / inputUploadedValue * 100);
   outPercent.innerHTML = newPercent;

   progressBar.style.width = newPercent + '%';
}

foo();


