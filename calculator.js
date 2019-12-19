var A = 4.0;
var B = 3.0;
var C = 2.0;
var D = 1.0;
var F = 0.0;

function calculate(letterGrade, credit)
{
    var x;
    switch (letterGrade)
    {
        case A:
            x = 4.0;
            break;
        case B:
            x = 3.0;
            break;
        case C:
            x = 2.0;
            break;
        case D:
            x = 1.0;
            break;
        case F:
            x = 0.0;
            break;
        default:
            x = 0.0;
            break;
    }
}