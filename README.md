# 📝 Registration Form (HTML, CSS & JavaScript)

A simple yet powerful **Registration Form** project built using **HTML, CSS, and JavaScript**.  
This form demonstrates **client-side validation**, error handling, and console-based form data inspection.

---

## 🚀 Project Overview

This project is designed to validate user inputs such as **Name**, **Email**, and **Password** before submission.  
It ensures that:
- All fields are filled correctly  
- Passwords match  
- Passwords meet specific security criteria  

Additionally, all validated data is logged in the browser **console** for debugging or preview purposes — without connecting to a backend server.

---

## 💡 Features

✅ Real-time validation before form submission  
✅ Custom error messages displayed under the form  
✅ Password strength validation:
   - Minimum length: **8 characters**
   - Maximum length: **12 characters**
   - Must contain **at least one alphabet (A–Z or a–z)**
   - Must contain **at least one digit (0–9)**
   - Must contain **at least one special character (!, @, #, $, etc.)**  
✅ Prevents form submission if errors are found  
✅ Logs valid user data to the **console**  
✅ Clean and responsive layout (using external CSS)

---
<img width="499" height="176" alt="image" src="https://github.com/user-attachments/assets/7fd08a81-7375-4425-9cc8-fc9006d183f7" />


---

## 🧠 JavaScript Validation Flow

1. **Prevent Default Submission:**  
   Stops the form from refreshing the page using `event.preventDefault()`.

2. **Field Validation:**  
   Checks if any field (Name, Email, Password, Confirm Password) is empty.

3. **Password Match Check:**  
   Ensures that both password fields contain the same value.

4. **Password Rules Check:**  
   Uses helper functions to validate password strength:
   - `containsAlpha(pwd)` → checks for alphabets  
   - `containsDigit(pwd)` → checks for digits  
   - `containsSpecialCharacter(pwd)` → checks for special symbols  
   - `isValidLength(pwd)` → checks length between 8–12

5. **Display Error Message:**  
   Shows the first encountered error in a `<div id="error-message">`.

6. **Console Output:**  
   If everything is valid, form data is displayed in the **browser console**.

---

## 🧩 Sample Passwords

To pass the validation successfully, you can use passwords like:
<img width="488" height="120" alt="image" src="https://github.com/user-attachments/assets/6200ab06-9793-49f5-869a-7ce3e0507f31" />


---

## 🧰 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5**   | Structure of the form |
| **CSS3**    | Styling and layout |
| **JavaScript (ES6)** | Validation logic and console interaction |

---

## ⚙️ How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/registration-form.git
<img width="980" height="129" alt="image" src="https://github.com/user-attachments/assets/04d4b7b7-f993-44c5-b32f-f15dae597daf" />

Add JavaScript form validation with password checks and console logging
<img width="947" height="99" alt="image" src="https://github.com/user-attachments/assets/298eacfe-8185-4399-a831-617abfbf7b4f" />

<img width="1105" height="559" alt="image" src="https://github.com/user-attachments/assets/864cc8d2-6bf4-41ad-85c3-90355875ad87" />
Name: Mohd Wasim
Email: wasim@example.com
Password: Wasim@123
Confirm Password: Wasim@123


## 📂 Project Structure

