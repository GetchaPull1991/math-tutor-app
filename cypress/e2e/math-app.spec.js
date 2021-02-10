describe('random math app', () => {
    it('can make calculations', () => {
        cy.visit('/')
        cy.get('.x-value').as('first-value')
        cy.get('.y-value').as('second-value')

        cy.get('@first-value').then(value => {
          console.log(value.text());
        })

        cy.get('@second-value').then(value => {
          console.log(value.text());
        })

        cy.get('.mat-button-wrapper')
        .click()
        // .findByTestId('total')

        /* I was confused by this. I searched the project for 'x-value', 'y-value', 'mat-button-wrapper', 'data-testid', and 'total'
          but I couldn't find any instances where these were used in the html or otherwise. I accessed the values via the aliases
          to print to the console but I was unsure how to proceed further. I also noticed that the test is able to pass upon removal of
          the '.findByTestId('total') statement and passes the '.mat-button-wrapper' click event even though I was unable to find a reference to it.*/
    })

    it('can show toast message', () => {
      cy.visit('/')

      cy.get('input').type(10)
      cy.get('button').click();

      cy.get('#toast-container')
        .should('be.visible');
    })

    it('can show correct answer toast message', () => {
      cy.visit('/')

      cy.get('.x-value').then(xValue => {
        cy.get('.y-value').then(yValue => {
          cy.get('input').type(parseInt(xValue.text()) + parseInt(yValue.text()));
        })
      })
      cy.get('button').click();

      cy.get('#toast-container')
        .contains('That\'s right!')
        .should('be.visible');
    })

    it('can show incorrect answer toast message', () => {
      cy.visit('/')

      cy.get('.x-value').then(xValue => {
        cy.get('.y-value').then(yValue => {
          cy.get('input').type(parseInt(xValue.text()) + parseInt(yValue.text()) + 1);
        })
      })
      cy.get('button').click();

      cy.get('#toast-container')
        .contains('Sorry, that is not correct.')
        .should('be.visible');
    })

    it('can disable button without input', () => {
      cy.visit('/')

      cy.get('input').should('be.empty')
      cy.get('button')
        .should('be.disabled')
    })

    it('can disable button without input after clear', () => {
      cy.visit('/')

      cy.get('input').type(10).clear()

      cy.get('input').should('be.empty')
      cy.get('button')
        .should('be.disabled')
    })

    it('can prevent entry of non-numbers', () => {
      cy.visit('/')

      cy.get('input').type('a').should('be.empty')

      cy.get('input').type('*').should('be.empty')
    })

    it('can submit answer on enter key when buttons in focus', () => {
      cy.visit('/')

      cy.get('input').type(10)
      cy.get('button').type('{enter}')

      cy.get('#toast-container')
        .should('be.visible');
    })

    /*
      I attempted to test that the 'Please provide an answer' message was displayed on hover but
      Cypress does not have support for hover. I read that I would be able to trigger the 'mouseover' event
      but the element did not have a mouseover event so I tried to directly change the attribute to display the message but was unsuccessful.
    */

    // it('can show no input toast on mouseover', () => {
    //   cy.visit('/')
    //
    //   cy.get('mat-card-actions').children('div')
    //     .invoke('attr', 'ng-reflect-disabled', 'false')
    //     .should('have.attr', 'ng-reflect-disabled', 'false')
    //
    //   cy.get('div').contains('Please provide an answer.').should('be.visible')
    // })


    /*
      I intended to test that the user could use tab to navigate to the
      answer field and the answer button with the tab key but it appears at
      this time Cypress does not have support for the tab key
    */

    // it('can navigate to input on tab', () => {
    // })

  })
