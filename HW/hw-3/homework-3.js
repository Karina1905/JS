// Дано:

function task1() {
	const str1 = "Stirng number one";
	const str2 = "String number two";
    if (str1.length > str2.length) {
        console.log(str1)
    } else if (str1.length < str2.length) {
        console.log(str2)
    } else {
        console.log("They are the same")
    }

}

task1();


// Дано: 

function task2() {
	const str = "JavaScript";
	const repeatTimes = 12; 
    if (str.repeat(repeatTimes).length > 100) {
        console.log(str.repeat(repeatTimes))
    }
	
}

task2();