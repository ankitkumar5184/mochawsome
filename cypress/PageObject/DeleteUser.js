class Delete_User{
    clickCheckbox(){
        cy.get('#ohrmList_chkSelectAll').click();
    }
    bttnDelete(){
        cy.get('#btnDelete').click();
    }
    clickOk(){
        cy.get('#dialogDeleteBtn').click();
    }
}
export default Delete_User