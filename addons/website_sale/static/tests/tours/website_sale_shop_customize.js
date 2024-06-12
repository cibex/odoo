/** @odoo-module **/

import tourUtils from '@website_sale/js/tours/tour_utils';
import wTourUtils from '@website/js/tours/tour_utils';

wTourUtils.registerWebsitePreviewTour('shop_customize', {
    url: '/shop',
    edition: true,
    test: true,
},
    () => [
        ...wTourUtils.clickOnSave(),
        {
            content: "select product attribute Steel",
            trigger: ':iframe form.js_attributes input:not(:checked) + label:contains(Steel - Test)',
            run: "click",
        },
        {
            content: "check the selection",
            trigger: ':iframe form.js_attributes input:checked + label:contains(Steel - Test)',
        },
        {
            content: "select product",
            extra_trigger: ':iframe body:not(:has(.oe_website_sale .oe_product_cart:eq(3)))',
            trigger: ':iframe .oe_product_cart a:contains("Test Product")',
            run: "click",
        },
        {
            content: "check list view of variants is disabled initially",
            extra_trigger: ":iframe #product_detail",
            trigger: ':iframe body:not(:has(.js_product_change))',
        },
        ...wTourUtils.clickOnEditAndWaitEditMode(),
        {
            content: "open customize tab",
            trigger: '.o_we_customize_snippet_btn',
            run: "click",
        },
        {
            content: "open 'Variants' selector",
            extra_trigger: '#oe_snippets .o_we_customize_panel',
            trigger: '[data-name="variants_opt"] we-toggler',
            run: "click",
        },
        {
            content: "click on 'Products List' of the 'Variants' selector",
            trigger: 'we-button[data-name="variants_products_list_opt"]',
            run: "click",
        },
        ...wTourUtils.clickOnSave(),
        {
            content: "check variant price",
            trigger: ':iframe .form-check:contains("Aluminium") .badge:contains("+") .oe_currency_value:contains("50.4")',
        },
        {
            content: "check price is 750",
            trigger: ":iframe .product_price .oe_price .oe_currency_value:contains(/^750.00$/)",
        },
        {
            content: "switch to another variant",
            trigger: ":iframe .js_product label:contains('Aluminium')",
            run: "click",
        },
        {
            content: "verify that price has changed when changing variant",
            trigger: ":iframe .product_price .oe_price .oe_currency_value:contains(/^800.40$/)",
        },
        ...wTourUtils.clickOnEditAndWaitEditMode(),
        {
            content: "open customize tab",
            trigger: '.o_we_customize_snippet_btn',
            run: "click",
        },
        {
            content: "open 'Variants' selector",
            extra_trigger: '#oe_snippets .o_we_customize_panel',
            trigger: '[data-name="variants_opt"] we-toggler',
            run: "click",
        },
        {
            content: "click on 'Options' of the 'Variants' selector",
            trigger: 'we-button[data-name="variants_options_opt"]',
            run: "click",
        },
        ...wTourUtils.clickOnSave(),
        {
            content: "check page loaded after list of variant customization disabled",
            trigger: ":iframe .js_product:not(:has(.js_product_change))",
        },
        {
            content: "check price is 750",
            trigger: ":iframe .product_price .oe_price .oe_currency_value:contains(/^750.00$/)",
        },
        {
            content: "switch to Aluminium variant",
            trigger: ':iframe .js_product input[data-value_name="Aluminium"]',
            run: "click",
        },
        {
            content: "verify that price has changed when changing variant",
            trigger: ":iframe .product_price .oe_price .oe_currency_value:contains(/^800.40$/)",
        },
        {
            content: "switch back to Steel variant",
            trigger: ":iframe .js_product label:contains('Steel - Test')",
            run: "click",
        },
        {
            content: "check price is 750",
            trigger: ":iframe .product_price .oe_price .oe_currency_value:contains(/^750.00$/)",
        },
        {
            content: "click on 'Add to Cart' button",
            trigger: ":iframe a:contains(Add to cart)",
            run: "click",
        },
        {
            content: "check quantity",
            trigger: ":iframe .my_cart_quantity:contains(/^1$/),.o_extra_menu_items .fa-plus",
        },
        tourUtils.goToCart({backend: true}),
        {
            content: "click on shop",
            trigger: ":iframe a:contains(Continue shopping)",
            extra_trigger: ':iframe body:not(:has(#products_grid_before .js_attributes))',
            run: "click",
        },
        ...wTourUtils.clickOnEditAndWaitEditMode(),
        {
            content: "open customize tab",
            trigger: '.o_we_customize_snippet_btn',
            run: "click",
        },
        {
            content: "remove 'Attributes'",
            extra_trigger: '#oe_snippets .o_we_customize_panel',
            trigger: 'we-button[data-name="attributes_opt"]',
            run: "click",
        },
        ...wTourUtils.clickOnSave(),
        {
            content: "wait to exit edit mode",
            trigger: '.o_website_preview:not(.editor_has_snippets)',
            run: "click",
        },
        {
            content: "finish",
            extra_trigger: ':iframe body:not(:has(#products_grid_before .js_attributes))',
            trigger: ':iframe #wrap:not(:has(li:has(.my_cart_quantity):visible))',
        },
    ],
);
