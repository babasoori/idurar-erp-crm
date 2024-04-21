const NAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > input';
const PRODUCT_CATEGORY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
// const CURRENCY_PATH = '';
const PRICE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > div > div > div:nth-of-type(2) > div > input';
const DESCRIPTION_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(5) > div > div:nth-of-type(2) > div > div > textarea';
const REF_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(6) > div > div:nth-of-type(2) > div > div > input';
const SUBMIT_BUTTON_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span';
const SEARCH_PRODUCT_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div > div > span:nth-of-type(1) > input';
const EDIT_PRODUCT_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(1) > div:nth-of-type(2) > button:nth-of-type(2) > span:nth-of-type(2)';
const EDIT_NAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > input';
const EDIT_PRODUCT_CATEGORY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(2)';
const EDIT_PRICE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > div > div > div:nth-of-type(2) > div > input';
const EDIT_DESCRIPTION_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(5) > div > div:nth-of-type(2) > div > div > textarea';
const EDIT_REF_PATH = '';
const SAVE_BUTTON_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span';
const REMOVE_PRODUCT_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(1) > div:nth-of-type(2) > button:nth-of-type(1) > span:nth-of-type(2)';
const DELETE_CONFIRMATION_BUTTON = 'html > body > div:nth-of-type(6) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > button:nth-of-type(2)';

describe('ST-007',() =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('#normal_login_email').type('admin@demo.com');
        cy.get('#normal_login_password').type('admin123');
        cy.get('form').submit();
        cy.wait(1000);
        cy.visit('http://localhost:3000/product');
        cy.contains('button', 'Add New Product', {timeout: 10000}).click();
    });

    it('ST7-CT001', () => {
        cy.get(NAME_PATH).type('ProductA', {force: true})
        cy.get(PRODUCT_CATEGORY_PATH).click();
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(PRICE_PATH).type('100', {force: true});
        cy.get(SUBMIT_BUTTON_PATH).click();
    });

    it('ST7-CT002', () => {
        cy.get(PRODUCT_CATEGORY_PATH).click();
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(PRICE_PATH).type('100', {force: true});
        cy.get(SUBMIT_BUTTON_PATH).click();
    });

    it('ST7-CT003', () => {
        cy.get(NAME_PATH).type('ProductA', {force: true})
        cy.get(PRODUCT_CATEGORY_PATH).type('NonExistantCategory', {force: true});
        cy.wait(1000);
        cy.get(PRICE_PATH).type('100', {force: true});
    });

    it('ST7-CT004', () => {
        cy.get(NAME_PATH).type('ProductA', {force: true})
        cy.get(PRODUCT_CATEGORY_PATH).click();
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(PRICE_PATH).type('acbdeefgh', {force: true});
        cy.get(SUBMIT_BUTTON_PATH).click();
    });
})


describe('ST-008',() =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('#normal_login_email').type('admin@demo.com');
        cy.get('#normal_login_password').type('admin123');
        cy.get('form').submit();
        cy.wait(1000);
        cy.visit('http://localhost:3000/product');
        cy.contains('button', 'Add New Product', {timeout: 10000}).click();
    });

    it('ST8-CT001', () => {
        cy.get(SEARCH_PRODUCT_PATH).type('ProductA');
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PRODUCT_PATH).click();
        cy.get(EDIT_NAME_PATH).clear().type('ProductB');
        cy.get(EDIT_PRODUCT_CATEGORY_PATH).type('Leisure');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PRICE_PATH).clear().type('200');
        cy.get(EDIT_DESCRIPTION_PATH).clear().type('This is new and improved description');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST7-CT002', () => {
        cy.get(SEARCH_PRODUCT_PATH).type('ProductA');
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PRODUCT_PATH).click();
        cy.get(EDIT_NAME_PATH).clear().type('');
        cy.get(EDIT_PRODUCT_CATEGORY_PATH).type('Leisure');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PRICE_PATH).clear().type('200');
        cy.get(EDIT_DESCRIPTION_PATH).clear().type('This is new and improved description');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST7-CT003', () => {
        cy.get(SEARCH_PRODUCT_PATH).type('ProductA');
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PRODUCT_PATH).click();
        cy.get(EDIT_NAME_PATH).clear().type('ProductB');
        cy.get(EDIT_PRODUCT_CATEGORY_PATH).type('NonExistantCategory');
        cy.wait(1000);
        cy.get(EDIT_PRICE_PATH).clear().type('200');
        cy.get(EDIT_DESCRIPTION_PATH).clear().type('This is new and improved description');
        cy.get(SAVE_BUTTON_PATH).click();
    });

    it('ST7-CT004', () => {
        cy.get(SEARCH_PRODUCT_PATH).type('ProductA');
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(EDIT_PRODUCT_PATH).click();
        cy.get(EDIT_NAME_PATH).clear().type('ProductB');
        cy.get(EDIT_PRODUCT_CATEGORY_PATH).type('Leisure');
        cy.wait(1000);
        cy.focused().type('{downarrow}', {force: true});
        cy.focused().type('{enter}', {force: true});
        cy.get(EDIT_PRICE_PATH).clear().type('abcdeefgh');
        cy.get(EDIT_DESCRIPTION_PATH).clear().type('This is new and improved description');
        cy.get(SAVE_BUTTON_PATH).click();
    });
})


describe('ST-009', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('#normal_login_email').type('admin@demo.com');
        cy.get('#normal_login_password').type('admin123');
        cy.get('form').submit();
        cy.wait(1000);
        cy.visit('http://localhost:3000/product');
        cy.contains('button', 'Add New Product', {timeout: 10000}).click();
    });

    it('ST9-CT001', () => {
        cy.get(SEARCH_PRODUCT_PATH).type('ProductB');
        cy.wait(1000);
        cy.focused().type('{downarrow}');
        cy.focused().type('{enter}');
        cy.get(REMOVE_PRODUCT_PATH).click();
        cy.wait(1000);
        cy.focused().type('{enter}', {force: true});
        // FIXME not working
        // cy.get('.ant-modal-content') // Select the dialog
        //     .find('button') // Find the button within the dialog
        //     .click({force: true}); // Click the button
    });
})

