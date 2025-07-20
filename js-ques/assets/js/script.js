$(document).ready(function(){
    let output = document.getElementById("output");
    let output1 = document.getElementById("output1");
    let output2 = document.getElementById("output2");
    $('.clear-btn').on("click",function(){
        $('#output').val('');
        $('#palindrome').val('');
        $('#str-1').val('');
        $('#str-2').val('');
        $('#lowercase').val('');
        $('#uppercase').val('');
        $('#togglecase').val('');
        $('#longest').val('');
        $('#vowel').val('');
        $('#output1').val('');
        $('#output2').val('');
        $('#second').val('');
        $('#primeno').val('');
        $('#unique').val('');  
    })
    $('.check-pal').on("click",function(){

        let str = document.getElementById("palindrome").value.toLowerCase();

        if(str.trim() == ""){
            output.value = "Enter a String to check";
        }else if(str.split("").reverse().join("") == str) {
            output.value = "It is a Palindrome String";
        }else{
            output.value = "It is not a Palindrome String";
        }
    })
    $('.check-anagram').on("click",function(){

        let str1 = document.getElementById("str-1").value.toLowerCase();
        let str2 = document.getElementById("str-2").value.toLowerCase();

        let n1 = str1.split("").sort().join("").trim();
        let n2 = str2.split("").sort().join("").trim();
        if(n1 == "" || n2 == ""){
            output.value = "Enter both the strings first";
        }
        else if(n1 == n2){
            output.value = "Strings are anagram";
        }else{
            output.value = "Strings are not anagram";
        }
    })
    $('.convert-lowercase').on("click",function(){

        let str = document.getElementById("lowercase").value.toLowerCase();

        if(str.trim() == ""){
            output.value = "Enter a String to convert";
        }else{
            output.value = str;
        }
    })
    $('.convert-uppercase').on("click",function(){

        let str = document.getElementById("uppercase").value.toUpperCase();

        if(str.trim() == ""){
            output.value = "Enter a String to convert";
        }else{
            output.value = str;
        }
    })
    $('.convert-togglecase').on("click",function(){

        let str = document.getElementById("togglecase").value;
        let toggled = "";

        for(let i = 0 ; i < str.length ; i++){
            let char = str[i];
            if(char === char.toUpperCase()){
                toggled += char.toLowerCase();
            }else{
                toggled += char.toUpperCase();
            }
        }
        if(str.trim() == ""){
            output.value = "Enter a String to convert";
        }else{
            output.value = toggled;
        }
    })
    $('.find-longest').on("click",function(){

        let str = document.getElementById("longest").value.trim();
        let arr = str.split(" ");
        let longest = "";
        
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i].length > longest.length){
                    longest = arr[i];
                }
        }
        if(str.trim() == ""){
            output.value = "Enter a String to Find!";
        }else{
            output.value = longest;
        }
    })
    $('.check-vowel').on("click",function(){
        let str = document.getElementById("vowel").value.toLowerCase();
        let vowels = 0;
        let consonants = 0;
        let v_arr=['a','e','i','o','u'];
        for(let i = 0 ; i < str.length ; i++){
            let char = str[i];
            if (char >= 'a' && char <= 'z'){
                if(v_arr.includes(char)){
                    vowels++;
                }else{
                    consonants++;
                }
            }
        }
        if(str.trim() == ""){
            output.value = "Enter a String to convert";
        }else{
            output1.value = vowels;
            output2.value = consonants;
        }
    })
    $('.find-second').on("click",function(){
        let str = document.getElementById("second").value;

        let arr = str.split(",").map(Number);
        let unique=[];
        
        for(let i=0; i<arr.length; i++){
           if (!unique.includes(arr[i])) {
                unique.push(arr[i]);
           }
        }
        unique.sort((a, b) => a - b);
        let secondLargest = unique[unique.length - 2];
        let secondSmallest = unique[1];

        if(str.trim() == ""){
            alert("Enter proper numbers");
        }else if (unique.length < 2) {
            alert("Please enter at least two different numbers.");
            return;
        }else{
            output1.value =secondLargest;
            output2.value =secondSmallest;
        }
    })
    $('.find-prime').on("click",function(){
        let str = document.getElementById("primeno").value;

        let arr = str.split(",").map(Number);
        let prime = [];

        for(let i = 0 ;i < arr.length ; i++){
            if(arr[i] > 1){
                let isPrime = true;

                for(let j = 2 ; j <= Math.sqrt(arr[i]) ; j++){
                    if(arr[i] % j == 0){
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime){
                    prime.push(arr[i])
                }
            }
        }

        if(str.trim() == ""){
            output.value = "Enter a String to convert";
        }else{
            output.value =prime;
        }
    })

    $(".find-unique").on("click",function(){
        let str=document.getElementById("unique").value; 
        let arr=str.split(",").map(Number);
        let unique=[];
        
        for(let i=0; i<arr.length; i++){
            let count=0;
            for(let j=0; j<arr.length; j++){

                if((arr[i]==arr[j])){
                    count++;
                }
            }
            if(count===1){
                unique.push(arr[i]);
            }
        }
        if (str.trim() === "") {
            output.value = "Please enter proper numbers.";
        }else{
            output.value = unique;
        }  
    })
})