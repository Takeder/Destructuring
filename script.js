function takeValue(obj) {
    let a = obj[0].glossary.title;
    let b = obj[0].items[0].id;
    let c = obj[0].glossary.GlossEntry.Abbrev;
    let d = obj[0].glossary.GlossEntry.GlossDef;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

// function takeValue2(obj) {
//     let [{title: test1}] = [obj[0].glossary];
//     let [{id: test2}] = [obj[0].items[0]];
//     let [{Abbrev: test3}] = [obj[0].glossary.GlossEntry];
//     let [{GlossDef: test4}] = [obj[0].glossary.GlossEntry];
//     console.log('title:', test1);
//     console.log('id:', test2);
//     console.log('Abbrev:', test3);
//     console.log('GlossDef:', test4);
// }

async function exampleFetch() {
    const response = await fetch('http://127.0.0.1:5500/data.json');
    const data = await response.json();
    // takeValue(data);
    // takeValue2(data);
    let [{glossary: {
        title: test1,
        GlossEntry: {
            Abbrev: test3,
            GlossDef: test4
        }
    },
    items: [{
        id: test2
    },{
        id: test5
    }]}] = data;

    // let [{items: [{
    //     id: test2
    // },{
    //     id: test5
    // }]    
    // }] = data;

    // let [{glossary: {
    //     GlossEntry: {
    //         Abbrev: test3
    //     }
    // }}] = data;

    // let [{glossary: {
    //     GlossEntry: {
    //         GlossDef: test4
    //     }
    // }}] = data;
    
    
    
    console.log('title:', test1);
    console.log('id:', test2);
    console.log('id:', test5);
    console.log('Abbrev:', test3);
    console.log('GlossDef:', test4);
    
    
}

exampleFetch()