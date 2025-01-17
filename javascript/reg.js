function equal()
{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const expectedUsername = "123"; 
  const expectedPassword = "123";
    if(username==expectedUsername && password ==expectedPassword)
    {
        alert("succeflly login")
    }else
    {
        alert('failed')
    }

}