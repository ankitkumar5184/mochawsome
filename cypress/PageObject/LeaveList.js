class Leave_List{
    clickLeave(){
        cy.get('#menu_leave_viewLeaveModule > b').click();
    }
    fromDate(fromdate){
        cy.get('#calFromDate')
        .clear()
        .type(fromdate)
        .type('{enter}')
        return this
    }
    toDate(todate){
        cy.get('#calToDate')
        .clear()
        .type(todate)
        .type('{enter}')
        return this
    }
    clickCheck(){
        cy.get('#leaveList_chkSearchFilter_checkboxgroup_allcheck').click();
    }
    empName3(name3){
        cy.get('#leaveList_txtEmployee_empName')
        .clear()
        .type(name3);
        return this
    }
clickCheck2(){
    cy.get('#leaveList_cmbWithTerminated').click();
}
searchbttn2(){
    cy.get('#btnSearch').click();
}
}
export default Leave_List