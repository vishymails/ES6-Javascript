var companies = ['IBM', 'ISRO', 'SUN', 'SAP'];

function changeProperty(val)
{
    return val.toUpperCase();
}

var changed = companies.map(changeProperty);

console.log(changed);


