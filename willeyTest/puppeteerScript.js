import { fetchProduct, partNumber } from './script.js';

import puppeteer from 'puppeteer';


const homeDepot = async () => {
    // for testing
    const url = `https://www.homedepot.com/s/WM4000HBA`;

    // const url = `https://www.homedepot.com/s/${partNumber}`;
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto(url, { timeout: 10000 });

    const hdPricing = await page.evaluate(() => {
        const hdPriceElement = document.querySelector('.price');
        const hdPrice = hdPriceElement ? hdPriceElement.textContent.trim() : 'Price not found';
        return hdPrice;
    });

    console.log('Home Depot Price:', hdPricing);

    await browser.close();
}

homeDepot();


const lowes = async () => {
    // for testing
    const url = `https://www.lowes.com/search?searchTerm=WM4000HBA`;


    // const url = `https://www.lowes.com/search?searchTerm=${partNumber}`;
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';
    page.setUserAgent(ua);
    
    await page.goto(url, { timeout: 10000 });

    const lowesPricing = await page.evaluate(() => {
        const lowesPriceElement = document.querySelector('.item-price-dollar');
        const lowesPrice = lowesPriceElement ? lowesPriceElement.textContent.trim() : 'Price not found';
        return lowesPrice;
    });

    console.log('Lowes Price:', lowesPricing);

    await browser.close();
}

lowes();


// Function to delay the execution of the main function until partNumber is available
const delayMainExecution = () => {
    if (partNumber) {
        homeDepot(); // Call the main function if partNumber is available
        lowes();
    } else {
        setTimeout(delayMainExecution, 100); // Retry after 100 milliseconds if partNumber is not available yet
    }
}

// Start delaying the execution of the main function
delayMainExecution();
