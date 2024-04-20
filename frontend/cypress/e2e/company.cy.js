const NAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > input';
const CONTACT_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const COUNTRY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const PHONE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > input';
const EMAIL_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(5) > div > div:nth-of-type(2) > div > div > input';
const WEBSITE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(1) > div:nth-of-type(6) > div > div:nth-of-type(2) > div > div > span > span > input';
const SUBMIT_BUTTON_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > div > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span';
const SEARCH_COMPANY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div > div > span:nth-of-type(1) > input';
const EDIT_COMPANY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(1) > div:nth-of-type(2) > button:nth-of-type(2) > span:nth-of-type(2)';
const EDIT_NAME_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > input';
const EDIT_CONTACT_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(1) > input';
const EDIT_COUNTRY_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > span:nth-of-type(2)';
const EDIT_PHONE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > div > input';
const EDIT_EMAIL_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(5) > div > div:nth-of-type(2) > div > div > input';
const EDIT_WEBSITE_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(1) > div:nth-of-type(6) > div > div:nth-of-type(2) > div > div > span > span > input';
const SAVE_BUTTON_PATH = 'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > div > form > div:nth-of-type(2) > div > div > div > div > button > span';


// describe('ST-002', () => {
//
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/login');
//     cy.get('#normal_login_email').type('admin@demo.com');
//     cy.get('#normal_login_password').type('admin123');
//     cy.get('form').submit();
//     cy.wait(1000);
//     cy.visit('http://localhost:3000/company');
//     cy.contains('button', 'Add New Company', { timeout: 10000 }).click();
//   });
//
//   it('ST2-001', () => {
//     cy.get(NAME_PATH).type('Best Company');
//     cy.get(CONTACT_PATH).type('John Doe');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(COUNTRY_PATH).type('Canada');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(PHONE_PATH).type('1234567890');
//     cy.get(EMAIL_PATH).type("fake@fake.com");
//     cy.get(WEBSITE_PATH).type('www.example.com');
//     cy.get(SUBMIT_BUTTON_PATH).click();
//   });
//
//
//   it('ST2-002', () => {
//     cy.get(NAME_PATH).type('@#%^&*?@');
//     cy.get(CONTACT_PATH).type('John Doe');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(COUNTRY_PATH).type('Canada');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(PHONE_PATH).type('1234567890');
//     cy.get(EMAIL_PATH).type("fake@fake.com");
//     cy.get(WEBSITE_PATH).type('www.example.com');
//     cy.get(SUBMIT_BUTTON_PATH).click();
//   });
//
//   it('ST2-003', () => {
//     cy.get(NAME_PATH).type('Best new Company');
//     cy.get(CONTACT_PATH).type('DoesNotExist ExistNotDoes');
//     cy.get(COUNTRY_PATH).type('Canada');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(PHONE_PATH).type('1234567890');
//     cy.get(EMAIL_PATH).type("fake@fake.com");
//     cy.get(WEBSITE_PATH).type('www.example.com');
//     cy.get(SUBMIT_BUTTON_PATH).click();
//   });
//
//   it('ST2-004', () => {
//     cy.get(NAME_PATH).type('Best Company new');
//     cy.get(CONTACT_PATH).type('John Doe');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(COUNTRY_PATH).type('DoesNotExist');
//     cy.get(PHONE_PATH).type('1234567890');
//     cy.get(EMAIL_PATH).type("fake@fake.com");
//     cy.get(WEBSITE_PATH).type('www.example.com');
//     cy.get(SUBMIT_BUTTON_PATH).click();
//   });
//
//
//   it('ST2-005', () => {
//     cy.get(NAME_PATH).type('Best Company new new');
//     cy.get(CONTACT_PATH).type('John Doe');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(COUNTRY_PATH).type('Canada');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(PHONE_PATH).type('123456789012345670');
//     cy.get(EMAIL_PATH).type("fake@fake.com");
//     cy.get(WEBSITE_PATH).type('www.example.com');
//     cy.get(SUBMIT_BUTTON_PATH).click();
//   });
//
//   it('ST2-006', () => {
//     cy.get(NAME_PATH).type('Best Company new new new');
//     cy.get(CONTACT_PATH).type('John Doe');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(COUNTRY_PATH).type('Canada');
//     cy.focused().type('{downarrow}');
//     cy.focused().type('{enter}');
//     cy.get(PHONE_PATH).type('123456789012345670');
//     cy.get(EMAIL_PATH).type("fake@fake.com");
//     cy.get(WEBSITE_PATH).type('doesnotexist');
//     cy.get(SUBMIT_BUTTON_PATH).click();
//   });
// });



describe('ST-002', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.get('#normal_login_email').type('admin@demo.com');
    cy.get('#normal_login_password').type('admin123');
    cy.get('form').submit();
    cy.wait(1000);
    cy.visit('http://localhost:3000/company');
    cy.contains('button', 'Add New Company', { timeout: 10000 }).click();
  });

  it('ST2-001', () => {
    cy.get(SEARCH_COMPANY_PATH).type('Best Company');
    cy.wait(1000);
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(EDIT_COMPANY_PATH).click();
    cy.get(EDIT_NAME_PATH).clear().type('Best of the Best Company');
    // FIXME - This is not working
    // cy.get(EDIT_CONTACT_PATH).click() //type('John Doe');
    // cy.wait(1000);
    // cy.focused().type('{downarrow}', {force: true});
    // cy.focused().type('{enter}', {force: true});

    cy.get(EDIT_COUNTRY_PATH).click()
    cy.wait(1000);
    cy.focused().type('{downarrow}', {force: true});
    cy.focused().type('{enter}', {force: true});
    cy.get(EDIT_PHONE_PATH).clear().type('0987654321');
    cy.get(EDIT_EMAIL_PATH).clear().type("notreal@notreal.com");
    cy.get(EDIT_WEBSITE_PATH).clear().type('www.notreal.com');
    cy.get(SAVE_BUTTON_PATH).click();
  });


  it('ST2-002', () => {
    cy.get(SEARCH_COMPANY_PATH).type('Best Company');
    cy.wait(1000);
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(EDIT_COMPANY_PATH).click();
    cy.get(EDIT_NAME_PATH).clear().type('%$$#$$#@@#$$%');
    // FIXME - This is not working
    // cy.get(EDIT_CONTACT_PATH).click() //type('John Doe');
    // cy.wait(1000);
    // cy.focused().type('{downarrow}', {force: true});
    // cy.focused().type('{enter}', {force: true});

    cy.get(EDIT_COUNTRY_PATH).click()
    cy.wait(1000);
    cy.focused().type('{downarrow}', {force: true});
    cy.focused().type('{enter}', {force: true});
    cy.get(EDIT_PHONE_PATH).clear().type('0987654321');
    cy.get(EDIT_EMAIL_PATH).clear().type("notreal@notreal.com");
    cy.get(EDIT_WEBSITE_PATH).clear().type('www.notreal.com');
    cy.get(SAVE_BUTTON_PATH).click();
  });

  it('ST2-003', () => {
    cy.get(SEARCH_COMPANY_PATH).type('Best Company');
    cy.wait(1000);
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(EDIT_COMPANY_PATH).click();
    cy.get(EDIT_NAME_PATH).clear().type('Best of the Best Company');
    cy.get(EDIT_CONTACT_PATH).type('DOES NOT EXIST');
    cy.wait(1000);
    cy.focused().type('{downarrow}', {force: true});
    cy.focused().type('{enter}', {force: true});

    cy.get(EDIT_COUNTRY_PATH).click()
    cy.wait(1000);
    cy.focused().type('{downarrow}', {force: true});
    cy.focused().type('{enter}', {force: true});
    cy.get(EDIT_PHONE_PATH).clear().type('0987654321');
    cy.get(EDIT_EMAIL_PATH).clear().type("notreal@notreal.com");
    cy.get(EDIT_WEBSITE_PATH).clear().type('www.notreal.com');
    cy.get(SAVE_BUTTON_PATH).click();
  });

  it('ST2-004', () => {
    cy.get(SEARCH_COMPANY_PATH).type('Best Company');
    cy.wait(1000);
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(EDIT_COMPANY_PATH).click();
    cy.get(EDIT_NAME_PATH).clear().type('Best of the Best Company');
    // FIXME - This is not working
    // cy.get(EDIT_CONTACT_PATH).click() //type('John Doe');
    // cy.wait(1000);
    // cy.focused().type('{downarrow}', {force: true});
    // cy.focused().type('{enter}', {force: true});

    cy.get(EDIT_COUNTRY_PATH).type('DOES NOT EXIST');
    cy.wait(1000);
    cy.focused().type('{downarrow}', {force: true});
    cy.focused().type('{enter}', {force: true});
    cy.get(EDIT_PHONE_PATH).clear().type('0987654321');
    cy.get(EDIT_EMAIL_PATH).clear().type("notreal@notreal.com");
    cy.get(EDIT_WEBSITE_PATH).clear().type('www.notreal.com');
    cy.get(SAVE_BUTTON_PATH).click();
  });


  it('ST2-005', () => {
    cy.get(SEARCH_COMPANY_PATH).type('Best Company');
    cy.wait(1000);
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(EDIT_COMPANY_PATH).click();
    cy.get(EDIT_NAME_PATH).clear().type('Best of the Best Company');
    // FIXME - This is not working
    // cy.get(EDIT_CONTACT_PATH).click() //type('John Doe');
    // cy.wait(1000);
    // cy.focused().type('{downarrow}', {force: true});
    // cy.focused().type('{enter}', {force: true});

    cy.get(EDIT_COUNTRY_PATH).click()
    cy.wait(1000);
    cy.focused().type('{downarrow}', {force: true});
    cy.focused().type('{enter}', {force: true});
    cy.get(EDIT_PHONE_PATH).clear().type('09876543210987654321');
    cy.get(EDIT_EMAIL_PATH).clear().type("notreal@notreal.com");
    cy.get(EDIT_WEBSITE_PATH).clear().type('www.notreal.com');
    cy.get(SAVE_BUTTON_PATH).click();
  });

  it('ST2-006', () => {
    cy.get(SEARCH_COMPANY_PATH).type('Best Company');
    cy.wait(1000);
    cy.focused().type('{downarrow}');
    cy.focused().type('{enter}');
    cy.get(EDIT_COMPANY_PATH).click();
    cy.get(EDIT_NAME_PATH).clear().type('Best of the Best Company');
    // FIXME - This is not working
    // cy.get(EDIT_CONTACT_PATH).click() //type('John Doe');
    // cy.wait(1000);
    // cy.focused().type('{downarrow}', {force: true});
    // cy.focused().type('{enter}', {force: true});

    cy.get(EDIT_COUNTRY_PATH).click()
    cy.wait(1000);
    cy.focused().type('{downarrow}', {force: true});
    cy.focused().type('{enter}', {force: true});
    cy.get(EDIT_PHONE_PATH).clear().type('0987654321');
    cy.get(EDIT_EMAIL_PATH).clear().type("notreal@notreal.com");
    cy.get(EDIT_WEBSITE_PATH).clear().type('notrealnotreal');
    cy.get(SAVE_BUTTON_PATH).click();
  });
});