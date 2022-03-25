/// <reference types="cypress" />
import Login_Page from "../PageObject/loginPage";
import Create_User from "../PageObject/CreateUser";
import Search_User from "../PageObject/SearchUser";
import Delete_User from "../PageObject/DeleteUser";
import Leave_List from "../PageObject/LeaveList";
import Log_Out from "../PageObject/LogOut";
import Add_Candidate from "../PageObject/AddCondidate";

const login = new Login_Page();
const user = new Create_User();
const search = new Search_User()
const delete1 = new Delete_User();
const leave2 = new Leave_List()
const cand = new Add_Candidate();
const logout = new Log_Out();



describe("Page object Model in Cypress", function(){
    beforeEach(function() {
        cy.fixture("user").then(function(data){
            this.data=data;
            login.navigate();
            login.enterUser(this.data.Username);
            login.enterPass(this.data.Password);
            login.submit();
            cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        })        
    })
    it("Login with valid credentials in OrangeHRM", function(){
        
    })

    //Create User
    it("Create new User",function(){
        user.clickMenuAdmin();
        user.clickAdd();
        user.empName1(this.data.Empname);
        user.empUname(this.data.UserEmp);
        user.newPassword(this.data.PassWord);
        user.confPassword(this.data.ConfPass);
        cy.wait(1000);
        user.bttnSave();
        cy.wait(2000);
        // cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers')
        
    })

    //search User
    it("Search new User",function(){
        user.clickMenuAdmin();
        search.searchName(this.data.UserEmp);
        search.searchBttn();   
        
    })
    
    // Delete User
    it("Delete new User",function(){
        user.clickMenuAdmin();
        search.searchName(this.data.UserEmp);
        search.searchBttn();
        delete1.clickCheckbox();
        delete1.bttnDelete();
        delete1.clickOk();
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers')
    
    }) 
    
    // To check leave list of employees
    it("Leave list of Employees",function(){
        leave2.clickLeave();
        leave2.fromDate(this.data.FromDate);
        leave2.toDate(this.data.ToDate);
        leave2.clickCheck();
        leave2.empName3(this.data.Emp2Name);
        leave2.clickCheck2();
        leave2.searchbttn2();
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/index.php/leave/viewLeaveList')
        
    })

    it("Add candidate ",function(){  
        cand.clickRecruite();
        cand.clickAdd1();
        cand.firstName1(this.data.Fullname);
        cand.middleNAme(this.data.Middlename);
        cand.lastName(this.data.Lastname);
        cand.enterEmail(this.data.Email);
        cand.addContact(this.data.Contact);       
    })

    afterEach(function(){
        cy.wait(2000);
        logout.welCome();
        cy.wait(2000);
        logout.logOut();
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    }) 
})
