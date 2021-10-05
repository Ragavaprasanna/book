var btn1 = document.getElementById("btn1");

btn1.addEventListener('click', () => {

    // fetch request to api

    fetch('https://www.anapioficeandfire.com/api/books')
    .then((response) => {
        return (response.json());
    })
    .then((data) => {

        var results = document.getElementById('results');

        var template = `
            <h4 class="mt-4">Books
            <i class="fa fa-book"></i>

            </h4>
        `
        data.forEach((element) => {
            template += `
                <ul class="list-group mb-4">
                    <li class="list-group-item"><strong>Name: ${element.name}</strong></li>
                    <li class="list-group-item"><strong>ISBN: </strong> ${element.isbn}</li>
                    <li class="list-group-item"><strong>AUTHORS: </strong> ${element.authors}</li>
                    <li class="list-group-item"><strong>NUMBEROFPAGES: </strong> ${element.numberOfPages}</li>
                    <li class="list-group-item "><strong>PUBLISHER: </strong> ${element.publisher}</li>
                    <li class="list-group-item "><strong>RELEASED: </strong> ${element.released}</li>
                    
                </ul>
            `
        })

        results.innerHTML = template;
    })
})