class Login_Page{
    navigate(){
        cy.visit('/')
    }
    enterUser(username){
        cy.get('#txtUsername')
        .clear()
        .type(username);
        return this
    }
    enterPass(password){
        cy.get('#txtPassword')
        .clear()
        .type(password);
        return this
    }
    submit(){
        cy.get('#btnLogin').click();
    }
}
export default Login_Page