class Search_User{
    searchName(empname2){
        cy.get('#searchSystemUser_userName')
        .clear()
        .type(empname2);
        return this
    }
    searchBttn(){
        cy.get('#searchBtn').click();
    }
}
export default Search_User