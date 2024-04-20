const FIRSTNAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > input';
const LASTNAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > input';
const PHONE_PATH = "html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(5) > div > div:nth-of-type(2) > div > div > input";
const EMAIL_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(6) > div > div:nth-of-type(2) > div > div > input';
const SUBMIT_BUTTON_PATH = "html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span";
const COMPANY_PATH = "html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1)";
const COUNTRY_PATH = "html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input";


describe('ST-001', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.get('#normal_login_email').type('admin@demo.com');
    cy.get('#normal_login_password').type('admin123');
    cy.get('form').submit();
    cy.wait(1000);
    cy.visit('http://localhost:3000/people');
    cy.contains('button', 'Add New Person', { timeout: 10000 }).click();
  });


  it('ST1-CT001', () => {
    cy.get(FIRSTNAME_PATH).type('John');
    cy.get(LASTNAME_PATH).type('Doe');
    cy.get(COMPANY_PATH).click();
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(COUNTRY_PATH).type('Canada');
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(PHONE_PATH).type('1234567890');
    cy.get(EMAIL_PATH).type("fake@fake.com");
    cy.get(SUBMIT_BUTTON_PATH).click();
  });

  it('ST1-CT002', () => {
    cy.get(FIRSTNAME_PATH).type('');
    cy.get(LASTNAME_PATH).type('');
    cy.get(COMPANY_PATH).click();
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(COUNTRY_PATH).type('Canada');
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(PHONE_PATH).type('1234567890');
    cy.get(EMAIL_PATH).type("fake@fake.com");
    cy.get(SUBMIT_BUTTON_PATH).click();
  });

  it('ST1-CT003', () => {
    cy.get(FIRSTNAME_PATH).type('John');
    cy.get(LASTNAME_PATH).type('Doe');
    cy.get(COMPANY_PATH).type('DoesNotExist');
    cy.get(COUNTRY_PATH).type('Canada');
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(PHONE_PATH).type('1234567890');
    cy.get(EMAIL_PATH).type("fake@fake.com");
    cy.get(SUBMIT_BUTTON_PATH).click();
  });

  it('ST1-CT004', () => {
    cy.get(FIRSTNAME_PATH).type('John');
    cy.get(LASTNAME_PATH).type('Doe');
    cy.get(COMPANY_PATH).click();
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(COUNTRY_PATH).type('DoesNotExist');
    cy.get(PHONE_PATH).type('1234567890');
    cy.get(EMAIL_PATH).type("fake@fake.com");
    cy.get(SUBMIT_BUTTON_PATH).click();
  });

  it('ST1-CT005', () => {
    cy.get(FIRSTNAME_PATH).type('John');
    cy.get(LASTNAME_PATH).type('Doe');
    cy.get(COMPANY_PATH).click();
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(COUNTRY_PATH).type('Canada');
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(PHONE_PATH).type('abcdefghij');
    cy.get(EMAIL_PATH).type("fake@fake.com");
    cy.get(SUBMIT_BUTTON_PATH).click();
  });

  it('ST1-CT006', () => {
    cy.get(FIRSTNAME_PATH).type('John');
    cy.get(LASTNAME_PATH).type('Doe');
    cy.get(COMPANY_PATH).click();
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(COUNTRY_PATH).type('Canada');
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(PHONE_PATH).type('1234567890');
    cy.get(EMAIL_PATH).type("fakefakecom");
    cy.get(SUBMIT_BUTTON_PATH).click();
  });

});