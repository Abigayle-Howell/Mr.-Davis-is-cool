<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mr. Davis is cool</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h3>Balance This Equation</h3>
        <p id="equation"> <input type="number" id="coeff1" min="1"> X + 
           <input type="number" id="coeff2" min="1"> Y → 
           <input type="number" id="coeff3" min="1"> Z</p>
        <button onclick="checkBalance()">Check</button>
        <button onclick="newEquation()">New Equation</button>
        <p class="result" id="result"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
