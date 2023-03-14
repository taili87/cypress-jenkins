import 'cypress-file-upload';

describe('Perform Sign up for Differents User', ()=>{
    
    beforeEach(()=>{
        cy.visit("/");
    })

    it('SignUp Form', ()=>{
      cy.fixture('./signup/signup').then((data)=>{
        cy.get("a[href='/demo/signup']").click();
        cy.get('#username').type(data.fullName).then(()=>{cy.log('User enter the full name')});
        cy.get('#email').type(data.Email).then(()=>{cy.log('User enter the email')});
        cy.get('#tel').type(data.Telephone).then(()=>{cy.log('User enter the Telephone number')});
        cy.get('#fax').type(data.FaxNumber,{force: true}).then(()=>{cy.log('User enter the Fax number')});

        cy.get("[name='datafile']").attachFile('sample.pdf').then(()=>{cy.log('User Upload your profile')});
        //cy.contains('sample.pdf').should('be.visible');
        cy.get("[name='sgender']").select('Male');
       // cy.get("option[value='male']").click();

        cy.get("input[value='one']").check().should('be.checked');
        cy.get('#submit').click().then(()=>{cy.log('User click on submit button')});
        cy.on('window:alert', (alertWindow)=>{
             expect(alertWindow).to.contain(data.AlertValidation);
        })
      })
    })

    it('Web Table', ()=>{
        cy.get("a[href='/demo/webtable']").click();
    })

    it('List of Items', ()=>{
        cy.get("a[href='/demo/listitems']").click();
    })

    it('Iframes', ()=>{
        cy.get("a[href='/demo/iframes']").click();
    })
    it('Alerts', ()=>{
        cy.get("a[href='/demo/alerts']").click();
    })
    it('Links', ()=>{
        cy.get("a[href='/demo/links']").click();
    })

    it('Drop Dowm', ()=>{
        cy.get("a[href='/demo/dragndrop']").click();
    })

    it('Delay', ()=>{
        cy.get("a[href='/demo/delay']").click();
    })

    it('Shadow DOM', ()=>{
        cy.get("a[href='/demo/shadowDOM']").click();
    })

    it('Auto Suggestion', ()=>{
        cy.get("a[href='/demo/autosuggestion']").click();
    })
})