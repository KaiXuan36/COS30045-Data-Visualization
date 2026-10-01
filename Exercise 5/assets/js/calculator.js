document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('energy-calculator');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // DOM Elements
    const wattsInput = document.getElementById('wattage');
    const hoursInput = document.getElementById('hours');
    const rateInput = document.getElementById('rate');
    const resultsPanel = document.getElementById('results');

    // Values
    const watts = parseFloat(wattsInput.value);
    const hours = parseFloat(hoursInput.value);
    const rateCents = parseFloat(rateInput.value);

    // Validation reset
    let isValid = true;
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    if (isNaN(watts) || watts <= 0) {
      document.getElementById('watt-error').style.display = 'block';
      isValid = false;
    }
    if (isNaN(hours) || hours <= 0 || hours > 24) {
      document.getElementById('hours-error').style.display = 'block';
      isValid = false;
    }
    if (isNaN(rateCents) || rateCents <= 0) {
      document.getElementById('rate-error').style.display = 'block';
      isValid = false;
    }

    if (!isValid) return;

    // Calculations
    const dailyKwh = (watts * hours) / 1000;
    const monthlyKwh = dailyKwh * 30.5;
    const yearlyKwh = dailyKwh * 365;

    const rateDollars = rateCents / 100;
    const monthlyCost = monthlyKwh * rateDollars;
    const yearlyCost = yearlyKwh * rateDollars;

    // Dynamic Result Display
    resultsPanel.innerHTML = `
      <h3>Calculated Estimates</h3>
      <ul>
        <li><strong>Daily Usage:</strong> ${dailyKwh.toFixed(2)} kWh</li>
        <li><strong>Monthly Usage:</strong> ${monthlyKwh.toFixed(2)} kWh</li>
        <li><strong>Yearly Usage:</strong> ${yearlyKwh.toFixed(2)} kWh</li>
        <li><strong>Estimated Monthly Cost:</strong> $${monthlyCost.toFixed(2)} AUD</li>
        <li><strong>Estimated Yearly Cost:</strong> $${yearlyCost.toFixed(2)} AUD</li>
      </ul>
    `;
  });
});