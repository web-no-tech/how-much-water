const personal_info_form = document.querySelector('form.personal-info')
const result_paragraph = document.querySelector('p.result')

const { bigger_than, between, less_than } = {
    bigger_than: (value, to_compare) => value > to_compare,
    between: (value, minimum, maximum) => value >= minimum && value <= maximum,
    less_than: (value, to_compare) => value < to_compare
}

personal_info_form.addEventListener('submit', (event) => {
    event.preventDefault()

    const WEIGHT = parseInt(event.target.elements['weight'].value)
    const AGE = parseInt(event.target.elements['age'].value)

    let result;

    if (less_than(AGE, 17)) {
        result = WEIGHT * 40
    }
    if (between(AGE, 18, 54)) {
        result = WEIGHT * 35
    }
    if (between(AGE, 55, 64)) {
        result = WEIGHT * 30
    }
    if (bigger_than(AGE, 64)) {
        result = WEIGHT * 25
    }

    result_paragraph.setAttribute('style', 'display: block;')
    result_paragraph.textContent = `Você deve beber cerca de ${result} mL ou ${result / 1000} L de água por dia`
})