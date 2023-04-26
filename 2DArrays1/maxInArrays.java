import java.util.*;

class maxInArrays{

    public static int[] maxInArray(int[][] arr){
        int[] ans = new int[4];
        for (int i = 0; i < arr.length; i++) {
            int maxi = 0;
            for (int j = 0; j < arr[i].length; j++) {
                if (arr[i][j] > maxi) maxi = arr[i][j];
            }
            //ill be having the max elem of arr[i]th array in maxi
            ans[i] = maxi;
        }
        return ans;
    }

    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);
        
        scn.close();
    }
}