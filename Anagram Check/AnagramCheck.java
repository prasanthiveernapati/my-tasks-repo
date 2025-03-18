import java.util.Arrays;
import java.util.*;

public class AnagramCheck
{
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the First String: ");
		String str1 = sc.next();
		System.out.println("Enter the Second String: ");
		String str2 = sc.next();

		boolean isAnagram = isStringsAnagrams(str1, str2);
		System.out.println(isAnagram);
	}

	private static boolean isStringsAnagrams(String str1, String str2)
	{
		char[] strCharArray1 = str1.toCharArray();
		char[] strCharArray2 = str2.toCharArray();

		Arrays.sort(strCharArray1);
		Arrays.sort(strCharArray2);

		str1 = new String(strCharArray1);
		str2 = new String(strCharArray2);

		if (str1.equals(str2))
			return true;
		else
			return false;
	}

}