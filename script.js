document.getElementById('reportForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const studentClass = document.getElementById('class').value;
  const math = parseInt(document.getElementById('math').value);
  const english = parseInt(document.getElementById('english').value);
  const science = parseInt(document.getElementById('science').value);
  const average = ((math + english + science) / 3).toFixed(2);

  const report = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Class:</strong> ${studentClass}</p>
    <p><strong>Math:</strong> ${math}</p>
    <p><strong>English:</strong> ${english}</p>
    <p><strong>Science:</strong> ${science}</p>
    <p><strong>Average Score:</strong> ${average}</p>
  `;
  document.getElementById('reportContent').innerHTML = report;
  document.getElementById('reportOutput').classList.remove('hidden');
});

function downloadReport() {
  const report = document.getElementById('reportOutput').innerHTML;
  const win = window.open('', '', 'width=800,height=700');
  win.document.write('<html><head><title>Report Card</title></head><body>');
  win.document.write(report);
  win.document.write('</body></html>');
  win.document.close();
  win.print();
}
