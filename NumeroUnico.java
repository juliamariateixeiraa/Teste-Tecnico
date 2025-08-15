import java.util.*;

public class NumeroUnico {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Integer> numeros = new ArrayList<>();

        System.out.println("Digite os números separados por espaço (aperte Enter para encerrar):");
        String linha = scanner.nextLine();

        String[] partes = linha.split(" ");
        for (String parte : partes) {
            numeros.add(Integer.parseInt(parte));
        }

        List<Integer> unicos = new ArrayList<>();

        for (int i = 0; i < numeros.size(); i++) {
            int num = numeros.get(i);
            int contagem = 0;

            for (int j = 0; j < numeros.size(); j++) {
                if (numeros.get(j).equals(num)) {
                    contagem++;
                }
            }

            if (contagem == 1) {
                unicos.add(num);
            }
        }

        System.out.println("Números únicos: " + unicos);
    }
}
