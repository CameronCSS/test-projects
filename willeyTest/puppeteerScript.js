import puppeteer from 'puppeteer';

const url = 'https://www.homedepot.com/s/WM4000HBA';

const main = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Set a shorter timeout for page navigation
    await page.goto(url, { timeout: 10000 }); // Adjust the timeout as needed

    // Extract pricing information directly without waiting for a selector
    const pricing = await page.evaluate(() => {
        // Assuming the pricing data is directly accessible in the page's DOM
        const priceElement = document.querySelector('.price');
        const price = priceElement ? priceElement.textContent.trim() : 'Price not found';
        return price;
    });

    console.log('Home Depot Price:', pricing);

    await browser.close();
}

main();
