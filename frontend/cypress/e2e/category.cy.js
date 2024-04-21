const NAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > input';
const DESCRIPTION_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > textarea';
const COLOR_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const SUBMIT_BUTTON_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span';
const ENABLED_BUTTON = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > button > span';
const SEARCH_CATEGORY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div > div > span:nth-of-type(1) > input';
const EDIT_CATEGORY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(1) > div:nth-of-type(2) > button:nth-of-type(2) > span:nth-of-type(2)';
const EDIT_NAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > input';
const EDIT_DESCRIPTION_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > textarea';
const EDIT_COLOR_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(2)';
const EDIT_ENABLED_BUTTON = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > button > span';
const SAVE_BUTTON_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span';


describe('ST-0010',() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('#normal_login_email').type('admin@demo.com');
        cy.get('#normal_login_password').type('admin123');
        cy.get('form').submit();
        cy.wait(1000);
        cy.visit('http://localhost:3000/category/product');
        cy.contains('button', 'Add New Product Category', {timeout: 10000}).click();
    });

    it('ST-10-CT001', () => {
        cy.get(NAME_PATH).type('ProductDemo', {force: true})
        cy.get(DESCRIPTION_PATH).type('ProductDemo new description', {force: true})
        cy.get(COLOR_PATH).type('green', {force: true})
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(ENABLED_BUTTON).click();
        cy.get(ENABLED_BUTTON).click();
        cy.get(SUBMIT_BUTTON_PATH).click();
    });

    it('ST-10-CT002', () => {
        cy.get(NAME_PATH).type('', {force: true})
        cy.get(DESCRIPTION_PATH).type('ProductDemo new description', {force: true})
        cy.get(COLOR_PATH).type('green', {force: true})
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(ENABLED_BUTTON).click();
        cy.get(ENABLED_BUTTON).click();
        cy.get(SUBMIT_BUTTON_PATH).click();
    });

    it('ST-10-CT003', () => {
        cy.get(NAME_PATH).type('ProductDemo', {force: true})
        cy.get(DESCRIPTION_PATH).type('', {force: true})
        cy.get(COLOR_PATH).type('green', {force: true})
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(ENABLED_BUTTON).click();
        cy.get(ENABLED_BUTTON).click();
        cy.get(SUBMIT_BUTTON_PATH).click();
    });

    it('ST-10-CT004', () => {
        cy.get(NAME_PATH).type('ProductDemo', {force: true})
        cy.get(DESCRIPTION_PATH).type('ProductDemo new description', {force: true})
        cy.get(COLOR_PATH).type('ColorNotInList', {force: true})
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(ENABLED_BUTTON).click();
        cy.get(ENABLED_BUTTON).click();
        cy.get(SUBMIT_BUTTON_PATH).click();
    });
})


describe('ST-0011',() =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('#normal_login_email').type('admin@demo.com');
        cy.get('#normal_login_password').type('admin123');
        cy.get('form').submit();
        cy.wait(1000);
        cy.visit('http://localhost:3000/category/product');
        cy.contains('button', 'Add New Product Category', {timeout: 10000}).click();
    });

    it('ST-11-CT001', () => {
        cy.get(SEARCH_CATEGORY_PATH).type('ProductDemo', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_CATEGORY_PATH).click();
        cy.get(EDIT_NAME_PATH).clear().type('ProductDemoNew');
        cy.get(EDIT_DESCRIPTION_PATH).clear().type('ProductDemo new description with new product');
        cy.get(EDIT_COLOR_PATH).type('red');
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST-11-CT002', () => {
        cy.get(SEARCH_CATEGORY_PATH).type('ProductDemo', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_CATEGORY_PATH).click();
        cy.get(EDIT_NAME_PATH).clear().type('');
        cy.get(EDIT_DESCRIPTION_PATH).clear().type('ProductDemo new description with new product');
        cy.get(EDIT_COLOR_PATH).type('red');
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST-11-CT003', () => {
        cy.get(SEARCH_CATEGORY_PATH).type('ProductDemo', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_CATEGORY_PATH).click();
        cy.get(EDIT_NAME_PATH).clear().type('ProductDemoNew');
        cy.get(EDIT_DESCRIPTION_PATH).clear().type('');
        cy.get(EDIT_COLOR_PATH).type('red');
        cy.focused().type('{downarrow}');
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST-11-CT004', () => {
        cy.get(SEARCH_CATEGORY_PATH).type('ProductDemo', {force: true});
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_CATEGORY_PATH).click();
        cy.get(EDIT_NAME_PATH).clear().type('ProductDemoNew');
        cy.get(EDIT_DESCRIPTION_PATH).clear().type('ProductDemo new description with new product');
        cy.get(EDIT_COLOR_PATH).type('colorNotInList');
        cy.get(SAVE_BUTTON_PATH).click();
    });
})