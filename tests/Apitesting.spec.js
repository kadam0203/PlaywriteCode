const { test, expect, request } = require('@playwright/test');

const logindata = { emailId: "admin@dspro.com" };

let apiContext;
let result;

test.beforeAll(async () => {
    apiContext = await request.newContext();

    const loginresponse = await apiContext.post("https://dspro-performance.vorwerk.org/", {
         headers: {
            'Content-Type': 'application/json'
        },
        data: {
            emailId: "admin@pro.com"
        }
    });

    expect(loginresponse.ok()).toBeTruthy();

    const loginresponsejson = await loginresponse.json();
    result = loginresponsejson.form;

    console.log(result);
});
test('Login API Test', async ({ request }) => {

    const response = await request.post("ACTUAL_API_URL_HERE", {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            emailId: "admin@pro.com"
        }
    });

    const responseText = await response.text();
    console.log(responseText); // DEBUG first

    expect(response.ok()).toBeTruthy();

    const body = JSON.parse(responseText); // safer initially
    console.log(body);
});
// ✅ ADD THIS TEST BLOCK
test('Validate login API response', async () => {
    expect(result).toBeDefined();
});