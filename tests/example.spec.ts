import { test, expect } from '@playwright/test';

test('Busqueda Exitosa', async ({ page }) => {
 await page.goto('https://www.mercadolibre.com.ar')  
 await page.locator('input[id=\'cb1-edit\']').fill('Iphone')  
 await page.keyboard.press('Enter')
 await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible()
 
 const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h3').allInnerTexts()

 console.log('the total number of result is:', titles.length)

 for(let title of titles){
    console.log('the title is: ', title)  
 }
});
 
