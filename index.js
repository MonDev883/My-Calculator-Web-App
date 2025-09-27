var expression = document.getElementById("txtExpression").value;

function buildExpression(value)
{
	expression = expression + value;
	document.getElementById("txtExpression").value = expression;
}
function calculation()
{
	document.getElementById("txtExpression").value = eval(expression);
}
function clearExpression = "";
document.getElementById()