const pup=require('puppeteer');
const fs=require('fs');
const url=process.argv.splice(2)[0];
const last=url.split('/');
const sem=last[last.length-1].split('.php')[0];

(async()=>{
    const browser=await pup.launch();
    const page=await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.goto(url,{ timeout: 0});
    await page.waitForSelector('div.features');

    let ans=await page.evaluate(()=>{
        const feat= document.querySelectorAll('.features');
        let sub;
        let module;
        let notes={};
        let notes_content={};

        feat.forEach(val=>{
            
             sub=val.children[0].children[0].children[0].textContent
             module=val.children[1].children[0].childNodes;
             notes_content={};
            module.forEach(not=>{
                if(not.textContent.includes('odule')){
                notes_content[not.textContent]=not.getAttribute('href')
                }
            }
            )
            notes[sub]=notes_content
            
             
             
        })
        ;
        return notes;
        
        
    })
    fs.writeFileSync(`./${sem}.json`,JSON.stringify(ans) );

    await browser.close();
})()
