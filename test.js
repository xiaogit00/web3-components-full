var films = [{ name: 'film 1', year: '1992' }, { name: 'film 2', year: '1992' }, { name: 'film 3', year: '1995' }, { name: 'film 4', year: '1995' }, { name: 'film 5', year: '1995' }, { name: 'film 6', year: '1998' }, { name: 'film 7', year: '1998' }]
var grouped = Object.values(
        films.reduce((p, c, i) => {
            console.log(`ITERATION ${i}`)
            console.log("p:",p);

            console.log("c:", c);
            console.log("p[c.year]",p[c.year]);
            (p[c.year] = p[c.year] || []).push(c);
            console.log("final p:",p)
            return p;
        }, {})
    );

// console.log(grouped)