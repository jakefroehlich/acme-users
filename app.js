const app = document.querySelector('#app');

const createNode = (type) => document.createElement(type);

const headerCreator = () => {
    const headerContainer = createNode('div');
    const headerText = createNode('h1');
    headerText.innerText = 'ACME Users';

    headerContainer.append(headerText);
    return headerContainer;
}

const tableCreator = (numRows, address) => {
    const tableContainer = createNode('div');
    const table = createNode('table')

    const userList = APIfetch(address);

    userList.then(data => {
        console.log(data)
        const userArray = data.users;
        const totalUsers = data.count;

        pagerCreator(totalUsers);

        for (let i = 0; i < numRows; i++) {
            let user = userArray[i];

            table.append(rowCreator(user));
        }

        // for (let i = startidX; i < startidX + numRows; i++) {
        //     let user = userArray[i];

        //     table.append(rowCreator(user));
        // }
    })

    tableContainer.append(table);

    return tableContainer;
}

const rowCreator = (user) => {
    const row = createNode('tr');

    const firstName = createNode('td')
    firstName.innerText = user.firstName;

    const lastName = createNode('td')
    lastName.innerText = user.lastName;

    const emailadd = createNode('td')
    emailadd.innerText = user.email;

    const title = createNode('td')
    title.innerText = user.title;

    row.append(firstName, lastName, emailadd, title);

    return row;
}

const pagerCreator = (totalUsers) => {
    const pageContainer = createNode('div')
    const maxPages = Math.ceil(totalUsers / 50);

    console.log('max', maxPages);

    for (let i = 0; i < maxPages; i++) {
        //ENDED HERE!
        const page = createNode('span')
    }

    
}

const APIfetch = (address) => {
    return fetch(address)
        .then(res => {
            return res.json();
        })
    // .then(res => console.log(res))
}


const render = () => {
    app.innerHTML = '';
    // Why didn't this work for initial render??

    app.appendChild(headerCreator());

    // APIfetch('https://acme-users-api-rev.herokuapp.com/api/users')


    //app.appendChild(tableCreator(startIdx, 50, 'https://acme-users-api-rev.herokuapp.com/api/users'))
    app.appendChild(tableCreator(50, 'https://acme-users-api-rev.herokuapp.com/api/users'))
}

render();