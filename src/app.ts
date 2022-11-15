import inquirer from 'inquirer';

const chosenNumbers: number[] = [];
const randomNumbers: number[] = [];

const validateInput = (text: string): boolean => {
    const x = parseInt(text);
    if (x >= 1 && x <= 49 && !chosenNumbers.includes(x)){
        return true;
    } else {
        return false;
    }
};

const randomNewNumber = (): number => {
    const randomNumber = Math.floor(Math.random() * (49 - 1 + 1) + 1);
    return randomNumber;
};

const validateRandomNumber = (number: number): boolean => {
    if(!randomNumbers.includes(number)){
        return true;
    } else{
        return false;
    }
};

const compareResults  = (randomArr: number[], userArr: number [])  => {
    let i = 0;
   for(const x of userArr){
    if (randomArr.includes(x)){
        i += 1;
    }else{
        i;
    }
   }
   return i;
};


const startApp = async(): Promise<void> => {
    do {
        const result = await inquirer.prompt([{
            name: 'number',
            type: 'input',
            message: 'Podaj liczbę...'
        }]);
    
        if (validateInput(result.number)) {
            chosenNumbers.push(parseInt(result.number));
        }
    } while (chosenNumbers.length < 6);

    do {
        const number: number = randomNewNumber();
        if (validateRandomNumber(number)) {
            randomNumbers.push(number);
        }
    } while (randomNumbers.length < 6);
    
    console.log('You guess ' + compareResults(randomNumbers, chosenNumbers) + ' number/s');
};

startApp();
