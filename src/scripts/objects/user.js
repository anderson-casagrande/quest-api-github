const user = {
    avatarUrl: "",
    name:"",
    bio:"",
    userName:"",
    repositories:[],
    followers:"",
    following:"",
    lastEvents:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setLastEvents(events){
        this.lastEvents = events
    }
   
}
export {user}