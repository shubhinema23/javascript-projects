
const tasklist= [];

task_form.addEventListener('submit', function(e){ 
	const task_val = document.querySelector('#text_task');
	tasklist.push(task_val);
	console.log(tasklist);

});