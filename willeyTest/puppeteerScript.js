import { fetchProduct, partNumber } from './script.js';

import puppeteer from 'puppeteer';


const homeDepot = async () => {
    const url = `https://www.homedepot.com/s/${partNumber}`;
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto(url, { timeout: 10000 });

    const pricing = await page.evaluate(() => {
        const priceElement = document.querySelector('.price');
        const price = priceElement ? priceElement.textContent.trim() : 'Price not found';
        return price;
    });

    console.log('Home Depot Price:', pricing);

    await browser.close();
}

homeDepot();

// Function to delay the execution of the main function until partNumber is available
const delayMainExecution = () => {
    if (partNumber) {
        homeDepot(); // Call the main function if partNumber is available
    } else {
        setTimeout(delayMainExecution, 100); // Retry after 100 milliseconds if partNumber is not available yet
    }
}

// Start delaying the execution of the main function
delayMainExecution();
