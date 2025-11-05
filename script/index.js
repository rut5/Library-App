// should track books you've read or want to read. use prompt and alert to stimulate the menu

// store multiple books in an array
// use objects to represent books
// write functions to add, list and update books
// each book should have a title, author, isRead - addBook(), listBooks(), markAsRead(title)


let listedBooks = [
    { title: "Ulysses", author: "James Joyce", isRead: true },
    { title: "In Search of Lost Time", author: "Marcel Proust", isRead: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isRead: true },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", isRead: true },
    { title: "1984", author: "George Orwell", isRead: true }
];

function addBook() {
    let title = prompt("Enter the book title: ");
    let author = prompt("Enter the book author: ");

    // hur får jag den att kolla om boken redan finns i listan, och lägger denna kod sedan till den i listan (och ändrar status till isRead)?

    if (exists) {
        alert(`The book "${title}" by ${author} is already in your list.`);
    } else {
        listedBooks.push({ title, author, isRead: false });
        alert(`The book "${title}" by ${author} has been added to your list.`);
    }
}

while (running) {
    // vad är skillnaden på ` och "
    const choice = prompt(`Book Tracker Menu: 
        1. Add Book 
        2. List Books 
        3. Mark Book as Read 
        4. Exit`);

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
            alert("Invalid choice, please try again.");
    }
}

