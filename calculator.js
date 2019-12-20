var grades = document.getElementsByName("grade");   //all grade dropdown boxes
var credits = document.getElementsByName("credit"); //all credit textboxes
var index = 0;  //also serves as count of number of classes
var semesterQualityPoints = 0.0;    //sum of individual numeric grade
var semesterCredits = 0.0;  //total credits of semester classes
var semesterGPA = 0.0;    //semester GPA
var newGPA = 0.0; //new gpa after current gpa and semester gpa are grouped together

function calculateGPA()
{
    resetVariables();
    calculateSemesterGPA();
    calculateCumulativeGPA();
    addGPAToPage();
}

function calculateSemesterGPA()
{
    //go through each grade/credit and convert letter grade to numeric grade
    //sum quality points and credits
    for(index = 0; index < grades.length; ++index)
    {
        var letterGrade = grades[index].options[grades[index].selectedIndex].value;
        var credit = credits[index].value;

        var grade = 0.0;
        switch (letterGrade)
        {
            case "A":
                grade = 4.0;
                break;
            case "B":
                grade = 3.0;
                break;
            case "C":
                grade = 2.0;
                break;
            case "D":
                grade = 1.0;
                break;
            case "F":
                grade = 0.0;
                break;
        }
        semesterQualityPoints += parseFloat(grade, 10) * parseFloat(credit, 10);
        semesterCredits += parseFloat(credit, 10);
    }
    //calculate semester GPA
    semesterGPA = semesterQualityPoints / parseFloat(semesterCredits, 10).toFixed(2);
}

function calculateCumulativeGPA()
{
    //calculate cumulative GPA
    //cGPA = qualityPoints / totalCredits
    //qualityPoints = cGPA * totalCredits
    var totalCredits = parseFloat(document.getElementsByName("totalCredits")[0].value, 10);
    var currentGPA = parseFloat(document.getElementsByName("currentGPA")[0].value, 10);
    var currentQualityPoints = currentGPA * totalCredits;
    newGPA = ((currentQualityPoints + semesterQualityPoints) / (totalCredits + semesterCredits)).toFixed(2);
    
}

function resetVariables()
{
    grades = document.getElementsByName("grade");   //all grade dropdown boxes
    credits = document.getElementsByName("credit"); //all credit textboxes
    index = 0;  //also serves as count of number of classes
    semesterQualityPoints = 0.0;    //sum of individual numeric grade
    semesterCredits = 0.0;  //total credits of semester classes
    semesterGPA = 0.0;    //semester GPA
    newGPA = 0.0; //new gpa after current gpa and semester gpa are grouped together
}

function addGPAToPage()
{
    //remove gpa if it exists
    //add new gpa to page
    var wrapperNode = document.getElementById("wrapper");
    var gpaClass = document.getElementsByClassName("gpa");
    if(gpaClass.length > 0)
    {
        var i;
        for(i = 0; i < gpaClass.length; ++i)
        {
            var parent = gpaClass[i].parentNode;
            wrapperNode.removeChild(parent);
        }

    }
    var newHTML = '<div class="container">' + 
                    '<div class="gpa">' + 
                        '<span class="gpaspan">Semester GPA: ' + semesterGPA + '</span>' +
                        ' <span class="gpaspan">Cumulative GPA: ' + newGPA + '</span>' +
                    '</div>' + 
                '</div>';
    wrapperNode.insertAdjacentHTML("beforeend", newHTML);
}