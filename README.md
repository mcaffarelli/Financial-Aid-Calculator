# Financial-Aid-Calculator
I built this financial aid calculator software to support financial aid counselors at National University by helping award students in a more accurate and efficient way. The software works by allowing users to input relevant student information, then providing the user with many different outputs needed to award the student. Additionally, the software allows users to save each award to a database. This capability allows every award to be referenced later if needed. The software helps solve many efficiency problems, as our previous system involves many handwritten calculations and students’ awards to be manually filed away for future reference. The software was created to fulfill every requirement that a financial aid counselor needs to help automate the awarding process. This includes a built-in loan proration tool, built-in calculator, and many various codes needed to complete an award for our Oracle based financial aid system.

You can Access the website here: http://fa-calculator-nu.com/


You can Access a paper written on this software that will give a detailed description of the software and how it works here: [Financial Aid Awarding Calculator.pdf](https://github.com/mcaffarelli/Financial-Aid-Calculator/files/9594061/Financial.Aid.Awarding.Calculator.pdf)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------


Below is an overview of the application. Please don't hesitate to reach out of you have any questions. mrcaffarelli@gmail.com


Below are the first two pages the user will see. The first page is the user login page and the second page is where the user can select the type of student they would like to award. Depending on the students selection, the user will be brought to a different template for awarding the student.

![image](https://user-images.githubusercontent.com/81937437/190903325-68711919-ec9b-437e-b5b5-e89a4171da8d.png)


Below is an example of what an award will look like for an undergraduate student. Once the award is completed, the user will have the option to select 'Save Award'. At that point the relevant student information will be stored in the database.

![image](https://user-images.githubusercontent.com/81937437/190903448-73d6296c-c2f3-40db-b0bf-7a84c56feeb1.png)

Some additional details to point out are the Alert feature and some special input boxes. Once the user hits the 'Save Award' button, they will be prompted to type in any additional information that they would like to include in the note. Additionally, the two input boxes below will show a default response in the note if 'no' or 'yes' are entered. However, if anything other than 'no' or 'yes' are entered, you will see your text entered in the note box.


![image](https://user-images.githubusercontent.com/81937437/190903657-8aeb1c7b-cf58-43ae-b5ad-b5b7fd8f2f35.png)


It is worth to note that I attempted to make the UI as user friendly as possible. This includes error correction and prevention techniques. See Below:

![image](https://user-images.githubusercontent.com/81937437/190903746-17cdca5c-c418-487e-ac5e-c747ecfd49a7.png)


The Graduate Template and Credential template work the same way as the undergraduate template; however they are coded with different calculations that are based on that specific student. The graduate template includes a teach grant eligibility input that lets the user know if the student is eligible for teach grant. See Below:

![image](https://user-images.githubusercontent.com/81937437/190903863-f3f18aaf-1c74-4224-937b-397a0c4615de.png)

Next to the 'Accept Award' button on each template you will see a calculator icon. If clicked, the user will be brought to a new page. This page is the proration tool. The proration tool was developed to help users prorate loan amounts. It also has a built-in calculator that allows users to make any type of basic calculations on the page. This page is what makes the system a complete financial aid system because it enables the users to do everything needed to award any type of student. Certain basic calculations are needed at various points during the financial aid awarding process and this page allows the users to do those calculations within the same system. It was my goal to design a system that allows the user to complete every function of a financial aid counselor on one system.

![image](https://user-images.githubusercontent.com/81937437/190903969-c46bc8b4-9d36-47d3-a06e-ceef179ee63b.png)

The view saved awards page is extremely important because it is the page that allows awarding counselors to reference their past awards. This page is structed as a large table where the columns are organized by important award information and the rows are each individual past award. The table is designed to allow the user to easily view any specific past award. For example, as the user moves their cursor over a particular award row, the entire award row will be highlighted to show exactly which award information the user is looking at. The table is also sorted by date to show the users most recent awards at the top. Additionally, the top of the page includes a back button, total awards completed count, and a find button. If the back button is selected, the user will be brought back to the select student award page. The total awards completed count is a running counter of every single award completed by the user. The find button is a way the user can search the contents of the page. Next to the find button is an input box where the user can input the information they want to search on the page. Once they enter the information they would like to search for, they can press the find button and this will search all contents of the page and highlight all instances of entered value yellow. This is an extremely useful tool to search for a specific student that the user may want reference. The picture below is an example where 466 student awards have been completed.

[Uploading Financial Aid Awarding Calculator.pptx…]()
[Uploading Financial Aid Awarding Calculator.pdf…]()

![image](https://user-images.githubusercontent.com/81937437/190904087-6f232309-6b6c-4bf4-9b88-22b495e44b4a.png)

Below is an image of the database structure. The database has two tables (Counselor Table and Student Table). The counselor table only has one attribute called EMP_NUM (Primary Key). The student table consists of many attributes and uses EMP_NUM as the foreign key.

![image](https://user-images.githubusercontent.com/81937437/190904214-2eba39f0-f0a5-40bb-bf7c-f34ff24aeb37.png)
