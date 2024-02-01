// Regression Test Scripts for Order Placement Process

describe('Order Placement Process', () => {

    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit(Cypress.env("url"));
    });

    it('Login and Place an Order -  Women product page', () => {
        // Test user login and order placement
        cy.get('.authorization-link').contains("Sign In").click(); 
        cy.get("#email").type(Cypress.env("username"))
            .should("have.value", Cypress.env("username"));
        cy.get("[name='login[password]']").type(Cypress.env("password"))
            .should("have.value", Cypress.env("password"));
        cy.get('button[class*=\'primary\']').click();

        // Navigate to a product page Women and add to cart
        cy.get('#ui-id-4').click();
        cy.get('.product-item').first().click();

        //Choose size
        cy.get('div[aria-label="XS"]').click();

        //Choose color
        cy.get("div[option-label='Blue']").click();

        //Add to cart
        cy.get('#product-addtocart-button').click();
        cy.get("div[data-ui-id='message-success']").should("be.visible");


        // Proceed to cart
        cy.get("a[href]").contains("shopping cart").click();

        //Proceed to checkout
        cy.wait(2000)
        cy.get("button[data-role='proceed-to-checkout']").click({force:true});

        // Continue to payment
        cy.get("button[data-role='opc-continue']").click();

        // Place order
        cy.get("button[class$='checkout']").click()

        // Verify order confirmation
        cy.get("span[data-ui-id='page-title-wrapper']")
            .should('be.visible')
            .and("have.text", "Thank you for your purchase!")

    });

    it('Login and Place an Order -  Men product page', () => {
        // Test user login and order placement
        cy.get('.authorization-link').contains("Sign In").click();
        cy.get("#email").type(Cypress.env("username"))
            .should("have.value", Cypress.env("username"));
        cy.get("[name='login[password]']").type(Cypress.env("password"))
            .should("have.value", Cypress.env("password"));
        cy.get('button[class*=\'primary\']').click();

        // Navigate to a product page Men and add to cart
        cy.get('#ui-id-5').click();
        cy.get('.product-item').first().click();

        //Choose size
        cy.get('div[aria-label="XS"]').click();

        //Choose color
        cy.get("div[option-label='Gray']").click();

        //Add to cart
        cy.get('#product-addtocart-button').click();
        cy.get("div[data-ui-id='message-success']").should("be.visible");


        // Proceed to cart
        cy.get("a[href]").contains("shopping cart").click();


        //Proceed to checkout
        cy.wait(2000)
        cy.get("button[data-role='proceed-to-checkout']").click({force:true});

        // Continue to payment
        cy.get("button[data-role='opc-continue']").click();

        // Place order
        cy.get("button[class$='checkout']").click()

        // Verify order confirmation
        cy.get("span[data-ui-id='page-title-wrapper']")
            .should('be.visible')
            .and("have.text", "Thank you for your purchase!")
    });

    it.skip('Order -  Gear product page -  guest user', () => {


        // Navigate to a product page Gear and add to cart
        cy.get('#ui-id-6').click();
        cy.get('.product-item').first().click();

        //Add to cart
        cy.get('#product-addtocart-button').click();
        cy.get("div[data-ui-id='message-success']").should("be.visible");


        // Proceed to cart
        cy.get("a[href]").contains("shopping cart").click();
        cy.get("tbody[class$='item']").should("have.length", 1);

        //Proceed to checkout
        cy.get("button[data-role='proceed-to-checkout']").click();

        // Fill in shipping information
        //Street
        cy.get("input[name='street[0]']").type('Bd Timisoara, Sector 6');
        //City
        cy.get("input[name='city']").type('Bucharest');
        //Select state
        cy.get("select[name='region_id']").select("Bucureşti")
        //Postal Code
        cy.get("input[name='postcode']").type('12345');
        //Country
        cy.get("select[name='country_id']").select('Romania');
        //Phone number
        cy.get("input[name='telephone']").type("07465465231")

        // Continue to payment
        cy.get("button[data-role='opc-continue']").click();

        // Place order
        cy.get("button[class$='checkout']").click()

        // Verify order confirmation
        cy.get("span[data-ui-id='page-title-wrapper']")
            .should('be.visible')
            .and("have.text", "Thank you for your purchase!")

    });

    it("Order - What's new product page -   guest user", () => {

        // Navigate to a product page Gear and add to cart
        cy.get('#ui-id-5').click();
        cy.get('.product-item').first().click();

        //Choose size
        cy.get('div[aria-label="XS"]').click();

        //Choose color
        cy.get("div[option-label='Gray']").click();

        //Add to cart
        cy.get('#product-addtocart-button').click();
        cy.get("div[data-ui-id='message-success']")
            .should("be.visible");

        // Proceed to cart
        cy.get("a[href]").contains("shopping cart").click();
        cy.get("tbody[class$='item']").should("have.length", 1);

        //Proceed to checkout
        cy.wait(2000)
        cy.get("button[data-role='proceed-to-checkout']").click({force:true});

        // Fill in shipping information
        //email
        cy.get("input[data-bind$='emailFocused']").type("email@email.com")

        //First Name
        cy.get("input[name='firstname']").type("First Name").should("have.value", "First Name");
        //Last Name
        cy.get("input[name='lastname']").type("Last Name").should("have.value", "Last Name");

        //Street
        cy.get("input[name='street[0]']").type('Bd Timisoara, Sector 6').should("have.value", "Bd Timisoara, Sector 6");
        //City
        cy.get("input[name='city']").type('Bucharest').should("have.value", "Bucharest");
        //Country
        cy.get("select[name='country_id']").select('Romania');
        //Select state
        cy.get("select[name='region_id']").select("Bucureşti")
        //Postal Code
        cy.get("input[name='postcode']").type('12345').should("have.value", "12345");
        //Phone number
        cy.get("input[name='telephone']").type("07465465231").should("have.value", "07465465231");

        // Continue to payment
        cy.get("#checkout-shipping-method-load tr").eq(1).click()
        cy.get("button[data-role='opc-continue']").click();


        // Place order
        cy.get("button[class$='checkout']").click()

        // Verify order confirmation
        cy.get("span[data-ui-id='page-title-wrapper']")
            .should('be.visible')
            .and("have.text", "Thank you for your purchase!")

    });

    it("Order modification -  What's new product page -   guest user", () => {

        // Navigate to a product page Gear and add to cart
        cy.get('#ui-id-5').click();
        cy.get('.product-item').first().click();

        //Choose size
        cy.get('div[aria-label="XS"]').click();

        //Choose color
        cy.get("div[option-label='Gray']").click();

        //Add to cart
        cy.get('#product-addtocart-button').click();
        cy.get("div[data-ui-id='message-success']")
            .should("be.visible");

        // Proceed to cart
        cy.get("a[href]").contains("shopping cart").click();
        cy.get("tbody[class$='item']").should("have.length", 1);

        //Modify the qty
        cy.get(".subtotal .price").eq(1).should("have.text", "$22.00")
        cy.get("[data-role='cart-item-qty']").clear().type(10 + "{enter}")

        //Proceed to checkout
        cy.wait(2000)
        cy.get(".subtotal .price").eq(1).should("have.text", "$220.00")
        cy.get("button[data-role='proceed-to-checkout']").click({force:true});

        // Fill in shipping information
        //email
        cy.get("input[data-bind$='emailFocused']").type("email@email.com")

        //First Name
        cy.get("input[name='firstname']").type("First Name").should("have.value", "First Name");
        //Last Name
        cy.get("input[name='lastname']").type("Last Name").should("have.value", "Last Name");

        //Street
        cy.get("input[name='street[0]']").type('Bd Timisoara, Sector 6').should("have.value", "Bd Timisoara, Sector 6");
        //City
        cy.get("input[name='city']").type('Bucharest').should("have.value", "Bucharest");
        //Country
        cy.get("select[name='country_id']").select('Romania');
        //Select state
        cy.get("select[name='region_id']").select("Bucureşti")
        //Postal Code
        cy.get("input[name='postcode']").type('12345').should("have.value", "12345");
        //Phone number
        cy.get("input[name='telephone']").type("07465465231").should("have.value", "07465465231");

        // Continue to payment
        cy.get("#checkout-shipping-method-load tr").eq(1).click();

        cy.get("button[data-role='opc-continue']").click();
        cy.wait(2000);
        cy.get("button[data-role='opc-continue']").click();

        // Place order
        cy.get("button[class$='checkout']").click()

        // Verify order confirmation
        cy.get("span[data-ui-id='page-title-wrapper']")
            .should('be.visible')
            .and("have.text", "Thank you for your purchase!")

    });

    it.only("Order cancellation(delete product from the cart) -  What's new product page -   guest user", () => {

        // Navigate to a product page Gear and add to cart
        cy.get('#ui-id-5').click();
        cy.get('.product-item').first().click();

        //Choose size
        cy.get('div[aria-label="XS"]').click();

        //Choose color
        cy.get("div[option-label='Gray']").click();

        //Add to cart
        cy.get('#product-addtocart-button').click();
        cy.get("div[data-ui-id='message-success']")
            .should("be.visible");

        // Proceed to cart
        cy.get("a[href]").contains("shopping cart").click();
        cy.get("tbody[class$='item']").should("have.length", 1);


        //Delete the product
        cy.get("a[class$='action-delete']").click();
        cy.get(".cart-empty").should("be.visible").and("contain.text", "You have no items in your shopping cart.")


    });
});
