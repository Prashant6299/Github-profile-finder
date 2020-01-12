class Github{
    constructor(){
        this.clientId = '8bb46ef63f496a4df242';
        this.clientSecret = '8f0af08235b7cb7818fd96887c1f3e607d675733';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(username){
        const profileRespose = await fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profileData = await profileRespose.json();
        const repos = await repoResponse.json();

        
        return {
            profile: profileData,
            repos: repos
        }
    }
};