function clearDataBase() {
    indexedDB.deleteDatabase('db');
}

let openRequest = indexedDB.open("db", 1);

openRequest.onupgradeneeded = function () {

    let db = openRequest.result;
    let books = db.createObjectStore('books', { keyPath: 'id' });

    let index = books.createIndex('price_idx', 'price');
    console.log(index)
}

openRequest.onsuccess = function () {

    let db = openRequest.result;

    let transaction = db.transaction("books", 'readwrite');

    let books = transaction.objectStore("books");

    // let book = []

    books.add({
        id: 'HTML',
        price: 5,
        name: 'DIma',
        created: new Date()
    })
    let request = books.add(book);

    console.log(books.getAll())

    let priceIndex = books.index("price_idx");

    let data = priceIndex.getAll(IDBKeyRange.upperBound(6));
    console.log(data)
    request.onerror = function () {
        console.log("Ошибка", request.error);
    }

    request.onsuccess = function () {
        // console.log("Книга добавлена в хранилище", request.result);
        // console.log(db)
        // console.log(books)

    }
}