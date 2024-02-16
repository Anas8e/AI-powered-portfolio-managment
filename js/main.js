// JavaScript for interactive functionalities

// Function to fetch financial data
function fetchFinancialData() {
    // Code for fetching financial data
}

// Function to display predictions using linear regression
function displayPredictions(data) {
    // Code to showcase predictions
}

function showStockSelection() {
  const numberOfStocks = document.getElementById('numberOfStocks').value;
  const investmentAmount = document.getElementById('investmentAmount').value;
  const stockSelectionsColumn1 = document.querySelector('.stock-selections .stock-column:nth-child(1)');
  const stockSelectionsColumn2 = document.querySelector('.stock-selections .stock-column:nth-child(2)');

  stockSelectionsColumn1.innerHTML = '';
  stockSelectionsColumn2.innerHTML = '';

  // Placeholder stock options
  const placeholderStocks = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA', 'NFLX'];

  for (let i = 0; i < numberOfStocks; i++) {
    const stockDropdown = document.createElement('select');
    stockDropdown.name = `stock${i + 1}`;

    // Adding placeholder options to dropdown
    for (const stock of placeholderStocks) {
      const option = document.createElement('option');
      option.value = stock;
      option.text = stock;
      stockDropdown.appendChild(option);
    }

    const stockLabel = document.createElement('label');
    stockLabel.textContent = `Stock ${i + 1}:`;

    // Apply spacing to stock options
    stockDropdown.style.margin = '5px'; // Adjust the margin as needed

    // Distributing stock dropdowns between columns
    if (i < numberOfStocks / 2) {
      stockSelectionsColumn1.appendChild(stockLabel);
      stockSelectionsColumn1.appendChild(stockDropdown);
    } else {
      stockSelectionsColumn2.appendChild(stockLabel);
      stockSelectionsColumn2.appendChild(stockDropdown);
    }
  }
}



function calculatePortfolio() {
    // Here, you'd retrieve the selected stocks from the dropdowns
    // Calculate the optimal portfolio based on the chosen stocks and investment amount
    // Split the amount based on the optimal proportion and display the result
}

