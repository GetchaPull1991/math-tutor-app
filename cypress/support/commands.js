// example Cusotm Cypress command, obviously we don't need to log in to a math app

Cypress.Commands.add('login', user => {
    return cy
      .request({
        url: 'http://localhost:3000/login',
        method: 'POST',
        body: user,
      })
      .then(response => {
        window.localStorage.setItem('token', response.body.user.token)
        return {...response.body.user, ...user}
      })
});
