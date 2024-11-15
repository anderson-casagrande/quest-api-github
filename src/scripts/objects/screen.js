const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info"><img src="${user.avatarUrl}" alt="Foto do Perfil do usuário" />
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😓'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😓'}</p><br><br>
                                <p>👥 Nº de Seguidores ${user.followers} </p><br>
                                <p>👤 Nº de Pessoas Seguidas: ${user.following}</p>
                             </div>
                        </div>`

                        let repositoriesItens = ''
                        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"  
                            target="_blank">${repo.name}<br>
                            🍴${repo.forks} 👀${repo.watchers} ⭐${repo.stargazers_count} 👨🏻‍💻${repo.language}</a></li>`)

                        if(user.repositories.length > 0){
                            this.userProfile.innerHTML += `<div class="repositories section">
                            <h2>Repositórios</h2>
                            <ul>${repositoriesItens}</ul>
                           
                            </div>`    
                        }

                        let lastEventsItens = ''
                        user.lastEvents.forEach(event =>{
                            if(event.type === 'PushEvent'){
                            lastEventsItens += `<li>${event.repo.name} e ${event.payload.commits[0].message}</li>`
                            }else if (event.type === 'CreateEvent'){
                            lastEventsItens += `<li>${event.repo.name} - Sem mensagem de Commit</li>`    
                            }
                        }) 

                        if(user.lastEvents.length > 0){
                            this.userProfile.innerHTML += `<h2>Últimos Eventos</h2>
                                                            <ul>${lastEventsItens}</ul>`
                        }
    },
renderNotFound(user){
    this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'    
}    
}
export {screen}