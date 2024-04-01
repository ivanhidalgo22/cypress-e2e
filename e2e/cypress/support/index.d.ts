declare namespace Cypress {
    // tslint:disable-next-line:interface-name  
    interface Chainable<Subject> {
      /**
       * Login using API and bearer token
       * @example
       * cy.login()
       */
      login(): Chainable<any>;
  
      /**
       * Search audience/report By Name
       * @example
       * cy.searchGlobalByName('Audience_CY_US', 'yes')
       * cy.searchGlobalByName('Audience_CY_US', 'no')
       */
      searchGlobal(name, openAudience): Chainable<any>;
  
      /**
       * Select any of the result elements on DOM, can only be used as a DOM child command
       * @example
       * cy.get('foo').any().click();
       * cy.get('foo').any(3).each((foo) => { ... }));
       * @param subject Automatically passed element from previous command
       * @param size Size of an element list in case you need more than one random element, default returns only 1 element
       */
      any(subject?, size?): Chainable<Element>;
    }
  }
  