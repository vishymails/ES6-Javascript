var companies = ['IBM', 'ISRO', 'SUN', 'SAP'];

function print(val)
{
    console.log(val);
}

companies.forEach(print);

console.log("--------------");


with(companies)
{
    forEach(print);
}