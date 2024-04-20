const FIRSTNAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > input';
const LASTNAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > input';
const PHONE_PATH = "html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(5) > div > div:nth-of-type(2) > div > div > input";
const EMAIL_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(6) > div > div:nth-of-type(2) > div > div > input';
const SUBMIT_BUTTON_PATH = "html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span";
const COMPANY_PATH = "html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1)";
const COUNTRY_PATH = "html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input";
const SEARCH_PEOPLE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div > div > span:nth-of-type(1) > input';
const EDIT_PEOPLE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(1) > div:nth-of-type(2) > button:nth-of-type(2) > span:nth-of-type(2)';
const EDIT_FIRST_NAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > input';
const EDIT_LAST_NAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > input';
const EDIT_PHONE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(5) > div > div:nth-of-type(2) > div > div > input';
const EDIT_EMAIL_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(6) > div > div:nth-of-type(2) > div > div > input';
const EDIT_COMPANY_PATH =  'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(2)';//'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const EDIT_COUNTRY_PATH =  'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(2)'; //'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1)';
const SAVE_BUTTON_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span';

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


describe('ST-004', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('#normal_login_email').type('admin@demo.com');
        cy.get('#normal_login_password').type('admin123');
        cy.get('form').submit();
        cy.wait(1000);
        cy.visit('http://localhost:3000/people');
        cy.contains('button', 'Add New Person', {timeout: 10000}).click();
    });

    it('ST4-CT001', () => {
        cy.get(SEARCH_PEOPLE_PATH).type('John'); //type('John Doe', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PEOPLE_PATH).click();
        cy.get(EDIT_FIRST_NAME_PATH).clear().type('Johnny');
        cy.get(EDIT_LAST_NAME_PATH).clear().type('Doey');
        cy.get(EDIT_COMPANY_PATH).type('Best Company');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_COUNTRY_PATH).type('France');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PHONE_PATH).clear().type('0987654321');
        cy.get(EDIT_EMAIL_PATH).clear().type('notreal@notreal.com');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST4-CT002', () => {
        cy.get(SEARCH_PEOPLE_PATH).type('John'); //type('John Doe', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PEOPLE_PATH).click();
        cy.get(EDIT_FIRST_NAME_PATH).clear().type('');
        cy.get(EDIT_LAST_NAME_PATH).clear().type('');
        cy.get(EDIT_COMPANY_PATH).type('Best Company');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_COUNTRY_PATH).type('France');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PHONE_PATH).clear().type('0987654321');
        cy.get(EDIT_EMAIL_PATH).clear().type('notreal@notreal.com');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST4-CT003', () => {
        cy.get(SEARCH_PEOPLE_PATH).type('John'); //type('John Doe', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PEOPLE_PATH).click();
        cy.get(EDIT_FIRST_NAME_PATH).clear().type('Johnny');
        cy.get(EDIT_LAST_NAME_PATH).clear().type('Doey');
        cy.get(EDIT_COMPANY_PATH).type('DoesNotExist');
        // cy.wait(1000);
        // cy.focused().type('{downarrow}', {force: true});
        // cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_COUNTRY_PATH).type('France');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PHONE_PATH).clear().type('0987654321');
        cy.get(EDIT_EMAIL_PATH).clear().type('notreal@notreal.com');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST4-CT004', () => {
        cy.get(SEARCH_PEOPLE_PATH).type('John'); //type('John Doe', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PEOPLE_PATH).click();
        cy.get(EDIT_FIRST_NAME_PATH).clear().type('Johnny');
        cy.get(EDIT_LAST_NAME_PATH).clear().type('Doey');
        cy.get(EDIT_COMPANY_PATH).type('Best Company');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_COUNTRY_PATH).type('DoesNotExist');
        // cy.wait(1000);
        // cy.focused().type('{downarrow}', {force: true});
        // cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PHONE_PATH).clear().type('0987654321');
        cy.get(EDIT_EMAIL_PATH).clear().type('notreal@notreal.com');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST4-CT005', () => {
        cy.get(SEARCH_PEOPLE_PATH).type('John'); //type('John Doe', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PEOPLE_PATH).click();
        cy.get(EDIT_FIRST_NAME_PATH).clear().type('Johnny');
        cy.get(EDIT_LAST_NAME_PATH).clear().type('Doey');
        cy.get(EDIT_COMPANY_PATH).type('Best Company');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_COUNTRY_PATH).type('France');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PHONE_PATH).clear().type('abcdefghij');
        cy.get(EDIT_EMAIL_PATH).clear().type('notreal@notreal.com');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST4-CT006', () => {
        cy.get(SEARCH_PEOPLE_PATH).type('John'); //type('John Doe', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PEOPLE_PATH).click();
        cy.get(EDIT_FIRST_NAME_PATH).clear().type('Johnny');
        cy.get(EDIT_LAST_NAME_PATH).clear().type('Doey');
        cy.get(EDIT_COMPANY_PATH).type('Best Company');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_COUNTRY_PATH).type('France');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PHONE_PATH).clear().type('0123456789');
        cy.get(EDIT_EMAIL_PATH).clear().type('notrealnotrealcom');
        cy.get(SAVE_BUTTON_PATH).click();
    });
})