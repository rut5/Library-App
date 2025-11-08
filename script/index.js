// should track books you've read or want to read. use prompt and alert to stimulate the menu

// store multiple books in an array
// use objects to represent books
// write functions to add, list and update books
// each book should have a title, author, isRead - addBook(), listBooks(), markAsRead(title)

const library = [
    { title: "Ulysses", author: "James Joyce", isRead: true },
    { title: "In Search of Lost Time", author: "Marcel Proust", isRead: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isRead: true },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", isRead: true },
    { title: "1984", author: "George Orwell", isRead: true }
];

function addBook() {
    let newBook = {};
    newBook.title = prompt("Enter the book title: ");
    newBook.author = prompt("Enter the book author: ");
    let read = prompt("Have you read this book? Yes or No");

    if (read === "Yes") {
        newBook.isRead = true;
    } else {
        newBook.isRead = false;
    }

    library.push(newBook);
    alert(`The book "${newBook.title}" by ${newBook.author} has been added to your library.`);
    }

function listBooks(object) {

    let bookList = `Your Library:\n\n`;
    for (let book of library) {
        bookList += `Title: ${book.title}\nAuthor: ${book.author}\nRead: ${book.isRead ? "Yes" : "No"}\n\n`;
    }

    alert(bookList);
}

function markAsRead(title) {
    const book = library.find(b => b.title === title);
    if (book) {
        book.isRead = true;
        alert(`You have marked "${book.title}" as read.`);
    } else {
        alert(`Book titled "${title}" is not in your library.`);
    }
} // works because of scope

let running = true; 

while (running) {

    const choice = prompt("Book Tracker Menu:\n1. Add Book\n2. List Books\n3. Mark Book as Read\n4. Exit");

    switch (choice) {
        case '1':
            addBook();
            break;
        case '2':
            listBooks();
            break;
        case '3':
            const title = prompt("Enter the title of the book to mark as read:");
            markAsRead(title);
            break;
        case '4':
            running = false;
            alert("Goodbye!")
            break;
        default:
            alert("Pick an option.");
    }
}

// turnaries, template literals
