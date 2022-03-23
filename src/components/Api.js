export default class Api {
    constructor(url){
        this._url = `${url}/v1/cohort-37`;
        this._headerAuth = 'bcc22094-6aca-4aef-ba1e-307f93bc116d';
    }

    getUserInfo(){
        return fetch(`${this._url}/users/me`, {
                   headers: {
                       authorization: this._headerAuth
                   }
                }
               )
               .then((res) => {
                    if(res.ok) return res.json();
                    }
               )
    }

    setUserInfo(name, about){
        return fetch(`${this._url}/users/me`, {
                    method: 'PATCH',
                    headers: {
                        authorization: this._headerAuth,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: `${name}`,
                        about: `${about}`
                      })
                  }
                )
                .then((res) => {
                    if(res.ok) return res.json();
                    }
                )
    }

    getCards(){
        return fetch(`${this._url}/cards`,
                     {
                        headers: {
                            authorization: this._headerAuth
                        }
                     }
                    )
            .then((res) => {
                if(res.ok) return res.json();
            })
    }

    addCard(card) {
        return fetch(`${this._url}/cards`,
                     {
                         method: 'POST',
                         headers: {
                            authorization: this._headerAuth,
                            'Content-Type': 'application/json'
                         },
                         body: JSON.stringify({
                            name: `${card.name}`,
                            link: `${card.link}`
                          })
                     }
                    )
                    .then((res) => {
                        console.log(res);
                        if(res.ok) return res.json();
                    })
    }
}