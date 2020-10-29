var form=document.getElementById("formid");

form.addEventListener("submit",function(e){
    e.preventDefault()

    var search=document.getElementById("search").value

    var space=search.split(' ').join('')
    
    fetch("https://api.github.com/users/"+space).then((result)=>result.json()).then((data)=>{
        console.log(data)
        if(data.html_url){
            document.getElementById("outcome").innerHTML=`
            <a target="_blank" href="${data.html_url}"><img src="${data.avatar_url}" width="100" height="100"/></a>
            <br><br><br>
            <h3>${data.name}</h3>
            <h6>Bio: ${data.bio}</h6>
            <h6>Total followers: ${data.followers}</h6>
            <h6>Total following: ${data.following}</h6>
            <h6>Created profile at: ${data.created_at}</h6>
            <h6>Public repository: <a target="_blank" href="https://github.com/${space}?tab=repositories">${data.public_repos}</h6></a>
            <footer>
        <p>**For full details click on display picture</p>
    </footer>
            `
        }else{
            alert("no user found")
            location.reload();
        }
        
    })
})