    export function getRandomNumber(numbers) {
        let oldArr = [...numbers];
        let newArr = [];  
        let isUniq;
        
        while (oldArr.length > 0) {
            const randomIndex = Math.floor(Math.random() * oldArr.length);
            const number = oldArr.splice(randomIndex, 1);
            newArr.push(number[0])
        }

        isUniq = numbers.every((el, i) => el !== newArr[i]);

        if (!isUniq) {
            return getRandomNumber(numbers)
        }
        
        return newArr;     
    };