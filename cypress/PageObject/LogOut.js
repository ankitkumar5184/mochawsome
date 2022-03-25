class Log_Out{
    welCome(){
        cy.get('#welcome').click();
    }
    logOut(){
        cy.contains('Logout').click();
    }
}
export default Log_Out