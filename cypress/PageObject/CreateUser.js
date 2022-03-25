class Create_User{
    clickMenuAdmin(){
        cy.get('#menu_admin_viewAdminModule > b').click()
    }
    clickAdd(){
        cy.get('#btnAdd').click();
    }
    empName1(name1){
        cy.get('#systemUser_employeeName_empName')
        .clear()
        .type(name1)
        return this
    }
    empUname(uname){
        cy.get('#systemUser_userName')
        .clear()
        .type(uname)
        return this
        
    }
    newPassword(pass){
        cy.get('#systemUser_password')
        .clear()
        .type(pass)
        return this
    }
    confPassword(confpass){
        cy.get('#systemUser_confirmPassword')
        .clear()
        .type(confpass)
        return this
    }
    bttnSave(){
        cy.get('#btnSave').click()
    }
}
export default Create_User