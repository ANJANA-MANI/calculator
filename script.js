
function check_ip()
{
    age=document.getElementById('age_input').value
    
}
function display(number)
{
    
    document.getElementById('op').value+=number;
}
//2
function clear_all()
{
document.getElementById('op').value='';
}
//3
function answer()
{
document.getElementById('op').value=eval(document.getElementById('op').value)
}
//4
function clear_last()
{
document.getElementById('op').value=document.getElementById('op').value.slice(0,-1);
}
