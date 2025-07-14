function calculate() {
  const type = document.getElementById('toolSelector').value;
  const resultDiv = document.getElementById('result');
  let result = '';

  if (type === 'gst') {
    const amount = parseFloat(document.getElementById('gstAmount').value);
    const rate = parseFloat(document.getElementById('gstRate').value);
    result = `GST Amount: ₹${(amount * rate / 100).toFixed(2)}`;

  } else if (type === 'percentage') {
    const total = parseFloat(document.getElementById('totalMarks').value);
    const obtained = parseFloat(document.getElementById('obtainedMarks').value);
    result = `Percentage: ${(obtained / total * 100).toFixed(2)}%`;

  } else if (type === 'emi') {
    const principal = parseFloat(document.getElementById('loanAmount').value);
    const rate = parseFloat(document.getElementById('interestRate').value) / 12 / 100;
    const months = parseInt(document.getElementById('loanMonths').value);
    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    result = `Monthly EMI: ₹${emi.toFixed(2)}`;

  } else if (type === 'age') {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    result = `Your Age is: ${age} years`;
  }

  resultDiv.innerHTML = result;
}

document.getElementById('toolSelector').addEventListener('change', function () {
  const type = this.value;
  const area = document.getElementById('inputArea');

  if (type === 'gst') {
    area.innerHTML = `
      <input type="number" id="gstAmount" placeholder="Enter Amount" />
      <input type="number" id="gstRate" placeholder="Enter GST Rate (%)" />
    `;

  } else if (type === 'percentage') {
    area.innerHTML = `
      <input type="number" id="obtainedMarks" placeholder="Obtained Marks" />
      <input type="number" id="totalMarks" placeholder="Total Marks" />
    `;

  } else if (type === 'emi') {
    area.innerHTML = `
      <input type="number" id="loanAmount" placeholder="Loan Amount" />
      <input type="number" id="interestRate" placeholder="Annual Interest Rate (%)" />
      <input type="number" id="loanMonths" placeholder="Number of Months" />
    `;

  } else if (type === 'age') {
    area.innerHTML = `
      <input type="date" id="birthDate" placeholder="Enter your Birth Date" />
    `;
  }
});

document.getElementById('toolSelector').dispatchEvent(new Event('change'));
