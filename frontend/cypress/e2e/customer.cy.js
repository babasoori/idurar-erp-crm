const TYPE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const PEOPLE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const COMPANY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1)';
const SUBMIT_BUTTON_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span';
const SEARCH_CLIENT_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div > div > span:nth-of-type(1) > input';
const EDIT_CLIENT_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(1) > div:nth-of-type(2) > button:nth-of-type(2) > span:nth-of-type(2)';
const EDIT_COMPANY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const SAVE_COMPANY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span';
const EDIT_PEOPLE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const EDIT_PEOPLE_COMPANY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const EDIT_COMPANY_COMPANY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';

describe('ST-003', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('#normal_login_email').type('admin@demo.com');
        cy.get('#normal_login_password').type('admin123');
        cy.get('form').submit();
        cy.wait(1000);
        cy.visit('http://localhost:3000/customer');
        cy.contains('button', 'Add New Client', {timeout: 10000}).click();
    });

    it('ST3-CT001', () => {
        cy.get(TYPE_PATH).click();
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(PEOPLE_PATH).type('John Doe');
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(SUBMIT_BUTTON_PATH).click();
    });

    it('ST3-CT002', () => {
        cy.get(TYPE_PATH).click();
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(COMPANY_PATH).type('Best Company 2');
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(SUBMIT_BUTTON_PATH).click();
    });

    it('ST3-CT003', () => {
        cy.get(SEARCH_CLIENT_PATH).type('John Doe', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_CLIENT_PATH).click();
        cy.get(EDIT_COMPANY_PATH).click();
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(SAVE_COMPANY_PATH).click();
    });
});


describe('ST-006', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('#normal_login_email').type('admin@demo.com');
        cy.get('#normal_login_password').type('admin123');
        cy.get('form').submit();
        cy.wait(1000);
        cy.visit('http://localhost:3000/customer');
        cy.contains('button', 'Add New Client', {timeout: 10000}).click();
    });

    it('ST6-CT001', () => {
        cy.get(SEARCH_CLIENT_PATH).type('John Doe', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_CLIENT_PATH).click();
        cy.get(EDIT_PEOPLE_PATH).type('John Doe');
        cy.wait(1000);
        // cy.get(TYPE_PATH).click();
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        // cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PEOPLE_COMPANY_PATH).click();
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(SUBMIT_BUTTON_PATH).click();
    });

    it('ST6-CT002', () => {
        cy.get(SEARCH_CLIENT_PATH).type('@#%^&*?@', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_CLIENT_PATH).click();
        // cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_COMPANY_COMPANY_PATH).click();
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}',  {force: true});
        cy.get(SUBMIT_BUTTON_PATH).click();
    });

    it('ST6-CT003', () => {
        cy.get(SEARCH_CLIENT_PATH).type('John Doe', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_CLIENT_PATH).click();
        cy.get(EDIT_PEOPLE_PATH).type('John Doe');
        cy.wait(1000);
        // cy.get(TYPE_PATH).click();
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        // cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PEOPLE_COMPANY_PATH).click();
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(SUBMIT_BUTTON_PATH).click();
    });
});