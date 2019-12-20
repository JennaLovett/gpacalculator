function calculateGPA()
{
    var grades = document.getElementsByName("grade");
    var credits = document.getElementsByName("credit");
    var index;
    var qualityPoints = 0.0;
    var semesterCredits = 0.0;
    var semesterGPA;

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
        qualityPoints += parseFloat(grade, 10);
        semesterCredits += parseFloat(credit, 10);
    }
    semesterGPA = qualityPoints / parseFloat(index, 10);
}