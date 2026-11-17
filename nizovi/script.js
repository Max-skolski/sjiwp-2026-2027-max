let names = ['John', undefined, 'Jane', 'Bob', 'Mike','Max'];

names = names.filter(ime => ime !== undefined);

for (let i=0; i < names.length; i++) {
    console.log(names[i]);

    if (names[i]==='Jane'){
        break;
    }
}