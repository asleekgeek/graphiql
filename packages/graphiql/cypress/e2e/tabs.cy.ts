describe('Tabs', () => {
  it('Should store editor contents when switching between tabs', () => {
    cy.visit('?defaultQuery=');

    // Assert that tab visible when there's only one session
    cy.get('.graphiql-tab-button').eq(0).should('exist');
    // Enter a query without operation name
    cy.get('.graphiql-query-editor textarea').type('{id', { force: true });

    // Run the query
    cy.clickExecuteQuery();
    // Assert request is not cancelled
    cy.get('.result-window').should('not.have.text', '');

    // Open a new tab
    cy.get('.graphiql-tab-add').click();

    // Enter a query
    cy.get('.graphiql-query-editor textarea').type('query Foo {image', {
      force: true,
    });
    cy.get('.graphiql-tab-button').eq(1).should('have.text', 'Foo');

    // Enter variables
    cy.get('.graphiql-editor-tool textarea')
      .eq(0)
      .type('{"someVar":42', { force: true });

    // Enter headers
    cy.contains('Headers').click();
    cy.get('.graphiql-editor-tool textarea')
      .eq(1)
      .type('{"someHeader":"someValue"', { force: true });

    // Run the query
    cy.clickExecuteQuery();
    // Assert request is not cancelled
    cy.get('.result-window').should('not.have.text', '');
    // Switch back to the first tab
    cy.get('.graphiql-tab-button').eq(0).click();

    // Assert tab titles
    cy.get('.graphiql-tab-button').eq(0).should('have.text', '<untitled>');
    cy.get('.graphiql-tab-button').eq(1).should('have.text', 'Foo');

    // Assert editor values
    cy.assertHasValues({
      query: '{id}',
      variablesString: '',
      headersString: '',
      response: { data: { id: 'abc123' } },
    });

    // Switch back to the second tab
    cy.get('.graphiql-tab-button').eq(1).click();

    // Assert tab titles
    cy.get('.graphiql-tab-button').eq(0).should('have.text', '<untitled>');
    cy.get('.graphiql-tab-button').eq(1).should('have.text', 'Foo');

    // Assert editor values
    cy.assertHasValues({
      query: 'query Foo {image}',
      variablesString: '{"someVar":42}',
      headersString: '{"someHeader":"someValue"}',
      response: { data: { image: '/resources/logo.svg' } },
    });

    // Close tab
    cy.get('.graphiql-tab-button + .graphiql-tab-close').eq(1).click();

    // Assert that tab close button not visible when there is only 1 tab
    cy.get('.graphiql-tab-button + .graphiql-tab-close').should('not.exist');

    // Assert editor values
    cy.assertHasValues({
      query: '{id}',
      variablesString: '',
      headersString: '',
      response: { data: { id: 'abc123' } },
    });
  });

  describe('confirmCloseTab()', () => {
    it('should keep tab when `Cancel` was clicked', () => {
      cy.on('window:confirm', () => false);
      cy.visit('?confirmCloseTab=true');

      cy.get('.graphiql-tab-add').click();

      cy.get('.graphiql-tab-button + .graphiql-tab-close').eq(1).click();

      cy.get('.graphiql-tab-button').should('have.length', 2);
    });

    it('should close tab when `OK` was clicked', () => {
      cy.on('window:confirm', () => true);
      cy.visit('?confirmCloseTab=true');

      cy.get('.graphiql-tab-add').click();

      cy.get('.graphiql-tab-button + .graphiql-tab-close').eq(1).click();

      cy.get('.graphiql-tab-button').should('have.length', 1);
    });
  });
});
