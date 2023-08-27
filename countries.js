var input = prompt('Enter the country name you want to know about:')
    fetch("https://holidayapi.com/v1/holidays?pretty&key=037d994e-2dd2-43b3-b9e3-dc2f5e5a8030&country=IN&year=2022")
    .then((res)=>res.json())
    .then((data)=>{

        console.log(data);
       
    })
