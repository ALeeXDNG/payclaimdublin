
        // --- DOM Element References ---
        const hoursWorkedSlider = document.getElementById('hoursWorked');
        const hourlyRateInput = document.getElementById('hourlyRate');
        const squareMetersSlider = document.getElementById('squareMeters');
        const ratePerSqMeterInput = document.getElementById('ratePerSqMeter');
        const additionalExpensesSlider = document.getElementById('additionalExpenses');
        const claimForm = document.getElementById('claimForm');

        const hoursWorkedValue = document.getElementById('hoursWorkedValue');
        const squareMetersValue = document.getElementById('squareMetersValue');
        const additionalExpensesValue = document.getElementById('additionalExpensesValue');

        const summaryLabor = document.getElementById('summaryLabor');
        const summaryArea = document.getElementById('summaryArea');
        const summaryExpenses = document.getElementById('summaryExpenses');
        const summaryTotal = document.getElementById('summaryTotal');

        // --- Helper Function ---
        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
        };

        // --- Main Calculation and Update Function ---
        function updateSummary() {
            // Get current values, parsing them as floats
            const hours = parseFloat(hoursWorkedSlider.value) || 0;
            const rate = parseFloat(hourlyRateInput.value) || 0;
            const sqMeters = parseFloat(squareMetersSlider.value) || 0;
            const sqMeterRate = parseFloat(ratePerSqMeterInput.value) || 0;
            const expenses = parseFloat(additionalExpensesSlider.value) || 0;

            // Perform calculations
            const laborCost = hours * rate;
            const areaCost = sqMeters * sqMeterRate;
            const totalClaim = laborCost + areaCost + expenses;

            // Update the UI text
            // Update slider value displays
            hoursWorkedValue.textContent = hours;
            squareMetersValue.textContent = sqMeters;
            additionalExpensesValue.textContent = formatCurrency(expenses);

            // Update summary section
            summaryLabor.textContent = formatCurrency(laborCost);
            summaryArea.textContent = formatCurrency(areaCost);
            summaryExpenses.textContent = formatCurrency(expenses);
            summaryTotal.textContent = formatCurrency(totalClaim);
        }

        // --- Event Listeners ---
        // Listen for any input on the form to trigger updates
        claimForm.addEventListener('input', updateSummary);
        
        // Prevent form submission for this demo
        claimForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
            modal.innerHTML = `
                <div class="bg-white rounded-lg shadow-xl p-6 max-w-sm text-center">
                    <h3 class="text-lg font-medium mb-2">Demonstration</h3>
                    <p class="text-sm text-gray-600 mb-4">Claim submission is for demonstration purposes only.</p>
                    <button onclick="this.parentElement.parentElement.remove()" class="bg-gray-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition">Close</button>
                </div>
            `;
            // Since we replaced the body, we need to append the modal to the main container or document.body
            document.body.appendChild(modal);
        });

        // --- Initial Calculation on Page Load ---
        document.addEventListener('DOMContentLoaded', updateSummary);

