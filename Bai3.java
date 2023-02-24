import java.util.Scanner;

public class Bai3 {
    public static void main(String[] args) {
        int rate = 23000;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter USD value:");
        double usd = scanner.nextDouble();
        String vnd = usd * rate + "VND";
        System.out.println(vnd);
    }
}
