// should track books you've read or want to read. use prompt and alert to stimulate the menu

// store multiple books in an array
// use objects to represent books
// write functions to add, list and update books
// each book should have a title, author, isRead - addBook(), listBooks(), markAsRead(title)

while (running) {
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

