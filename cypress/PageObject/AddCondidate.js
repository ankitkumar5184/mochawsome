class Add_Candidate{
    clickRecruite(){
        cy.get('#menu_recruitment_viewRecruitmentModule > b').click();
        cy.contains('Recruitment').click();
    }
    clickAdd1(){
        cy.get('#btnAdd').click();
    }
    firstName1(fname){
        cy.get('#addCandidate_firstName')
        .clear()
        .type(fname);
        return this
    }
    middleNAme(mname){
        cy.get('#addCandidate_middleName')
        .clear()
        .type(mname)
        return this
    }
    lastName(lname){
        cy.get('#addCandidate_lastName')
        .clear()
        .type(lname)
        return this
    }
    enterEmail(mail){
        cy.get('#addCandidate_email')
        .clear()
        .type(mail)
        return this
    }
    addContact(number){
        cy.get('#addCandidate_contactNo')
        .clear()
        .type(number)
        return this
    }
    clickVacency(){
        cy.get('#addCandidate_vacancy').click();
    }
}
export default Add_Candidate