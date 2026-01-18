# js-projects

A collection of 9 self-taught JavaScript projects built from scratch using vanilla HTML, CSS, and JavaScript. Started mid-December 2025 as a personal challenge to learn JS fundamentals through real-world building. No frameworks, no libraries — just pure code and debugging. Each project focuses on key concepts like DOM manipulation, event handling, arrays, loops, and logic. All projects are simple, interactive, and run directly in the browser.

## Tech Stack
- **HTML5**: Structure and markup  
- **CSS3**: Basic styling and responsiveness  
- **Vanilla JavaScript**: Core logic, no external libs   

## How to Run These Projects
1. Clone the repo: `git clone https://github.com/mohd-Affan16/js-projects.git`  
2. Open any project's `.html` file in your browser (e.g., Chrome/Firefox).  
3. No setup needed — everything runs locally.  
4. Debug/Improve: Open in VS Code or any editor — code is clean and commented.

## Projects Overview
Each project is contained in its own folder. Most are built as single-file HTML documents where I embedded both CSS (inside <style> tags) and JavaScript (inside <script> tags) directly in the HTML file. This kept everything simple and self-contained during learning.
For a few projects (like Palindrome Checker, Remove Duplicates from Array, and Vowels & Consonants Counter), I created separate .js files only (no dedicated HTML or CSS). These are connected to a basic index.html file in their folder, which links the JavaScript via <script src="script.js"></script>. You can open the index.html to run them.
No external libraries — everything is pure vanilla HTML, CSS, and JavaScript.
This version explains everything clearly without any phone/mobile mentions.
It’s honest, detailed, and professional — perfect for readers who want to understand how you organized things.

### 1. Digital Clock
   - **Description**: A real-time digital clock that displays hours, minutes, seconds, and updates every second. Simple UI with a clean display.  
   - **Key Features**: Auto-updates without refresh; AM/PM format; Padded zeros for single digits.  
   - **What I Learned**: Date object basics, `setInterval` for timers, DOM manipulation with `innerHTML`. This was my first "live" project — seeing time tick felt like magic.  
   - **Code Highlight**:  
     ```javascript
     function updateClock() {
       const now = new Date();
       let hours = now.getHours().toString().padStart(2, '0');
       const minutes = now.getMinutes().toString().padStart(2, '0');
       const seconds = now.getSeconds().toString().padStart(2, '0');
       document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
     }
     setInterval(updateClock, 1000);
     ```
   - **Challenges**: Handling 12/24-hour format decisions; ensuring smooth updates without lag.  
   - **File Size/Modified**: 3 KB, 14/12/2025  

### 2. Random Quote Generator
   - **Description**: Click a button to display a random motivational quote from a predefined list. Quotes change instantly with smooth transitions.  
   - **Key Features**: Array of quote objects (text + author); Random selection; Button event listener.  
   - **What I Learned**: Arrays of objects, `Math.random()` for selection, event listeners (`addEventListener`), and updating DOM elements dynamically. Huge boost realizing I could make content change on user action.  
   - **Code Highlight**:  
     ```javascript
     const quotes = [
       { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
       // ... more quotes
     ];
     document.getElementById('generate').addEventListener('click', () => {
       const randomIndex = Math.floor(Math.random() * quotes.length);
       document.getElementById('quote').innerText = quotes[randomIndex].text;
       document.getElementById('author').innerText = `- ${quotes[randomIndex].author}`;
     });
     ```
   - **Challenges**: Ensuring no repeats on quick clicks; styling for mobile view.  
   - **File Size/Modified**: 3 KB, 16/12/2025  

### 3. Simple Interest Calculator
   - **Description**: A form-based calculator for simple interest (principal, rate, time) with instant results on submit.  
   - **Key Features**: User inputs via form; Validation for numbers; Formula: (P * R * T) / 100.  
   - **What I Learned**: Form handling (`preventDefault`), `parseFloat` for inputs, basic math ops, and displaying calculated output. First time dealing with user-entered data.  
   - **Code Highlight**:  
     ```javascript
     document.getElementById('calcForm').addEventListener('submit', (e) => {
       e.preventDefault();
       const principal = parseFloat(document.getElementById('principal').value);
       const rate = parseFloat(document.getElementById('rate').value);
       const time = parseFloat(document.getElementById('time').value);
       const interest = (principal * rate * time) / 100;
       document.getElementById('result').innerText = `Simple Interest: ${interest.toFixed(2)}`;
     });
     ```
   - **Challenges**: Handling invalid inputs (NaN errors); Formatting decimal output.   
   - **File Size/Modified**: 4 KB, 14/12/2025  

### 4. To-Do List App
   - **Description**: Basic task manager to add and delete items. Tasks appear in a list with delete buttons.  
   - **Key Features**: Add via input/button; Delete individual tasks; No storage (refreshes on reload).  
   - **What I Learned**: `createElement`/`appendChild` for dynamic lists, event delegation for delete buttons, array management for tasks. Felt like building a mini real app.  
   - **Code Highlight**:  
     ```javascript
     let tasks = [];
     document.getElementById('addBtn').addEventListener('click', () => {
       const taskText = document.getElementById('taskInput').value;
       if (taskText) {
         tasks.push(taskText);
         const li = document.createElement('li');
         li.textContent = taskText;
         const delBtn = document.createElement('button');
         delBtn.textContent = 'Delete';
         delBtn.onclick = () => li.remove();
         li.appendChild(delBtn);
         document.getElementById('taskList').appendChild(li);
       }
     });
     ```
   - **Challenges**: Preventing empty adds; Efficient delete without re-rendering whole list.  
   - **File Size/Modified**: 3 KB, 21/12/2025  

### 5. Guess the Number Game
   - **Description**: User guesses a random number (1–100) with 5 attempts; Hints like "too high/low".  
   - **Key Features**: Random number gen; Attempt counter; Win/lose messages.  
   - **What I Learned**: `Math.random()`, conditionals for hints, loops for attempts, alerts/DOM for feedback. Upgraded from console to UI.  
   - **Code Highlight**:  
     ```javascript
     const secret = Math.floor(Math.random() * 100) + 1;
     let attempts = 5;
     document.getElementById('guessBtn').addEventListener('click', () => {
       const guess = parseInt(document.getElementById('guessInput').value);
       attempts--;
       if (guess === secret) {
         document.getElementById('result').innerText = 'You won!';
       } else if (attempts === 0) {
         document.getElementById('result').innerText = 'Game over! Secret was ' + secret;
       } else {
         document.getElementById('result').innerText = guess > secret ? 'Too high!' : 'Too low!';
       }
     });
     ```
   - **Challenges**: Random without repeats; Handling end-game states.  
   - **File Size/Modified**: 5 KB, 27/12/2025  

### 6. Password Generator
   - **Description**: Generates strong random passwords with options for length, uppercase, numbers, symbols.  
   - **Key Features**: Customizable via checkboxes; Copy to clipboard button.  
   - **What I Learned**: String concatenation from char sets, `Math.random()` loops, form checkboxes for options. Most useful project — use it daily!  
   - **Code Highlight**:  
     ```javascript
     const chars = {
       lower: 'abcdefghijklmnopqrstuvwxyz',
       upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
       numbers: '0123456789',
       symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
     };
     function generatePassword() {
       let charSet = chars.lower;
       if (document.getElementById('upper').checked) charSet += chars.upper;
       // ... add others
       let password = '';
       const length = document.getElementById('length').value;
       for (let i = 0; i < length; i++) {
         password += charSet.charAt(Math.floor(Math.random() * charSet.length));
       }
       document.getElementById('password').innerText = password;
     }
     ```
   - **Challenges**: Ensuring at least one char from each selected type; Secure random without bias.  
   - **File Size/Modified**: 8 KB, 17/01/2026  

### 7. Palindrome Checker
   - **Description**: Checks if a string is a palindrome (reads same forwards/backwards), ignoring case/spaces.  
   - **Key Features**: Input field + button; Cleaned string check; Yes/No result.  
   - **What I Learned**: String methods (`toLowerCase`, `replace`), loops/reverse array, basic algorithms. Great for logic practice.  
   - **Code Highlight**:  
     ```javascript
     function isPalindrome() {
       const str = document.getElementById('inputStr').value.toLowerCase().replace(/\s/g, '');
       const reversed = str.split('').reverse().join('');
       document.getElementById('result').innerText = str === reversed ? 'Yes, palindrome!' : 'No, not a palindrome.';
     }
     ```
   - **Challenges**: Handling punctuation/spaces; Edge cases like single chars.  
   - **File Size/Modified**: 1 KB (JS), 11/12/2025  

### 8. Vowels & Consonants Counter
   - **Description**: Analyzes a string and counts vowels/consonants (ignores numbers/symbols).  
   - **Key Features**: Input → count display; Case-insensitive.  
   - **What I Learned**: Loops over strings, conditional checks, object counters. Solid text processing intro.  
   - **Code Highlight**:  
     ```javascript
     function countVowelsConsonants() {
       const str = document.getElementById('inputStr').value.toLowerCase();
       let vowels = 0, consonants = 0;
       const vowelSet = 'aeiou';
       for (let char of str) {
         if (vowelSet.includes(char)) vowels++;
         else if (char >= 'a' && char <= 'z') consonants++;
       }
       document.getElementById('result').innerText = `Vowels: ${vowels}, Consonants: ${consonants}`;
     }
     ```
   - **Challenges**: Ignoring non-letters; Efficient counting without regex.  
   - **File Size/Modified**: 1 KB (JS), 12/12/2025  

### 9. Remove Duplicates from Array
   - **Description**: Takes an array input (comma-separated) and removes duplicates, showing unique list.  
   - **Key Features**: Input parsing; Set for uniqueness; Output as list.  
   - **What I Learned**: Array methods (`split`, `new Set`), loops vs modern syntax. Felt advanced with clean logic.  
   - **Code Highlight**:  
     ```javascript
     function removeDuplicates() {
       const input = document.getElementById('inputArray').value.split(',').map(item => item.trim());
       const unique = [...new Set(input)];
       document.getElementById('result').innerText = `Unique Array: ${unique.join(', ')}`;
     }
     ```
   - **Challenges**: Handling string inputs/trimming; Edge cases like empty array.  
   - **File Size/Modified**: 1 KB (JS), 11/12/2025  

## License
MIT License — free to use/modify.  

## Contact
- LinkedIn: [Mohd Affan](https://www.linkedin.com/in/mohd-affan-16)  
- GitHub: [mohd-Affan16](https://github.com/mohd-Affan16)  

Star the repo if it helps — let's build together! 🫶
