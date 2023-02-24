import java.util.Scanner;

public class Bai2 {
    public static void main(String[] args) {
        System.out.println("Enter a number: ");
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        String s = String.valueOf(number);
        String[] numbers = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        String[] upperNumber = {"", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};
        char first = s.charAt(0);
        String sFirst = String.valueOf(first);
        int iFirst = Integer.valueOf(sFirst);
        char second = s.charAt(1);
        String sSec = String.valueOf(second);
        int iSec = Integer.valueOf(sSec);
        char third = s.charAt(2);
        String sThird = String.valueOf(third);
        int iThird = Integer.valueOf(sThird);

        if (number > 0 && number <= 20) {
            switch (number) {
                case 1:
                    System.out.printf("one");
                    break;
                case 2:
                    System.out.printf("two");
                    break;
                case 3:
                    System.out.printf("three");
                    break;
                case 4:
                    System.out.printf("four");
                    break;
                case 5:
                    System.out.printf("five");
                    break;
                case 6:
                    System.out.printf("six");
                    break;
                case 7:
                    System.out.printf("seven");
                    break;
                case 8:
                    System.out.printf("eight");
                    break;
                case 9:
                    System.out.printf("nine");
                    break;
                case 10:
                    System.out.printf("ten");
                    break;
                case 11:
                    System.out.printf("eleven");
                    break;
                case 12:
                    System.out.printf("twelve");
                    break;
                case 13:
                    System.out.printf("thirteen");
                    break;
                case 14:
                    System.out.printf("fourteen");
                    break;
                case 15:
                    System.out.printf("fifteen");
                    break;
                case 16:
                    System.out.printf("sixteen");
                    break;
                case 17:
                    System.out.printf("seventeen");
                    break;
                case 18:
                    System.out.printf("eighteen");
                    break;
                case 19:
                    System.out.printf("nineteen");
                    break;
                case 20:
                    System.out.printf("twenty");
                    break;
            }
        } else {
            if (number <= 100) {
                switch (first) {
                    case '1':
                        System.out.printf("one hundred");
                        break;
                    case '2':
                        System.out.printf("twenty " + numbers[iSec - 1]);
                        break;
                    case '3':
                        System.out.printf("thirty " + numbers[iSec - 1]);
                        break;
                    case '4':
                        System.out.printf("forty " + numbers[iSec - 1]);
                        break;
                    case '5':
                        System.out.printf("fifty " + numbers[iSec - 1]);
                        break;
                    case '6':
                        System.out.printf("sixty " + numbers[iSec - 1]);
                        break;
                    case '7':
                        System.out.printf("seventy " + numbers[iSec - 1]);
                        break;
                    case '8':
                        System.out.printf("eighty " + numbers[iSec - 1]);
                        break;
                    case '9':
                        System.out.printf("ninety " + numbers[iSec - 1]);
                        break;
                }
            } else {
                if (iSec == 1) {
                    switch (iThird) {
                        case 1:
                            System.out.printf(numbers[iFirst - 1] + " hundred and eleven");
                            break;
                        case 2:
                            System.out.printf(numbers[iFirst - 1] + " hundred and twelve");
                            break;
                        case 3:
                            System.out.printf(numbers[iFirst - 1] + " hundred and thirteen");
                            break;
                        case 4:
                            System.out.printf(numbers[iFirst - 1] + " hundred and fourteen");
                            break;
                        case 5:
                            System.out.printf(numbers[iFirst - 1] + "hundred and fifteen");
                            break;
                        case 6:
                            System.out.printf(numbers[iFirst - 1] + "hundred and sixteen");
                            break;
                        case 7:
                            System.out.printf(numbers[iFirst - 1] + "hundred and seventeen");
                            break;
                        case 8:
                            System.out.printf(numbers[iFirst - 1] + "hundred and eighteen");
                            break;
                        case 9:
                            System.out.printf(numbers[iFirst - 1] + "hundred and nineteen");
                            break;
                    }

                } else {
                    System.out.printf(numbers[iFirst - 1] + " hundred and " + upperNumber[iSec] + " " + numbers[iThird - 1]);
                }
            }
        }
    }
}
