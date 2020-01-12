const searchUser = document.getElementById('username');
const github = new Github;

const ui = new UI;

searchUser.addEventListener('keyup', (e)=>{
    const username = e.target.value;
    if(username != ''){
        
        github.getUser(username)
        .then(data => {
            if(data.profile.message === 'Not Found')
            {
                ui.showAlert('User Not Found', 'alert alert-danger');
                ui.clearProfile();
            }
            else
            {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }

        })
    }
    else
    {
        ui.clearProfile();
    }
})