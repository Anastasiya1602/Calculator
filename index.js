function sum(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

let output = document.querySelector("#output") //получили доступ к элементу где оторажается число при нажатии на кнопки

let firstNumber = 0
let operation = null
let resetAfterOperation = false

document.querySelectorAll("#calculator .number").forEach(button => {
    button.addEventListener("click", event => {
        let value = event.currentTarget.textContent
        if (resetAfterOperation) {
            output.value = value
            resetAfterOperation = false
        } else {
            output.value += value
        }
    })
}) //смотри коммент ниже
/*
-Здесь используется метод querySelectorAll, чтобы найти все элементы с классом "number" внутри элемента с идентификатором "calculator". Затем для каждого найденного элемента выполняется указанная функция.
-Для каждого найденного элемента устанавливается прослушиватель события "click", который будет запускать указанную функцию при клике на элемент.
-let value = event.currentTarget.textContent: Здесь извлекается текстовое содержимое элемента, на котором произошло событие "click", и сохраняется в переменной value.
-Когда пользователь взаимодействует с калькулятором, он нажимает кнопки с цифрами для ввода чисел. При этом, с учетом значения по умолчанию let resetAfterOperation = false, если пользователь нажимает кнопку с номером, значение этой кнопки добавляется к текущему значению в поле вывода. Это происходит потому, что калькулятор ожидает ввода нового числа, а не сброса текущего значения.
То есть, когда resetAfterOperation установлен в false, значению поля вывода просто добавляется значение нажатой кнопки, вне зависимости от предыдущих операций. Это позволяет калькулятору нормально функционировать, ожидая ввода нового числа, пока не будет выполнена операция сброса или другая команда, изменяющая это состояние.
*/

document.querySelectorAll("#calculator .operation").forEach(button => {
    button.addEventListener("click", event => {
        firstNumber = Number.parseInt(output.value)
        operation = event.currentTarget.dataset.action
        resetAfterOperation = true
    })
})

/*
Когда происходит клик по кнопке с классом "operation", выполняется определенная функция. В этой функции извлекается число из элемента с id "output" и сохраняется в переменной "firstNumber" с помощью метода "Number.parseInt". Затем из атрибута "data-action" текущей кнопки извлекается значение и сохраняется в переменной "operation". Также устанавливается флаг "resetAfterOperation" в значение "true".

Таким образом, данный код сначала выбирает определенные кнопки на странице и затем устанавливает обработчик события для каждой из них, который выполняет определенные действия при нажатии на соответствующую кнопку.
*/

const equal = document.querySelector("#calculator .equal")
equal.addEventListener("click", () => {
    if (!operation){
        return
    }
    resetAfterOperation = true
    let secondNumber = Number.parseInt(output.value, 10)

    if (operation === "sum") {
        output.value = sum(firstNumber, secondNumber)
    } else if (operation === "subtract") {
        output.value = subtract(firstNumber, secondNumber)
    } else if (operation === "multiply") {
        output.value = multiply(firstNumber, secondNumber)
    } else if (operation === "divide") {
        output.value = divide(firstNumber, secondNumber)
    }
    //reset operation
    operation = null
})

/*
Когда происходит клик по кнопке "равно", выполняется определенная функция. Сначала выполняется проверка: если операция еще не была выбрана, то выполняется выход из функции с помощью команды return.

Затем устанавливается флаг "resetAfterOperation" в значение "true" и извлекается второе число из элемента с id "output" и сохраняется в переменной "secondNumber" с помощью метода "Number.parseInt".

Далее, в зависимости от выбранной операции ("sum", "subtract", "multiply", "divide"), вызывается соответствующая функция (sum, subtract, multiply, divide) и результат операции выводится в элемент с id "output". 

В конце, операция обнуляется, чтобы подготовить калькулятор к выполнению следующей операции.

NB! Цифра 10, переданная в функцию parseInt в данном контексте, указывает систему счисления, в которой нужно интерпретировать входную строку. В данном случае, система счисления равна 10, что означает десятичную систему.

Функция Number.parseInt пытается разобрать строку и возвращает целое число, которое представляет собой конвертированное значение из строки. Если второй аргумент не указан, то число будет разобрано в десятичной системе. Однако, добавление второго аргумента, как в данном случае, явно указывает, что необходимо использовать десятичную систему счисления.

Таким образом, в данном коде 10 указывает, что нужно интерпретировать значение из строки как десятичное число.

- когда вызывается функция Number.parseInt без указания второго аргумента, она все равно будет интерпретировать значение из строки как десятичное число. Следовательно, в контексте данной программы, указание основания системы счисления не обязательно для функции Number.parseInt, но, тем не менее, добавление второго аргумента повышает ясность кода и предоставляет большую явность в том, как именно программа должна интерпретировать входные данные.
*/