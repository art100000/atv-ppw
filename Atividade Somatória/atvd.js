const submit_sum = document.getElementById('submit-sum');
const input_number = document.getElementById('input-number');
const output_sum = document.getElementById('output-sum');

output_sum.value = 0;

submit_sum.addeventlistener('click', () => {
    let number = Number(input_number.value);
    output_sum.value = Number(output_sum.value) + Number(number);

});
