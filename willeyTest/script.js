import puppeteer from "puppeteer";

const apiKey = 'api-key';

let partNumber;

function fetchProduct() {
    const skuInput = document.getElementById('skuInput');
    const SKU = skuInput.value.trim();
    const productInfoDiv = document.getElementById('productInfo');
    productInfoDiv.innerHTML = '';

    fetch(`https://api.bazaarvoice.com/data/products.json?resource=products&filter=id%3Aeq%3A${SKU}&filter_reviews=contentlocale%3Aeq%3Aen_US%2Cen_US&filter_reviewcomments=contentlocale%3Aeq%3Aen_US%2Cen_US&filteredstats=Reviews&stats=Reviews&passkey=ca0ZAkfdZxSr0Kz1CN2pNhGv5SCbL4vH65jFUbi0LSHpM&apiversion=5.5&displaycode=0593-en_us`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        if (data.Results && data.Results.length > 0) {
            const description = data.Results[0].Description;
            const brand = data.Results[0].Brand.Name;
            const sku = data.Results[0].Id;
            partNumber = data.Results[0].ManufacturerPartNumbers[0];
            const imgUrl = data.Results[0].ImageUrl;
            const ratingScore = data.Results[0].ReviewStatistics.AverageOverallRating;
            const totalRating = data.Results[0].ReviewStatistics.TotalReviewCount;
            const productUrl = data.Results[0].ProductPageUrl;

            fetch(productUrl)
            .then(response => {
                return response.text();
            })
            .then(html => {

                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                const priceElement = tempDiv.querySelector('.price');
                const price = priceElement ? priceElement.textContent.trim() : 'Price not found';
                console.log(price)


                const imgElement = document.createElement('img');
                imgElement.src = imgUrl;
                imgElement.alt = description;

                const priceElementDisplay = document.createElement('p');
                priceElementDisplay.textContent = `RC Willey Price: $${price}`;

                const brandElement = document.createElement('p');
                brandElement.textContent = `Brand: ${brand}`;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = `Description: ${description}`;

                const skuElement = document.createElement('p');
                skuElement.textContent = `RC Willey SKU: ${sku}`;

                const partNumberElement = document.createElement('p');
                partNumberElement.textContent = `Manufacturer Part Number: ${partNumber}`;

                const ratingElement = document.createElement('p');
                const roundedRatingScore = parseFloat(ratingScore).toFixed(2);
                ratingElement.textContent = `Average Rating: ${roundedRatingScore} (Total Ratings: ${totalRating})`;

                const productUrlElement = document.createElement('a');
                productUrlElement.href = productUrl;
                productUrlElement.textContent = 'View Product';

                
        // get Best buy info
        fetch(`https://api.bestbuy.com/v1/products(modelNumber=${partNumber})?apiKey=${apiKey}&sort=salePrice.asc&show=salePrice&format=json`)
        .then(res => res.json())
        .then(bbdata => {
            console.log(bbdata.products[0].salePrice);

            const bestBuyPrice = bbdata.products[0].salePrice;
            const bestBuyPriceElement = document.createElement('p');

            bestBuyPriceElement.textContent = `Best Buy Price: $${bestBuyPrice}`;



            productInfoDiv.appendChild(imgElement);
            productInfoDiv.appendChild(brandElement);
            productInfoDiv.appendChild(priceElementDisplay);
            productInfoDiv.appendChild(bestBuyPriceElement);
            productInfoDiv.appendChild(partNumberElement);
            productInfoDiv.appendChild(skuElement);
            productInfoDiv.appendChild(descriptionElement);
            productInfoDiv.appendChild(ratingElement);
            productInfoDiv.appendChild(productUrlElement);

            main();

        })
        console.log(partNumber);
        return partNumber;
        })
        } else {
            console.error('No product found for SKU:', SKU);
            productInfoDiv.textContent = 'No product found for the given SKU.';
        }

    })
    .catch(error => {
        console.error('Error fetching product:', error);
        productInfoDiv.textContent = 'Error fetching product.';
    });
    
}


const main = async () => {
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

document.getElementById('getInfoButton').addEventListener('click', fetchProduct);


export { fetchProduct, partNumber };
