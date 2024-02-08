// JavaScript for interactive functionalities

// Function to fetch financial data
function fetchFinancialData() {
    // Code for fetching financial data
}

// Function to display predictions using linear regression
function displayPredictions(data) {
    // Code to showcase predictions
}

document.getElementById('nextButton').addEventListener('click', function() {
  const stockNumber = document.getElementById('stockNumber').value;
  generateStockDropdowns(stockNumber);
});

function generateStockDropdowns(number) {
  const stockSelectionSection = document.querySelector('.stock-selection');
  stockSelectionSection.innerHTML = '';

  for (let i = 0; i < number; i++) {
    const dropdown = document.createElement('select');
    dropdown.innerHTML = `
      <option value="">Select stock</option>
      <option value="AAPL">Apple Inc.</option>
      <option value="GOOGL">Alphabet Inc. (Google)</option>
      <option value="MSFT">Microsoft Corporation</option>
      <!-- Add more placeholder stock options -->
    `;
    stockSelectionSection.appendChild(dropdown);
  }
}

document.getElementById('chooseStocksButton').addEventListener('click', function() {
  // Logic to handle stock selection after the amount is entered
  // You would capture the selected stocks here
  // For brevity, skipping the entire logic
});

document.getElementById('calculateButton').addEventListener('click', function() {
  calculatePortfolio();
});

// Function to calculate the optimal portfolio
function calculatePortfolio() {
    // Here, you'd retrieve the selected stocks from the dropdowns
    // Calculate the optimal portfolio based on the chosen stocks and investment amount
    // Split the amount based on the optimal proportion and display the result
}
